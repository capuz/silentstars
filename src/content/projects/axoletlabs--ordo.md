---
repo: "axoletlabs/ordo"
name: "ordo"
description: "The app that keeps your life in order. A secure, self-hostable bookmark manager with a clean reader."
readmeQualityOk: true
url: "https://github.com/axoletlabs/ordo"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
stars: 7
forks: 1
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-07-28T20:54:57Z"
lastCommitAt: "2026-11-01T10:44:47Z"
lastReleaseAt: "2026-10-27T03:39:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 63
maintainers: ["imluckii"]
openGraphImageUrl: "https://opengraph.githubassets.com/ef1ab832651ae68591c908ddcbd424f1c1943fff8fd31184b7103a936a53d1fc/axoletlabs/ordo"
---

## App

Download the Android app from [Releases](https://github.com/axoletlabs/ordo/releases) and sign in. New installs use [ordo Cloud](https://api.ordo.axolet.com).

The app sends anonymous daily counts to ordo Cloud: an install ID plus opens, timeouts, server errors, and sign-in failures for the day. Nothing else — no account, email, device name, server URL, app version, platform, or hosting mode. A server you host does not receive these counts. See [docs/telemetry.md](https://github.com/axoletlabs/ordo/blob/HEAD/docs/telemetry.md) for the exact payload.

To run from source you need Node.js 22.13+ and [pnpm](https://pnpm.io) 11:

```bash
pnpm install
pnpm --filter @ordo/shared build
pnpm --filter @ordo/mobile start

# Backend (also generate the Prisma client first):
pnpm --filter @ordo/server db:generate
pnpm --filter @ordo/server dev
```

## Server

Optional. You keep it online, updated, and backed up. Axolet does not operate a server you host.

Node.js 22.13 or newer. If pnpm is missing, the installer offers to install it.

```bash
curl -fsSL https://ordo.axolet.com/install | bash
```

The latest release is downloaded into `~/ordo` and checked against its checksum. Set…
