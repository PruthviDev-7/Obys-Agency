# Obys Agency - Creative Web Experience

A stunning, modern portfolio website for a creative agency featuring smooth scrolling animations, interactive effects, and a sleek design. This project showcases premium web design and development with cutting-edge technologies.



![Website Preview](./assets/preview.jpg)



## 🌟 Features

- **Smooth Scroll Animation** - Locomotive Scroll integration for silky-smooth scrolling experience
- **Interactive Cursor Effects** - Custom mouse follower with magnetic effects
- **Advanced Animations** - GSAP and ScrollTrigger for timeline-based animations
- **Video Integration** - Embedded video player with custom controls
- **Responsive Design** - Mobile-optimized layout with adaptive styling
- **Image Effects** - Shery.js powered gooey distortion effects on images
- **Loading Animation** - Animated preloader with counter animation
- **Dynamic Content** - Animated text, hover effects, and transitions
- **Modern Typography** - Custom web fonts (Plain Light, Silk Serif)
- **Performance Optimized** - Efficient animations and smooth 60fps performance

## 🛠️ Tech Stack

### Libraries & Frameworks
- **Locomotive Scroll** - Smooth scrolling library
- **GSAP (GreenSock)** - Advanced animation library
- **ScrollTrigger** - Scroll-based animation plugin
- **Shery.js** - Creative effects library
- **Remix Icon** - Icon library

### Languages
- HTML5
- CSS3 (with vendor prefixes)
- JavaScript (Vanilla JS)

## 📁 Project Structure
project-root/
├── index.html           # Main HTML file
├── style.css           # Main stylesheet with animations
├── script.js           # JavaScript animations and interactions
├── assets/             # Images and media
│   ├── favicon.png
│   ├── img1-1.jpg
│   ├── img1-2.jpg
│   ├── img2-1.jpg
│   ├── img2-2.jpg
│   └── preview.jpg
├── fonts/              # Custom web fonts
│   ├── plain-regular-webfont.ttf
│   ├── plain-light-webfont.ttf
│   ├── silkserif-regularitalic-webfont.ttf
│   └── silkserif-lightitalic-webfont.ttf
└── README.md          # This file
## 🚀 Quick Start

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/obys-agency.git
   cd obys-agency
No dependencies to install - This project uses CDN-hosted libraries
Simply open index.html in your browser or serve it locally
Local Server (Optional)
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (http-server)
npx http-server
Open in Browser
http://localhost:8000
📖 Usage
Core Sections
Page 1 - Hero Section
Navigation bar with social links
Large typography hero text
Flag animation on hover
Smooth entry animations
Page 2 - Video Showcase
Embedded video player
Custom play/pause controls
Cursor effects on video container
Responsive video dimensions
Page 3 - Projects Gallery
Image grid with gooey distortion effects
Interactive circle buttons with hover states
Project showcase with smooth animations
Page 4 - About & Awards
Agency description
Featured image
Award badges and achievements
Blue accent section
Page 5 - Marquee Text
Animated scrolling text
Categorized content (Sport, Fashion, Technology, etc.)
Infinite loop animations
Footer - Call to Action
Contact information
Social media links
Agency details
Interactive text animations
Customization Guide
Changing Colors
Edit style.css:
body {
    background-color: #151515;  /* Main background */
    color: #fff;                 /* Text color */
}

#page4-blue-div {
    background-color: #3F7DF4;  /* Accent color */
}
Modifying Text Content
Edit index.html and update:
Hero headings (h1, h2)
Section titles
Footer information
Social media links
Updating Images
Replace image paths in index.html:
<img src="./assets/your-image.jpg" alt="Description">
Adjusting Animation Timing
Edit animation values in script.js:
// Loading animation duration
tl.to("#loader", {
    opacity: 0,
    duration: 0.2,  // Change this value
    delay: 2.6,
});
🎨 Animation Functions
locomotiveAnimation()
Initializes smooth scrolling with Locomotive Scroll and syncs with GSAP ScrollTrigger.
loadingAnimation()
Creates the loading screen animation with:
Text slide-in effect
Counter animation (0-100)
Fade-out transition
Hero text entrance
cursorAnimation()
Handles all cursor-related effects:
Mouse follower effect
Magnetic button effects
Video cursor interaction
Play/pause video on click
sheryAnimation()
Applies gooey distortion effects to image elements with customizable parameters.
flagAnimation()
Creates the flag image that follows cursor and appears on hover.
footerAnimation()
Text split animation in footer with character-by-character effects on hover.
📱 Responsive Design
The website is optimized for mobile devices with a media query breakpoint at 600px:
Stack navigation vertically
Adjust font sizes for smaller screens
Optimize image dimensions
Maintain animation quality on mobile
🌐 Deployment
Deploy to Netlify
Option 1: Connect GitHub Repository
Push your code to GitHub
Go to netlify.com
Click "New site from Git"
Select your repository
Set build command: (leave blank - static site)
Set publish directory: ./ (root)
Deploy!
Option 2: Drag & Drop
Create a folder with all project files
Compress as ZIP
Drag and drop into Netlify
Get instant URL
Option 3: Netlify CLI
# Install Netlify CLI
npm install -g netlify-cli

