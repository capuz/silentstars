---
repo: "Brandcode-Studio/brandsystem-mcp"
name: "brandsystem-mcp"
description: "Use existing brand guidelines with AI. Turn websites, PDFs, and Figma into a portable .brand runtime through MCP."
readmeQualityOk: true
url: "https://github.com/Brandcode-Studio/brandsystem-mcp"
homepage: "https://www.brandcode.studio/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["ai-agents", "brand-governance", "brand-guidelines", "brand-identity", "brand-voice", "claude", "codex", "cursor", "design-tokens", "mcp"]
stars: 9
forks: 0
openIssues: 4
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-22T08:01:37Z"
lastCommitAt: "2026-07-18T05:46:47Z"
lastReleaseAt: "2026-04-06T06:47:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 47
maintainers: ["zk-xyz", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a7ffc2a25a0551f979abbe5318a627eb3784e49a1bafa64081005e2f39d31f9/Brandcode-Studio/brandsystem-mcp"
---

# Use your brand guidelines with AI

**`@brandsystem/mcp` turns the brand material you already have into context AI agents can use.** Give it a website, PDF guide, Figma library, local files, or a Brandcode Studio brand. It produces a portable `.brand/` runtime with design tokens, voice rules, provenance, and compliance checks.

Local-first. No account required. The default Core profile exposes 12 tools covering the complete adopt → use → check loop.

## Start here

Install it for your agent, then ask: **“How do I use my brand guidelines with AI?”**

```bash
# Codex
npx @brandsystem/mcp install --client codex --write

# Claude Code, Cursor, Windsurf, or Claude Desktop
npx @brandsystem/mcp install --client claude-code --write

# Cline
npx @brandsystem/mcp install --client cline --write
```

`install` is a dry run unless you pass `--write`. Replace `claude-code` with `cline`, `cursor`, `windsurf`, or `claude-desktop` as needed. JSON-file targets preserve existing settings; Cline and Codex setup delegate to their official MCP commands so their current schemas remain authoritative. Agents can follow the compact [installation…
