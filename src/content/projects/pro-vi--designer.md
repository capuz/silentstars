---
repo: "pro-vi/designer"
name: "designer"
description: "MCP / CLI for Claude Design"
readmeQualityOk: true
url: "https://github.com/pro-vi/designer"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [57, 41]
stars: 51
forks: 12
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-04-20T22:36:40Z"
lastCommitAt: "2026-07-10T07:00:29Z"
lastReleaseAt: "2026-06-14T23:54:01Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 44
maintainers: ["pro-vi", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0899bb5331471f8ff9e0a617a9f94bd22252dd3f6aeb7f33bcd79b8dbd5acd6/pro-vi/designer"
---

# designer

MCP + CLI that lets your coding agent drive **[claude.ai/design](https://claude.ai/design)** (Claude's wireframe + hi-fi design tool, no API) with full context of your codebase — capabilities, data shape, existing tokens fed into every prompt.

Human describes intent → agent surveys codebase and prompts Claude Design → hands you the URL → iterate → `designer_handoff` fetches the project export zip into your repo (`project/` design files + a regenerated `decision-record.md`).

> **Status:** v0.3.14, early. macOS only.

## Stance

- **Single-vendor, single-purpose.** Only `claude.ai/design`.
- **Real Chrome via CDP.** Sidesteps Cloudflare + Google SSO.
- **Capabilities drive design.** Agent surveys the codebase (entities, operations, states, tokens) and feeds them into every prompt. Intent tells Claude Design *how*; the codebase tells it *what*. See the [designer-loop skill](https://github.com/pro-vi/designer/blob/HEAD/skills/designer-loop/SKILL.md).
- **URL is the default taste path.** `designer_prompt` returns a live claude.ai/design URL with working tweak sliders and variant switcher.
- **Artifacts land on disk.** Every iteration + handoff saves under…
