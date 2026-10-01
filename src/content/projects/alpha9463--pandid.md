---
repo: "Alpha9463/pandid"
name: "pandid"
description: "python package to develop Process Engineering Flow Diagrams and M&E Balances"
readmeQualityOk: true
url: "https://github.com/Alpha9463/pandid"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 10
forks: 2
openIssues: 39
closedIssues: 202
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-11T09:32:09Z"
lastCommitAt: "2026-10-01T10:24:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 95
undervaluedScore: 51
maintainers: ["Alpha9463"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe678685d8667b16a70fd5cabf9ebbad8cc41db18b30ef2a2d9414d1b29640ca/Alpha9463/pandid"
---

# pandid

Create process flow diagrams (PFDs), piping and instrumentation diagrams (P&IDs),
and block flow diagrams (BFDs) from a Python flowsheet. Describe equipment and
connections; pandid places the units and routes the streams. The core package
has no runtime dependencies.

[See the example and the full gallery](https://github.com/Alpha9463/pandid/blob/main/docs/gallery/README.md).

## Install

Requires Python 3.11 or later.

```bash
pip install pandid
pip install 'pandid[pdf]'   # optional PDF and PNG output
pip install 'pandid[yaml]'  # optional YAML input
```

## Quick start

```python
from pandid import Feed, Flowsheet, Heater, Product, Separator

fs = Flowsheet("Flash Separation")
feed = fs.add(Feed("Crude"))
heater = fs.add(Heater("E-101"))
drum = fs.add(Separator("V-101"))
gas = fs.add(Product("Off-Gas"))
liquid = fs.add(Product("Condensate"))

fs.connect(feed.outlet, heater.inlet)
fs.connect(heater.outlet, drum.feed)
fs.connect(drum.vapor, gas.inlet)
fs.connect(drum.liquid, liquid.inlet)

fs.render("flash.svg")
```

No coordinates are needed for this drawing. Render to SVG, editable draw.io,
or PDF/PNG with the optional export backend. You can also pin equipment or add…
