---
repo: "hoang-rio/lux-web-viewer"
name: "lux-web-viewer"
description: "Lux Viewer - Watch LuxPower SNA inverter via Luxpower local wifi dongle on the web"
readmeQualityOk: true
url: "https://github.com/hoang-rio/lux-web-viewer"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [54, 36]
topics: ["luxpower", "solar-energy", "sna-inverter"]
stars: 9
forks: 4
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-04-12T08:14:33Z"
lastCommitAt: "2026-09-24T08:40:14Z"
lastReleaseAt: "2025-03-17T03:02:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 80
maintainers: ["hoang-rio", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7134c76f7474cf5c241eabb25e1662eaaf6347ab68b377efc44cacc37f2c4096/hoang-rio/lux-web-viewer"
fundingLinks: ["GITHUB:https://github.com/hoang-rio"]
---

# Lux Web Viewer

[Tiếng Việt](https://github.com/hoang-rio/lux-web-viewer/blob/HEAD/README-vi.md) | English

## About
</p>
A python script allow watch Luxpower SNA inverter in realtime. Tested in Luxpower SNA 6K with old wifi dongle (BAxxxxxx wifi name)

## Inverter setup
See wiki from `lxp-bridge` [here](https://github.com/celsworth/lxp-bridge/wiki/Inverter-Setup). _(You can ignore AC charge setup)_

## Configuration
* Copy `.env.example` to `.env`
* Update configuration in `.env` with your info

### ReadInput Mode (DONGLE/SERVER)
You can control which inverter input frame is requested by setting `READ_INPUT_MODE` in `.env`:

* `READ_INPUT_MODE=INPUT1` (aliases: `INPUT1`, `READINPUT1`, `READ_INPUT1`): request only ReadInput1 (register `0`, count `40`)
* `READ_INPUT_MODE=ALL` : request ReadInput1 -> ReadInput4 sequentially (registers `0`, `40`, `80`, `120`)

`ALL` provides the most complete data set by combining ReadInput1-4, while `INPUT1` uses smaller payloads.

## Installation and run
* Sync gitsubmodule with `git submodule init && git submodule update`
* Python 3 required
* Setup python venv with `python -m venv venv`
* Active python venv `source venv/Scripts/activate` on…
