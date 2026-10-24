---
repo: "stefashkaa/github-profile-crt"
name: "github-profile-crt"
description: "Animated CRT/equalizer GitHub contribution graphs for profile READMEs with multi-theme SVG generation, light/dark variants, and GitHub Actions automation"
readmeQualityOk: true
url: "https://github.com/stefashkaa/github-profile-crt"
homepage: "https://github.com/stefashkaa/github-profile-crt#readme"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["automation", "contribution-graph", "crt", "data-visualization", "equalizer", "github-actions", "github-contributions", "github-profile", "github-profile-readme", "svg"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 1
createdAt: "2026-04-06T11:26:09Z"
lastCommitAt: "2026-10-24T08:20:25Z"
lastReleaseAt: "2026-09-12T00:40:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 52
maintainers: ["stefashkaa"]
openGraphImageUrl: "https://opengraph.githubassets.com/88f309b06036e4bd81c8431135b02ebc2e41161f810535611bfc772e470b438e/stefashkaa/github-profile-crt"
discussionCount: 0
---

# github-profile-crt

Bring a little retro warmth to your GitHub profile: **turn your contributions into a CRT “signal board” SVG** — animated scanlines, noise, and a dashboard-style vibe — generated automatically on a schedule.

## What you get

github-profile-crt is a GitHub Action that:

- **Fetches** contribution data for a user (GraphQL) or an organization (REST aggregation)
- **Renders** a CRT-style weekly chart as **SVG**
- **Applies themes** (dark + light variants), custom palettes are supported too
- **Optionally commits & pushes** the generated files back to your repo

It’s designed for:

- **Profile READMEs** (user and organization)
- **Project READMEs** (if you want a living “activity panel” in a repo)

## Quick start

### Choose where the README lives

- **User profile README:** create a public repo named **`.github`** under your user account, then add `profile/README.md`
- **Organization profile README:** create a public repo named **`.github`** under the organization, then add `profile/README.md`

(Those are GitHub’s rules; this action simply generates files you embed.)

### Add a workflow

Create a workflow file in the repository that will store the generated SVGs…
