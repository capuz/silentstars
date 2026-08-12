---
repo: "tscircuit/jlcsearch"
name: "jlcsearch"
description: "Find parts from JLCPCB matching design constraints (resistance values, capacitance, tolerance etc.)"
readmeQualityOk: true
url: "https://github.com/tscircuit/jlcsearch"
homepage: "https://jlcsearch.tscircuit.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["electronics", "jlcpcb", "pcb", "pcb-manufacturing", "kicad", "tscircuit"]
stars: 30
forks: 193
openIssues: 10
closedIssues: 17
watchers: 1
contributors: 12
recentReleases: 0
createdAt: "2024-11-01T18:45:34Z"
lastCommitAt: "2026-08-12T05:13:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 70
undervaluedScore: 60
maintainers: ["seveibar"]
openGraphImageUrl: "https://opengraph.githubassets.com/3986fea3d12f85525e15bc3a04ffd4d62989a78c4bab80f2daf986e354d3fd00/tscircuit/jlcsearch"
---

# jlcsearch (in-stock jlcpcb search engine and API)

[Search for Parts](https://jlcsearch.tscircuit.com) ⋅ [tscircuit](https://github.com/tscircuit/tscircuit) ⋅ [discord](https://tscircuit.com/join)

This is an in-stock parts search engine for JLCPCB parts. It also
features an easy-to-use API (just add ".json" to your URL on any page)

Play with it at [jlcsearch.tscircuit.com](https://jlcsearch.tscircuit.com)

## API Usage

You can go on any page and click "json" in the top right corner to automatically convert whatever filter you've made to a JSON query.

```bash
curl https://jlcsearch.tscircuit.com/resistors/list.json?package=&resistance=1k

# {
#  "resistors": [
#    {
#      "lcsc": 21190,
#      "mfr": "0603WAF1001T5E",
#      "package": "0603",
#      "resistance": 1000,
#      "tolerance_fraction": 0.01,
#      "power_watts": 100,
#      "stock": 31485061,
#      "price1": 0.000814286
#    },
#    {
#      "lcsc": 11702,
#      "mfr": "0402WGF1001TCE",
#      "package": "0402",
#      "resistance": 1000,
#      ...
```

Look up a generated tscircuit footprinter string by numeric or `C`-prefixed
LCSC number:

```bash
curl…
