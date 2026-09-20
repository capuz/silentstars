---
repo: "PlayForm/Aphrodite-Hermes"
name: "Aphrodite-Hermes"
description: "CCR compression plugin for Hermes Agent - 13 tools, dual-proxy, context engine."
readmeQualityOk: true
url: "https://github.com/PlayForm/Aphrodite-Hermes"
language: "Python"
languages: ["Python"]
languagePcts: [83]
stars: 12
forks: 3
openIssues: 1
closedIssues: 6
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-17T19:10:02Z"
lastCommitAt: "2026-09-20T08:47:16Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 95
undervaluedScore: 50
maintainers: ["NikolaRHristov", "AlexTu2"]
openGraphImageUrl: "https://opengraph.githubassets.com/a90a4ae087bf37c970181bf551a26eeab7689102d5b96c4d64c1feb61c6c7728/PlayForm/Aphrodite-Hermes"
fundingLinks: ["CUSTOM:https://buy.stripe.com/3csdQZfzn2LDaBOcMN", "OPEN_COLLECTIVE:https://opencollective.com/playform-cloud-collective"]
discussionCount: 0
---

# Aphrodite 💋 Hermes Plugin

> [!NOTE]
>
> **CCR compression plugin for Hermes Agent - thin Python loader + Rust dylib.**
> Sub-ms tool output compression, 28-type classifier, 13 tools, 6 hooks,
> context engine, dylib hot-reload. Skills ship dev-side, not with the plugin.

Aphrodite intercepts tool output before it reaches the LLM and replaces it with
compact, structured previews. The agent sees 15 tokens of metadata instead of
500 tokens of raw text - and retrieves the full content only when it actually
needs it. **All compression logic runs in the Rust dylib.**

---

## Install ⚡

### One-command

**`Terminal`**

```bash
git clone https://github.com/PlayForm/Aphrodite-Hermes.git
ln -s "$(pwd)/Aphrodite-Hermes" ~/.hermes/plugins/aphrodite
hermes plugins enable aphrodite
hermes
```

The `ln -s` line links the plugin into `~/.hermes/plugins/` so Hermes can
discover it. Create it at install time: the plugin's startup layout self-heal
(`layout_check.py`) can only recreate the link once Hermes has already loaded
the plugin from somewhere.

On first launch, the plugin **automatically downloads** the `aphrodite` binary
from [releases](https://github.com/PlayForm/Aphrodite/releases)…
