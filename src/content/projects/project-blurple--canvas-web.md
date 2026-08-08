---
repo: "project-blurple/Canvas-Web"
name: "Canvas-Web"
description: "Blurple Canvas, but on the web!"
readmeQualityOk: true
url: "https://github.com/project-blurple/Canvas-Web"
homepage: "https://canvas.projectblurple.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 16
forks: 11
openIssues: 69
closedIssues: 181
watchers: 1
contributors: 14
recentReleases: 1
createdAt: "2024-03-12T20:02:44Z"
lastCommitAt: "2026-08-08T04:29:07Z"
lastReleaseAt: "2026-05-31T03:49:12Z"
status: "thriving"
tags: ["needs_contributors", "fork_magnet"]
healthScore: 92
undervaluedScore: 78
maintainers: ["Rocked03", "dependabot[bot]", "jaskfla"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/771165378/ec451bf1-1e3d-4ed2-b0ad-d26a2d1986af"
discussionCount: 0
---

# <img src="https://github.com/project-blurple/Canvas-Web/assets/33956381/86000a76-a73b-4abe-8c61-05dbfecbec40" width="24" height="24" /> Blurple Canvas Web

</p>

## 🥪 Tech stack & repo structure

This is a [monorepo](https://monorepo.tools), with three packages:

- **[@blurple-canvas-web/backend](https://github.com/project-blurple/Canvas-Web/blob/HEAD/packages/backend#readme)**: The
  [Node](https://nodejs.org)–[Express](https://expressjs.com) back-end server
- **[@blurple-canvas-web/frontend](https://github.com/project-blurple/Canvas-Web/blob/HEAD/packages/frontend#readme)**: The
  [Next.js](https://nextjs.org) front-end
- **[@blurple-canvas-web/types](https://github.com/project-blurple/Canvas-Web/blob/HEAD/packages/types#readme)**: Where
  [TypeScript](https://www.typescriptlang.org) types shared by the front- and
  back-end live

Worth noting:

- this web app succeeds the now-deprecated
  [Blurple Canvas](https://github.com/Rocked03/Blurple-Canvas) Discord bot;
- **backend** talks to the same [PostgreSQL](http://www.postgresql.org) as the
  old bot;
- [Prisma](https://www.prisma.io) serves as the ORM layer.
- With the odd exception, **frontend** makes queries to the…
