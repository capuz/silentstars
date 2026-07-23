---
repo: "sapiom/sapiom-js"
name: "sapiom-js"
description: "TypeScript / Node libraries"
readmeQualityOk: true
url: "https://github.com/sapiom/sapiom-js"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
stars: 9
forks: 5
openIssues: 4
closedIssues: 1
watchers: 0
contributors: 30
recentReleases: 0
createdAt: "2025-11-11T23:16:54Z"
lastCommitAt: "2026-07-23T06:14:12Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 83
undervaluedScore: 55
maintainers: ["evtran0209", "gwitwer", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/394d9e388685fc92120830070055f63e5d01995b992eb32298f27628f34d1aeb/sapiom/sapiom-js"
---

# Sapiom SDK

> ⚠️ **Beta Status:** Currently in v0.x (beta). API may change before v1.0.0.
> Production-ready and actively maintained.

TypeScript SDK for **building, running, and operating AI agents on Sapiom**.
Author agents as typed step graphs, call Sapiom paid tools (sandboxes, git
repos, coding models, search, file storage, …) directly from your code, and ship
them to the Sapiom engine from the CLI or your coding agent's MCP.

## 📦 Packages

This is a monorepo of focused packages. Install only what you need.

### Build & run agents

| Package                           | Version                                                                                           | Description                                                                                     |
| --------------------------------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| [@sapiom/agent](https://github.com/sapiom/sapiom-js/blob/HEAD/packages/agent) | [](https://www.npmjs.com/package/@sapiom/agent) | The authoring contract: `defineAgent`,…
