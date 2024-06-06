import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, 'WeightTrackingAppVpc', {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'), 
      subnetConfiguration: [{
        name: 'WeightTrackingAppPublicSubnet',
        subnetType: ec2.SubnetType.PUBLIC,
      },
      {
        name: 'WeightTrackingAppPrivateSubnet',
        subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
        cidrMask: 24,
      }
      ],
    })
  }
}
