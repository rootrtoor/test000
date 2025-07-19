# 🚀 One-Click AWS Amplify Deployment

Deploy the Jerry Trudell campaign website to AWS Amplify in just a few clicks!

## ⚡ Quick Deploy Options

### Option 1: Deploy to AWS Amplify (Recommended)
[![Deploy to Amplify](https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/your-username/jerry-trudell-campaign)

### Option 2: Deploy to Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/your-username/jerry-trudell-campaign)

### Option 3: Deploy to Vercel
[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/jerry-trudell-campaign)

## 📋 Simple Setup Steps

### For AWS Amplify:

1. **Click the "Deploy to Amplify" button above**
2. **Connect your GitHub account** and fork this repository
3. **Configure the build** (uses the included `amplify.yml`)
4. **Deploy!** - That's it! Your site will be live in 5-10 minutes

### No Backend Setup Required!

The website now uses a simplified contact form that works with:
- ✅ **Netlify Forms** (automatic form handling)
- ✅ **Mailto fallback** (opens user's email client)
- ✅ **No database required**
- ✅ **No Lambda functions needed**
- ✅ **No API configuration**

## 🔧 Build Configuration

The project includes an optimized `amplify.yml` that:
- Automatically installs dependencies
- Builds the React application
- Serves static files from `dist/public`
- Caches `node_modules` for faster builds

## 📧 Contact Form Setup

The contact form automatically:
1. **Tries Netlify Forms** first (works on Netlify, Amplify, and most static hosts)
2. **Falls back to mailto** if form submission fails
3. **No server configuration needed**

## 🌐 Custom Domain (Optional)

After deployment:
1. Go to your Amplify app console
2. Click "Domain Management"
3. Add your custom domain
4. Follow the DNS configuration steps

## 📱 Features Included

- ✅ **Responsive Design** - Works on all devices
- ✅ **Fast Loading** - Optimized static site
- ✅ **SEO Ready** - Meta tags and structured data
- ✅ **Contact Form** - Works without backend
- ✅ **Social Media Ready** - Open Graph tags
- ✅ **Mobile Friendly** - Touch-optimized navigation

## 🔒 Security & Performance

- ✅ **HTTPS by default** - Secure connections
- ✅ **CDN included** - Fast global delivery
- ✅ **Form spam protection** - Built-in validation
- ✅ **No exposed APIs** - No security vulnerabilities

## 💰 Cost

- **AWS Amplify Free Tier**: 1000 build minutes/month, 15GB storage
- **Estimated monthly cost**: $0-5 for typical campaign website traffic
- **No database costs** - Uses static form handling

## 🆘 Troubleshooting

### Build Fails?
- Check that Node.js version is 18+
- Verify all dependencies are listed in `package.json`
- Check build logs in Amplify console

### Contact Form Not Working?
- Form automatically falls back to mailto
- Works with all major email clients
- No configuration needed

### Domain Issues?
- DNS changes can take 24-48 hours
- Use Amplify's default domain while waiting
- Check domain verification in console

## 🎯 What You Get

A complete campaign website with:
- Professional design with campaign colors
- Hero section with candidate photo
- About section with biography
- Issues/policy platform
- Testimonials from supporters
- Get involved section
- Working contact form
- Social media integration
- Mobile-responsive layout

## 📞 Support

If you need help:
1. Check the AWS Amplify documentation
2. Review build logs in the console
3. Contact your web developer

---

**Ready to launch your campaign online? Click the deploy button above!**