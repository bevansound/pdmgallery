# Public Displays of Malfunction - Setup Guide

## ✅ Current Status: FULLY CONFIGURED

**The submission system is already working!** EmailJS is configured and tested, with automatic image processing via Imgur. This guide is for reference or if you need to modify settings.

## 🎯 What's Already Working

### ✅ Email System (EmailJS + Imgur)
- **EmailJS Service:** Configured and sending emails
- **Image Hosting:** Automatic Imgur uploads for all submitted images  
- **Form Processing:** Complete form data + image URLs delivered via email
- **Image Compression:** Files >4MB auto-compressed to ~3.6MB (max 8MB upload)
- **Security:** Email addresses protected from console sniffers

### ✅ User Submission Flow
1. **User fills form** → Title, location, type, description, name
2. **User uploads image** → Drag & drop or file picker (up to 8MB)
3. **System processes** → Auto-compresses large images (>4MB)
4. **System uploads to Imgur** → Gets permanent hosting URL
5. **System sends email** → All data + image link delivered instantly
6. **You receive email** → Review and manually approve for gallery

## � Current Configuration

### EmailJS Settings (Already Working)
Located in `public/email-config.js`:
```javascript
const EMAIL_CONFIG = {
    recipientEmail: 'bevansound@gmail.com',     // ✅ Configured
    emailjs: {
        serviceId: 'service_giynqvm',           // ✅ Working
        templateId: 'template_6upa2im',         // ✅ Active
        publicKey: '0-y2IVcoHv5WX8fqD'          // ✅ Valid
    }
};
```

### Image Processing (Automatic)
- **Upload limit:** 8MB maximum file size
- **Auto-compression:** Files >4MB compressed to ~3.6MB  
- **Quality:** 90% JPEG with progressive fallback
- **Hosting:** Imgur API handles all image storage
- **Security:** No file size limits for EmailJS (uses URLs only)

### Email Template Fields
Your EmailJS template receives:
- `crash_title` - Submission title
- `crash_location` - Where the crash was spotted
- `crash_type` - Type of malfunction  
- `submitter_name` - Person who submitted it
- `crash_description` - Detailed description
- `submitted_at` - Timestamp
- `image_info` - File info (original → compressed size)
- `image_name` - Original filename
- `image_size` - Final processed size
- `image_url` - Direct Imgur link for viewing

## 🛠️ Development Setup

### Quick Start
```bash
# Install dependencies
npm install

# Start development server  
npm start
# or  
npm run dev

# Open browser to http://localhost:3000
```

### Testing the Submission System
1. **Fill out the form** with test data
2. **Upload an image** (any format, up to 8MB)
3. **Submit** - you should see success message
4. **Check your email** - form data + Imgur link should arrive
5. **Click Imgur link** - view the submitted image

## 📁 Project Structure

```
windows-crashing-public/
├── public/
│   ├── images/
│   │   └── crashes/          # 14 gallery images (static)
│   ├── index.html            # Main website
│   ├── script.js             # Complete functionality (1100+ lines)
│   ├── styles.css            # Responsive styling  
│   └── email-config.js       # EmailJS configuration ✅
├── package.json              # Dependencies
├── SETUP.md                  # This file
└── PROJECT-HANDOFF.md        # Complete project documentation
```

## ⚙️ Modifying Settings (If Needed)

### Change Email Recipient
Edit `public/email-config.js`:
```javascript
recipientEmail: 'your-new-email@example.com'
```

### Adjust Image Limits
Edit `public/script.js`:
```javascript
// Lines 307, 333, 742 - Change upload limit
const maxUploadSize = 8 * 1024 * 1024; // 8MB

// Lines 316, 342, 751 - Change compression threshold  
const autoCompressThreshold = 4 * 1024 * 1024; // 4MB
```

### Update EmailJS Template
In your EmailJS dashboard, you can modify the email template to change how submission emails look.

---

**Ready to add your images?** Just let me know:
1. Do you have image URLs?
2. Do you want to upload files?
3. What crashes do you have to showcase?
