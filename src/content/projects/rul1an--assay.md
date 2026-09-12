---
repo: "Rul1an/assay"
name: "assay"
description: "Open evidence profile for MCP tool actions. Enforce configured tool-call policies and record decisions and observations in offline-verifiable bundles. Optional Linux kernel controls. No hosted backend required."
readmeQualityOk: true
url: "https://github.com/Rul1an/assay"
homepage: "https://getassay.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [69]
topics: ["rust", "ai-agents", "mcp", "policy-as-code", "mcp-server", "policy-enforcement", "agent-security", "evidence-bundles", "github-actions", "provenance"]
stars: 10
forks: 1
openIssues: 56
closedIssues: 395
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2025-12-20T22:56:24Z"
lastCommitAt: "2026-09-12T08:05:01Z"
lastReleaseAt: "2025-12-27T13:31:15Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "community_hub"]
healthScore: 97
undervaluedScore: 62
maintainers: ["Rul1an", "codex", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6407cccfe202e46aec2dd28bc95654c0ef03f7e898584de45806eb079e7f6f21/Rul1an/assay"
discussionCount: 23
---

<h1 align="center">Assay</h1>
    <strong>The open, recomputable evidence profile for privileged MCP tool actions.</strong><br />
  </p>
  </p>
  </p>
</p>

---

Agents got real tool access through MCP — and tool poisoning, rug pulls, and confused-deputy OAuth came with it. Most tools scan a server or filter a prompt. Assay sits at the tool-call boundary and does three things, in order.

**One golden path:** the [release-pinned agent journey](https://github.com/Rul1an/assay/blob/HEAD/docs/guides/agent-golden-path.md) records the nine driven CLI/MCP steps and their exit/stdout contracts. Its protected-action fixture lives in [examples/privileged-action-gate/](https://github.com/Rul1an/assay/blob/HEAD/examples/privileged-action-gate/).

### Enforce, prove, stay honest

- **Enforce.** A deterministic, fail-closed gate decides every `tools/call` before it runs, with the precise reason for each allow or deny. On Linux it adds real kernel enforcement — an eBPF/LSM IPv4/TCP connect-egress block and a Landlock TCP-connect port allowlist, both opt-in and fail-closed. A policy it cannot express exactly is refused, never half-applied.
- **Prove.** Each decision and observed effect becomes an…
