---
repo: "LedgerHQ/speculos"
name: "speculos"
description: "Ledger device apps emulator"
readmeQualityOk: true
url: "https://github.com/LedgerHQ/speculos"
homepage: "https://speculos.ledger.com/"
language: "C"
languages: ["C", "Python"]
languagePcts: [74, 25]
stars: 190
forks: 85
openIssues: 29
closedIssues: 83
watchers: 27
contributors: 61
recentReleases: 0
createdAt: "2019-11-12T14:03:38Z"
lastCommitAt: "2026-11-16T11:52:41Z"
lastReleaseAt: "2025-07-28T12:28:11Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 90
undervaluedScore: 41
maintainers: ["cedelavergne-ledger", "mbrousset-ledger", "srasoamiaramanana-ledger"]
openGraphImageUrl: "https://opengraph.githubassets.com/b26a10f6e9c00ad7ef4c17b5f3bb591aa2214e49f3abb660c49b5068bea89551/LedgerHQ/speculos"
---

# Speculos

The goal of this project is to emulate Ledger Apps on standard desktop computers,
without any hardware device.
More information can be found here in the
[documentation website](https://ledgerhq.github.io/speculos)
(or in the [docs/](https://github.com/LedgerHQ/speculos/blob/HEAD/docs/) folder directly).

Usage example:

```shell
./speculos.py apps/boil.elf
# ... and open a browser on http://127.0.0.1:5000
```

New to Speculos? The [Quickstart guide](https://ledgerhq.github.io/speculos/user/quickstart.html)
walks you through installation and running an app on Linux, macOS and Windows.

## Installation

### From Python `pypi` packages

The easiest, stable way to install Speculos is with `pip`:

```bash
pip install speculos
```

It is advised to use Python virtualenv, otherwise admin rights will probably be
necessary.

### From sources

Installing Speculos from sources is a bit heavier and, depending on the platform,
complex, due to all the dependency needed for compiling the emulator.

On Debian (10 or later) or Ubuntu (18.04 or later):

```bash
sudo apt install \
    git cmake gcc-arm-linux-gnueabihf libc6-dev-armhf-cross gdb-multiarch \
    python3-pyqt6…
