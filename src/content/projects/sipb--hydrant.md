---
repo: "sipb/hydrant"
name: "hydrant"
description: "MIT semester course planning app"
readmeQualityOk: true
url: "https://github.com/sipb/hydrant"
homepage: "https://hydrant.mit.edu/"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [77, 21]
stars: 34
forks: 42
openIssues: 29
closedIssues: 82
watchers: 5
contributors: 46
recentReleases: 0
createdAt: "2022-11-30T22:51:20Z"
lastCommitAt: "2026-11-01T23:00:39Z"
status: "thriving"
tags: ["needs_contributors", "fork_magnet"]
healthScore: 91
undervaluedScore: 68
maintainers: ["dtemkin1", "dependabot[bot]", "shensquared"]
openGraphImageUrl: "https://opengraph.githubassets.com/798df501d0a02dcaad692b7ee2368e395a5174e67de801e7be125576c175372d/sipb/hydrant"
---

# Hydrant

## Setup

Install:

- Python 3, at least Python 3.8.2.
- Node.js, at least Node.js 22.22, 24.15, or 26.
  - One way to manage Node versions is using [nvm](https://github.com/nvm-sh/nvm).

In the root directory, run:

- `pip install -e ".[dev]"` to install dependencies.
- `npm install` to install dependencies.

## Updating

### Local development

There's the frontend, which is the website and the interface. Then there's the backend, or the schedules, which are the files that have information about class schedules.

To spin up the site, we need two steps:

(1) We need to update the backend to get the data. Run `python3 -m scrapers`.

(2) We then can update the frontend, via running `npm run dev`. This will start a developer server. Open a browser tab to [`http://localhost:5173/`](http://localhost:5173/), which will update live as you edit code.

If this is the **first time** you're spinning up the website, the two steps have to be taken in order: step (1), and then step (2). If not followed, you'll see a blank frontend.

After the first time, the step order doesn't matter to bring up the site; in fact, backend step (1) can even be skipped -- since you'd already have…
