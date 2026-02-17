# What, How, and Why in Software Engineering

A technical blog explaining core Software Engineering concepts, designed to be fast, SEO-friendly, and easy to maintain. This project focuses on explaining **what**, **how**, and **why** specific technologies or patterns are used in software development.

## 🚀 Features

*   **Static Site Generation:** Built with [Hugo](https://gohugo.io/) for blazing fast performance and security.
*   **Markdown-First:** All content is authored in simple Markdown files (`.md`).
*   **categorized Learning:** Content organized by **What**, **How**, and **Why** to provide structured learning.
*   **Responsive Design:** Fully responsive layout that works on mobile, tablet, and desktop.
*   **Search & Navigation:** Built-in search functionality and tag-based filtering.
*   **Automated Deployment:** CI/CD pipeline using GitHub Actions to deploy to GitHub Pages.

## 🛠️ Tech Stack

*   **Core:** [Hugo](https://gohugo.io/) (Static Site Generator)
*   **Styling:** CSS
*   **Scripting:** JavaScript (Minimal)
*   **Hosting:** GitHub Pages
*   **CI/CD:** GitHub Actions

## 🏁 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   **Git**: [Install Git](https://git-scm.com/downloads)
*   **Hugo**: [Install Hugo](https://gohugo.io/installation/) (Ensure you have the "extended" version if you plan to use Sass/SCSS features in the future, although basic CSS is currently used).

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/GKcodebase/What-Why-and-How-In-Software-Engineering.git
    cd What-Why-and-How-In-Software-Engineering
    ```

2.  **Run the local development server:**

    ```bash
    hugo server
    ```

3.  **View the site:**
    Open your browser and navigate to `http://localhost:1313`. The site will automatically reload when you make changes to files.

## 📝 Managing Content

### Adding a New Post

Create a new Markdown file in the `content/blogs/` directory (or use `hugo new`).

**Example Front Matter:**

```yaml
---
title: "Why gRPC Is Fast"
date: 2026-02-17
categories: ["Why"]  # Options: What, How, Why
tags: ["microservices", "grpc", "performance"]
summary: "An in-depth explanation of why gRPC outperforms REST in distributed systems."
---

Your blog content goes here...
```

### Directory Structure

```text
├── assets/          # CSS, JavaScript, and other assets processed by Hugo
├── content/         # Site content (Markdown files)
│   ├── blogs/       # Blog posts
│   └── _index.md    # Landing page content
├── layouts/         # HTML templates defining the site structure
├── static/          # Static files (images, favicon, etc.) served as-is
├── hugo.toml        # Main configuration file
└── .github/         # GitHub workflows for CI/CD
```

## 🚀 Deployment

The site is configured to deploy automatically to **GitHub Pages** whenever changes are pushed to the `main` branch.

1.  Commit your changes: `git commit -am "Add new post"`
2.  Push to main: `git push origin main`
3.  GitHub Actions will build the site and deploy the `public/` directory to the `gh-pages` branch.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Gokul GK**

*   Website: [https://GKcodebase.github.io/What-Why-and-How-In-Software-Engineering/](https://GKcodebase.github.io/What-Why-and-How-In-Software-Engineering/)
*   GitHub: [@GKcodebase](https://github.com/GKcodebase)
*   LinkedIn: [gk-gokul](https://www.linkedin.com/in/gk-gokul/)
