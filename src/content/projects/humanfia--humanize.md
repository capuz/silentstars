---
repo: "humanfia/humanize"
name: "humanize"
description: "The agent flow system for token maxxing."
readmeQualityOk: true
url: "https://github.com/humanfia/humanize"
homepage: "https://docs.humanfia.ai/humanize/"
language: "Python"
languages: ["Python"]
languagePcts: [92]
topics: ["agent", "harness", "system", "flow", "infra", "workflow", "ai-agents", "claude-code", "codex", "coding-agents"]
stars: 377
forks: 37
openIssues: 3
closedIssues: 17
watchers: 1
contributors: 15
recentReleases: 10
createdAt: "2026-07-24T00:15:19Z"
lastCommitAt: "2026-11-02T11:31:33Z"
lastReleaseAt: "2026-10-24T10:37:32Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 96
undervaluedScore: 31
maintainers: ["futrime", "antoinegg1", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/da2a1ebd5fac73619b6e5964613f2cde61a66569ea9aad0b595acd6d3bd25a69/humanfia/humanize"
---

# Humanize _(hmz)_



The agent flow system for token maxxing.

## Install

### Humanize Desktop

Humanize Desktop puts `hmz web` in a window of its own, and installs `hmz` itself. Download it
from the [latest release](https://github.com/humanfia/humanize/releases/latest):
`humanize-<version>-macos-universal.dmg` on macOS, or
`humanize-<version>-windows-x64-setup.exe` on Windows, where `hmz` runs in WSL 2
(`wsl --install`). [Installation](https://docs.humanfia.ai/humanize/user/installation#desktop)
says how to open it the first time.

### Humanize CLI

Humanize CLI needs Python 3.12 or newer, [uv](https://docs.astral.sh/uv/), and a coding agent
CLI you are signed in to, such as Claude Code or Codex.

```sh
uv tool install hmz
```

Three backends need a package of their own: `[dsh]` for DeepSeek Harness, `[kimi]` for Kimi
Code, `[litellm]` for litellm, `[all]` for all three.

```sh
uv tool install 'hmz[all]'
```

`hmz update` moves it to the newest release, keeping the extras it was installed with.

Or run it without installing, from a copy uv caches -- `@latest` asks for the newest release:

```sh
uvx hmz@latest
uvx --from 'hmz[all]' hmz web…
