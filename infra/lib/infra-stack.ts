import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";
import * as path from "path";

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // 1️⃣ Create a private S3 bucket
    const bucket = new s3.Bucket(this, "MichaelMayerfeldBucket", {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      encryption: s3.BucketEncryption.S3_MANAGED,
      bucketName: "michaelmayerfeld.co.uk",
    });

    // 2️⃣ Deploy your Vite dist/ folder into the bucket
    new s3deploy.BucketDeployment(this, "MichaelMayerfeldDeployment", {
      sources: [
        s3deploy.Source.asset(
          path.resolve(__dirname, "michoel-mayerield/micky/dist"),
        ),
      ],
      destinationBucket: bucket,
    });
  }
}
