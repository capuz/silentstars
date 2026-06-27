---
repo: "Brandcode-Studio/brandsystem-mcp"
name: "brandsystem-mcp"
description: "MCP server for progressive brand governance — extract, compile, and audit brand identity systems"
url: "https://github.com/Brandcode-Studio/brandsystem-mcp"
homepage: "https://brandsystem-mcp.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 6
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-03-22T08:01:37Z"
lastCommitAt: "2026-06-27T00:36:00Z"
lastReleaseAt: "2026-04-06T06:47:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 77
undervaluedScore: 53
maintainers: ["zk-xyz"]
openGraphImageUrl: "https://opengraph.githubassets.com/53e3a18c7348abdea4131f8adb8b3d32e767dca329a9a9192de2c820f86eaa8c/Brandcode-Studio/brandsystem-mcp"
---

# @brandsystem/mcp — Build

**The authoring tool for the portable `.brand` runtime.** Extract identity from websites, Figma, and PDFs. Compile governance, tokens, and voice rules into a single `.brand/` directory. Deploy that runtime to Claude Design, Claude Code, Cursor, ChatGPT — every surface that can read a governed brand. One artifact, every surface on brand.

## What It Solves

AI tools default to category-average output because they have no brand context. Brand guidelines live in PDFs, Figma files, and people's heads — none of which AI tools can read at the moment of creation. The dominant failure mode isn't "broken output"; it's "correct but generic" — output that passes mechanical checks but reads like a competent generalist could have made it.

This MCP server is the authoring half of the **"Two MCPs, One Brand"** model. It extracts brand identity from live sources, compiles it into a `.brand/` directory with structured governance (anti-patterns, proof-point status, voice rules, application rules) plus DTCG tokens, brand-runtime.json, and interaction-policy.json. That directory is the **portable brand runtime** — the artifact that travels with your brand from surface to…
