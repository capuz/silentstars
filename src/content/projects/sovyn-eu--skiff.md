---
repo: "sovyn-eu/skiff"
name: "skiff"
description: "A fresh Linux VM on your Mac in half a second. Throwaway sandboxes for coding agents on Apple Silicon, with credentials brokered from the Mac."
readmeQualityOk: true
url: "https://github.com/sovyn-eu/skiff"
homepage: "https://sovyn-eu.github.io/skiff/"
language: "Go"
languages: ["Go"]
languagePcts: [85]
topics: ["ai-agents", "apple-silicon", "claude-code", "cli", "golang", "macos", "sandbox", "virtualization", "apple-container", "virtualization-framework"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 8
createdAt: "2026-10-06T13:56:42Z"
lastCommitAt: "2026-11-05T14:05:25Z"
lastReleaseAt: "2026-11-05T14:06:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 60
maintainers: ["fiedler-itlabs", "flo-sovyn-eu", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/670d41a59fcb313af0358a976b18dc7f237ef1ec76a3a76596f1b61c7af9ff38/sovyn-eu/skiff"
---

# skiff – a fresh Linux VM on your Mac in half a second

`skiff` gives you throwaway Linux VMs on Apple Silicon, one per task or coding
agent: `skiff new dev` boots an Ubuntu 24.04 VM with its own kernel, disk, IP
and root SSH in about two seconds (the boot itself takes half a second), and
`skiff rm dev` throws it away. Credentials the agent needs stay on the Mac and
reach the VM through a broker, never as copies.

```
macOS (skiff)
 ├── VM dev   (Virtualization.framework via Apple's `container`, 192.168.64.x, ssh dev.skiff)
 ├── VM ai    (…)                                     ──┐ relay: localhost:3000 → ai:3000
 └── broker   (credentials, MCP servers, audit log)   ◀─┘ ssh -R tunnel per session
```

Each VM is a `container machine`: a Virtualization.framework VM driven by
Apple's [container](https://github.com/apple/container) CLI. There is no
nested virtualization and no shared runtime VM, so JIT-heavy workloads such as
Claude Code run at Mac speed. The host side is one Go binary; the guest is a
plain Ubuntu image with systemd, sshd and skiff's key.

## Requirements

- Apple Silicon (any generation)
- macOS 26 or newer (what Apple's `container` supports)
- Homebrew (skiff…
