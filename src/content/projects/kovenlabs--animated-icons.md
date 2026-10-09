---
repo: "kovenlabs/animated-icons"
name: "animated-icons"
description: "Animated React icons with 1–3 color slots that read from your shadcn/ui theme."
readmeQualityOk: true
url: "https://github.com/kovenlabs/animated-icons"
homepage: "https://animated-icons-nu.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
stars: 16
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-10-02T11:49:03Z"
lastCommitAt: "2026-10-09T10:51:05Z"
lastReleaseAt: "2026-10-09T08:39:01Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 44
maintainers: ["ayoubben18", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/837bcd80eec616bf795cb1eab9cac4759c0c9355a0ea2b88ccda551930ef60d8/kovenlabs/animated-icons"
---

# Animated Icons

Animated icons with 1–3 color slots, read from your shadcn/ui tokens. Each icon has its own animation
variants. Configure them globally, per subtree or per instance.

```tsx
<Bell />                                       // theme colors, plays on hover
<Bell variant="shake" trigger="auto" interval={2000} />
<Bell colors={{ accent: "destructive" }} />    // a token name or any CSS color
```

## Install

```bash
# shadcn registry: copies the source into your codebase
npx shadcn add @kovenlabs/bell        # one icon
npx shadcn add @kovenlabs/all         # every icon

# or the package: one dependency, tree-shaken
pnpm add @kovenlabs/animated-icons motion
```

All the ways, compared: `/docs/installation`.

## For AI agents

A skill teaches your coding agent to pick the icon, variant and trigger for a use case. It searches the
catalog (`@kovenlabs/animated-icons/catalog.json`, or `/icons.json` on the site):

```bash
npx skills add kovenlabs/animated-icons --skill find-animated-icon
```

## Repo

Turborepo + pnpm.

| Path                         | What                                                                     |
| ---------------------------- |…
