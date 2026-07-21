---
repo: "republique-et-canton-de-geneve/RetroGemini"
name: "RetroGemini"
description: "An agile retrospective application."
readmeQualityOk: true
url: "https://github.com/republique-et-canton-de-geneve/RetroGemini"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
stars: 8
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 13
recentReleases: 0
createdAt: "2025-12-11T12:51:15Z"
lastCommitAt: "2026-07-21T06:11:29Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 54
maintainers: ["claude", "jpfroud", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6092d7ab45d0757e131267c486fa4dd5a9f1ce7539c0134f7e1900eb332909ea/republique-et-canton-de-geneve/RetroGemini"
---

# RetroGemini

Self-hosted, real-time collaborative retrospectives and team health checks. No external SaaS dependencies - all data stays on your server.

## Features

- **Team Workspaces**: Password-protected team spaces with member management
- **Retrospective Templates**: Start/Stop/Continue, 4Ls, Mad/Sad/Glad, Sailboat, and custom templates
- **Guided Sessions**: Icebreaker, Brainstorm, Group, Vote, Discuss, Review, and Close phases
- **Health Checks**: Track team health metrics over time with customizable categories
- **Real-time Collaboration**: Live sync via WebSockets - see updates instantly
- **Action Items**: Track action items with assignment and carry-over between sessions
- **Anonymous Brainstorming**: Optional anonymous mode during brainstorming phase
- **Email Invitations**: Optional SMTP integration for sending invite links

## Quick Start

### One-Command Docker Deployment

```bash
docker run -d -p 8080:8080 -v retro-data:/data ghcr.io/your-org/retrogemini:latest
```

Then open http://localhost:8080 in your browser.

### Docker Compose

```bash
# Clone the repository
git clone https://github.com/your-org/retrogemini.git
cd retrogemini

# Start the application…
