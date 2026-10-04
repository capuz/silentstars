---
repo: "apoapostolov/hermes-agent-awesome-plugins"
name: "hermes-agent-awesome-plugins"
description: "An installable Hermes Agent plugin pack for AI power users: unified provider quotas, stalled-tool control, reasoning and iteration budgets, session appearance, pinning, scrolling, opaque composition, memory review, and RSS Reader. Reproducible SHA-pinned plugins for Hermes desktop and CLI workflows."
readmeQualityOk: true
url: "https://github.com/apoapostolov/hermes-agent-awesome-plugins"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [73, 27]
topics: ["ai", "ai-agent", "ai-agents", "anthropic", "claude", "codex", "desktop-app", "developer-tools", "hermes", "hermes-agent"]
stars: 17
forks: 3
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-08-30T12:41:35Z"
lastCommitAt: "2026-10-04T10:02:37Z"
lastReleaseAt: "2026-09-19T14:41:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 40
maintainers: ["apoapostolov", "teknium1"]
openGraphImageUrl: "https://opengraph.githubassets.com/6557e0ca5f469aeb3fde5c20c28b5fb4549c503b2d11a4dde8dd4817ce76d9b3/apoapostolov/hermes-agent-awesome-plugins"
---

## Latest plugin update

Provider Status 1.5.12 fixes GLM quota reporting. z.ai renamed its quota limit type, so the status bar showed a full quota while the account was at 82% of its weekly allowance. The public edition now shows both GLM windows in the bar. Intelligent Tool Break 1.3.4 moves the public edition's settings onto the plugin SDK storage hook.

Restart Hermes Desktop after updating; the Python and desktop halves do not reload in place.

The pack remains at 1.22.0. See the [changelog](https://github.com/apoapostolov/hermes-agent-awesome-plugins/blob/HEAD/CHANGELOG.md) for plugin-level updates and the distinction between personal and public builds.

## Personal and public

This repository keeps two trees.

**[personal/](https://github.com/apoapostolov/hermes-agent-awesome-plugins/blob/HEAD/personal/README.md)** is the full-featured edition I run. These builds may reach into Hermes Desktop internals: app DOM, persisted app keys, raw bridge calls. A Desktop update can break them. They sit outside the plugin SDK contract, so install them only if you accept that risk. The pack pins this tree.…
