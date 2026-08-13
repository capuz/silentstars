---
repo: "livepeer/storyboard"
name: "storyboard"
description: "AI-powered creative storyboard — generate, edit, animate, and stream media with Livepeer"
readmeQualityOk: true
url: "https://github.com/livepeer/storyboard"
homepage: "https://storyboard-rust.vercel.app"
language: "TypeScript"
languages: ["TypeScript", "HTML"]
languagePcts: [62, 36]
stars: 10
forks: 4
openIssues: 3
closedIssues: 1
watchers: 0
contributors: 18
recentReleases: 0
createdAt: "2026-04-05T18:34:22Z"
lastCommitAt: "2026-08-13T05:17:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 48
maintainers: ["seanhanca"]
openGraphImageUrl: "https://opengraph.githubassets.com/8d9cb4aaaff0181581bb9776b373abd8fc673fd110501cf397daa1955f71caa2/livepeer/storyboard"
---

# Livepeer Agent

An agent-powered creative platform built on [Livepeer](https://livepeer.org). Chat with AI to generate, edit, animate, and live-stream media — all on an infinite canvas.

**Live:** https://agent.livepeer.org

## Use it from your AI agent (MCP)

**Try it in ~30 seconds, no key required.** The keyless demo gives you 6 images + 1 video per day/IP —
enough to see it work before you sign up. Open **[agent.livepeer.org/get-started.html](https://agent.livepeer.org/get-started.html)**
and follow the "Keyless demo" tab. When you're ready for unlimited renders, grab a key at
**[app.daydream.live](https://app.daydream.live)**.

### 3-step connect

1. **Grab a key** at [app.daydream.live](https://app.daydream.live) (or skip this for the keyless demo above).
2. **Paste the MCP URL** into your client, with the key as a header:
   `https://agent.livepeer.org/api/mcp`
   > **Header footgun:** Claude Desktop's `mcp-remote` needs `Authorization:Bearer sk_…` (**no space**
   > after the colon). Claude Code / Cursor / Codex need `Authorization: Bearer sk_…` (**with a space**).
   > Getting this wrong is the #1 cause of a silent 401.
   ```bash
   # Claude Code
   claude mcp add…
