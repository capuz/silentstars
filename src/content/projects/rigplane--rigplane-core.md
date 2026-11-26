---
repo: "rigplane/rigplane-core"
name: "rigplane-core"
description: "Python library and web UI for Icom radios (LAN/USB) and the Yaesu FTX-1 (USB), with a rigctld server."
readmeQualityOk: true
url: "https://github.com/rigplane/rigplane-core"
homepage: "https://rigplane.dev"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [60, 33]
topics: ["amateur-radio", "asyncio", "ci-v", "ham-radio", "ic-705", "icom", "radio-control", "transceiver", "ic-7610", "ftx-1"]
stars: 30
forks: 12
openIssues: 27
closedIssues: 1293
watchers: 0
contributors: 10
recentReleases: 0
createdAt: "2026-02-25T06:47:17Z"
lastCommitAt: "2026-11-26T23:10:16Z"
lastReleaseAt: "2026-03-27T23:38:11Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 99
undervaluedScore: 57
maintainers: ["morozsm", "rigplane-ci-read[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/994fe5a83aab45f59f0166c2a057f85928694d3c8979b21e0190a6656a31a9e7/rigplane/rigplane-core"
discussionCount: 3
---

# rigplane

> **RigPlane 3.0 is released.** A plain `pip install rigplane` installs it.
> Upgrading from 2.x? 3.0 requires the radio model (`--model`); see
> [What's New in 3.0](https://rigplane.dev/3.0/whats-new/) and the
> [migration guide](https://rigplane.dev/3.0/migrate/). Known gaps are listed in
> [3.0 known limitations](https://github.com/rigplane/rigplane-core/blob/main/docs/release-notes/2026-beta-known-limitations.md).
> Tried it on your radio? [Send a 3.0 report](https://github.com/rigplane/rigplane-core/issues/new?template=beta_report.yml).

**rigplane** is an open-source (MIT) Python asyncio library and web UI for
Icom radios (LAN/USB) and the Yaesu FTX-1 (USB), with a rigctld server. It
has native providers for Icom CI-V and Yaesu CAT paths. The rigctld server
lets Hamlib-aware programs such as WSJT-X, fldigi and JS8Call control the
radio.

## Quickstart

```bash
pip install rigplane
rigplane --model IC-7610 web   # discovers the radio's IP on the LAN
# open http://localhost:8080
```

Or as a library:
