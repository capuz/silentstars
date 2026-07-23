---
repo: "usenotra/notra"
name: "notra"
description: "Turn Your Work Into Content"
readmeQualityOk: true
url: "https://github.com/usenotra/notra"
homepage: "https://usenotra.com/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
stars: 141
forks: 39
openIssues: 14
closedIssues: 12
watchers: 2
contributors: 22
recentReleases: 0
createdAt: "2025-12-13T13:35:10Z"
lastCommitAt: "2026-07-23T06:14:12Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 89
undervaluedScore: 32
maintainers: ["mezotv", "janburzinski", "ImGajeed76"]
openGraphImageUrl: "https://opengraph.githubassets.com/48b7ee6c0933002e0eff3c66066c1b87bde9aad4d2b3a64c3f483be83226a6cc/usenotra/notra"
fundingLinks: ["GITHUB:https://github.com/usenotra"]
---

# Notra

</p>

Notra helps teams turn their daily work, such as merged PRs, closed issues, and Slack conversations, into ready-to-publish content.

It automates content creation by connecting to tools like GitHub, Linear, and Slack, using AI to analyze activity and generate drafts for blog posts, changelogs, and social media updates.

Notra aims to eliminate manual effort in content creation by working in the background and tailoring content to match a team's brand voice.

## What Notra does

- Connects your team tools (GitHub, Linear, Slack)
- Tracks meaningful product and engineering activity
- Generates drafts for changelogs, blog posts, and social updates
- Adapts output to your brand tone and style

## Architecture overview

Notra runs as an event-driven content pipeline:

1. **Ingest activity**
   - Pulls updates from connected systems (for example GitHub, Linear, Slack)
   - Normalizes activity into a common internal format

2. **Analyze context**
   - Applies AI analysis to identify what changed and why it matters
   - Prioritizes high-signal updates (major features, fixes, reliability, security)

3. **Generate drafts**
   - Produces structured drafts for changelogs, blog…
