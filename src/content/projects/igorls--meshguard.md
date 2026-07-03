---
repo: "igorls/meshguard"
name: "meshguard"
description: "Decentralized, serverless, WireGuard®-compatible mesh VPN daemon."
url: "https://github.com/igorls/meshguard"
homepage: "https://igorls.github.io/meshguard/"
language: "Zig"
languages: ["Zig"]
languagePcts: [90]
topics: ["network", "vpn", "wireguard", "zig", "decentralized", "serverless"]
stars: 13
forks: 1
openIssues: 1
closedIssues: 59
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-02-23T09:45:47Z"
lastCommitAt: "2026-07-03T12:21:46Z"
lastReleaseAt: "2026-04-28T07:14:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 54
maintainers: ["igorls", "domiscd", "google-labs-jules[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/74958f0137f34364de2a978a5053deecf5d5d7ac303758ca6b7b9f5421607cd7/igorls/meshguard"
---

# meshguard

**Decentralized, serverless, WireGuard®-compatible mesh VPN daemon.**

Zero central authority. Trust-agnostic. Dual-stack IPv4/IPv6. Single static binary.

## The Problem

Building a secure mesh network between N nodes (blockchain validators, edge servers, IoT clusters) means choosing between:

- **Central control plane** — convenient, but requires trusting a third-party coordinator. Unacceptable in trustless environments.
- **Manual WireGuard** — fully decentralized, but managing N×(N-1)/2 peer entries by hand breaks down at ~20 nodes.
- **Open mesh overlays** — auto-discovery works, but no permissioned membership. Anyone can join.

**meshguard** fills the gap: auto-discovers peers, negotiates WireGuard tunnels, traverses NATs, and enforces membership — all serverless.

## How It Works

```
┌─────────────────────────────────────────────────────────────────┐
│                          meshguard                              │
│                                                                 │
│  ┌──────────┐  ┌───────────────┐  ┌──────────────────────────┐  │
│  │ Identity │  │   Discovery   │  │    WireGuard Engine      │  │
│  │          │  │               │  │…
