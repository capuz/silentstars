---
repo: "AgwaB/pi-subagent"
name: "pi-subagent"
description: "Minimal subagent runtime for Pi"
readmeQualityOk: true
url: "https://github.com/AgwaB/pi-subagent"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [57, 42]
stars: 47
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-08T13:48:33Z"
lastCommitAt: "2026-09-02T20:10:42Z"
lastReleaseAt: "2026-07-04T09:07:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 76
undervaluedScore: 43
maintainers: ["AgwaB", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/88f2de46230a730f70767bb2527486c4dfcd35699a31aef2e06a4ded3e0c47d2/AgwaB/pi-subagent"
---

# pi-subagent

**Minimal subagent runtime for Pi.**

`pi-subagent` adds one focused tool: `subagent`. It gives Pi the essentials for isolated worker runs — parallel fan-out, sandbox/worktree controls, durable artifacts, and async status.

It is intentionally small, so you can add it to a project when you need subagents and remove it when you do not.

npm package: [`@agwab/pi-subagent`](https://www.npmjs.com/package/@agwab/pi-subagent)

## Installation

```bash
pi install npm:@agwab/pi-subagent
```

Then reload Pi.

Requires Node.js `>=22.19.0` on macOS or Linux and Pi (`@earendil-works/pi-coding-agent`) 0.79 or newer; this release is validated against Pi 0.84.4. The engine imports Pi's SDK from the host process at runtime, so the version you run `pi` with is the version subagents use. The package includes a source-auditable universal macOS helper for kernel process birth identity; users do not need a compiler. The published helper is rebuilt from the included C source and executed on both arm64 and Intel macOS runners before npm publish. Native Windows is not supported (POSIX process groups, tmux, and `which`-based Pi discovery); use WSL2.

For local development, add this package…
