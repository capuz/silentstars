---
repo: "professorpalmer/marionette"
name: "marionette"
description: "Marionette: an agentic harness built on top of Puppetmaster durable state architecture."
readmeQualityOk: true
url: "https://github.com/professorpalmer/marionette"
homepage: "https://professorpalmer.github.io/marionette/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [73, 24]
stars: 16
forks: 4
openIssues: 0
closedIssues: 12
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-07-03T07:06:14Z"
lastCommitAt: "2026-08-23T04:09:01Z"
lastReleaseAt: "2026-07-04T15:51:09Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 60
maintainers: ["professorpalmer", "bferguson-foreflight"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1287982437/7f04ae80-7d65-4873-bbe2-dbd3118b8b12"
---

# Marionette

A desktop AI coding harness where the LLM is a **component inside** the kernel,
not the platform. Install from GitHub, paste any Full stack API key in Settings
(OpenRouter, Anthropic, OpenAI, Gemini, Bedrock, Codex OAuth, OpenCode Go, …),
and both the chat **pilot** and agentic **workers** (swarm / implement) run on
that credential. No Cursor, Claude, or Codex CLI install is required.

Puppetmaster is the bundled kernel — not a second product to set up.
stdlib-only backend (urllib + sqlite); `puppetmaster-ai==1.22.18` is the one
real dependency the installer puts in the venv.

> Status: v0.9.273, deliberately pre-1.0. Rides puppetmaster-ai==1.22.18. Shared `build_cost_report` for CLI / MCP / Mari, plus safely resumable jobs and honest delivery verdicts.

## Documentation

Start here, then follow the map:

| Doc | What's in it |
|---|---|
| [README](https://github.com/professorpalmer/marionette/blob/HEAD/README.md) (this file) | What Marionette is, capabilities, install, run, configure. |
| [ARCHITECTURE.md](https://github.com/professorpalmer/marionette/blob/HEAD/ARCHITECTURE.md) | The three-pane app, the pilot loop, module map, data flow. |
|…
