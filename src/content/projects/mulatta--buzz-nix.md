---
repo: "mulatta/buzz.nix"
name: "buzz.nix"
description: "Reproducible Nix packages for block/buzz."
readmeQualityOk: true
url: "https://github.com/mulatta/buzz.nix"
language: "Nix"
languages: ["Nix", "Python"]
languagePcts: [63, 37]
topics: ["build-with-buildbot"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-28T18:19:00Z"
lastCommitAt: "2026-08-26T04:17:06Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 44
maintainers: ["mulatta", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/73ae013eda496c29d37f657014f80c302e82186a466fe7c8078b7deb3ef19c82/mulatta/buzz.nix"
---

# buzz.nix

Reproducible Nix packages for [block/buzz](https://github.com/block/buzz).

This flake pins Buzz to the release tag recorded in `packages/source/pin.json` and builds the Rust, web, relay, and desktop artifacts without import-from-derivation.

## Packages

| Package | Description |
| ----------------------- | -------------------------------------------------------------------- |
| `buzz-cli` | Buzz command-line client (`buzz`) |
| `buzz-acp` | ACP harness for Buzz agent integrations |
| `buzz-agent` | Minimal ACP-compliant Buzz agent |
| `buzz-backend-kubernetes` | Kubernetes backend provider for remote agents |
| `buzz-dev-mcp` | MCP server for shell and file-edit tools |
| `git-credential-nostr` | Git credential helper for NIP-98 authentication |
| `buzz-agent-tools` | Convenience bundle for CLI and agent tools |
| `buzz-web` | Web client bundle |
| `buzz-admin-web` | Relay administration UI bundle |
| `buzz-server-binaries` | Server binary bundle (`buzz-relay`, `buzz-admin`, `buzz-pair-relay`) |
| `buzz-relay` | Relay runtime package with bundled web UIs |
| `buzz-desktop-frontend` | Frontend bundle embedded in Buzz Desktop |
| `buzz-desktop-sidecars` | Sidecar…
