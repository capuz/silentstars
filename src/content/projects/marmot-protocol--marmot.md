---
repo: "marmot-protocol/marmot"
name: "marmot"
description: "The Marmot Protocol is a messaging protocol that specifies how to do efficient end-to-end encrypted group messaging using Nostr's decentralized identity & relay network combined with the MLS Protocol."
readmeQualityOk: true
url: "https://github.com/marmot-protocol/marmot"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 145
forks: 16
openIssues: 25
closedIssues: 344
watchers: 2
contributors: 13
recentReleases: 0
createdAt: "2025-09-19T14:40:39Z"
lastCommitAt: "2026-10-30T10:23:41Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 39
maintainers: ["erskingardner", "agent-p1p", "nvk"]
openGraphImageUrl: "https://opengraph.githubassets.com/c9abbb72be25b10bd4b3085fec935e0061c2a4dc65c10a7dafbde36d27ca9445/marmot-protocol/marmot"
discussionCount: 1
---

# Marmot Protocol

Status: adopted.

This repository contains the Marmot protocol text, the version of the protocol ready for adoption. The MIP-era
documents describe a deprecated version of the protocol.

The spec is organized by protocol surface. Foundation documents define stable Marmot invariants. Protocol-core
documents define how Marmot groups move through MLS flows. Transport documents define how Marmot bytes move over a
network. App component documents define versioned group-state payloads. Feature documents describe optional or
user-visible flows and point to the surfaces they touch.

## What is Marmot?

Marmot is a protocol for end-to-end encrypted group messaging. It uses Nostr public keys for identity, Nostr
event-shaped app payloads inside MLS, and MLS as the continuous group key agreement layer. Those three choices are the
core protocol invariants; [principles.md](https://github.com/marmot-protocol/marmot/blob/HEAD/principles.md) lists the full set, including redundant delivery and metadata
minimization.

Transport beyond that stays agnostic. Marmot clients currently move messages over Nostr relays, but the identity,
content, and key agreement layers do not depend on…
