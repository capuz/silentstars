---
repo: "OpenEngine/OpenEngine"
name: "OpenEngine"
description: "The Open Source Software Factory"
readmeQualityOk: true
url: "https://github.com/OpenEngine/OpenEngine"
homepage: "http://openengine.cc/"
language: "Python"
languages: ["Python"]
languagePcts: [86]
stars: 15
forks: 4
openIssues: 96
closedIssues: 174
watchers: 0
contributors: 7
recentReleases: 10
createdAt: "2026-08-10T15:08:05Z"
lastCommitAt: "2026-10-21T20:00:45Z"
lastReleaseAt: "2026-10-01T17:44:24Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 56
maintainers: ["OpenEngine-worker", "SheaHawkins", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1329952240/ec6390f9-7b16-4cdd-ad37-3057722849c3"
---

# OpenEngine

OpenEngine is a graph execution engine that meets you where you work.

New here? [Start with `engine go`](https://github.com/OpenEngine/OpenEngine/blob/HEAD/docs/getting-started.md): make a local change,
connect GitHub, and take it through review to a pull request.

We give you an out-of-the-box configuration to get you up and running. The out-of-the-box graph lives [here](https://github.com/OpenEngine/OpenEngine/blob/HEAD/workflows/implementation_review_graph.py) and looks like this:
```
Implement -> Pool of Reviewers -> Reranking (Reduces noise) ->  Safe change 
```
## Getting started

Install the CLI, then run it from inside any git repository:

```bash
npm i -g @openengine.cc/engine
cd your-repo
engine go "add a dark mode toggle to the settings page"
```
Or try it without installing:
```
npx @openengine.cc/engine@latest go "add a dark mode toggle to the settings page"
```
If you installed earlier with the curl installer, npm will refuse to overwrite its `~/.local/bin/engine` launcher. Run `npm i -g --force @openengine.cc/engine` once to replace it.
`engine go` runs the default graph: implement, check CI, review the change from several angles, fix what the review…
