# 📘 Project Requirements – Personal Blog Website

**Project Name:** *What, How and Why in Software*

---

## 1. Project Overview

Build a **personal technical blog website** using **Hugo**, where **all content is authored in Markdown (`.md`) files** and converted into static HTML pages.

The blog focuses on explaining **what, how, and why concepts in software engineering**, targeting developers, interviewers, and recruiters.

The site must be:

* Fast and SEO-friendly
* Fully static
* Easy to maintain
* Automatically deployed to **GitHub Pages** on every commit to the `main` branch

---

## 2. Core Principles

* Markdown-first content
* No backend or database
* Static-site generation only
* CI/CD via GitHub Actions
* Minimal JavaScript
* Need a option to subscribe to get the new blogs via mail.
* Scalable for future monetization (ads)

---

## 3. Technology Stack

### Mandatory

* **Static Site Generator:** Hugo
* **Content Format:** Markdown (`.md`)
* **Hosting:** GitHub Pages
* **CI/CD:** GitHub Actions
* **Version Control:** GitHub
* **Domain:** Custom domain (mapped to GitHub Pages)

### Optional / Future

* CDN (Cloudflare)
* Ads platform (Google AdSense)

---

## 4. Deployment & CI/CD Requirements

### 4.1 GitHub Repository Setup

* Repository contains Hugo source, Markdown content, and CI workflow
* Default branch: `main`

### 4.2 Automatic Deployment Rules

**Trigger:** Any commit or merge to `main`

**Pipeline Steps:**

1. Checkout code
2. Install Hugo
3. Build site (`hugo`)
4. Deploy `/public` to GitHub Pages

**Requirements:**

* No manual deployment
* Build failures must fail the pipeline
* Deployment independent of local machines

### 4.3 GitHub Pages Configuration

* Serve from deployment branch (e.g., `gh-pages`)
* HTTPS enabled
* Custom domain via `CNAME`
* Hugo `baseURL` matches Pages URL or custom domain

---

## 5. Site Structure & Pages

### 5.1 Landing Page (`/`)

**Purpose:** Personal branding and introduction

**Content Requirements:**

* Small profile photo
* Blog title: *What, How and Why in Software Engineering*
* 2–3 line author introduction
* External links:

  * LinkedIn
  * dev.to
  * GitHub
* Primary CTA: “Read Blogs”
* Side MenuBar which will have all the blogs(which can be opened and closed based on parent folder name)
* Landing page should have a search bar to search the blogs.

---

### 5.2 Blog Listing Page (`/blogs`)

* Blogs sorted by date (newest first)
* Each preview shows title, publish date, and 2–3 line summary
* Clicking navigates to detail page

### 5.3 Blog Detail Page (`/blogs/{slug}`)

* Rendered from Markdown
* Supports headings, code blocks, tables, images, internal links
* Displays title, date, category (What / How / Why), and tags

---

## 6. Side Navigation Menu

* Persistent on blog listing and detail pages
* Organized by categories, tags, and recent posts
* Static links: Home, Blogs

---

## 7. Content Authoring Rules

### 7.1 Markdown Front Matter (Mandatory)

```md
---
title: "Why gRPC Is Fast"
date: 2026-02-10
category: "Why"
tags: ["grpc", "microservices"]
summary: "Explains why gRPC outperforms REST in distributed systems."
---
```

### 7.2 Directory Structure

```text
content/
├── _index.md
├── blogs/
│   ├── why-grpc-is-fast.md
│   ├── how-java-streams-work.md
│   └── what-is-system-design.md
```

---

## 8. Analytics & Traffic Tracking

### Tracking Requirements

* Page views
* Visitor region (country/city)
* Referrer source
* Device type

### Preferred (Privacy-Friendly)

* **Plausible**
* **Umami**

### Alternative

* **Google Analytics**

> Analytics must be GDPR-compliant and must not expose raw IPs publicly.

---

## 9. Newsletter Subscription

### Functional Requirements

* Email subscription form
* Double opt-in
* Notify subscribers on new posts
* No user accounts

### Suggested Tools

* **ConvertKit**
* **Mailchimp**
* Buttondown

---

## 10. SEO Requirements

* Meta title & description from front matter
* Open Graph tags
* Sitemap.xml generation
* RSS feed enabled
* Clean URLs (`/blogs/{slug}`)

---

## 11. Performance & Accessibility

* Lighthouse score ≥ 90
* Mobile responsive
* Accessible color contrast
* Semantic HTML
* Minimal JavaScript

---

## 12. Future Enhancements (Architecture Must Support)

### Advertisements

* Google AdSense-ready layout
* Non-intrusive placement
* Lazy-loaded ads

### Growth

* Hundreds of Markdown files
* Tag-based navigation
* Search (future)

---

## 13. Out of Scope

* CMS admin UI
* Login/authentication
* Comments system (initially)
* Database

---

## 14. Success Criteria

* Adding one `.md` file creates a new blog
* Commit to `main` automatically deploys the site
* Page load < 1 second
* SEO indexing works correctly
* Newsletter notifications send reliably
* Analytics show traffic and region data

---

## 15. Instruction to Cursor 

**Generate a Hugo-based static blog website implementing all requirements above, including GitHub Actions CI/CD that deploys to GitHub Pages on every commit to the `main` branch.**
