#!/bin/bash

# Jerry Trudell Campaign Website Deployment Script for AWS

set -e

echo "🚀 Starting deployment of Jerry Trudell Campaign Website..."

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo "❌ AWS CLI is not installed. Please install it first."
    exit 1
fi

# Check if AWS credentials are configured
if ! aws sts get-caller-identity &> /dev/null; then
    echo "❌ AWS credentials not configured. Please run 'aws configure' first."
    exit 1
fi

# Set deployment variables
STACK_NAME="jerry-trudell-campaign"
REGION="us-east-1"
DOMAIN_NAME="jerrytrudell2024.com"
BUCKET_NAME="${DOMAIN_NAME}-website"

echo "📦 Building the application..."

# Build the application
npm run build

echo "☁️ Deploying AWS infrastructure..."

# Deploy CloudFormation stack
aws cloudformation deploy \
    --template-file cloudformation/infrastructure.yaml \
    --stack-name $STACK_NAME \
    --region $REGION \
    --parameter-overrides DomainName=$DOMAIN_NAME \
    --capabilities CAPABILITY_NAMED_IAM

echo "📤 Uploading website files to S3..."

# Get the S3 bucket name from CloudFormation output
BUCKET_NAME=$(aws cloudformation describe-stacks \
    --stack-name $STACK_NAME \
    --region $REGION \
    --query 'Stacks[0].Outputs[?OutputKey==`S3BucketName`].OutputValue' \
    --output text)

# Upload website files to S3
aws s3 sync dist/public/ s3://$BUCKET_NAME --delete

echo "🔄 Invalidating CloudFront cache..."

# Get CloudFront distribution ID
DISTRIBUTION_ID=$(aws cloudformation describe-stacks \
    --stack-name $STACK_NAME \
    --region $REGION \
    --query 'Stacks[0].Outputs[?OutputKey==`CloudFrontDistributionId`].OutputValue' \
    --output text)

# Invalidate CloudFront cache
aws cloudfront create-invalidation \
    --distribution-id $DISTRIBUTION_ID \
    --paths "/*"

echo "📧 Setting up SES (Simple Email Service)..."

# Verify email addresses for SES
aws ses verify-email-identity --email-address info@jerrytrudell2024.com --region $REGION || true
aws ses verify-email-identity --email-address noreply@jerrytrudell2024.com --region $REGION || true

echo "🎯 Getting deployment information..."

# Get API Gateway URL
API_URL=$(aws cloudformation describe-stacks \
    --stack-name $STACK_NAME \
    --region $REGION \
    --query 'Stacks[0].Outputs[?OutputKey==`ApiGatewayUrl`].OutputValue' \
    --output text)

# Get Website URL
WEBSITE_URL=$(aws cloudformation describe-stacks \
    --stack-name $STACK_NAME \
    --region $REGION \
    --query 'Stacks[0].Outputs[?OutputKey==`WebsiteURL`].OutputValue' \
    --output text)

echo "✅ Deployment completed successfully!"
echo ""
echo "🌐 Website URL: $WEBSITE_URL"
echo "🔗 API Gateway URL: $API_URL"
echo "📧 Don't forget to verify your email addresses in the AWS SES console"
echo ""
echo "📋 Next steps:"
echo "1. Set up your domain DNS to point to the CloudFront distribution"
echo "2. Verify email addresses in AWS SES console"
echo "3. Update the contact form API endpoint if needed"
echo ""
echo "🎉 Jerry Trudell Campaign Website is now live!"