---
repo: "UHDanke/gmdkit"
name: "gmdkit"
description: "Python toolkit for generating & modifying Geometry Dash levels in gmd format."
readmeQualityOk: true
url: "https://github.com/UHDanke/gmdkit"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 8
forks: 1
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-09-09T21:31:18Z"
lastCommitAt: "2026-09-29T10:04:51Z"
lastReleaseAt: "2025-09-23T12:08:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 43
maintainers: ["UHDanke", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1091e8d070cd2afab430e2041a86fc39db8046b82736263f3bb07c672b736927/UHDanke/gmdkit"
---

# GMD Toolkit

Python toolkit for modifying & creating Geometry Dash plist files, including gmd & gmdl (GDShare level & level list export) and the encoded dat format (GD savefiles).

> [!CAUTION]
> There are no safety checks or warnings when  modifying levels or save files. You should always keep backups or save copies of any file you edit. Avoid editing in-place where possible.

> [!NOTE]
> Editing levels or save files does not ensure safe round-trip if nothing was changed. This library saves level objects slightly differently and discards unknown characters if they cannot be resolved.

## Installation

Install the latest release from PyPI:

```bash
pip install gmdkit
```

Install the latest development version from GitHub:

```bash
pip install git+https://github.com/UHDanke/gmdkit.git
```

Clone and install in editable mode:

```bash
git clone https://github.com/UHDanke/gmdkit.git
cd gmdkit
pip install -e .
```

## Basic Usage

Importing, modifying a level and saving it:

```python
# import level
from gmdkit import Level

# import object
from gmdkit import Object

# import property mappings
from gmdkit.mappings import obj_prop

# import object functions
import…
