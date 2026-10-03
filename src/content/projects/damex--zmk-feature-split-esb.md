---
repo: "damex/zmk-feature-split-esb"
name: "zmk-feature-split-esb"
description: "ZMK split transport over Nordic ESB (2.4 GHz)"
readmeQualityOk: true
url: "https://github.com/damex/zmk-feature-split-esb"
language: "C"
languages: ["C"]
languagePcts: [98]
topics: ["esb", "zmk", "zmk-module", "split-esb"]
stars: 8
forks: 5
openIssues: 6
closedIssues: 5
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-05-25T17:45:24Z"
lastCommitAt: "2026-10-03T09:22:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 85
undervaluedScore: 50
maintainers: ["damex"]
openGraphImageUrl: "https://opengraph.githubassets.com/54afa3182cc0a15c9c17b35ecda14b8e27e6d2610be23afcb4deb7f168ff98c3/damex/zmk-feature-split-esb"
---

# zmk-feature-split-esb

Enhanced ShockBurst (2.4 GHz) split transport for ZMK. One or more peripherals, one central.
Packet-native: split messages map to ESB packets (a report's input events
coalesce into one, each packed to a compact on-air form), carried over a
lock-free SPSC RX path.
ESB hardware ACK + retransmit + CRC handle reliability.
[ARCHITECTURE.md](https://github.com/damex/zmk-feature-split-esb/blob/HEAD/ARCHITECTURE.md) documents the internals: packet paths,
engine ticks, wire formats.

## Install

Add it to your `config/west.yml`. `import: true` pulls the deps a vanilla ZMK
workspace lacks (`zmk` and Zephyr come from your own manifest):
```yaml
  remotes:
    - name: damex
      url-base: https://github.com/damex
  projects:
    - name: zmk-feature-split-esb
      remote: damex
      revision: v0.6.1
      import: true
```
Then `west update`. Module's `modules/modules.cmake` applies sdk-nrf Kconfig
fixes at cmake configure. No `west patch` step.

For local checkout, build with `-DZMK_EXTRA_MODULES=<path>/zmk-feature-split-esb`
instead. Workspace must already provide `sdk-nrf` + `nrfxlib`. Module patches
them on top.

## Configure

Board/shield conf, select ESB and…
