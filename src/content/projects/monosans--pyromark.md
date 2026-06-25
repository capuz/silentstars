---
repo: "monosans/pyromark"
name: "pyromark"
description: "Blazingly fast Markdown parser for Python written in Rust."
url: "https://github.com/monosans/pyromark"
homepage: "https://monosans.github.io/pyromark/"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [66, 33]
topics: ["converter", "html"]
stars: 43
forks: 3
openIssues: 2
closedIssues: 4
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2023-05-07T12:54:53Z"
lastCommitAt: "2026-06-25T06:41:02Z"
lastReleaseAt: "2023-12-12T13:11:38Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 55
maintainers: ["renovate[bot]", "monosans"]
openGraphImageUrl: "https://opengraph.githubassets.com/827afe5495088b7a6d5357240f78350e5477771315acf4db7beeb8ce832221ad/monosans/pyromark"
---

# pyromark

pyromark (stands for Python Rust Optimized Markdown) is a blazingly fast CommonMark-compliant Markdown parser for Python.

Uses [pulldown-cmark](https://github.com/raphlinus/pulldown-cmark) Rust crate under the hood.

## Installation

```bash
pip install -U pyromark
```

## Documentation

<https://monosans.github.io/pyromark>

## Basic examples

See documentation for more comprehensive examples.

### Convert Markdown to HTML

```python
import pyromark

html = pyromark.html("# Hello world")
assert html == "<h1>Hello world</h1>\n"
```

### Iterating over Markdown elements

```python
import pyromark

for event in pyromark.events("# Hello world"):
    # All event types are fully type annotated
    # so you will get static type checking
    # and Tab completions in your IDE!
    match event:
        case {"Start": {"Heading": {"level": heading_level}}}:
            print(f"Heading with {heading_level} level started")
        case {"Text": text}:
            print(f"Got {text!r} text")
        case {"End": {"Heading": heading_level}}:
            print(f"Heading with {heading_level} level ended")
        case other_event:
            print(f"Got {other_event!r}")
```

##…
