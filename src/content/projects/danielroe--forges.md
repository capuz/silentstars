---
repo: "danielroe/forges"
name: "forges"
description: "One client, every forge."
readmeQualityOk: true
url: "https://github.com/danielroe/forges"
homepage: "https://forges.link"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["api", "forge", "git"]
stars: 129
forks: 9
openIssues: 14
closedIssues: 27
watchers: 1
contributors: 11
recentReleases: 4
createdAt: "2026-10-03T20:58:35Z"
lastCommitAt: "2026-11-02T13:38:24Z"
lastReleaseAt: "2026-10-26T19:32:35Z"
status: "thriving"
tags: ["needs_contributors", "funded"]
healthScore: 92
undervaluedScore: 35
maintainers: ["danielroe", "serhalp", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1403631860/f5fb5866-6d5d-4aa3-902d-53a0a9c70db6"
fundingLinks: ["GITHUB:https://github.com/danielroe"]
---

# forges

One client, every forge.

`forges` is a TypeScript library for working with issues, pull requests, notifications, checks and webhooks on eleven forges: GitHub, GitLab, Bitbucket, Forgejo, Gitea, Gitee, Azure DevOps, Cursor Origin, Tangled, Pushin.eu and Sourcehut. A forge is a service that hosts Git repositories and the collaboration around them. It also reads repositories and their contents from Git hosts without the collaboration, such as Cloudflare Artifacts. Each provider normalises the forge's responses into one data model and declares which operations it supports.

Read the documentation at [forges.link](https://forges.link).

## install

```sh
pnpm add forges
```

`forges` requires Node.js 22.18 or later.

## usage

```ts
import { createForges, forgejo, github } from 'forges'

const forges = createForges([
  github({ auth: { type: 'token', token: process.env.GITHUB_TOKEN! } }),
  forgejo({ baseUrl: 'https://codeberg.org', auth: { type: 'token', token: process.env.CODEBERG_TOKEN! } }),
])

for await (const notification of forges.notifications.list()) {
  console.log(notification.ref.forge, notification.title)
}
```

The example above lists the notifications of two…
