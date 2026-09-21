---
repo: "Blueturboguy07/iris"
name: "iris"
description: "Iris — the publik desktop assistant (macOS Swift, Windows Electron)"
readmeQualityOk: true
url: "https://github.com/Blueturboguy07/iris"
language: "Swift"
languages: ["Swift"]
languagePcts: [74]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-08-25T17:38:34Z"
lastCommitAt: "2026-09-21T09:13:22Z"
lastReleaseAt: "2026-08-27T10:50:01Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 69
undervaluedScore: 62
maintainers: ["Blueturboguy07"]
openGraphImageUrl: "https://opengraph.githubassets.com/dafb09481e246cd1a2b8f05fc3fe5629c3f4fc56f18b234ff3e211e9840e8f2f/Blueturboguy07/iris"
---

# Iris

The publik desktop assistant. Split out of [`Blueturboguy07/publik`](https://github.com/Blueturboguy07/publik)
on 2026-08-25, with the history of every file that came along.

publik keeps the server half — `/api/iris/guides`, `/api/iris/apps`,
`/api/iris/recipes`, `/api/assistant/chat` and the rest. Those routes are the
contract, and they are the only thing the clients here genuinely share.

## Three clients, and why

| | what it is | state |
|---|---|---|
| **`iris-macos/`** | Swift, ~47k lines. The eye, the input bar, install guides, guide autopilot, maintain mode, the on-demand edit loop. | **active** — where the work happens |
| **`iris-windows/`** | Electron + TypeScript, ~18k lines. A behavioural reimplementation of the parts of the above that have been ported. | **behind** — last commit 2026-08-19 |
| **`iris-desktop/`** | Tauri, ~3.5k lines. A guide viewer: show a guide, open a link, check a tool version. This is the original Orbit app, renamed to Iris in July 2026. | **frozen** since 2026-08-10, and superseded |

They share **no code**. Not a file, not a symlink, not a generated artifact.
`iris-windows` is a reimplementation of `iris-macos` in a different…
