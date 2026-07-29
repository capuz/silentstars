---
repo: "shakfu/py2max"
name: "py2max"
description: "A python library for offline generation of Max/MSP patcher (.maxpat) files."
readmeQualityOk: true
url: "https://github.com/shakfu/py2max"
homepage: "https://shakfu.github.io/py2max/"
language: "Python"
languages: ["Python"]
languagePcts: [66]
topics: ["max", "maxmsp", "python", "python3", "javascript"]
stars: 56
forks: 6
openIssues: 0
closedIssues: 8
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2021-05-01T01:19:55Z"
lastCommitAt: "2026-07-29T06:13:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 81
undervaluedScore: 48
maintainers: ["shakfu"]
openGraphImageUrl: "https://opengraph.githubassets.com/e825e5429015742ec3bc9387ce0daac71e75ebab0d871034a6146421d21ed621/shakfu/py2max"
---

# py2max

A pure Python library for generating Max/MSP patcher files (`.maxpat`,
`.maxhelp`, `.rbnopat`) -- offline, and, via its
[js2max](#building-patches-inside-max-js2max) bridge, *inside a running Max
patcher*.

If you are looking for Python 3 externals for Max/MSP, check out the [py-js](https://github.com/shakfu/py-js) project.

## Installation

```bash
pip install py2max
```

For the browser-based live editor and remote REPL, install the companion
[`py2max-server`](https://github.com/shakfu/py2max-server) package:

```bash
pip install py2max-server
```

For development:

```bash
git clone https://github.com/shakfu/py2max.git
cd py2max
uv sync
source .venv/bin/activate
```

## Quick Start

```python
from py2max import Patcher

p = Patcher('my-synth.maxpat')
osc = p.add('cycle~ 440')
gain = p.add('gain~')
dac = p.add('ezdac~')
p.link(osc, gain)
p.link(gain, dac)
p.save()
```

That's it! Open `my-synth.maxpat` in Max to see your patch.

## Features

### Core Capabilities

- **Offline Patch Generation** - Create Max patches programmatically without Max running
- **Round-trip Conversion** - Load, modify, and save existing `.maxpat` files
- **Max for Live (.amxd)** - Read/write…
