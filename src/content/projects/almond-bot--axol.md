---
repo: "almond-bot/axol"
name: "axol"
description: "Python SDK and CLI for Axol. Includes a bimanual IK solver, low-level CAN motor interface, VR teleoperation pipeline, ZED camera streaming, LeRobot bindings, and a joint tuning toolkit. All open source."
url: "https://github.com/almond-bot/axol"
homepage: "https://almond.bot"
language: "Python"
languages: ["Python"]
languagePcts: [83]
stars: 16
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 3
createdAt: "2026-03-21T23:17:54Z"
lastCommitAt: "2026-06-28T01:33:42Z"
lastReleaseAt: "2026-06-27T22:38:40Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 52
maintainers: ["shawnpatel", "cursor[bot]", "somesaba"]
openGraphImageUrl: "https://opengraph.githubassets.com/fed29a67ce3cc32a16d82e57df872cbde87f953b627a42c21807daa86f7b9fc2/almond-bot/axol"
---

# Almond Axol SDK

Command-line interface and Python SDK for the Almond Axol dual-arm robot. CLI invoked as `axol <command> [flags]`.

The browser front-ends live under [`web/`](web/): a **VR teleoperation interface** (WebXR, hosted at [axol.almond.bot](https://axol.almond.bot)) and a **web control panel** that drives the robot from a browser via `axol serve`. See [`web/README.md`](web/README.md) for the front-end details.

The full documentation is hosted at [docs.almond.bot](https://docs.almond.bot). The sources live under [`docs/`](docs/), and the pages below link to them.

**New here?** See [Teleoperation](https://docs.almond.bot/operations/teleop) to go from installation to a live session, or the [Web Control Panel guide](https://docs.almond.bot/guides/control-panel) to drive Axol from a browser.

## Requirements

- **Linux**
- **Python 3.13+**
- **(Optional) NVIDIA Jetson** (e.g. a ZED Box) — required for the GMSL-attached ZED cameras (data collection / policy inference).

## Installation

### One-command install (recommended)

One command installs `uv`, the `axol` CLI (from GitHub, with every extra except `cuda`), and a root systemd service that keeps `axol serve` running…
