import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";
import * as path from "path";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, "MichaelMayerfeldBucket", {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      encryption: s3.BucketEncryption.S3_MANAGED,
      bucketName: "michaelmayerfeld.co.uk",
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
      },
    );

    new s3deploy.BucketDeployment(this, "MichaelMayerfeldDeployment", {
      sources: [
        s3deploy.Source.asset(path.resolve(__dirname, "../../michoel/dist")),
      ],
      destinationBucket: bucket,
      distribution,
      distributionPaths: ["/*"],
    });
  }
}
