---
repo: "soapbucket/sbproxy"
name: "sbproxy"
description: "Open source Enterprise AI Gateway for API, MCP and agent, and AI model traffic. One Apache-2.0 binary: 72 native providers behind an OpenAI-compatible API, or serve vLLM and llama.cpp on your own GPUs. Keys, budgets, guardrails, semantic cache, WAF."
readmeQualityOk: true
url: "https://github.com/soapbucket/sbproxy"
homepage: "https://sbproxy.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["ai-gateway", "anthropic", "api-gateway", "llm-proxy", "load-balancer", "openai", "rate-limiting", "reverse-proxy", "waf", "pingora"]
stars: 49
forks: 1
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 4
recentReleases: 4
createdAt: "2026-04-08T21:29:07Z"
lastCommitAt: "2026-08-08T04:32:50Z"
lastReleaseAt: "2026-06-26T05:55:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 45
maintainers: ["rickcrawford"]
openGraphImageUrl: "https://opengraph.githubassets.com/56df763b37c30142eb65045eb287e217fb6319a954b8f4f240eb67193c83326e/soapbucket/sbproxy"
discussionCount: 0
---

</p>

# SBproxy

*Last modified: 2026-08-03*

</p>

SBproxy is an open source Enterprise AI Gateway for API, MCP and agent, and AI model traffic. Every feature in this repository ships under Apache-2.0.

## Start here

Install a release on Linux or Apple Silicon macOS:

```bash
curl -fsSL https://download.sbproxy.dev | sh
export PATH="$HOME/.local/bin:$PATH"
sbproxy --version
```

The installer writes to `~/.local/bin` by default. Keep the `export` in your
shell profile if that directory was not already on `PATH`. Linux amd64, Linux
arm64, and Apple Silicon macOS arm64 have release archives. Intel Macs can use
the Linux image in Docker or build from source. See the
[runtime manual](https://github.com/soapbucket/sbproxy/blob/HEAD/docs/manual.md#1-installation) for the complete install matrix
and checksums.

Run the credential-free gateway example next. It starts a local upstream, puts an API behind the gateway, adds an MCP tool, then sends a local OpenAI-compatible completion through the same listener.

```bash
git clone https://github.com/soapbucket/sbproxy
cd sbproxy
```

[Follow the getting-started guide.](https://github.com/soapbucket/sbproxy/blob/HEAD/docs/getting-started.md)…
