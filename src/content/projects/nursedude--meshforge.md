---
repo: "Nursedude/meshforge"
name: "meshforge"
description: "MeshForge is a Network Operations Center (NOC) that unifies fragmented mesh ecosystems into a single, coherent operating environment."
readmeQualityOk: true
url: "https://github.com/Nursedude/meshforge"
language: "Python"
languages: ["Python"]
languagePcts: [91]
stars: 20
forks: 0
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-03T04:23:47Z"
lastCommitAt: "2026-09-20T08:43:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 52
maintainers: ["Nursedude"]
openGraphImageUrl: "https://opengraph.githubassets.com/b227da890fa5c8dced4f8cca9e7edafad52f02c4f6b9fd5a3a9ded9b6b6a2873/Nursedude/meshforge"
---

# MeshForge

</p>

  <strong>Mesh Network Operations Center</strong><br>
  <em>Meshtastic + Reticulum + AREDN — one interface over incompatible meshes,
  and an honest answer when it can't see.</em>
</p>

</p>

</p>

---

## What is MeshForge?

**MeshForge turns a Raspberry Pi into a mesh network operations center.**

Modern mesh networks are fragmented. Meshtastic nodes can't talk to Reticulum
nodes. AREDN operates on a different layer entirely. Each ecosystem has its own
tools, its own interfaces, its own learning curve. MeshForge is one interface
over all of them, plus the gateway that actually bridges messages between
incompatible meshes.

It runs on **one box**. No cloud dependencies, no subscriptions, no account.
A $35 Pi you can SSH into from anywhere.

**The design constraint is honesty.** Mesh monitoring fails in a specific way:
the dashboard reads healthy because the thing measuring it died. Silence and
success look identical. MeshForge is built against that failure — every probe
distinguishes *working*, *broken*, and *I can't tell*; an unobservable state is
reported as unobservable, never as healthy; and the status gate refuses to
report green without quoting the check…
