---
repo: "gameguild-gg/gameguild"
name: "gameguild"
description: "Open Source Platform for Game Developers A platform designed to connect game developers through community collaboration, educational resources, and tools for playtesting and game launches."
readmeQualityOk: true
url: "https://github.com/gameguild-gg/gameguild"
homepage: "https://gameguild.gg"
language: "C#"
languages: ["C#", "TypeScript"]
languagePcts: [69, 28]
topics: ["community", "game-development", "gamedev", "games", "open-source", "opensource"]
stars: 59
forks: 6
openIssues: 51
closedIssues: 342
watchers: 4
contributors: 16
recentReleases: 0
createdAt: "2023-05-08T20:15:45Z"
lastCommitAt: "2026-10-21T08:48:22Z"
lastReleaseAt: "2024-10-19T15:55:02Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 97
undervaluedScore: 53
maintainers: ["mathrmartins", "tolstenko", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f265db7022dafb3893775c30213fe027b29ce70b1ed90b09146ddc80a37f7b92/gameguild-gg/gameguild"
discussionCount: 0
---

# GameGuild

GameGuild is the open platform where game creators learn, build, and ship together: courses and learning paths, a in-browser code editor, project management, playtesting, and community — in one workspace.

<!-- TODO(#83): replace with a short product GIF showing courses, the code editor, and project management.

## Architecture

The repository is a pnpm monorepo with two applications plus shared tooling:

```text
gameguild/
├── apps/
│   ├── api/                     .NET 10 modular monolith (GameGuild.sln)
│   │   └── Source/
│   │       ├── GameGuild.API/             host composition root (DI, endpoints, security)
│   │       └── Modules/                   platform + domain modules
│   │           ├── GameGuild.Identity.*   authentication, authorization, users, tenants
│   │           ├── GameGuild.Compliance.Audit      central audit trail & evidence packaging
│   │           ├── GameGuild.Content.Pages         CMS pages, content resources, marketing leads
│   │           ├── GameGuild.Learning.*            courses, enrollments, certificates, paths
│   │           ├── GameGuild.Commerce.*            billing, orders, payments, products, plans
│   │           └── ...…