# Login to your Netlify account
netlify login

# Deploy your site
netlify deploy --prod
Environment Configuration
For Netlify, ensure your file structure is correct:
Main file should be index.html in root directory
All relative paths should work from root
🔧 Browser Support
Chrome 90+
Firefox 88+
Safari 14+
Edge 90+
Mobile browsers (iOS Safari, Chrome Mobile)
📊 Performance Optimization
Current Optimizations
CDN-hosted libraries for faster loading
Optimized animations using GSAP
Smooth scroll with Locomotive Scroll
Minimal CSS with vendor prefixes
Lazy-loaded video content
Tips for Further Optimization
Compress images using TinyPNG or similar
Minify CSS and JavaScript for production
Use WebP format for images
Implement lazy loading for off-screen images
Add Service Worker for offline support
🐛 Troubleshooting
Animations Not Playing
Check browser console for errors
Ensure all CDN links are active
Verify JavaScript is enabled
Check ScrollTrigger is properly initialized
Video Not Playing
Verify video URL is accessible
Check browser video format support
Ensure CORS headers are set correctly
Test video in browser directly
Fonts Not Loading
Check fonts/ folder path
Verify font file formats are supported
Check browser console for 404 errors
Try fallback system fonts temporarily
Smooth Scroll Issues
Disable extensions affecting page scrolling
Clear browser cache
Test in different browser
Check Locomotive Scroll version compatibility
📝 Credits
Original Design Inspiration
Based on Obys Agency portfolio concept
Uses industry-standard animation libraries
Libraries Used
Locomotive Scroll
GSAP
Shery.js
Remix Icon
📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
You are free to:
✅ Use for commercial projects
✅ Modify and distribute
✅ Use for personal projects
✅ Include in portfolios
Required:
Include original license
🤝 Contributing
Contributions are welcome! Here's how to contribute:
Fork the repository
Create a feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request
📞 Support & Contact
Have Questions?
Check the Troubleshooting section
Review GSAP Documentation
Check Locomotive Scroll Docs
Report Issues
Create an issue on GitHub with:
Clear title describing the problem
Steps to reproduce
Expected vs actual behavior
Browser and OS information
Screenshots if applicable
🔗 Links
Live Demo
Hosted on Netlify: Your-Site.netlify.app
Repository
GitHub: github.com/yourusername/obys-agency
Documentation
Locomotive Scroll
GSAP Official
Shery.js
Netlify Docs
Resources
MDN Web Docs
Can I Use
Web.dev
📊 Project Statistics
Total Files: 4+ (HTML, CSS, JS, Assets)
Libraries: 5 major
Animation Functions: 6
Responsive Breakpoints: 1
Custom Fonts: 2
Performance: 60fps animations
🎯 Future Enhancements
[ ] Add dark/light mode toggle
[ ] Implement contact form
[ ] Add blog section
[ ] Optimize for Core Web Vitals
[ ] Add accessibility improvements (ARIA labels)
[ ] Implement service worker for offline support
[ ] Add more mobile responsiveness
[ ] Create admin panel for content management
📅 Version History
v1.0 (Current)
Initial release
Smooth scroll animations
Interactive effects
Responsive design
Netlify deployment ready
Made with ❤️ by Your Name
Last Updated: March 2026
Perfect! You can now copy the entire code above and paste it directly into your `README.md` file. Just remember to update:
- `Your Name` in the footer
- GitHub repository links
- Netlify deployment URL
- Any other personalized information

The file is ready to download from the outputs folder as well! 🎉
