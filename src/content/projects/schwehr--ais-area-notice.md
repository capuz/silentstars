---
repo: "schwehr/ais-area-notice"
name: "ais-area-notice"
description: "Reference library for the IMO Circ 289 AIS Binary Message for timed zone messages"
readmeQualityOk: true
url: "https://github.com/schwehr/ais-area-notice"
homepage: "http://vislab-ccom.unh.edu/~schwehr/software/ais-areanotice-py/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 13
forks: 2
openIssues: 5
closedIssues: 3
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2010-09-07T15:16:42Z"
lastCommitAt: "2026-08-15T04:03:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 85
undervaluedScore: 65
maintainers: ["schwehr", "google-labs-jules[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2516516b7e68e34cf10a0cee16c3531a5c842001a917c6a55e6bf1ad489fa8f5/schwehr/ais-area-notice"
---

ais-areanotice-py by Kurt Schwehr

This is a reference implementation of the AIS Binary Messages described in the
IMO Circular 289 specification:

http://vislab-ccom.unh.edu/~schwehr/papers/2010-IMO-SN.1-Circ.289.pdf

IMO, Guidance on the Use of AIS Application-Specific Messages, IMO,
SN.1/Circ.289, Ref. T2-OSS/2.7.1, 2 June 2010.

This library started for just the area notice (aka Zone) to support the
Rightwhale AIS Project (RAP). Since then, the project is trying to include the
other messages defined in that document to help create a free and public test
set of messages to support other software projects.

Forks:

https://github.com/schwehr/ais-areanotice-py/tree/uscg8_367_22_area_notice
https://github.com/rolker/ais-areanotice-py/tree/an367

## Development

This project uses [`uv`](https://github.com/astral-sh/uv) for package and
dependency management.

### Installation

Install dependencies and create a virtual environment:

```sh
uv sync
```

### Running Tests

Run the test suite using `uv`:

```sh
uv run python -m unittest discover -s tests -p "*_test.py"
```

### Building

Build source and wheel packages:

```sh
uv build
```
