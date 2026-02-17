# What, How, and Why in Software - Website Guide

This guide explains how to manage your Hugo-based static blog.

## 🚀 Quick Start
To run the server locally:
```sh
hugo server
```
Visit `http://localhost:1313` in your browser.

## 📝 Managing Content

### Adding a New Blog Post
Create a new Markdown file in `content/blogs/`. Use the following front matter:

```md
---
title: "Your Blog Title"
date: 2026-02-15
categories: ["What"]  # Choose: What, How, or Why
tags: ["topic1", "topic2"]
summary: "A short description showing on the list page."
---

Your content goes here (Markdown supported)...
```

### Updating Profile & Social Links
Open `hugo.toml` and edit the `[params]` section:

```toml
[params]
  author = "Your Name"
  description = "Your new bio..."
  
  [params.social]
    linkedin = "https://linkedin.com/..."
```

### Changing Profile Photo
1. Place your image in `static/images/` (e.g., `me.jpg`).
2. Update `hugo.toml`:
```toml
profile_image = "/images/me.jpg"
```

## 📧 Newsletter Subscription
This site uses a standard HTML form action (e.g., ConvertKit, Mailchimp).

1. Go to your provider (e.g., ConvertKit).
2. Create a form and get the `action` URL.
3. Update `hugo.toml`:
```toml
[params.newsletter]
  action = "https://your-provider-url..."
```

## 🌐 Deployment
The site is configured to deploy automatically to GitHub Pages.
1. Push your changes to the `main` branch.
2. GitHub Actions will build and deploy to the `gh-pages` branch.
3. Ensure your GitHub Repository Settings > Pages is set to build from `gh-pages` branch.

## 🎨 Customizing Design
- **CSS**: Edit `assets/css/style.css`.
- **Layouts**: Edit files in `layouts/`.

## 📊 Analytics
To add Plausible or Google Analytics, edit `hugo.toml`:
```toml
[params.analytics]
  plausible_domain = "your-domain.com"
```
