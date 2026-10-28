---
repo: "Rul1an/assay"
name: "assay"
description: "Open evidence profile for MCP tool actions. Enforce configured tool-call policies and record decisions and observations in offline-verifiable bundles. Optional Linux kernel controls. No hosted backend required."
readmeQualityOk: true
url: "https://github.com/Rul1an/assay"
homepage: "https://getassay.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [67]
topics: ["rust", "ai-agents", "mcp", "policy-as-code", "mcp-server", "policy-enforcement", "agent-security", "evidence-bundles", "github-actions", "provenance"]
stars: 13
forks: 3
openIssues: 40
closedIssues: 522
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2025-12-20T22:56:24Z"
lastCommitAt: "2026-10-28T09:57:47Z"
lastReleaseAt: "2025-12-27T13:31:15Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "community_hub"]
healthScore: 98
undervaluedScore: 66
maintainers: ["codex", "Rul1an"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b0c5424dd436dc4c6687e8283b78250dd2a6366c824701b8a1ea32659e5fdd9/Rul1an/assay"
discussionCount: 23
---

---

Agents got real tool access through MCP — and tool poisoning, rug pulls, and confused-deputy OAuth came with it. Assay sits at the tool-call boundary and does three things, in order.

**One golden path:** the [release-pinned agent journey](https://github.com/Rul1an/assay/blob/HEAD/docs/guides/agent-golden-path.md) records the nine driven CLI/MCP steps and their exit/stdout contracts. Its protected-action fixture lives in [examples/privileged-action-gate/](https://github.com/Rul1an/assay/blob/HEAD/examples/privileged-action-gate/).

### Enforce, prove, stay honest

- **Enforce.** In enforcement mode, the gate decides `tools/call` requests routed through it before forwarding, with the precise reason for each allow or deny. Separate controls on supported Linux hosts include cgroup eBPF IPv4/TCP connect filtering (whose hook error path allows connections) and Landlock TCP-connect port allowlisting. `assay sandbox --enforce` refuses an unavailable backend or conflicting filesystem policy unless `--allow-audit-fallback` is explicit. `--enforce-net` requires `--enforce`; active Landlock network enforcement rejects policies it cannot express as TCP-port allowlists, even with audit…
