---
repo: "LimitlessAgents/lakegen"
name: "lakegen"
description: "AI Agent For Managing Lakehouses"
readmeQualityOk: true
url: "https://github.com/LimitlessAgents/lakegen"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [83]
stars: 5
forks: 3
openIssues: 15
closedIssues: 18
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-05-21T18:30:34Z"
lastCommitAt: "2026-11-20T12:19:24Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 89
undervaluedScore: 58
maintainers: ["LimitlessAgents", "sindhu24799", "Enard52"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1245964932/1c700cba-892e-4fd4-b265-080f228a6857"
discussionCount: 0
---

The AI agent for your Apache Iceberg™ lakehouse.

  <video
    src="assets/videos/lakegen-demo.mp4"
    width="820"
    controls
    autoplay
    loop
    muted
    playsinline
  >

Debugging an Iceberg table usually means six tabs of metadata queries.
LakeGen replaces that with one conversation: it investigates, explains what
it found, and suggests what to do next.

> ⭐ If LakeGen saves you time, a star helps other data engineers find it.

---

## The problem

Your lakehouse knows exactly why it's slow. It just can't tell you.

Iceberg tables get slow. Costs creep up. Nobody knows why. The evidence is
all there, buried in snapshots, manifests, and partition stats. Finding it
takes a dozen metadata queries and a lot of guessing, and the one person who
knows how is always busy.

LakeGen turns that investigation into a conversation. 👇

## ⚡ Quick Start

Run the complete stack in about 2 minutes.

**Prerequisites:**
 - [Docker](https://docs.docker.com/get-docker/) 
 - OpenAI-compatible API key.

**1. Clone the repository**
```md
git clone https://github.com/LimitlessAgents/lakegen.git
```

**2. Configure inference**

```bash
cp .env.example .env
```
