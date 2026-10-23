---
repo: "gryszzz/reverse-engineer-everything"
name: "reverse-engineer-everything"
description: "Local workbench for evidence-backed software investigation, analysis, and bounded verification, built on the REA engine."
readmeQualityOk: true
url: "https://github.com/gryszzz/reverse-engineer-everything"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [80]
stars: 16
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 183
recentReleases: 0
createdAt: "2026-10-14T02:23:38Z"
lastCommitAt: "2026-10-23T12:04:11Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 42
maintainers: ["cursoragent", "cursor[bot]", "gryszzz"]
openGraphImageUrl: "https://opengraph.githubassets.com/018bd9c8bbd5c86865a8e137a959924f11ad3c3f9e5c20200a923e151a5d2301/gryszzz/reverse-engineer-everything"
---

# REE

A local studio on the REA engine. Drop a file or paste a link, watch the analysis the engine records, then read the findings. Evidence stays on your machine.

## Start

Node 24.18.0 (`nvm use`).

1. `npm ci`
2. `node ree.mjs studio`
3. Drop a file or paste a link, tick authorization, and press Analyze.

The page listens on `127.0.0.1`. Nothing is uploaded.

[Landing page](https://gryszzz.github.io/reverse-engineer-everything/) · [Get started](#get-started) · [Studio](#investigation-studio) · [Formats](#format-matrix) · [Outside-in](#outside-in) · [Roadmap](#roadmap) · [Safety](#safety-and-authorization)

These frames are one studio session on this Linux checkout, Node 24.18.0. The target was the owned fixture `experiments/rel-first-lab`. Analyze reports provider `javascript-application`, 7 of 7 files parsed, 7 recovered modules, 40 inferred import edges, and Evidence `ev_45d365f3b6f0be5b…`. Elapsed time on that timeline is 2.6s. Findings quote the full id `ev_45d365f3b6f0be5b8831504b9bf5f268826bf0973e47a11ad01e1bd65587d58b`: 49 nodes, 67 edges. Unknowns stay listed. The GIF replays the saved timeline. The still is the finished view. Nothing in these frames was drawn by…
