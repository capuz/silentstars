---
repo: "piconic-ai/barefootjs"
name: "barefootjs"
description: "Fine-grained reactive TSX compiler – TSX in. Your stack out."
url: "https://github.com/piconic-ai/barefootjs"
homepage: "https://barefootjs.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["honojs", "tsx", "go", "perl5", "typescript"]
stars: 19
forks: 0
openIssues: 6
closedIssues: 526
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2025-12-20T07:51:15Z"
lastCommitAt: "2026-06-29T07:24:06Z"
lastReleaseAt: "2026-06-06T15:17:27Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 56
maintainers: ["claude", "kfly8"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ccbe0ff14171c6cc961928852bc1a67c69c608b2ba45929c3392064a07e68e6/piconic-ai/barefootjs"
discussionCount: 0
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="images/logo/logo-for-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="images/logo/logo-for-light.svg">
  </picture>
</p>

  <strong>TSX in. Your stack out.</strong><br>
  Barefoot compiles signal-based TSX into Hono, Echo, or whatever stack you ship on.<br>
  No virtual DOM. No SPA required.
</p>

> [!WARNING]
> **Alpha Software** — BarefootJS is in early alpha. APIs may change without notice. Not recommended for production use.

---

## Quick Start

Requires Node 22+.

```sh
npm create barefootjs@latest
```

You'll be prompted for a target directory (defaults to `my-app`). After scaffolding:

```sh
cd my-app   # or whatever name you entered at the prompt
npm install
npm run dev
```

Then open the URL the dev server prints (defaults to `http://localhost:8787`). The starter app ships a Counter component you can edit at `components/Counter.tsx`.

The full walkthrough — adapter / CSS choices, generated layout, and editing the Counter — lives in [`docs/core/quick-start.mdx`](./docs/core/quick-start.mdx).

---

## AI-Assisted Development

BarefootJS ships an agent skill that gives AI deep knowledge…
