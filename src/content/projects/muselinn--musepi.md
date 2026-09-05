---
repo: "MuseLinn/MusePi"
name: "MusePi"
description: "MusePi — desktop-first AI coding assistant: Electron GUI + TUI/CLI + daemon + desktop companion. Native video understanding, MCP, advisor, memory, multi-domain skills; own update channel."
readmeQualityOk: true
url: "https://github.com/MuseLinn/MusePi"
homepage: "https://muselinn.github.io/MusePi/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
topics: ["agent", "ai-assistant", "coding-agent", "llm", "mcp", "moonshot", "terminal", "tui", "video-understanding", "pi-fork"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 67
recentReleases: 10
createdAt: "2026-07-20T20:16:22Z"
lastCommitAt: "2026-09-05T07:49:02Z"
lastReleaseAt: "2026-08-30T01:12:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 66
maintainers: ["MuseLinn"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c983f2bc4caec09e026986962d667ffa2c388a05d704bd8fa6f8b9c2716bd05/MuseLinn/MusePi"
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

Current app version **`0.4.16`** (independent of upstream versioning).

## Install (one command)

```sh
curl -fsSL https://raw.githubusercontent.com/MuseLinn/MusePi/main/scripts/install.sh | sh
```

Clones to `~/.musepi/repo` and runs `bun run setup` (workspace install + natives + link), then run:

```sh
cd ~/.musepi/repo && bun run musepi
```

macOS / Linux / WSL use the curl line above. Windows — PowerShell:

```powershell
irm…
