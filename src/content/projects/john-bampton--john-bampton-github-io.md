---
repo: "john-bampton/john-bampton.github.io"
name: "john-bampton.github.io"
description: "Explore the top GitHub users and their avatars. See the 400 most popular GitHub faces in one place."
readmeQualityOk: true
url: "https://github.com/john-bampton/john-bampton.github.io"
homepage: "https://john-bampton.github.io"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [65, 35]
topics: ["hacktoberfest", "hacktoberfest-accepted", "github-api", "javascript", "python", "html", "leaderboard", "statistics", "showcase", "github-actions"]
stars: 11
forks: 16
openIssues: 25
closedIssues: 44
watchers: 1
contributors: 15
recentReleases: 0
createdAt: "2025-09-12T14:15:40Z"
lastCommitAt: "2026-07-05T06:33:36Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "funded", "fork_magnet"]
healthScore: 92
undervaluedScore: 74
maintainers: ["github-actions[bot]", "dependabot[bot]", "jbampton"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1055607412/e1e0a987-fadd-4f33-af51-17af6ee9c772"
fundingLinks: ["GITHUB:https://github.com/jbampton", "GITHUB:https://github.com/BaseMax"]
---

# GitHub Faces: Curated Avatars & Profiles

> "Explore the faces behind GitHub. Discover the people shaping open-source."

Explore and showcase the top GitHub user avatars in a modern, interactive grid. This project fetches, caches, and displays real GitHub profiles with up-to-date avatars and stats.

---

## 🚀 Features

- Dynamic fetching of GitHub users via the API
- Secure avatar downloads and cache management
- Responsive HTML grid with Bootstrap
- Real user filtering (`type: User`)
- Automatic avatar updates
- RSS feed for new faces
- Modern, clean design
- Pre-commit hooks for code quality (black, isort)
- XSS-safe Jinja2 templates

---

## 🌐 Live Previews

- [View the site](https://john-bampton.github.io/)

---

## ⚡ Site Quickstart

1. **Clone the repository:**

   ```bash
   git clone https://github.com/john-bampton/john-bampton.github.io.git
   cd john-bampton.github.io
   ```

2. **Install dependencies:**

   ```bash
   pip install -e .
   ```

3. **Run the fetcher:**

   ```bash
   APP_ENV=test python fetch.py
   ```

   <br>
   <sup>
   <b>Tip:</b> Setting <code>APP_ENV=test</code> will fetch only <b>20 users</b> for fast testing. Omit this variable to fetch <b>400…
