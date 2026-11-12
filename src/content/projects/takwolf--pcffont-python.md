---
repo: "TakWolf/pcffont-python"
name: "pcffont-python"
description: "A library for handling Portable Compiled Format (PCF) Fonts"
readmeQualityOk: true
url: "https://github.com/TakWolf/pcffont-python"
homepage: "https://pypi.org/project/pcffont/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["bitmap-font", "bitmap-fonts", "font", "fonts", "pcf", "bitmap"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-04-09T12:39:05Z"
lastCommitAt: "2026-11-12T11:38:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 68
maintainers: ["TakWolf"]
openGraphImageUrl: "https://opengraph.githubassets.com/f341f4003386729758ebc02783637ba4a51a1b2a1b0a4e2568a5b9573c5c31a3/TakWolf/pcffont-python"
---

# PcfFont - Python

A library for handling [Portable Compiled Format (PCF) Fonts](https://en.wikipedia.org/wiki/Portable_Compiled_Format).

## Installation

```shell
pip install pcffont
```

## Usage

### Create

```python
import shutil
import statistics

from examples import BUILD_DIR
from pcffont import PcfFontBuilder, PcfGlyph

def main() -> None:
    outputs_dir = BUILD_DIR.joinpath('create')
    if outputs_dir.exists():
        shutil.rmtree(outputs_dir)
    outputs_dir.mkdir(parents=True)

    builder = PcfFontBuilder()
    builder.config.font_ascent = 14
    builder.config.font_descent = 2
    builder.config.default_char = 0xFFFE

    builder.glyphs.append(PcfGlyph(
        name='.notdef',
        encodings={0xFFFE},
        scalable_width=500,
        character_width=8,
        dimensions=(8, 16),
        offset=(0, -2),
        bitmap=[
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],…
