---
repo: "cocoonstack/sandbox"
name: "sandbox"
description: "Fast cold-boot MicroVM sandboxes for AI agents on cocoon"
readmeQualityOk: true
url: "https://github.com/cocoonstack/sandbox"
homepage: "https://cocoonstack.github.io/sandbox/"
language: "Go"
languages: ["Go"]
languagePcts: [75]
topics: ["ai", "ai-agents", "fast", "mcp-server", "microvm", "openai", "sandbox", "virtualization"]
stars: 46
forks: 2
openIssues: 8
closedIssues: 17
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-07-02T12:15:26Z"
lastCommitAt: "2026-08-17T04:20:45Z"
lastReleaseAt: "2026-08-14T06:36:58Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 43
maintainers: ["CMGS", "doge-rgb"]
openGraphImageUrl: "https://opengraph.githubassets.com/d713480e73abacb525ea01ae9cb5f8350e48a0c82cc237036b7a69234060b8c3/cocoonstack/sandbox"
---

# sandbox

MicroVM sandboxes for AI agents, built on
[cocoon](https://github.com/cocoonstack/cocoon): a fast-boot guest stack, an
in-guest product daemon, a per-node control plane with warm pools, and a Go
SDK. Warm claims are sub-millisecond; a pool miss clones from a golden
snapshot in tens of milliseconds; cold boot is ~200ms on bare metal.

```
SDK (Go)                sandboxd (per node)              guest microVM
sandbox.New() ── HTTP ─► claim: warm pool / golden clone  Cloud Hypervisor
sb.Exec/Files/… ─ HTTP upgrade ─► byte relay ── vsock ──► silkd :2048
                        memberlist mesh: warm-count gossip,
                        MOVED-style redirect to the owning node
```

Cloud Hypervisor serves both network lanes. `net=none` has no NIC and uses
vsock-only I/O (hardened default); `net=egress` attaches a bridge/CNI NIC.

**Documentation**: [cocoonstack.github.io/sandbox](https://cocoonstack.github.io/sandbox/)
(deployment, clusters, HTTP API, Go + Python SDK references, the MCP server,
the OpenAI Agents SDK and LangChain adapters, silkd protocol,
performance) — source in
[`docs/`](https://github.com/cocoonstack/sandbox/blob/HEAD/docs/).

## Layout

- `silkd/` —…
