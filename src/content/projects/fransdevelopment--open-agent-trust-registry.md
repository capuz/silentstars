---
repo: "FransDevelopment/open-agent-trust-registry"
name: "open-agent-trust-registry"
description: "The open root-of-trust for agent identity on the internet.  A public, federated registry of trusted attestation issuers — the agent runtimes authorized to vouch for agents acting on behalf of humans. Services verify agent attestations against this registry to determine if the issuing runtime is legitimate. "
url: "https://github.com/FransDevelopment/open-agent-trust-registry"
language: "TypeScript"
languages: ["TypeScript", "Swift"]
languagePcts: [45, 30]
topics: ["agent-identity", "agent-trust", "agent-verification", "ai-agents", "cryptography", "ed25519", "jwt", "open-standard", "trust-registry", "did-resolution"]
stars: 10
forks: 14
openIssues: 6
closedIssues: 3
watchers: 1
contributors: 12
recentReleases: 0
createdAt: "2026-03-16T03:43:39Z"
lastCommitAt: "2026-06-28T01:33:47Z"
lastReleaseAt: "2026-03-25T10:34:51Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 85
undervaluedScore: 54
maintainers: ["FransDevelopment", "github-actions[bot]", "arian-gogani"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1182882508/66732613-2b0a-4da2-9a58-d0e26d2f13f6"
---

# Open Agent Trust Registry

> The open root-of-trust for agent identity on the internet.

A public, federated registry of trusted attestation issuers — the agent runtimes authorized to vouch for agents acting on behalf of humans. Services verify agent attestations against this registry to determine if the issuing runtime is legitimate.

This acts as the Certificate Authority trust store for the agent internet.

> **Read More:** To learn more about the broader vision, architecture, and principles of the Agent Internet, visit [arcede.com/papers](https://arcede.com/papers).

## The Problem

How can a website know if an AI agent is actually allowed to do something on your behalf? 

Right now, if you log into a website like your bank, you use a password or FaceID. The bank knows it’s *you*. But if you tell an AI agent, "Go pay my internet bill," the agent needs a way to prove to the bank, "I am an authorized agent acting for my user."

To do this, the agent presents a digital "ID badge" (called an *Attestation*). But anyone can fake a digital ID badge. The bank needs a way to verify that the ID badge was issued by a trustworthy organization (like a reputable developer, platform, or…
