---
repo: "ali-master/mikrotik-mcp"
name: "mikrotik-mcp"
description: "A Bun-native MCP server that turns one or more MikroTik routers into 706 tools your AI can drive. Firewall · routing · DHCP/DNS · wireless · QoS · and a complete VPN suite — over SSH, with transactional Safe Mode."
readmeQualityOk: true
url: "https://github.com/ali-master/mikrotik-mcp"
homepage: "https://mikrotik-mcp.usestrict.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["ai", "mcp", "mikrotik", "mikrotik-mcp"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-19T12:54:59Z"
lastCommitAt: "2026-07-04T23:15:42Z"
lastReleaseAt: "2026-06-24T19:30:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 60
maintainers: ["ali-master"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1274373874/05af91bd-242b-4bc9-9654-3dc8a7ba574c"
---

<p><strong>A Bun-native MCP server that turns one or more MikroTik routers into 706 tools your AI can drive.</strong><br/>
  Firewall · routing · DHCP/DNS · wireless · QoS · and a complete VPN suite — over SSH, with transactional Safe Mode.</p>

  <p>
  </p>
</div>

---

`@usex/mikrotik-mcp` exposes **MikroTik RouterOS** as **706 [Model Context Protocol](https://modelcontextprotocol.io)
tools across 111 modules**, so an AI client (Claude Desktop, Claude Code, any MCP
client) can read and configure your router in plain language. It speaks to the
device over **SSH** — no agent, no API package to install on RouterOS — runs on
**[Bun](https://bun.sh)**, and validates every tool call against a Zod schema.

Every tool is **risk-annotated** (read / write / destructive) so clients can gate
what runs, and risky changes can be wrapped in **Safe Mode** — RouterOS holds them
in memory and auto-reverts if your session drops, so you can't lock yourself out.

```jsonc
// claude_desktop_config.json
{
  "mcpServers": {
    "mikrotik": {
      "command": "mikrotik-mcp",
      "env": {
        "MIKROTIK_HOST": "192.168.88.1",
        "MIKROTIK_USERNAME": "admin",
        "MIKROTIK_PASSWORD":…
