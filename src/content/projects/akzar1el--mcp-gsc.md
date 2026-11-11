---
repo: "AKzar1el/mcp-gsc"
name: "mcp-gsc"
description: "Google Search Console MCP server for Claude, Cursor, ChatGPT, and any MCP client. Query clicks, impressions, average position, URL inspection, sitemaps, and eligible indexing workflows. Run locally with npm or self-host on Cloudflare Workers. Google OAuth, no API keys. By digestseo.com."
readmeQualityOk: true
url: "https://github.com/AKzar1el/mcp-gsc"
homepage: "https://digestseo.com/gsc-mcp/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["ai-tools", "claude", "cloudflare-workers", "cursor", "gsc", "mcp", "mcp-server", "model-context-protocol", "oauth", "search-analytics"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 7
createdAt: "2026-06-02T18:31:03Z"
lastCommitAt: "2026-11-11T19:49:33Z"
lastReleaseAt: "2026-09-21T13:52:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 59
maintainers: ["AKzar1el"]
openGraphImageUrl: "https://opengraph.githubassets.com/35d53556779e3e37af5ecc5a54ca207b7898e2507a261aaf16462b3f499927ff/AKzar1el/mcp-gsc"
---

# mcp-gsc

Part of the **[DigestSEO](https://digestseo.com/)** suite of open-source SEO tools.

- Product: [digestseo.com/gsc-mcp](https://digestseo.com/gsc-mcp/)
- Engineering case study: [DigestSEO MCP Suite — AI visibility, Search Console, web validation, and trend intelligence](https://tomiseregi.si/projects/digestseo-mcp-suite)
- Support: [digestseo.com/support](https://digestseo.com/support/)
- Privacy: [digestseo.com/privacy](https://digestseo.com/privacy/)

The self-hosting launcher is available as [`@digestseo/mcp-gsc`](https://www.npmjs.com/package/@digestseo/mcp-gsc). For new analytics/reporting-only connections, explicitly start in read-only mode:

```bash
GSC_ACCESS_MODE=readonly npx -y @digestseo/mcp-gsc
```

On Windows PowerShell, use `$env:GSC_ACCESS_MODE = 'readonly'` followed by `npx -y @digestseo/mcp-gsc` instead. Supply your own Google OAuth and encryption settings from [SETUP.md](https://github.com/AKzar1el/mcp-gsc/blob/HEAD/SETUP.md) before starting either command.

The npm launcher starts a loopback-only **Streamable HTTP** Worker on `127.0.0.1` (port `8080` by default); it is not a stdio MCP process. You can run the `npx` command from any directory because…
