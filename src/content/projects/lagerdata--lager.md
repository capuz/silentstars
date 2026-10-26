---
repo: "lagerdata/lager"
name: "lager"
description: "Hardware test automation: drive real instruments and embedded targets from your laptop or CI"
readmeQualityOk: true
url: "https://github.com/lagerdata/lager"
homepage: "https://docs.lagerdata.com"
language: "Python"
languages: ["Python"]
languagePcts: [83]
topics: ["cli", "embedded", "hardware-in-the-loop", "hardware-testing", "jlink", "labjack", "mcp", "python", "scpi", "test-automation"]
stars: 9
forks: 7
openIssues: 23
closedIssues: 203
watchers: 3
contributors: 10
recentReleases: 0
createdAt: "2026-03-03T00:45:16Z"
lastCommitAt: "2026-10-26T18:06:37Z"
lastReleaseAt: "2026-03-21T02:16:32Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 68
maintainers: ["danielrmerskine", "cmfisher606", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d24372d512c0cc4dc4770b65ee43737f720d6e17925ceb2608bd8ab69bce1ddd/lagerdata/lager"
---

# Lager

**Hardware test automation.** Drive real instruments and embedded targets — power
supplies, oscilloscopes, debug probes, I2C/SPI/UART, USB hubs — from your laptop
or from CI, over the network.

```bash
pip install lager-cli
lager supply supply1 voltage 3.3 --box my-box
lager debug debug1 flash --hex firmware.hex --box my-box
```

---

## Why Lager

- **The bench stops being a place you have to be.** Instruments connect to a
  Linux *box* on the bench; the CLI runs anywhere and talks to it over Tailscale
  or your LAN.
- **The same commands work in CI.** Anything you can type, a pipeline can run.
  In a pipeline, pass `--yes` to commands that ask for confirmation.
- **One vocabulary across vendors.** `lager supply <net> voltage 3.3` is the same
  command whether the rail is behind a Rigol, a Keysight, a Keithley, or an EA.
- **Tests can run on the box.** Ship a Python script to the hardware with
  `lager python` and use the on-box `Net` API directly, with no network round
  trip per operation.

## Installation

Requires **Python 3.10+** on the machine running the CLI.

```bash
pip install lager-cli
```

You also need a **box**: a dedicated Linux machine on the bench,…
