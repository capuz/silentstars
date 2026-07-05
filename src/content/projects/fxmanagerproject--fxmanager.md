---
repo: "fxManagerProject/fxManager"
name: "fxManager"
description: "fxManager is an alternative webpanel to handle fxserver to txAdmin"
readmeQualityOk: true
url: "https://github.com/fxManagerProject/fxManager"
homepage: "https://fxmanager.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["fivem", "redm", "servermanagement", "webpanel"]
stars: 9
forks: 3
openIssues: 3
closedIssues: 4
watchers: 1
contributors: 3
recentReleases: 5
createdAt: "2026-03-08T23:11:49Z"
lastCommitAt: "2026-07-05T20:59:17Z"
lastReleaseAt: "2026-07-05T18:58:48Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 90
undervaluedScore: 60
maintainers: ["FjamZoo", "Maximus7474", "andreutu"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1176336590/2ddf0035-c562-488a-8b97-993edf1af79a"
fundingLinks: ["KO_FI:https://ko-fi.com/maximus_prime"]
discussionCount: 0
---

<h1 align="center">
</h1>

</p>
	</a>
	</a>
</p>

A self-contained, cross-platform admin panel for FiveM & RedM servers.  
Single binary deployment - no runtime dependencies required on the target machine.

> [!WARNING]
> This project is still in intensive development, it is **not** to be considered stable until a `v1.0.0+` release.
> If this repository is public, it's for transparency, feedback and open source contributions to help it achieve this milestone.

## Structure

Each app/package will have it's own more detailled structure in it's README.

```
fxManager/
├── apps/
│   ├── core/          # Process Manager & Webserver
│   ├── resource/      # FxServer resource to connect to panel
│   └── webpanel/      # React SPA served by the webserver
├── packages/
│   ├── database/      # Drizzle schema & Migration handler
│   ├── shared/        # Enums, types, and utils
│   └── ui/            # Shared React ShadCN components
├── biome.json         # Root linting/formatting
├── package.json       # Workspace definitions
└── turbo.json         # Build pipeline config
```

---

## Development

```bash
# Install dependencies
bun install

# Start system
bun dev
```

The React dev server…
