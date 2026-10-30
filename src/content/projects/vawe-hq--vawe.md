---
repo: "vawe-hq/vawe"
name: "vawe"
description: "Write one HTML page, get an mp4. Open-source HTML to video framework for coding agents like Claude Code and Codex. A free Remotion alternative."
readmeQualityOk: true
url: "https://github.com/vawe-hq/vawe"
homepage: "https://vawe.dev"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [72]
topics: ["animation", "deterministic", "ffmpeg", "headless-chrome", "javascript", "motion-graphics", "rendering", "video", "video-generation", "agent-skills"]
stars: 13
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-06-09T18:11:24Z"
lastCommitAt: "2026-10-30T10:19:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 37
maintainers: ["Vandit1604"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b7a209365a6f362c57e39e8b299409930ccd592f978db38a3f1ca3bcd0bce3d/vawe-hq/vawe"
discussionCount: 0
---

# vawe: HTML to video for coding agents

vawe is an open-source HTML to video framework for agent-native motion graphics: one HTML page in, one
film out. It is programmatic video and motion graphics as code, a free alternative to Remotion,
HyperFrames and Motion Canvas, built so that coding agents (Claude Code, Codex, Cursor) write the films.
The page is plain HTML, CSS, Web Animations, SVG, canvas or three.js. The renderer seeks it frame by
frame in Chrome, mixes its `<audio>` tags offline and encodes one deterministic mp4.

Site and docs: [vawe.dev](https://vawe.dev). For an AI agent: [vawe.dev/ai-agents](https://vawe.dev/ai-agents)
or [llms.txt](https://vawe.dev/llms.txt).

## Quickstart

```bash
git clone https://github.com/vawe-hq/vawe.git && cd vawe
npm install                                  # Node 22+; ffmpeg must be on PATH
npx puppeteer browsers install chrome        # bin/vawe doctor prints this and every other missing tool
bin/vawe new hello --request "a 10 s sting for a coffee brand"
# then run the next: line that each command prints (AGENTS.md is the map)
```

## Films made with vawe

Each film is one `page.html`. Click a still to play the mp4.

| | |
|---|---|
|…
