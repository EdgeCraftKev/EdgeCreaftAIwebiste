# Hostinger Deployment Guide

## Prerequisites
- Node.js installed locally (for building)
- Access to your Hostinger cPanel or File Manager
- Git repository cloned locally

## Step-by-Step Deployment

### 1. Build the Application
```bash
# Install dependencies (if not already done)
npm install

# Build the production version
npm run build
```

This creates a `dist` folder with all optimized files.

### 2. Upload to Hostinger

#### Option A: Using File Manager (Recommended for beginners)
1. Log into your Hostinger control panel
2. Navigate to **File Manager**
3. Go to your domain's `public_html` folder
4. Upload ALL contents from the `dist` folder (not the folder itself)
   - index.html
   - assets/ folder
   - All image files (EdgeCraft AI Logo.jpg, collbmelogo.svg, etc.)
   - .htaccess file

#### Option B: Using FTP/SFTP
1. Connect to your Hostinger FTP using credentials from cPanel
2. Navigate to `public_html` directory
3. Upload all contents from `dist` folder

### 3. Verify Deployment
- Visit your domain URL
- Check that all images load correctly
- Test all navigation links
- Verify contact email links work

## Important Files Included

### .htaccess Configuration
The `.htaccess` file includes:
- **GZIP Compression** - Faster loading times
- **Browser Caching** - Better performance for returning visitors
- **Security Headers** - Enhanced security
- **SPA Routing** - Ready for future client-side routing
- **File Protection** - Prevents access to sensitive files

### Assets Optimization
All your images and assets will be automatically optimized and copied to the dist folder:
- EdgeCraft AI Logo.jpg
- collbmelogo.svg
- Amazon_Web_Services_Logo.svg.png
- All other logo files

## Post-Deployment Checklist
- [ ] Site loads correctly at your domain
- [ ] All images display properly
- [ ] Contact email links work
- [ ] Mobile responsive design works
- [ ] All sections scroll smoothly
- [ ] LinkedIn link opens correctly

## Troubleshooting

### Images Not Loading
- Ensure all files from `dist` folder are uploaded
- Check file permissions (should be 644 for files, 755 for folders)
- Verify file names match exactly (case-sensitive)

### Site Not Loading
- Check that `index.html` is in the root of `public_html`
- Verify `.htaccess` file is uploaded and readable

### Performance Issues
- The `.htaccess` file includes compression and caching
- Images are optimized during the build process
- Consider enabling Hostinger's CloudFlare if available

## Custom Domain Setup
If using a custom domain:
1. Point your domain's nameservers to Hostinger
2. Add the domain in Hostinger control panel
3. Upload files to the new domain's `public_html` folder

## SSL Certificate
- Enable free SSL in Hostinger control panel
- Update any hardcoded HTTP links to HTTPS
- Force HTTPS redirect if needed

## Future Updates
To update the site:
1. Make changes to your code
2. Run `npm run build`
3. Upload new `dist` folder contents to replace old files
4. Clear any caches if needed

## Support
For Hostinger-specific issues, contact Hostinger support.
For code/application issues, refer to the project documentation.