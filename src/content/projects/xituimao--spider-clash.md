---
repo: "xituimao/spider-clash"
name: "spider-clash"
description: "One-click silent fetching of free nodes"
originalDescription: "一键静默抓取免费节点"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/xituimao/spider-clash"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 7
forks: 10
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-12-12T10:40:01Z"
lastCommitAt: "2026-10-24T00:16:01Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 70
undervaluedScore: 76
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c92d5b7c7e3e9eaee002ef52d11e11cbbc62b914affe10f39e4610ce66451f46/xituimao/spider-clash"
---

# Spider Clash 🕸️

A lightweight Node.js crawler for fetching, validating, and generating Clash/V2Ray subscription links.

## Features

- ✅ **Multi-source fetching**: Extracts nodes from subscription links or web pages.
- ✅ **Automatic validation**: Built-in TCP Ping validation automatically removes invalid nodes.
- ✅ **GitHub Actions**: Uses free compute to automatically update nodes and generate permanent subscription links.
- ✅ **Clash/V2Ray**: Automatically generates standard YAML and Base64 format configurations.

## How to Use (GitHub Actions Version) - **Recommended**

This is the simplest and most stable way to use it, and it requires no server of your own.

### 1. Fork This Project
Click the **Fork** button in the top right corner to copy the project to your account.

### 2. Configure Subscription Sources
Edit the `src/config.js` file and fill in your subscription source URLs:
```javascript
export default {
    sources: [
        'https://你的订阅链接1...',
        'https://你的订阅链接2...'
    ],
    // ...
}
```

### 3. Enable Permissions (Critical Step!)
On your GitHub repository page:
1. Click **Settings** > **Actions** > **General**
2. Scroll down to **Workflow permissions**…
