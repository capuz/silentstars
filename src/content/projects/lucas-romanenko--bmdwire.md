---
repo: "lucas-romanenko/bmdwire"
name: "bmdwire"
description: "Python libraries for Blackmagic broadcast hardware: ATEM switchers, HyperDeck recorders, Ultimatte keyers and Videohub routers."
readmeQualityOk: true
url: "https://github.com/lucas-romanenko/bmdwire"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 11
forks: 3
openIssues: 6
closedIssues: 14
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-09-12T00:19:32Z"
lastCommitAt: "2026-11-23T13:30:25Z"
lastReleaseAt: "2026-09-15T23:14:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 56
maintainers: ["lucas-romanenko", "bjones247"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1366801846/6df53bcf-2435-4e1b-924f-4a48819d349f"
---

Python libraries for Blackmagic Design broadcast devices: one package, one version, four device families.

```sh
pip install bmdwire
```

| Import | Purpose | License | Docs |
|---|---|---|---|
| **`atemwire`** | ATEM switchers: the native UDP protocol, a connection pool, macro bytecode, "Save Switcher State" profiles | LGPL-3.0-only | [atemwire/README.md](https://github.com/lucas-romanenko/bmdwire/blob/HEAD/atemwire/README.md) |
| **`hyperdeckwire`** | HyperDeck recorders: transport control and clip listing over TCP 9993, clip upload over FTP, and the deck's configuration (network, FTP / Web Media Manager / Ethernet Protocol switches, certificate, users, time) over the API HyperDeck Setup drives | MIT | [hyperdeckwire/README.md](https://github.com/lucas-romanenko/bmdwire/blob/HEAD/hyperdeckwire/README.md) |
| **`ultimattewire`** | Ultimatte 12 keyers: the whole documented text protocol (state, live updates, controls, presets, GPI, frame buffers), archive and restore with Smart Remote 4 compatible zips, network setup | MIT | [ultimattewire/README.md](https://github.com/lucas-romanenko/bmdwire/blob/HEAD/ultimattewire/README.md) |
