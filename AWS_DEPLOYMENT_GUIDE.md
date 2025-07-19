# AWS Amplify Deployment Guide

## Quick Start

1. **Connect to AWS Amplify Console**
   - Go to AWS Amplify Console
   - Click "New App" > "Host web app"
   - Connect your Git repository

2. **Configure Build Settings**
   - Use the provided `amplify.yml` configuration
   - Set environment variables in Amplify Console

3. **Deploy Backend (Lambda & API Gateway)**
   - Run `./deploy.sh` to deploy infrastructure
   - Note the API Gateway URL from CloudFormation outputs

4. **Update Frontend Environment**
   - Add `VITE_API_BASE_URL` in Amplify Console environment variables
   - Redeploy the frontend

## Detailed Steps

### 1. AWS Amplify Console Setup

1. **Login to AWS Console**
   - Navigate to AWS Amplify service
   - Select your region (us-east-1 recommended)

2. **Create New App**
   - Click "New App" > "Host web app"
   - Choose your Git provider (GitHub, GitLab, etc.)
   - Select your repository and branch

3. **Configure Build Settings**
   - Amplify will detect the `amplify.yml` file automatically
   - Review and confirm the build settings

### 2. Environment Variables

In the Amplify Console, add these environment variables:

```
VITE_API_BASE_URL=https://your-api-gateway-url.execute-api.us-east-1.amazonaws.com/prod
```

### 3. Deploy Backend Infrastructure

Run the deployment script locally:

```bash
# Make sure AWS CLI is configured
aws configure

# Deploy the backend infrastructure
./deploy.sh
```

This will create:
- Lambda function for contact form processing
- API Gateway REST API
- DynamoDB table for contact submissions
- IAM roles and policies
- SES email configuration

### 4. Get API Gateway URL

After deployment, get the API Gateway URL:

```bash
aws cloudformation describe-stacks \
  --stack-name jerry-trudell-campaign \
  --query 'Stacks[0].Outputs[?OutputKey==`ApiGatewayUrl`].OutputValue' \
  --output text
```

### 5. Update Amplify Environment

1. Go to Amplify Console > Your App > Environment variables
2. Add `VITE_API_BASE_URL` with your API Gateway URL
3. Redeploy the app

### 6. Custom Domain (Optional)

1. **Add Custom Domain**
   - Go to Amplify Console > Your App > Domain management
   - Add your custom domain (e.g., jerrytrudell2024.com)
   - Follow the DNS configuration instructions

2. **SSL Certificate**
   - Amplify automatically provisions SSL certificates
   - Wait for DNS propagation (can take up to 48 hours)

### 7. Email Configuration

1. **Verify Email Addresses**
   - Go to AWS SES Console
   - Verify both sender and recipient emails
   - For production, request removal from SES sandbox

2. **Configure SPF/DKIM**
   - Add DNS records for your domain
   - Improve email deliverability

### 8. Monitoring & Logs

1. **CloudWatch Logs**
   - Lambda function logs: `/aws/lambda/jerry-trudell-contact-form`
   - API Gateway logs: Configure in API Gateway console

2. **Amplify Monitoring**
   - View build logs in Amplify Console
   - Monitor deployment status and errors

## Troubleshooting

### Build Failures

1. **Node.js Version**
   - Ensure Node.js 18+ is used
   - Check `package.json` engines field

2. **Environment Variables**
   - Verify all required variables are set
   - Check variable names and values

### API Issues

1. **CORS Errors**
   - Check API Gateway CORS configuration
   - Verify Lambda function CORS headers

2. **Contact Form Not Working**
   - Check API Gateway URL in environment variables
   - Verify Lambda function permissions
   - Check SES email verification

### DNS Issues

1. **Custom Domain**
   - Verify DNS records are correctly configured
   - Wait for DNS propagation (up to 48 hours)

2. **SSL Certificate**
   - Check certificate validation in AWS Certificate Manager
   - Verify domain ownership

## Security Considerations

1. **API Security**
   - Rate limiting enabled in API Gateway
   - Input validation in Lambda function
   - CORS properly configured

2. **Data Protection**
   - All data encrypted in transit and at rest
   - DynamoDB encryption enabled
   - S3 bucket not publicly writable

## Cost Optimization

1. **Free Tier Usage**
   - Lambda: 1M free requests/month
   - API Gateway: 1M free requests/month
   - DynamoDB: 25GB free storage
   - SES: 62,000 free emails/month

2. **Monitoring Costs**
   - Set up billing alerts
   - Monitor usage in AWS Cost Explorer
   - Delete unused resources

## Backup & Recovery

1. **DynamoDB Backups**
   - Enable point-in-time recovery
   - Create manual backups before major changes

2. **Code Repository**
   - Keep Git repository as source of truth
   - Tag releases for easy rollback

## Performance Optimization

1. **CloudFront Configuration**
   - Amplify uses CloudFront automatically
   - Global edge locations for fast delivery

2. **Bundle Size**
   - Use Vite code splitting
   - Lazy load components where possible

3. **Image Optimization**
   - Compress images before deployment
   - Use WebP format where supported

## Support

For deployment issues:
- Check AWS CloudFormation events
- Review CloudWatch logs
- Contact AWS support if needed

---

This deployment guide ensures your Jerry Trudell campaign website is properly configured for production use on AWS with high availability, security, and performance.