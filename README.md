# Jerry Trudell 2024 Campaign Website

A modern, responsive campaign website for Jerry Trudell's mayoral campaign in Albuquerque, New Mexico.

## 🚀 Features

- **Modern Design**: Clean, trustworthy design with patriotic colors
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Navigation**: Smooth scrolling navigation with sticky header
- **Contact Form**: Fully functional contact form with AWS Lambda backend
- **Policy Platform**: Detailed issue sections covering key campaign priorities
- **Testimonials**: Community endorsements and testimonials
- **Get Involved**: Multiple ways for visitors to support the campaign
- **SEO Optimized**: Meta tags and structured data for better search rankings

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: AWS Lambda, API Gateway, DynamoDB
- **Email**: Amazon SES
- **Hosting**: AWS CloudFront + S3
- **Build Tool**: Vite
- **UI Components**: shadcn/ui (Radix UI)

## 📁 Project Structure

```
jerry-trudell-campaign/
├── client/src/           # React frontend application
│   ├── components/       # Reusable UI components
│   ├── pages/           # Page components
│   ├── lib/             # Utility functions
│   └── hooks/           # Custom React hooks
├── server/              # Local development server
├── lambda/              # AWS Lambda functions
├── cloudformation/      # AWS infrastructure templates
├── public/              # Static assets
└── shared/              # Shared types and schemas
```

## 🔧 Local Development

### Prerequisites

- Node.js 18+ 
- npm or yarn
- AWS CLI (for deployment)

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jerry-trudell-campaign
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5000
   ```

## 🚀 AWS Deployment

### Prerequisites

- AWS CLI configured with appropriate permissions
- Domain name registered (optional)
- SSL certificate in AWS Certificate Manager (optional)

### Deployment Steps

1. **Configure AWS credentials**
   ```bash
   aws configure
   ```

2. **Update environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your specific values
   ```

3. **Run deployment script**
   ```bash
   ./deploy.sh
   ```

### Manual Deployment

If you prefer to deploy manually:

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy infrastructure**
   ```bash
   aws cloudformation deploy \
     --template-file cloudformation/infrastructure.yaml \
     --stack-name jerry-trudell-campaign \
     --region us-east-1 \
     --parameter-overrides DomainName=your-domain.com \
     --capabilities CAPABILITY_NAMED_IAM
   ```

3. **Upload website files**
   ```bash
   aws s3 sync dist/public/ s3://your-bucket-name --delete
   ```

4. **Invalidate CloudFront cache**
   ```bash
   aws cloudfront create-invalidation \
     --distribution-id YOUR_DISTRIBUTION_ID \
     --paths "/*"
   ```

## 📧 Email Configuration

The contact form uses Amazon SES for email delivery. You need to:

1. **Verify email addresses** in the AWS SES console
2. **Configure SPF/DKIM** records for your domain
3. **Request production access** if needed (SES starts in sandbox mode)

## 🔧 Configuration

### Environment Variables

- `VITE_API_BASE_URL`: API Gateway URL for production
- `DOMAIN_NAME`: Your campaign website domain
- `FROM_EMAIL`: Email address for outgoing emails
- `TO_EMAIL`: Email address to receive contact form submissions

### AWS Resources Created

- **S3 Bucket**: Static website hosting
- **CloudFront Distribution**: Global CDN
- **Lambda Function**: Contact form processing
- **API Gateway**: REST API for contact form
- **DynamoDB Table**: Contact form submissions storage
- **IAM Roles**: Required permissions for Lambda functions

## 📱 Features Overview

### Homepage Sections

1. **Hero Section**: Campaign banner with call-to-action
2. **About Jerry**: Candidate biography and qualifications
3. **Issues**: Key policy platforms and priorities
4. **Testimonials**: Community endorsements
5. **Get Involved**: Volunteer and donation opportunities
6. **Contact**: Contact form and campaign information

### Key Components

- **Navigation**: Responsive navbar with smooth scrolling
- **Contact Form**: Validates input and submits to AWS Lambda
- **Issue Cards**: Interactive policy platform display
- **Testimonials**: Community endorsement carousel
- **Footer**: Links and legal information

## 🎨 Design System

### Colors

- **Primary Blue**: #1E3A8A (campaign-blue)
- **Secondary Red**: #DC2626 (campaign-red)
- **Accent Green**: #059669 (campaign-green)
- **Southwest Gold**: #F59E0B (campaign-gold)
- **Background**: #F9FAFB (campaign-bg)
- **Text**: #111827 (campaign-text)

### Typography

- **Headings**: Inter (sans-serif)
- **Body Text**: Merriweather (serif)

## 🔒 Security

- **HTTPS**: All traffic encrypted via CloudFront
- **CORS**: Properly configured for API endpoints
- **Input Validation**: Server-side validation for all form inputs
- **Rate Limiting**: Built-in AWS API Gateway rate limiting

## 📊 Analytics & Monitoring

- **CloudWatch Logs**: Lambda function logs
- **CloudWatch Metrics**: API Gateway and Lambda metrics
- **CloudFront Logs**: Website access logs
- **DynamoDB Metrics**: Database performance monitoring

## 🚨 Troubleshooting

### Common Issues

1. **Contact form not working**
   - Check API Gateway URL in environment variables
   - Verify Lambda function permissions
   - Check SES email verification

2. **Build failures**
   - Ensure Node.js version 18+
   - Clear node_modules and reinstall dependencies
   - Check for TypeScript errors

3. **Deployment errors**
   - Verify AWS credentials and permissions
   - Check CloudFormation stack events
   - Ensure unique S3 bucket names

### Support

For deployment issues or questions:
- Check AWS CloudFormation console for stack events
- Review CloudWatch logs for Lambda function errors
- Verify SES email configuration in AWS console

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

For questions about this codebase:
- Email: info@jerrytrudell2024.com
- Website: https://jerrytrudell2024.com

---

**Paid for by Friends of Jerry Trudell. Not authorized by any candidate or candidate's committee.**