---
repo: "rushter/hexora"
name: "hexora"
description: "Static analysis of malicious Python code"
readmeQualityOk: true
url: "https://github.com/rushter/hexora"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
topics: ["python", "rust", "security", "security-audit", "security-tools"]
stars: 167
forks: 8
openIssues: 1
closedIssues: 0
watchers: 5
contributors: 2
recentReleases: 1
createdAt: "2025-08-02T19:10:44Z"
lastCommitAt: "2026-07-13T06:38:29Z"
lastReleaseAt: "2026-06-21T13:35:57Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 74
undervaluedScore: 28
maintainers: ["rushter", "claui"]
openGraphImageUrl: "https://opengraph.githubassets.com/c7e47c9b19de7dea57c498e6f553e98d8a2b1c7b776dfc66e9a9399787c07304/rushter/hexora"
---

# hexora

Hexora is a static analysis tool designed to detect malicious and harmful patterns in Python code.
It combines a rule-based static analysis engine with a machine-learned model that scores entire source files to classify them as malicious or benign.

It can be used to:

- Audit project dependencies to catch potential supply-chain attacks
- Detect malicious scripts found on platforms like Pastebin, GitHub, or open directories
- Analyze IoC files from past security incidents
- Audit new packages uploaded to PyPi.

# Examples

For output examples, please see [docs/examples.md](https://github.com/rushter/hexora/blob/HEAD/docs/examples.md) file.

# Installation

## Using Python

Requires Python 3.9+.

```bash
pip install hexora
```

Using uv:
```bash
uv tool install hexora
```

# Usage

```bash
hexora --help
```

## Audit single file

```bash
>  hexora audit test.py

warning[HX2000]: Reading from the clipboard can be used to exfiltrate sensitive data.
  ┌─ resources/test/test.py:3:8
  │
1 │ import pyperclip
2 │
3 │ data = pyperclip.paste()
  │        ^^^^^^^^^^^^^^^^^ HX2000
  │
  = Confidence: High
    Help: Clipboard access can be used to exfiltrate sensitive data such as…
