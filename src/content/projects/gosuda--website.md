---
repo: "gosuda/website"
name: "website"
description: "Home of the gosuda.org [go-import, blog]"
readmeQualityOk: true
url: "https://github.com/gosuda/website"
homepage: "https://gosuda.org"
language: "Go"
languages: ["Go", "CSS"]
languagePcts: [48, 27]
stars: 11
forks: 7
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 21
recentReleases: 0
createdAt: "2024-09-02T06:30:47Z"
lastCommitAt: "2026-09-04T08:10:08Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 67
undervaluedScore: 54
maintainers: ["lemon-mint", "gg582", "iwanhae"]
openGraphImageUrl: "https://opengraph.githubassets.com/f2518766f9e88a15772292a6d318d674afac440903c88d66da5e95dbc70f49a6/gosuda/website"
---

# Gosuda Website

This repository contains the source code for the Gosuda static website and blog. All content is written in Markdown and automatically processed through CI/CD for **translation and deployment**.

## 🖥️ Local Development

### Prerequisites
   - **golang** (1.25+)
   - **bun**
   - **LLM API Key** (for translation features)

### LLM API Configuration
```bash
# Google Vertex AI (default)
export LOCATION="us-central1"
export PROJECT_ID="your-gcp-project-id"

# Or Google AI Studio
export PROVIDER="aistudio"
export AI_STUDIO_API_KEY="your-key"

# Disable translation
export LLM_INIT="false"
```

### Build & Translate
   ```bash
   make build
   ```

### Start local server
   ```bash
   make run
   ```

## ✍️ Writing a new post

### 1. **Create a Markdown file in `/root/blog/`**  
   ```bash
   blog/my-new-post.md
   ```

### 2. **Add frontmatter metadata (at the top of the file)**  
   ```yaml
   ---
   author: <Your Name>
   title: <Post Title>
   ---
   ```

### 3. **Write your content in Markdown**

### 4. **Commit, Push, and Open a Pull Request**
   ```bash
   git add blog/my-new-post.md
   git commit -m "Add new blog post: my-new-post"
   git push origin my-branch…
