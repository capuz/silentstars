---
repo: "MadaBurns/bv-mcp"
name: "bv-mcp"
description: "Open-source DNS & email security scanner. One MCP endpoint, 57 checks, zero install. Cloudflare Workers."
readmeQualityOk: true
url: "https://github.com/MadaBurns/bv-mcp"
homepage: "https://blackveilsecurity.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["agentic", "ai", "cybersecurity", "llm", "mcp", "saas", "ai-tools", "cloudflare-workers", "dkim", "dmarc"]
stars: 8
forks: 4
openIssues: 6
closedIssues: 66
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-02-23T01:32:53Z"
lastCommitAt: "2026-08-21T04:09:57Z"
lastReleaseAt: "2026-03-31T03:23:10Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 61
maintainers: ["MadaBurns", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c9a97c40b77ac9635a13075e648ac717cfb93ea54fcec6dba8b88595dc0dbb9b/MadaBurns/bv-mcp"
---

# BLACK**V**EIL DNS

**Know where you stand.**

Source-available DNS & email security scanner for Claude, Cursor, VS Code, and MCP clients across Streamable HTTP, stdio, and legacy HTTP+SSE.

</div>

---

## Try it in 30 seconds

**Claude Desktop** (one-click install):

Download the [Blackveil DNS extension](https://github.com/MadaBurns/bv-claude-dns/releases/latest/download/bv-claude-dns.mcpb) and open it — the current 80-tool surface is available instantly. [Verify your download](https://blackveilsecurity.com/extensions/claude-dns#install).

**Claude Code** (one command):

```bash
claude mcp add --transport http blackveil-dns https://dns-mcp.blackveilsecurity.com/mcp
```

Then ask: `scan anthropic.com`

**Smithery** (one command):

```bash
smithery mcp add MadaBurns/bv-mcp
```

**Verify the endpoint is live:**

```bash
curl https://dns-mcp.blackveilsecurity.com/health
```

No install. No API key. One URL for hosted HTTP:

```
Endpoint   https://dns-mcp.blackveilsecurity.com/mcp
Transport  Streamable HTTP · JSON-RPC 2.0
Auth       None required
```

Transport support:

- `Streamable HTTP`: `POST /mcp`, `GET /mcp`, `DELETE /mcp`
- `Native stdio`: `blackveil-dns-mcp` CLI from the…
