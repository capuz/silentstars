---
repo: "A3S-Lab/a3s"
name: "a3s"
description: "Agent as a Service"
url: "https://github.com/A3S-Lab/a3s"
homepage: "https://a3s-lab.github.io/a3s/"
language: "MDX"
languages: ["MDX"]
languagePcts: [92]
stars: 10
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-02-05T13:32:34Z"
lastCommitAt: "2026-06-25T06:43:25Z"
lastReleaseAt: "2026-05-14T03:27:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 60
maintainers: ["ZhiXiao-Lin"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f2bee180277c86a093279fd62b8936908752a3c7829504a27801881398f24d3/A3S-Lab/a3s"
---

# A3S

  <strong>Agentic Adaptive Augmentation System</strong>
</p>

  <em>An agent infrastructure stack: embeddable coding agents, VM-isolated execution, gateway/runtime components, and supporting libraries.</em>
</p>

---

## Overview

**A3S** is a monorepo for agent infrastructure. It contains an embeddable coding-agent runtime, a MicroVM runtime, a gateway, scheduling, memory, search, and LLM-serving components.

```text
a3s-code             <- harness-driven agent runtime (Rust + Node.js + Python SDKs)
a3s-box              <- Docker-like MicroVM runtime for Linux OCI workloads
a3s-gateway          <- application-agnostic ingress/reverse proxy layer
```

**a3s-code** is a coding-agent runtime library. It exposes ACL config, tools, hooks, security policy, memory, MCP, structured output (`generate_object`), explicit planning mode, run replay, QuickJS PTC, task delegation, automatic subagent delegation, and a pluggable workspace subsystem through runtime APIs and SDKs. v3.1 adds Claude Code-style built-in subagents (`explore`, `plan`, `general`, `verification`, `review`), native `.a3s/agents` custom-agent loading, and a global `auto_parallel` / `autoParallel` switch that disables…
