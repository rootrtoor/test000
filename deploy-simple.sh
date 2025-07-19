#!/bin/bash

# Simple deployment script for Jerry Trudell Campaign Website
echo "🚀 Building Jerry Trudell Campaign Website for deployment..."

# Build the application
npm run build

echo "✅ Build completed! Files are ready in dist/public/"
echo ""
echo "📦 Deployment Options:"
echo ""
echo "1. 🌐 AWS Amplify:"
echo "   - Go to https://console.aws.amazon.com/amplify/"
echo "   - Click 'New App' > 'Host web app'"
echo "   - Connect your GitHub repository"
echo "   - Amplify will use the amplify.yml configuration automatically"
echo ""
echo "2. 🎯 Netlify:"
echo "   - Go to https://app.netlify.com/"
echo "   - Drag and drop the dist/public folder"
echo "   - Or connect your GitHub repository"
echo ""
echo "3. ⚡ Vercel:"
echo "   - Go to https://vercel.com/"
echo "   - Import your GitHub repository"
echo "   - Deploy with one click"
echo ""
echo "📧 Contact Form: Works automatically with Netlify Forms or email fallback"
echo "💰 Cost: Free tier available on all platforms"
echo ""
echo "🎉 Your campaign website is ready to deploy!"