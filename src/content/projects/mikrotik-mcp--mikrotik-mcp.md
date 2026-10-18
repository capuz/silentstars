---
repo: "mikrotik-mcp/mikrotik-mcp"
name: "mikrotik-mcp"
description: "A Bun-native MCP server that turns one or more MikroTik routers into +950 tools your AI can drive. Firewall · routing · DHCP/DNS · wireless · QoS · and a complete VPN suite — over SSH, with transactional Safe Mode."
readmeQualityOk: true
url: "https://github.com/mikrotik-mcp/mikrotik-mcp"
homepage: "https://mikrotik-mcp.usestrict.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["ai", "mcp", "mikrotik", "mikrotik-mcp"]
stars: 21
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-19T12:54:59Z"
lastCommitAt: "2026-10-18T08:15:03Z"
lastReleaseAt: "2026-06-24T19:30:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 43
maintainers: ["ali-master"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1274373874/05af91bd-242b-4bc9-9654-3dc8a7ba574c"
discussionCount: 0
---

Firewall · routing · DHCP/DNS · wireless · QoS · a complete VPN suite · transactional Safe Mode · live attack detection · and an observability dashboard that watches every call.</p>

---

`@usex/mikrotik-mcp` turns **MikroTik RouterOS** into **924 [Model Context Protocol](https://modelcontextprotocol.io)
tools** any MCP client (Claude Desktop, Claude Code, Cursor, …) can call to read and
configure your router by talking to it. It reaches the device over **plain SSH** — no
agent, no package to install on RouterOS — runs on **[Bun](https://bun.sh)**, and
validates every call against a schema.

Point it at a router and go:

```jsonc
// claude_desktop_config.json
{
  "mcpServers": {
    "mikrotik": {
      "command": "mikrotik-mcp",
      "env": {
        "MIKROTIK_HOST": "192.168.88.1",
        "MIKROTIK_USERNAME": "admin",
        "MIKROTIK_PASSWORD": "your-password",
      },
    },
  },
}
```

Then just ask:

> _"Show me the firewall input chain, then block SSH from the WAN under safe mode."_
> _"Build an IKEv2 site-to-site tunnel to 203.0.113.5 for 192.168.20.0/24."_
> _"Why can't VLAN 50 reach the internet?"_

## Highlights

- **Policy verifier:** prove bounded IPv4 filter…
