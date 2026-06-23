---
repo: "AutoPTZ/autoptz"
name: "autoptz"
description: "AI Tracking Solution for Any PTZ Cameras"
url: "https://github.com/AutoPTZ/autoptz"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["python", "artificial-intelligence", "desktop-app", "face-recognition", "multithreading", "ptz-camera", "qt", "tracking"]
stars: 94
forks: 23
openIssues: 6
closedIssues: 12
watchers: 6
contributors: 7
recentReleases: 10
createdAt: "2022-09-21T22:06:18Z"
lastCommitAt: "2026-06-23T23:18:15Z"
lastReleaseAt: "2026-06-23T20:49:00Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "release_machine"]
healthScore: 93
undervaluedScore: 50
maintainers: ["TCVinNYC", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2cb45324b01c6c33423580384f7b888cc8e71b3c2ff1ac40ac0cac9acebb408e/AutoPTZ/autoptz"
discussionCount: 0
---

# AutoPTZ

**AI-driven PTZ camera tracking — detect people, lock onto a target, and move the camera to follow them automatically.**

[Installation](docs/installation.md) · [Configuration](docs/configuration.md) · [Performance](docs/performance.md) · [Building](docs/building.md) · [Architecture](docs/architecture.md) · [Troubleshooting](docs/troubleshooting.md)

</div>

---

AutoPTZ is a cross-platform desktop app (native Qt Widgets / PySide6) that runs
a real-time vision pipeline per camera — **detect → track → re-identify → pose →
aim → drive PTZ** — and sends smooth pan/tilt/zoom commands so a PTZ camera keeps
the chosen person framed. It is built for live production: multi-camera, stable
target identity across occlusions, and graceful degradation when a model or
device is missing (it always keeps live preview).

## Highlights

- **Multi-camera** — each camera runs its own worker; identities stay stable per
  camera with no cross-camera state bugs.
- **Identity-gated tracking** — click a person to target them; optional face
  recognition + appearance ReID re-bind the right person after occlusions.
- **Smooth PTZ control** — motion prediction, one-euro smoothing, PD + velocity…
