---
repo: "Firstp1ck/npm-packages"
name: "npm-packages"
description: "This repository contains my public JavaScript/TypeScript packages published via npm (using Bun and/or npm)."
readmeQualityOk: true
url: "https://github.com/Firstp1ck/npm-packages"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [52, 26]
topics: ["bun", "extensions", "npm", "npm-packages", "packages", "pi-agent", "pi-agent-extension", "pi-extensions", "bun-packages"]
stars: 20
forks: 8
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-05-02T19:38:52Z"
lastCommitAt: "2026-07-04T23:14:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 42
maintainers: ["Firstp1ck", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e61720568a90568791e8cc654b7b7410d601e18a7e83409bdb0b0031fa87ff5/Firstp1ck/npm-packages"
discussionCount: 2
---

# firstpick npm/bun packages

This repository contains my public JavaScript/TypeScript packages published via npm (using Bun and/or npm).

Right now it contains **Pi extension, skill, package, theme bundle, and companion utility packages**.

## Skill authoring standards

- Follow the packaged portability guide in [`pi-package-skill-lifecycle/vendor/pi-skill-skill-creator/skills/skill-creator/references/SKILL-PORTABILITY.md`](https://github.com/Firstp1ck/npm-packages/blob/HEAD/pi-package-skill-lifecycle/vendor/pi-skill-skill-creator/skills/skill-creator/references/SKILL-PORTABILITY.md) when creating or updating reusable skills.
- Keep portable skill workflows harness-neutral; isolate Pi-only tools, slash commands, and local settings under a `## Pi adapter` section.
- Keep personal runtime memory outside package directories, e.g. `~/.pi/agent/memory/skills/<skill-name>.md` for Pi-local observations.

## Skill packages

These package active Pi skills that are not already bundled in an existing `pi-extension-*` package. Each package uses `pi.skills: ["./skills"]` and includes its full skill directory, including bundled scripts/references/assets.

Extension-bundled skills kept as…
