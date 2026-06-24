---
repo: "usenotra/notra"
name: "notra"
description: "Turn Your Work Into Content"
url: "https://github.com/usenotra/notra"
homepage: "https://usenotra.com/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
stars: 130
forks: 38
openIssues: 16
closedIssues: 10
watchers: 2
contributors: 20
recentReleases: 0
createdAt: "2025-12-13T13:35:10Z"
lastCommitAt: "2026-06-24T00:24:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 30
maintainers: ["mezotv", "dependabot[bot]", "tembo[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f81883439f9b40ab9e0ee7987cf15d0bbe5a77c70b07ba97906cc70a22a6deae/usenotra/notra"
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
