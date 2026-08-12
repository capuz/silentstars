---
repo: "kpdyer/fteproxy"
name: "fteproxy"
description: "programmable proxy for censorship circumvention"
readmeQualityOk: true
url: "https://github.com/kpdyer/fteproxy"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 155
forks: 19
openIssues: 0
closedIssues: 169
watchers: 14
contributors: 6
recentReleases: 0
createdAt: "2013-06-02T18:10:54Z"
lastCommitAt: "2026-08-12T05:15:07Z"
lastReleaseAt: "2014-04-06T20:41:09Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 99
undervaluedScore: 40
maintainers: ["kpdyer", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8d61b037ec07e3758c6735e08e16711e2a5646e943b14c656bd34a5eaa651ab8/kpdyer/fteproxy"
---

# fteproxy

* Homepage: https://github.com/kpdyer/fteproxy
* Source code: https://github.com/kpdyer/fteproxy
* Publication: https://kpdyer.com/publications/ccs2013-fte.pdf

## Overview

fteproxy provides transport-layer protection to resist keyword filtering, censorship and discriminatory routing policies.
Its job is to relay datastreams, such as web browsing traffic, by encoding the stream into messages that satisfy a user-specified regular expression.

fteproxy is powered by Format-Transforming Encryption [1] and was presented at CCS 2013.

[1] [Protocol Misidentification Made Easy with Format-Transforming Encryption](https://kpdyer.com/publications/ccs2013-fte.pdf), Kevin P. Dyer, Scott E. Coull, Thomas Ristenpart and Thomas Shrimpton

## Requirements

- Python 3.10 or higher

## Installation

### From PyPI

```bash
pip install fteproxy
```

### From Source

```bash
git clone https://github.com/kpdyer/fteproxy.git
cd fteproxy
pip install -r requirements.txt
pip install -e .
```

## Usage

### Architecture

fteproxy operates as a client-server proxy:

```
[Application] <-> [fteproxy client] <--FTE encoded--> [fteproxy server] <-> [Destination]
```

### Start the Server

On the…
