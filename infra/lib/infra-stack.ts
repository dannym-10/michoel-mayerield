import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";
import * as path from "path";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";
import * as route53 from "aws-cdk-lib/aws-route53";
import * as certificatemanager from "aws-cdk-lib/aws-certificatemanager";
import * as route53targets from "aws-cdk-lib/aws-route53-targets";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apigw from "aws-cdk-lib/aws-apigateway";
import * as iam from "aws-cdk-lib/aws-iam";
import * as lambdaNode from "aws-cdk-lib/aws-lambda-nodejs";

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const domainName = "michaelmayerfeld.co.uk";
    const wwwDomain = `www.${domainName}`;

    const hostedZone = route53.HostedZone.fromLookup(this, "HostedZone", {
      domainName,
    });

    const certificate = certificatemanager.Certificate.fromCertificateArn(
      this,
      "SiteCertificate",
      "arn:aws:acm:us-east-1:812128475553:certificate/b81d6bd4-02e9-40fe-96aa-fe89aaaa3713",
    );

    const bucket = new s3.Bucket(this, "MichaelMayerfeldBucket", {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      encryption: s3.BucketEncryption.S3_MANAGED,
    });

    const originAccessControl = new cloudfront.S3OriginAccessControl(
      this,
      "MichaelMayerfeldOAC",
      { signing: cloudfront.Signing.SIGV4_ALWAYS },
    );

    const s3Origin = origins.S3BucketOrigin.withOriginAccessControl(bucket, {
      originAccessControl: originAccessControl,
    });

    const distribution = new cloudfront.Distribution(
      this,
      "MichaelMayerfeldDistribution",
      {
        defaultBehavior: {
          origin: s3Origin,
          viewerProtocolPolicy:
            cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        },
        defaultRootObject: "index.html",
        errorResponses: [
          {
            httpStatus: 403,
            responseHttpStatus: 200,
            responsePagePath: "/index.html",
          },
          {
            httpStatus: 404,
            responseHttpStatus: 200,
            responsePagePath: "/index.html",
          },
        ],
        domainNames: [domainName, wwwDomain],
        certificate,
      },
    );

    new route53.ARecord(this, "AliasRecord", {
      zone: hostedZone,
      target: route53.RecordTarget.fromAlias(
        new route53targets.CloudFrontTarget(distribution),
      ),
      recordName: domainName,
    });

    new route53.ARecord(this, "AliasRecordWWW", {
      zone: hostedZone,
      target: route53.RecordTarget.fromAlias(
        new route53targets.CloudFrontTarget(distribution),
      ),
      recordName: "www",
    });

    new s3deploy.BucketDeployment(this, "MichaelMayerfeldDeployment", {
      sources: [
        s3deploy.Source.asset(path.resolve(__dirname, "../../michoel/dist")),
      ],
      destinationBucket: bucket,
      distribution,
      distributionPaths: ["/*"],
    });

    new cdk.CfnOutput(this, "WebsiteURL", { value: `https://${domainName}` });

    //
    // Send Email Lambda
    //
    const contactLambda = new lambdaNode.NodejsFunction(
      this,
      "MichaelMayerfeldEmailLambda",
      {
        entry: path.join(__dirname, "../lambdas/sendEmail/index.ts"),
        handler: "handler",
        runtime: lambda.Runtime.NODEJS_20_X,
        environment: { FROM_EMAIL: "dannymoss4@gmail.com" },
        bundling: {
          externalModules: ["aws-sdk"],
          forceDockerBundling: false,
        },
      },
    );

    contactLambda.addToRolePolicy(
      new iam.PolicyStatement({
        actions: ["ses:SendEmail", "ses:SendRawEmail"],
        resources: ["*"],
      }),
    );

    const api = new apigw.LambdaRestApi(this, "MichaelMayerfeldContactApi", {
      handler: contactLambda,
      proxy: false,
    });

    const contact = api.root.addResource("contact");
    contact.addMethod("POST");
  }
}
