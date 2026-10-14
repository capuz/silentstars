---
repo: "naamahdaemon/minagraph"
name: "minagraph"
description: "Mina Graph Explorer"
readmeQualityOk: true
url: "https://github.com/naamahdaemon/minagraph"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-04-12T21:43:34Z"
lastCommitAt: "2026-10-14T08:57:38Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 71
maintainers: ["naamahdaemon", "lefeuvth"]
openGraphImageUrl: "https://opengraph.githubassets.com/0a458aa1c305577cd365ba8c3678588725506f46964d2e40dea9379f0993052d/naamahdaemon/minagraph"
---

# Mina Graph Explorer

**Mina Graph Explorer** is a fully client-side web tool to visualize and explore graphs built from [Mina Protocol](https://minaprotocol.com) blockchain transactions. It uses data from the [Minataur API](https://minataur.net) and renders it dynamically using [Sigma.js](https://github.com/jacomyal/sigma.js) and [Graphology](https://graphology.github.io/).

---

## 🌐 Live Demo

You can try the tool here:  
👉 [mina.naamahdaemon.eu/mina-graph](https://mina.naamahdaemon.eu/mina-graph)

---

## 🔍 What Does It Do?

Mina Graph Explorer allows you to:

- Start from a public key and recursively fetch its transaction graph
- Explore nodes (accounts) and edges (transactions) visually
- Filter by transaction type (payment, delegation, zkApp)
- Search nodes by name or public key fragment
- Customize layout parameters for graph positioning
- Save and load graphs as JSON
- Export visualizations as PNG images

### Layout execution

Layouts run in a Web Worker managed by a single controller. Starting a new layout
cancels the previous run, stale worker messages are ignored, and graph mutations
cannot re-apply positions to deleted nodes. Large graphs…
