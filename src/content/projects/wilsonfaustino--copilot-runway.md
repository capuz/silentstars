---
repo: "wilsonfaustino/copilot-runway"
name: "copilot-runway"
description: "macOS menu bar app that shows your GitHub Copilot AI credits as runway: what is left, how fast it burns, where it goes. Local only."
readmeQualityOk: true
url: "https://github.com/wilsonfaustino/copilot-runway"
homepage: "https://wilsonfaustino.github.io/copilot-runway/"
language: "Swift"
languages: ["Swift"]
languagePcts: [95]
stars: 13
forks: 0
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-15T11:46:43Z"
lastCommitAt: "2026-11-14T21:57:51Z"
lastReleaseAt: "2026-10-18T21:48:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 59
maintainers: ["wilsonfaustino"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f3f088f6e1011abcd51b2ecff0c5f535deb31194014debd014cdc81d4b42e59/wilsonfaustino/copilot-runway"
---

# Copilot Runway

Copilot Runway is a macOS menu bar app that shows your GitHub Copilot AI credit usage as
runway: how many credits are left, how fast you use them, and which models and kinds of
work use them. It is for developers on Copilot usage-based billing who code through
OpenCode, Pi Agent, omp, the Copilot CLI or the GitHub Copilot app. The menu bar shows the percent of credits left and the days until
they run out at your current pace. The app reads your existing `gh` login and the local
OpenCode, Pi, omp and Copilot CLI and app session files, so it needs no setup.

## Privacy

- The app is local only. It has no telemetry and no backend.
- The app sends network calls only to `api.github.com`:
  - One request for your credits used and limit, every 5 minutes and when the Mac wakes.
  - `gh search` calls for GitHub outcomes, only after you set an organization.
  - One request for the latest public release of this app, on launch and at most once a day. It sends no token.
- The app reuses your `gh` login. For the credits request, it runs `gh auth token`, keeps the
  token in memory for that one request, and sends it only in the `Authorization` header.
  The app does not store…
