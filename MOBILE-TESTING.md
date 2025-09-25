# Mobile Responsiveness Testing Guide

## Overview
This document provides guidelines for testing the EV Funnel website across different mobile devices and screen sizes to ensure optimal user experience.

## Testing Devices and Screen Sizes
Test the website on the following screen sizes and devices:

### Small Mobile Devices (320px - 480px)
- iPhone SE
- Galaxy S5
- Small Android devices

### Medium Mobile Devices (481px - 768px)
- iPhone X/11/12/13
- Google Pixel
- Samsung Galaxy S10/S20

### Tablets (769px - 1024px)
- iPad
- iPad Pro
- Galaxy Tab

### Desktops (1025px and above)
- Standard laptop screens
- Large desktop monitors

## Testing Methods

### 1. Browser Developer Tools
Most modern browsers offer developer tools that allow you to simulate different screen sizes:
- Chrome: Right-click > Inspect > Toggle Device Toolbar (or press Ctrl+Shift+M)
- Firefox: Right-click > Inspect Element > Responsive Design Mode
- Safari: Develop > Enter Responsive Design Mode

### 2. Real Device Testing
When possible, test on actual physical devices for the most accurate results.

### 3. Browser Stack or Similar Services
Consider using services like BrowserStack or LambdaTest for testing across multiple device configurations.

## What to Check

1. **Layout Integrity**
   - Does the layout adapt properly to different screen sizes?
   - Are there any overflowing elements or horizontal scrollbars?
   - Do images scale appropriately?

2. **Navigation**
   - Is the navigation clear and easy to use on mobile?
   - Are touch targets (buttons, links) large enough (min 44px)?

3. **Typography**
   - Is the text readable on small screens?
   - Are font sizes appropriate for each breakpoint?

4. **Forms**
   - Are form elements properly sized for touch input?
   - Is validation feedback clearly visible?
   - Do form fields work properly on mobile keyboards?

5. **Images**
   - Do images load efficiently on mobile?
   - Are they appropriately sized and compressed?

6. **Performance**
   - Does the site load quickly on mobile connections?
   - Are there any animations or effects that might cause performance issues?

## Testing Checklist

- [ ] Home page loads properly on all screen sizes
- [ ] MultiStepForm adapts properly to small screens
- [ ] Step indicators are visible and functional
- [ ] Form inputs are easily tappable on touch screens
- [ ] Radio buttons and form options are easy to select
- [ ] SubscriptionInfo section displays correctly
- [ ] BonusesInfo cards stack properly on mobile
- [ ] Bottom section with app mockup is readable and properly formatted
- [ ] Footer is properly aligned and readable on all screens
- [ ] Page is usable in both portrait and landscape orientations on mobile

## Reporting Issues

When reporting mobile responsiveness issues, please include:
1. Device/screen size where the issue occurs
2. Screenshots of the issue
3. Steps to reproduce
4. Browser and OS information

## Notes
- The mobile version prioritizes readability and ease of interaction over design complexity
- Some visual elements may be hidden or modified on smaller screens for better usability
