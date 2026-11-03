---
repo: "ReyJ94/SceneProof"
name: "SceneProof"
description: "The visual layer of your agent harness. Renders React components and Three.js scenes from source, with structure and evidence behind every frame — so agents can see, verify, and fix what they built."
readmeQualityOk: true
url: "https://github.com/ReyJ94/SceneProof"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["bun", "coding-agents", "react", "threejs", "visual-testing", "ai-agents", "browser-automation", "developer-tools", "ui-testing", "visual-inspection"]
stars: 42
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-07-24T18:07:48Z"
lastCommitAt: "2026-11-03T19:05:35Z"
lastReleaseAt: "2026-08-27T12:25:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 14
maintainers: ["ReyJ94"]
openGraphImageUrl: "https://opengraph.githubassets.com/7007cfe75ba3ef86683544c43ee3d7f4db148a9f8437416b0afb88eded43f345/ReyJ94/SceneProof"
---

<img
    src="docs/sceneproof-banner.png"
    alt="SceneProof — Give coding agents sight."
    width="100%"
  />

SceneProof turns visual work into a loop a coding agent can follow. It renders
your React components and Three.js scenes straight from source, then pairs the
image with the structure and context behind it. The agent can see what changed,
understand why, and keep working instead of guessing from code.

## Install

```bash
bun add --global github:ReyJ94/SceneProof
sceneproof --help
```

SceneProof needs [Bun](https://bun.com/docs/installation) 1.4.0+ and a local
Chrome or Chromium. Bun 1.4 runs `playwright-core` natively and `Bun.WebView` drives the installed Chromium over CDP — no `playwright install` download needed. If setup gets fussy, jump to
[troubleshooting](#troubleshooting).

SceneProof also ships with a [`SKILL.md`](https://github.com/ReyJ94/SceneProof/blob/HEAD/skills/sceneproof/SKILL.md) for any
agentic harness that supports skills.

## Try it

```bash
sceneproof render src/components/DemoCard.tsx \
  dom:demo-card \
  --export DemoCard \
  --props fixtures/demo-card.json \
  --scale 4 \
  --out artifacts/demo-card.png
```

Swap in your own component and…
