# Adding Images to Your Portfolio Projects

## What I've Set Up for You

I've created a complete image structure for your projects! Here's what's been added:

### 1. **Updated Projects Data** (`app/data/projects.js`)
- Added image URLs for all your existing projects
- Images will now display in your projects showcase

### 2. **New Project Routes Created**
- **OCR App Project**: `/projects/ocr-app`
- **Expense Tracker Project**: `/projects/expense-tracker`

### 3. **Image Structure for Each Project**
Each project now expects these images:

#### **OCR App Images:**
- `/static/ocr-app-background.jpg` - Hero background
- `/static/ocr-app-main.jpg` - Main interface screenshot
- `/static/ocr-app-interface-1.jpg` - Interface detail 1
- `/static/ocr-app-interface-2.jpg` - Interface detail 2
- `/static/ocr-app-code.jpg` - Code structure
- `/static/ocr-app-process.jpg` - Workflow diagram
- `/static/ocr-app-result.jpg` - Results display
- `/static/ocr-app-showcase.jpg` - Final showcase

#### **Expense Tracker Images:**
- `/static/expense-tracker-background.jpg` - Hero background
- `/static/expense-tracker-main.jpg` - Main dashboard
- `/static/expense-tracker-interface-1.jpg` - Expense form
- `/static/expense-tracker-interface-2.jpg` - Budget overview
- `/static/expense-tracker-code.jpg` - Code structure
- `/static/expense-tracker-charts.jpg` - Charts background
- `/static/expense-tracker-analytics.jpg` - Analytics dashboard
- `/static/expense-tracker-showcase.jpg` - Multi-device view

## How to Add Your Own Images

### **Step 1: Prepare Your Images**
1. **Take screenshots** of your applications
2. **Create mockups** showing key features
3. **Design workflow diagrams** if applicable
4. **Ensure high quality** (at least 800x600px for main images)

### **Step 2: Add Images to Public Folder**
1. **Go to** `public/static/` directory
2. **Add your images** with the naming convention above
3. **Create multiple sizes** if needed:
   - Regular: `image-name.jpg`
   - Large: `image-name-large.jpg`
   - Placeholder: `image-name-placeholder.jpg`

### **Step 3: Update Project Routes**
If you want to create more project routes:

1. **Copy the template** from `projects.ocr-app.jsx`
2. **Update the content** for your specific project
3. **Modify image paths** to match your image names
4. **Create CSS module** for custom styling

## Image Guidelines

### **Recommended Sizes:**
- **Background images**: 1280x800px (hero sections)
- **Main screenshots**: 800x500px (feature showcases)
- **Interface details**: 350x400px (side-by-side layouts)
- **Code screenshots**: 800x500px (technical sections)

### **Image Types:**
- **Screenshots**: Actual application interfaces
- **Mockups**: Design concepts and wireframes
- **Diagrams**: Workflow and architecture charts
- **Code**: Source code structure and examples

### **File Formats:**
- **JPG**: For photographs and complex images
- **PNG**: For screenshots and graphics with transparency
- **WebP**: For optimized web delivery (optional)

## Quick Start Example

To add images to your **PulseDownloader** project:

1. **Take screenshots** of your Python application
2. **Save them** as:
   - `pulse-downloader-banner.png`
   - `pulse-downloader-interface.png`
   - `pulse-downloader-code.png`
3. **Place them** in `public/static/`
4. **Images automatically appear** in your projects showcase!

## Next Steps

1. **Add your actual project images** to `public/static/`
2. **Create more project routes** for other projects
3. **Customize the styling** in the CSS modules
4. **Update project descriptions** to match your work

Your portfolio is now ready to showcase your projects with beautiful, professional images! 🎉
