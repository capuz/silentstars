---
repo: "rigplane/rigplane-core"
name: "rigplane-core"
description: "Python library and web UI for Icom radios (LAN/USB) and the Yaesu FTX-1 (USB), with a rigctld server."
readmeQualityOk: true
url: "https://github.com/rigplane/rigplane-core"
homepage: "https://rigplane.dev"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [58, 33]
topics: ["amateur-radio", "asyncio", "ci-v", "ham-radio", "ic-705", "icom", "radio-control", "transceiver", "ic-7610", "ftx-1"]
stars: 24
forks: 10
openIssues: 25
closedIssues: 1296
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2026-02-25T06:47:17Z"
lastCommitAt: "2026-10-31T01:42:36Z"
lastReleaseAt: "2026-03-27T23:38:11Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 99
undervaluedScore: 57
maintainers: ["morozsm", "rigplane-ci-read[bot]", "cometdom"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd0905335f86accab7163ba259deca4e192eebfb16ad305e6dd36ed893409f84/rigplane/rigplane-core"
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

```python
import asyncio
from rigplane import create_radio, LanBackendConfig

async def main():
    async with create_radio(LanBackendConfig(host="192.168.1.100",…
