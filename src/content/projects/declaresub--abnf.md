---
repo: "declaresub/abnf"
name: "abnf"
description: "Python parser generator for ABNF grammars"
readmeQualityOk: true
url: "https://github.com/declaresub/abnf"
language: "Scilab"
languages: ["Scilab", "Python"]
languagePcts: [44, 39]
stars: 54
forks: 13
openIssues: 2
closedIssues: 60
watchers: 3
contributors: 7
recentReleases: 5
createdAt: "2020-04-10T22:48:13Z"
lastCommitAt: "2026-10-04T10:02:18Z"
lastReleaseAt: "2026-08-24T14:00:19Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "release_machine"]
healthScore: 97
undervaluedScore: 60
maintainers: ["declaresub", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/084c24fc5a5da95d35eaf62534e474d9a277459478a3fb1da088dad363193dd1/declaresub/abnf"
---

# ABNF

ABNF generates parsers from ABNF grammars as described in
[RFC 5234](https://tools.ietf.org/html/rfc5234) and
[RFC 7405](https://tools.ietf.org/html/rfc7405). Its main purpose is parsing data
specified in RFCs — HTTP headers, email addresses, URIs, and the like — but it
handles any ABNF grammar. It ships with 30+ ready-to-use grammar modules for common
RFCs and has been in production use since it was first written for parsing HTTP
headers in a web framework.

## Installation

```console
pip install abnf
pip install 'abnf[rust]'   # optional Rust backend, for substantially faster parsing
```

ABNF is tested with Python 3.10–3.14.

## Quick start

```python
from abnf.grammars import rfc7232

# parse an ETag header value
node, offset = rfc7232.Rule("ETag").parse('W/"moof"', 0)
print(node.value)          # 'W/"moof"'

# validate a whole string against a rule (raises ParseError otherwise)
from abnf.grammars import rfc5322
rfc5322.Rule("address").parse_all("test@example.com")

# compile your own rule; the RFC 5234 core rules are always available
from abnf import Rule
greeting = Rule.create('greeting = "hello" SP 1*ALPHA')
greeting.parse_all("hello world")
```

## Parsing bytes…
