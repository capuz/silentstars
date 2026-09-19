---
repo: "TakWolf/pixel-font-builder"
name: "pixel-font-builder"
description: "A library that helps create pixel style fonts"
readmeQualityOk: true
url: "https://github.com/TakWolf/pixel-font-builder"
homepage: "https://pypi.org/project/pixel-font-builder/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["font", "fonts", "pixel-font", "pixel-fonts", "bitmap", "bitmap-font", "bitmap-fonts", "pixel"]
stars: 32
forks: 2
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-05-08T14:05:55Z"
lastCommitAt: "2026-09-19T08:14:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 58
maintainers: ["TakWolf"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ab64350d4af3800b8191ca8b9b23b5374944a1bf23a5b5dfbe0194e5eceabaa/TakWolf/pixel-font-builder"
---

# Pixel Font Builder

A library that helps create pixel style fonts.

## Installation

```shell
pip install pixel-font-builder
```

## Usage

```python
import shutil
from datetime import datetime

from examples import BUILD_DIR
from pixel_font_builder import FontBuilder, WeightName, SerifStyle, SlantStyle, WidthStyle, Glyph, opentype

def main() -> None:
    outputs_dir = BUILD_DIR.joinpath('create')
    if outputs_dir.exists():
        shutil.rmtree(outputs_dir)
    outputs_dir.mkdir(parents=True)

    builder = FontBuilder()
    builder.font_metric.font_size = 16
    builder.font_metric.horizontal_layout.ascent = 14
    builder.font_metric.horizontal_layout.descent = -2
    builder.font_metric.vertical_layout.ascent = 8
    builder.font_metric.vertical_layout.descent = -8
    builder.font_metric.x_height = 7
    builder.font_metric.cap_height = 10
    builder.font_metric.underline_position = -2
    builder.font_metric.underline_thickness = 1
    builder.font_metric.strikeout_position = 6
    builder.font_metric.strikeout_thickness = 1

    builder.meta_info.version = '1.0.0'
    builder.meta_info.created_time = datetime.fromisoformat('2024-01-01T00:00:00Z')…
