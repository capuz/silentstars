---
repo: "vouch-protocol/vouch"
name: "vouch"
description: "The Open Standard for AI Agent Identity & Accountability"
readmeQualityOk: true
url: "https://github.com/vouch-protocol/vouch"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [39, 24]
stars: 27
forks: 15
openIssues: 22
closedIssues: 23
watchers: 1
contributors: 11
recentReleases: 1
createdAt: "2025-11-30T15:09:55Z"
lastCommitAt: "2026-07-12T06:17:14Z"
lastReleaseAt: "2026-06-07T17:56:50Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "funded", "fork_magnet"]
healthScore: 90
undervaluedScore: 48
maintainers: ["rampyg", "github-actions[bot]", "ahfoysal"]
openGraphImageUrl: "https://opengraph.githubassets.com/d8555056cd11f9afb07c56e0705db92e949986b5f49ea94761089bf7abe18837/vouch-protocol/vouch"
fundingLinks: ["CUSTOM:https://floss.fund"]
discussionCount: 2
---

# Vouch Protocol™

</p>

<sub><em>Vouch Protocol™ is a common-law trademark.</em></sub>

</p>

</p>

</p>

</p>

</p>

---

## Quick Start

```bash
# Install (Linux and macOS). On Windows, use: pip install vouch-protocol
curl -fsSL https://vouch-protocol.com/install.sh | sh

# Run vouch with no arguments and pick what you want to do
vouch
```

Prefer to do it by hand? It is three commands:

```bash
pip install vouch-protocol

# One command to configure SSH signing + Vouch branding
vouch git init

# All future commits are now signed and show ✅ Verified on GitHub
git commit -m "Secure commit"
```

Setting up an agent instead of git signing? `vouch onboard --quick` generates a working identity, allow-list, verifier, and heartbeat config in one command.

---

## What's New in v1.0

Vouch Protocol v1.0 aligns directly with the open standard:

- **Verifiable Credentials** as the credential format (replacing v0.x JWS tokens).
- **Data Integrity proofs** with the `eddsa-jcs-2022` cryptosuite (no JOSE, no Base64-wrapped payload, the credential remains human-readable JSON).
- **Multikey verification methods** in DID Documents (algorithm-agnostic, ML-DSA-44 ready).
- **Hybrid post-quantum…
