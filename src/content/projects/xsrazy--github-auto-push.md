---
repo: "xsrazy/GitHub-Auto-Push"
name: "GitHub-Auto-Push"
description: "A tool to automatically push files to GitHub repositories at specified intervals. Supports both single and multiple repository modes."
url: "https://github.com/xsrazy/GitHub-Auto-Push"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 6
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-06-27T10:27:16Z"
lastCommitAt: "2026-06-23T23:18:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 76
maintainers: ["xsrazy"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f028daa3669eadc95ecdf93afe7549945cbbf51703b2c65448b7f4516f7a131/xsrazy/GitHub-Auto-Push"
---

# GitHub Auto Push
🌐 Available in other languages: [Bahasa Indonesia](README.id.md)

A tool to automatically push files to GitHub repositories at specified intervals. Supports both single and multiple repository modes.

Created by: [xsrazy](https://github.com/xsrazy)

## Features

- Two operation modes:
  - Single repository: Push to one repository
  - Multiple repositories: Push to multiple repositories simultaneously
- Interactive configuration prompts
- Automatic file creation and updates
- Configurable push delay
- Continuous auto-pushing
- Detailed logging
- Customizable file content
- Commit message templates with timestamps

## Prerequisites

- Node.js v14 or higher
- GitHub account
- GitHub Personal Access Token with 'repo' permissions

## Installation

1. Clone or download this repository
2. Navigate to the directory:
   ```bash
   cd github-auto-push
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

Run the script:
```bash
node push.js
```

### Single Repository Mode

1. Select "Single repository" when prompted
2. Enter:
   - GitHub token
   - GitHub username
   - Repository name (e.g., "my-repo")
   - File path (default: auto-push.md)
   -…
