---
repo: "rderaison/bromure"
name: "bromure"
description: "Proper sandboxing for agentic coding and web browsing"
readmeQualityOk: true
url: "https://github.com/rderaison/bromure"
homepage: "https://bromure.io"
language: "Swift"
languages: ["Swift"]
languagePcts: [78]
topics: ["agentic", "browser", "developer-tools", "development", "infosec", "sandbox", "security", "security-tools", "virtual-machine"]
stars: 301
forks: 19
openIssues: 9
closedIssues: 34
watchers: 4
contributors: 4
recentReleases: 0
createdAt: "2026-03-08T14:47:29Z"
lastCommitAt: "2026-10-21T21:14:31Z"
lastReleaseAt: "2026-04-03T01:25:33Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 29
maintainers: ["rderaison"]
openGraphImageUrl: "https://opengraph.githubassets.com/cfa401282ed3a1b9718a7ac8f0dece5292063a0f2a6226ec2c423af1367fc1ae/rderaison/bromure"
---

&nbsp;&nbsp;&nbsp;&nbsp;

  Secure, ephemeral computing in disposable Linux VMs on macOS.

  → Full details, screenshots, and downloads at <a href="https://bromure.io">bromure.io</a>

---

This repo ships two sibling apps, both built on Apple's [Virtualization.framework](https://developer.apple.com/documentation/virtualization):

- **Bromure** — every browser session runs in a throwaway Linux VM. Close the window, the VM is destroyed.
- **Bromure Agentic Coding** — a sandboxed environment for AI coding agents (Claude Code, Codex, Grok, Kimi Code, Oh My Pi). A host-side MITM proxy swaps fake credentials for real ones on the wire so secrets never enter the VM, then adds supply-chain scanning, prompt-injection detection, PII protection, a multi-model panel, local inference, and remote access — all enforced at that one boundary.

Isolation, keeping secrets out of the agent, scoping their use, scanning the supply chain, catching prompt injection: most tools pick one. Bromure does all five at a single boundary, then adds what a secret-broker never could: a model panel, local inference, and a way in from anywhere. Here is the same threat model run across the tools people reach for, and…
