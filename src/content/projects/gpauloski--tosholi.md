---
repo: "gpauloski/tosholi"
name: "tosholi"
description: "Read and write TOML config files with dataclasses"
url: "https://github.com/gpauloski/tosholi"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["configuration", "dataclasses", "python", "toml"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-09-22T21:44:54Z"
lastCommitAt: "2026-06-23T23:26:52Z"
lastReleaseAt: "2023-09-23T21:32:38Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 62
maintainers: ["gpauloski", "pre-commit-ci[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1da8d080acb96ac573e26d0c2ea54697d7873a97010ea7c5f1613063b3eb86d3/gpauloski/tosholi"
---

# Tosholi

Tosholi is a simple library for reading and writing TOML configuration
files using Python dataclasses. *Tosholi* means to interpret or translate and
comes from the Chickasaw and Choctaw languages.

## Installation

```bash
$ pip install tosholi
```

## Get Started

Create your configuration as a
[Python dataclass](https://docs.python.org/3/library/dataclasses.html).
Configuration dataclasses can be nested, but can only be made of
[TOML support types](https://docs.python.org/3/library/tomllib.html#conversion-table).

Consider the following `config.toml` that we want to read into a dataclass.
(This example is based on [toml.io](https://toml.io/en/)).

```toml
title = "TOML Example"

[owner]
name = "Tom Preston-Werner"
dob = 1979-05-27T07:32:00-08:00

[database]
enabled = true
ports = [ 8000, 8001, 8002 ]
temp_targets = { cpu = 79.5, case = 72.0 }

[servers]

[servers.alpha]
ip = "10.0.0.1"
role = "frontend"

[servers.beta]
ip = "10.0.0.2"
role = "backend"
```

We can describe the configuration format with dataclasses.

```python
from __future__ import annotations

import dataclasses
from datetime import datetime

@dataclasses.dataclass
class Owner:
    name: str
    dob:…
