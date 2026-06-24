---
repo: "chrisuthe/Multi-SendSpin-Player-Container"
name: "Multi-SendSpin-Player-Container"
description: "Multiple Virtual Sendspin Players to Audio Outputs with UI configuration via HAOS and Docker"
url: "https://github.com/chrisuthe/Multi-SendSpin-Player-Container"
language: "C#"
languages: ["C#"]
languagePcts: [75]
stars: 56
forks: 4
openIssues: 9
closedIssues: 59
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-06-02T12:49:46Z"
lastCommitAt: "2026-06-24T00:25:20Z"
lastReleaseAt: "2026-02-26T19:44:25Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 29
maintainers: ["chrisuthe", "scyto", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4245221e26c9af3d2c7f0ada5937e4fc8766f43cb8e03b7a2f92efe7e12f61c6/chrisuthe/Multi-SendSpin-Player-Container"
---

# Multi-Room Audio Controller

</p>

## The Core Concept

**One server. Multiple audio outputs. Whole-home audio with Music Assistant.**

This project enables you to run a single centralized server (like a NAS, Raspberry Pi, or any Docker host) with multiple USB DACs or audio devices connected, creating independent audio zones throughout your home. Instead of buying expensive multi-room audio hardware, connect affordable USB DACs to a central machine and stream synchronized audio to every room.

```
┌─────────────────────────────────────────────────────────────────┐
│                     CENTRAL SERVER (Docker Host)                │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │              Multi-Room Audio Container                 │    │
│  │                                                         │    │
│  │   ┌──────────┐  ┌──────────┐  ┌──────────┐              │    │
│  │   │ Player 1 │  │ Player 2 │  │ Player 3 │  ...         │    │
│  │   │(Kitchen) │  │(Bedroom) │  │ (Patio)  │              │    │
│  │   └────┬─────┘  └────┬─────┘  └────┬─────┘              │    │
│  └────────┼─────────────┼─────────────┼────────────────────┘    │
│           │…
