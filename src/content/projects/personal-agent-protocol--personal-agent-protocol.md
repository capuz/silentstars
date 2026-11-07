---
repo: "personal-agent-protocol/personal-agent-protocol"
name: "personal-agent-protocol"
description: "Personal Agent Protocol, \"poppy\" for short"
readmeQualityOk: true
url: "https://github.com/personal-agent-protocol/personal-agent-protocol"
homepage: "https://PersonalAgentProtocol.org"
language: "TypeScript"
languages: ["TypeScript", "MDX"]
languagePcts: [54, 43]
stars: 79
forks: 14
openIssues: 25
closedIssues: 49
watchers: 9
contributors: 4
recentReleases: 0
createdAt: "2026-10-14T12:55:45Z"
lastCommitAt: "2026-11-07T22:51:01Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 34
maintainers: ["arya", "ToddKerpelman", "shopdave"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d92c4bd2164c1f0ea74d2144c79e06fee94659ac06c5a67b1df5df1839d4ac0/personal-agent-protocol/personal-agent-protocol"
---

# Personal Agent Protocol

Source for [personalagentprotocol.org](https://personalagentprotocol.org), the site that publishes
the Personal Agent Protocol draft specification and its docs. The protocol lets personal agents
discover participating companies, sign users in, and get things done through APIs, web pages, and
company agents.

The site is a Next.js static export. It documents the protocol but does not implement the APIs the
specification describes.

## Development

Use Node.js 20.9 or newer and pnpm 10.34.0. Dependencies install from the public npm registry.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

The site opens at `http://localhost:3000`. Before sending a change, run:

```sh
pnpm typecheck
pnpm format:check
pnpm build
```

If you changed the docs or `kit/`, run `pnpm kit` first. It regenerates the kit, and the build fails
when the committed kit is out of date. `pnpm kit` and the validator's tests, `pnpm test:kit`, need
Node.js 22.18 or newer.

The production build writes the static site to `out/`. Serve that directory with any static host.

`pnpm-workspace.yaml` sets `minimumReleaseAge`, so pnpm won't install a package version until it
has been published for…
