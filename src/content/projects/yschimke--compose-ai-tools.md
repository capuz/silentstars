---
repo: "yschimke/compose-ai-tools"
name: "compose-ai-tools"
description: "Helping the Agents Compose the Things"
readmeQualityOk: true
url: "https://github.com/yschimke/compose-ai-tools"
homepage: "https://yschimke.github.io/compose-ai-tools/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [64]
topics: ["agent-skills", "android", "claude-code", "claude-skills", "compose-multiplatform", "gradle-plugin", "jetpack-compose", "kotlin", "skill-md", "vscode-extension"]
stars: 103
forks: 4
openIssues: 26
closedIssues: 420
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-04-12T08:49:11Z"
lastCommitAt: "2026-08-01T06:12:40Z"
lastReleaseAt: "2026-04-17T23:12:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 34
maintainers: ["yschimke", "github-actions[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ddb9f03c5db78919c1127b30b4e6cf6f06bf9b4291c0cf923c993a48b9080db/yschimke/compose-ai-tools"
discussionCount: 0
---

# compose-ai-tools

**See your Compose UI without opening Android Studio.**

`compose-ai-tools` renders your `@Preview` composables to PNG from the
command line — so your AI coding agent can actually *look* at the screen it
just changed, and so can you. Works with Jetpack Compose (Android, via
Robolectric) and Compose Multiplatform Desktop (via `ImageComposeScene`).

That's the whole idea. Everything else on this page is optional.

**[📖 Documentation](https://yschimke.github.io/compose-ai-tools/)** ·
[Install](https://yschimke.github.io/compose-ai-tools/install/) ·
[Reference](https://yschimke.github.io/compose-ai-tools/reference/)

## Get started

Pick the one that fits you. Each is a single step.

### 🤖 With an AI coding agent

Run the one-line installer once. It drops the `compose-preview` CLI **and**
the agent skill into place (Claude Code, Codex, Gemini):

```sh
curl -fsSL https://raw.githubusercontent.com/yschimke/skills/main/scripts/install.sh | bash
```

Then just ask your agent to preview a composable. The
[`compose-preview` skill](https://github.com/yschimke/skills/tree/main/skills/compose-preview)
is the playbook — it tells the agent how to render, iterate, and check…
