---
repo: "js713-lab/sonic-match-mcp"
name: "sonic-match-mcp"
description: "MCP server that watches video footage and returns license-safe BGM matches, hook windows, and ffmpeg ducking specs for agents."
readmeQualityOk: true
url: "https://github.com/js713-lab/sonic-match-mcp"
homepage: "https://www.codecrafter.dev/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-agents", "bgm", "ffmpeg", "mcp", "model-context-protocol", "music-matching", "python", "video"]
stars: 25
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-09-10T05:26:25Z"
lastCommitAt: "2026-09-16T08:47:51Z"
lastReleaseAt: "2026-09-10T16:39:22Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 35
maintainers: ["js713-lab", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c1594da29453d554f077511cc7597d439f8d623faa13c8898e4ffa96e63ef7d/js713-lab/sonic-match-mcp"
discussionCount: 2
---

# Sonicmatch

**Video-native MCP server for license-safe BGM.** Watches the footage — not the script — and returns a shortlist, a 12–20s hook, and an ffmpeg ducking spec.

</p>

Package / CLI: [`sonicmatch-mcp`](https://github.com/js713-lab/sonic-match-mcp). A [Model Context Protocol](https://modelcontextprotocol.io) server for Claude Desktop, Cursor, and other MCP clients. Drop an Instagram Reel, YouTube Short, or TikTok-style clip. Get royalty-free / Creative Commons matches with the license printed on every row.

Video-to-BGM already exists. The wedge is not “I also match music”:

- it watches the **footage**, not the script
- it returns a **hook window** + ffmpeg ducking spec
- it is **agent-native**
- it **prints the license** instead of lying

Catalog quality will kill or save this. More tools will not.

```
Video or URL in
  → scene / mood / pace / speech analysis
  → license-safe BGM shortlist
  + beat/cut hints
  + optional mix preview
```

Do **not** treat this as “script in → YouTube Music search out.” That already exists (`mcp-bgm-recommender`). Sonicmatch watches the **video**.

| You own | You do not own |
|---|---|
| Local file / public URL ingest | Platform music…
