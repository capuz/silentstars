---
repo: "neokoni/LightTickets"
name: "LightTickets"
description: "A simple self-hosted issue management platform, originally designed for Minecraft server issue management."
originalDescription: "A simple self-hosted issue management platform, originally designed for Minecraft server issue management."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/neokoni/LightTickets"
homepage: "https://issues.neokoni.ink"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [63, 22]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-05-31T07:22:37Z"
lastCommitAt: "2026-11-04T11:27:34Z"
lastReleaseAt: "2026-11-04T11:29:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 54
maintainers: ["neokoni"]
openGraphImageUrl: "https://opengraph.githubassets.com/badac89540b2ca8fa319812e7c2e9b96f4fd537cd33a0b03fc7680d7187d64fe/neokoni/LightTickets"
---

LightTickets is a self-hosted issue/ticket platform for Minecraft server management. It supports web-based management and connects with Paper/Folia and Velocity plugins for interaction.

## Features

- Issue management: Create issues from templates, and set tags, assignees, visibility, and other parameters
- Minecraft server integration: Interact with LightTickets through API Keys and server-side/proxy-side plugins
- Account authentication: Supports user registration, password recovery, email sending, and external single sign-on
- Access restrictions: Supports setting rate limits for different operation types, with built-in CloudFlare Turnstil support
- Custom site information: Supports customizing the site title, favicon, logo, and other site information
- File storage: Supports local storage and connecting to S3-compatible storage
- Email notifications: Supports connecting to an SMTP service to send issue status change and new issue assignment notifications
- Search filtering: Supports statements such as `from`, `type`, and `status` in the search bar to filter issues

## Structure

```text
LightTickets/
    ├─ backend/            # Backend service
    ├─ frontend/           #…
