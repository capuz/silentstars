---
repo: "Nursedude/meshforge"
name: "meshforge"
description: "MeshForge is a Network Operations Center (NOC) that unifies fragmented mesh ecosystems into a single, coherent operating environment."
readmeQualityOk: true
url: "https://github.com/Nursedude/meshforge"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 24
forks: 0
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-03T04:23:47Z"
lastCommitAt: "2026-10-28T09:55:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 53
maintainers: ["Nursedude"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d4e7af11264b4e06967794034c97f7366c0a46ec4d5182f6b2d445bf451a264/Nursedude/meshforge"
---

# MeshForge

  and an honest answer when it can't see.</em>

---

## What is MeshForge?

**MeshForge turns a Raspberry Pi into a mesh network operations center.**

> **How it answers you:** measure first; assert only where measurement is not
> possible, and say so; fall back to physics when neither is available. A
> degraded reading is reported as degraded — never smoothed into a healthy
> number — and "I cannot see that right now" is a first-class answer. The same
> rule binds the tools that watch the tools: unobservable is not healthy.

Modern mesh networks are fragmented. Meshtastic nodes can't talk to Reticulum
nodes. AREDN operates on a different layer entirely. Each ecosystem has its own
tools, its own interfaces, its own learning curve. MeshForge is one interface
over all of them, plus the gateway that actually bridges messages between
incompatible meshes.

It runs on **one box**. No cloud dependencies, no subscriptions, no account.
A $35 Pi you can SSH into from anywhere.

**The design constraint is honesty.** Mesh monitoring fails in a specific way:
the dashboard reads healthy because the thing measuring it died. Silence and
success look identical. MeshForge is built…
