---
repo: "projectbluefin/documentation"
name: "documentation"
description: "Bluefin Documentation"
url: "https://github.com/projectbluefin/documentation"
homepage: "http://docs.projectbluefin.io/"
language: "TypeScript"
languages: ["TypeScript", "MDX", "JavaScript"]
languagePcts: [32, 31, 24]
stars: 21
forks: 64
openIssues: 11
closedIssues: 79
watchers: 5
contributors: 69
recentReleases: 0
createdAt: "2024-07-21T22:14:22Z"
lastCommitAt: "2026-06-24T06:39:35Z"
lastReleaseAt: "2025-04-28T00:14:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "fork_magnet"]
healthScore: 97
undervaluedScore: 76
maintainers: ["castrojo", "renovate[bot]", "mergeraptor[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6724f9e2869ffb236a5c913052117f40a88029c2e114512c2ab5338207a6e9ea/projectbluefin/documentation"
fundingLinks: ["GITHUB:https://github.com/castrojo", "GITHUB:https://github.com/tulilirockz"]
---

# Bluefin Docs

These docs are intentionally concise because Bluefin aims to stay out of the way. The goal is to give contributors and users a short, opinionated reference for the parts of the Bluefin experience that are unique to this project.

## Prerequisites

- **Node.js 20+** — see `package.json` `engines` field (`node >=20` is required)
- **[`just`](https://just.systems)** — `brew install just` or `cargo install just`
- **`GITHUB_TOKEN` or `GH_TOKEN`** — required for data-fetch scripts that call the GitHub API (a [fine-grained token](https://github.com/settings/tokens?type=beta) with read-only public repo access is sufficient)

## Project overview

This repository contains the Docusaurus site for Project Bluefin documentation. It combines end-user docs, contributor-facing project guidance, release notes, and generated data that powers dynamic pages like downloads, changelogs, and version dashboards.

### What lives where

- `docs/` contains the main documentation pages, including installation, troubleshooting, downloads, contributor guidance, developer experience, and FAQ content.
- `blog/` contains release posts, announcements, status updates, and longer-form project…
