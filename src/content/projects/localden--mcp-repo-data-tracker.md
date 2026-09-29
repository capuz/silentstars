---
repo: "localden/mcp-repo-data-tracker"
name: "mcp-repo-data-tracker"
description: "Tracker that gives visibility into the issues/PRs that are currently open in the MCP repo."
readmeQualityOk: true
url: "https://github.com/localden/mcp-repo-data-tracker"
language: "TypeScript"
languages: ["TypeScript", "HTML", "Python"]
languagePcts: [37, 36, 20]
stars: 9
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-01-14T23:30:33Z"
lastCommitAt: "2026-09-29T08:11:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 55
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/893fbfe2c5cab266c3f2722d120031e665a68d161fffea45c947a86ab6b47177/localden/mcp-repo-data-tracker"
---

</p>

<h1 align="center">VISR — MCP Repository Health Tracker</h1>

  Dashboard for monitoring the health of Model Context Protocol open source repositories.<br>
  <strong>Only public repositories are tracked.</strong>
</p>

  <br>
</p>

---

## Prerequisites

### Node.js

Node.js 18+ is required for the data aggregation scripts.

```bash
# Using nvm (recommended)
nvm install 18
nvm use 18

# Or via apt
sudo apt update
sudo apt install -y nodejs npm
```

### Hugo

Hugo is required to build the static site dashboard.

**Ubuntu/Debian:**

```bash
# Option 1: Snap (recommended - always up to date)
sudo snap install hugo

# Option 2: apt (may be older version)
sudo apt update
sudo apt install -y hugo

# Option 3: Download latest release directly (if you need extended version)
# Check https://github.com/gohugoio/hugo/releases for latest version
HUGO_VERSION="0.139.0"
wget https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.deb
sudo dpkg -i hugo_extended_${HUGO_VERSION}_linux-amd64.deb
rm hugo_extended_${HUGO_VERSION}_linux-amd64.deb
```

**macOS:**

```bash
brew install hugo
```

**Verify installation:**

```bash
hugo version
#…
