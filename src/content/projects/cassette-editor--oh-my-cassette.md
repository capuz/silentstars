---
repo: "Cassette-Editor/oh-my-cassette"
name: "oh-my-cassette"
description: "你的随身 AI 剪辑搭档 | Pocket AI co-editor for video montage — AI video editing plugin & MCP server for Claude Code, Codex, Hermes & OpenCode"
readmeQualityOk: true
url: "https://github.com/Cassette-Editor/oh-my-cassette"
homepage: "https://cassette-editor.github.io/oh-my-cassette/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent-skills", "ai-agent", "ai-video-editing", "claude-code", "claude-code-plugin", "codex", "hermes-agent", "mcp", "mcp-server", "opencode"]
stars: 220
forks: 14
openIssues: 0
closedIssues: 4
watchers: 11
contributors: 4
recentReleases: 0
createdAt: "2026-06-10T14:17:55Z"
lastCommitAt: "2026-11-14T22:01:05Z"
lastReleaseAt: "2026-07-25T06:54:31Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 30
maintainers: ["Crimson725", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1265161922/9e491913-94a5-4420-bca1-3167c2df2ca7"
discussionCount: 4
---

Edit video by talking to the <a href="https://trycassette.online">Cassette</a> agent from Claude Code, Codex, OpenCode or Hermes.<br />

---

**One real Claude Code session, with every prompt shown as it was typed.** Five 4K travel films (10½ minutes of
footage) and a song go in, a two-sentence brief and a one-line revision go to the Cassette agent word for word, and a
30-second 1080p MP4 lands in `cassette-exports/`. Waits are fast-forwarded: in real time the import took 4½ minutes, the first cut 9½, the revision
3½ and the export 1.

> *Cut a 30-second teaser for Turkey from these five films, on the beat of Pamgaea.mp3. Open on a hot-air balloon
> lighting up at dawn in Cappadocia, travel from the ancient ruins to the sea, name each place when it first appears,
> and end on the misty lake with the title TURKEY.*
>
> *The ruins part drags. Keep only the two best Ephesus shots, and put the camel right after the balloons.*

## Install in 30 seconds

You need [uv](https://docs.astral.sh/uv/) (it fetches Python and the package on first start) and, to import video
into a cloud project, [ffmpeg](https://ffmpeg.org/download.html).

**1. Add Oh My Cassette to your agent.**

```bash
#…
