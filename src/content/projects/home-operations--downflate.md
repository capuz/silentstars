---
repo: "home-operations/downflate"
name: "downflate"
description: "Automatically pull changed container images into your Talos nodes"
url: "https://github.com/home-operations/downflate"
language: "Go"
languages: ["Go"]
languagePcts: [94]
stars: 6
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-14T19:59:19Z"
lastCommitAt: "2026-06-28T01:35:35Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 76
undervaluedScore: 26
maintainers: ["sticky-gecko[bot]", "buroa", "onedr0p"]
openGraphImageUrl: "https://opengraph.githubassets.com/ca5324b8db15daea1dc279587ad04feb2325a93e945d844334a6698e86117413/home-operations/downflate"
---

# downflate

Pre-pull a pull request's **changed container images** onto a [Talos Linux](https://www.talos.dev)
cluster *before* the PR merges, and report the result back as a commit status.

A GitOps PR that bumps an image tag can stall or fail at merge time while every
node pulls the new image cold. downflate renders the PR diff, extracts only the
images the change introduces, pulls them into each node's image cache ahead of
time, and posts a `success`/`failure` status so the author knows the images are
pullable before they hit `main`.

It is a minimal cousin of [`konflate`](https://github.com/home-operations/konflate):
it reuses [`flate`](https://github.com/home-operations/flate) as the render
engine and konflate's webhook/status patterns, but drops the UI/comments/MCP and
**adds the step konflate doesn't have** — actually pulling the images via the
Talos machinery API.

## How it works

```
POST /hooks ─▶ verify HMAC ─▶ parse PR ─▶ coalesce per-PR ─▶ commit status: pending
                                                                    │
                  flate RenderTrees(base, head)  ◀── shallow-clone base + PR head…
