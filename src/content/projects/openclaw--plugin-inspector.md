---
repo: "openclaw/plugin-inspector"
name: "plugin-inspector"
description: " Offline compatibility inspector for mocking OpenClaw and testing plugins 💊"
readmeQualityOk: true
url: "https://github.com/openclaw/plugin-inspector"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 25
forks: 15
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 26
recentReleases: 0
createdAt: "2026-04-26T17:55:19Z"
lastCommitAt: "2026-10-14T08:57:49Z"
lastReleaseAt: "2026-04-29T05:04:47Z"
status: "thriving"
tags: ["hidden_gem", "funded", "fork_magnet"]
healthScore: 98
undervaluedScore: 50
maintainers: ["vincentkoc", "steipete", "Patrick-Erichsen"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1221809102/7921edc9-aa86-46c0-9ce3-0709750cade6"
fundingLinks: ["GITHUB:https://github.com/openclaw"]
---

# OpenClaw Plugin Inspector

`@openclaw/plugin-inspector` is the offline compatibility checker for OpenClaw
plugin packages and plugin fixture suites.

It answers the questions that matter before a plugin reaches users:

- can OpenClaw discover the package metadata and `openclaw.plugin.json`
  manifest?
- which hooks, registration calls, manifest contracts, and SDK imports does the
  plugin use?
- does the plugin still look compatible without local OpenClaw internals?
- if CI finds a breakage, which JSON, Markdown, SARIF, JUnit, and summary
  artifacts should downstream automation read?
- when a fixture-suite harness such as Crabpot runs many plugins, which findings
  are hard breakages, known warnings, live issues, deprecations, or inspector
  proof gaps?

The default path is static, offline, and credential-free. Runtime capture exists,
but it is opt-in because it imports plugin code.

## Requirements

- Node.js 22.13 or newer on the Node.js 22 line, or Node.js 24 or newer.
- A plugin package root with `package.json`.
- `openclaw.plugin.json` when the plugin uses the OpenClaw manifest contract.
- No OpenClaw checkout, credentials, network service, or live provider access for…
