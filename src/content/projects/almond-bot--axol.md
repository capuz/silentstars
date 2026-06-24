---
repo: "almond-bot/axol"
name: "axol"
description: "Python SDK and CLI for Axol. Includes a bimanual IK solver, low-level CAN motor interface, VR teleoperation pipeline, ZED camera streaming, LeRobot bindings, and a joint tuning toolkit. All open source."
url: "https://github.com/almond-bot/axol"
homepage: "https://almond.bot"
language: "Python"
languages: ["Python"]
languagePcts: [82]
stars: 15
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-03-21T23:17:54Z"
lastCommitAt: "2026-06-24T00:19:06Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 46
maintainers: ["shawnpatel", "cursor[bot]", "radhika21-prayage"]
openGraphImageUrl: "https://opengraph.githubassets.com/807bd8d5c37c397ee6a9cea174adc95c6751d2d7cd21aea9681e029559f5e4b9/almond-bot/axol"
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
