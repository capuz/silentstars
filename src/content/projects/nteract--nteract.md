---
repo: "nteract/nteract"
name: "nteract"
description: "We're back! Now firing notebooks out of a t-shirt gun."
url: "https://github.com/nteract/nteract"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [45, 44]
stars: 137
forks: 8
openIssues: 22
closedIssues: 439
watchers: 3
contributors: 22
recentReleases: 0
createdAt: "2026-02-11T18:18:05Z"
lastCommitAt: "2026-06-28T02:22:04Z"
lastReleaseAt: "2026-02-20T09:04:22Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 30
maintainers: ["rgbkrk", "quillaid"]
openGraphImageUrl: "https://opengraph.githubassets.com/393585c4dec125579eaa0f50761627010586503854b21c103d1cc2ff0c2a22f8/nteract/nteract"
---

# nteract

nteract is a local-first notebook environment where humans, kernels, and AI agents can work against the same live document. It ships as a native desktop app with instant startup, realtime sync across windows and programmatic clients, and managed local environments.

Built on [jupyter-zmq-client](https://crates.io/crates/jupyter-zmq-client) and [jupyter-protocol](https://crates.io/crates/jupyter-protocol).

## Install

Download the latest release from [GitHub Releases](https://github.com/nteract/nteract/releases).

Linux x64 and macOS (Apple silicon or Intel) can install with one command —
the AppImage or signed .app bundle plus CLI/daemon and the per-user service
(systemd or launchd) in one step:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.nteract.io | bash
```

macOS users can equally drag the DMG from GitHub Releases. DEB/RPM/APT
installs are not currently supported because `runtimed` is a per-user daemon
managed by the app and CLI, not by system package-manager scripts.

For remote workstations (Outerbounds, JupyterHub) that offer compute to
hosted notebooks, use the headless one-liner — see
[Remote workstations](docs/remote-workstation.md):

```bash…
