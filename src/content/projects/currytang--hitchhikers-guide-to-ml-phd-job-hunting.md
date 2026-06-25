---
repo: "CurryTang/hitchhikers-guide-to-ml-phd-job-hunting"
name: "hitchhikers-guide-to-ml-phd-job-hunting"
description: "A Hitchhiker's Guide to ML PhD Job Hunting"
url: "https://github.com/CurryTang/hitchhikers-guide-to-ml-phd-job-hunting"
homepage: "https://currytang.github.io/hitchhikers-guide-to-ml-phd-job-hunting/"
language: "JavaScript"
languages: ["JavaScript", "CSS"]
languagePcts: [56, 44]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-02T22:04:19Z"
lastCommitAt: "2026-06-25T01:38:30Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 67
undervaluedScore: 16
maintainers: ["CurryTang"]
openGraphImageUrl: "https://opengraph.githubassets.com/c10bba4434c90d304334961309277f7a4f057afe47b19bd2ab036a25e4e40723/CurryTang/hitchhikers-guide-to-ml-phd-job-hunting"
---

# A Hitchhiker's Guide to ML PhD Job Hunting

This repository hosts an interview notes site. MLSYS notes and LeetCode Core Skills notes are published as parallel interview sections.

## Live Site

**GitHub Pages:** [https://currytang.github.io/hitchhikers-guide-to-ml-phd-job-hunting/](https://currytang.github.io/hitchhikers-guide-to-ml-phd-job-hunting/)

The site publishes the curated MLSYS notes from `notes/Mlsys/` and LeetCode Core Skills notes from `notes/Leetcode/`. The frontend reader supports Chinese and English variants when both exist, and falls back to the available note when only one variant is present.

## Repository Layout

- `notes/Mlsys/`: MLSYS interview note markdown files and local assets
- `notes/Leetcode/`: LeetCode Core Skills note markdown files
- `src/`: React frontend for browsing and rendering interview sections
- `docs/plans/`: design and implementation notes for repo changes

## Practice Blocks

Markdown files can render interactive multiple-choice practice blocks with a fenced code block:

````
```quiz
title: Quick Check
question: CUDA thread blocks are scheduled onto which hardware unit?
answer: B
A. Host compiler
B. GPU SM
C. Browser runtime…
