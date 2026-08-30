---
repo: "MuseLinn/MusePi"
name: "MusePi"
description: "MusePi — desktop-first AI coding assistant: Electron GUI + TUI/CLI + daemon + desktop companion. Native video understanding, MCP, advisor, memory, multi-domain skills; own update channel."
readmeQualityOk: true
url: "https://github.com/MuseLinn/MusePi"
homepage: "https://muselinn.github.io/MusePi/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["agent", "ai-assistant", "coding-agent", "llm", "mcp", "moonshot", "terminal", "tui", "video-understanding", "pi-fork"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 66
recentReleases: 10
createdAt: "2026-07-20T20:16:22Z"
lastCommitAt: "2026-08-30T00:43:14Z"
lastReleaseAt: "2026-08-29T23:02:32Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 58
maintainers: ["MuseLinn"]
openGraphImageUrl: "https://opengraph.githubassets.com/72606bbf483cd4d8124d56b9d0161a20f1cb7631218c78adc6675bf3324f3ada/MuseLinn/MusePi"
---

</p>

  <strong>MusePi</strong> — a desktop-first AI coding agent
</p>

  <code>musepi</code> CLI · Electron desktop GUI · always-on desktop pet · daemon service
</p>

  <em>English | <a href="README.zh-CN.md">中文</a></em>
</p>

---

MusePi is a **standalone coding-agent platform** with an **Electron desktop GUI, a daemon service, and an always-on desktop pet**. It shares an agent-engine lineage and keeps its own TUI command surface (`/` commands, `!`/`!!` shell, `@` file mentions, `#` references) wired into the GUI. **MusePi is its own upstream** — oh-my-pi / Pi / DSH / opencode etc. are reference sources absorbed on demand (see [UPSTREAM.md](https://github.com/MuseLinn/MusePi/blob/HEAD/UPSTREAM.md)).

Current app version **`0.4.6`** (independent of upstream versioning).

## Install (one command)

```sh
curl -fsSL https://raw.githubusercontent.com/MuseLinn/MusePi/main/scripts/install.sh | sh
```

Clones to `~/.musepi/repo` and runs `bun run setup` (workspace install + natives + link), then run:

```sh
cd ~/.musepi/repo && bun run musepi
```

macOS / Linux / WSL. On Windows — or to build manually — install from source:

```sh
git clone https://github.com/MuseLinn/MusePi.git && cd…
