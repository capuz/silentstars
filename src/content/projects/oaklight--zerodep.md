---
repo: "Oaklight/zerodep"
name: "zerodep"
description: "Zero-dependency, single-file Python implementations of popular libraries — benchmarked for performance parity | 零依赖单文件 Python 常用库实现，性能对标主流库"
readmeQualityOk: true
url: "https://github.com/Oaklight/zerodep"
homepage: "https://zerodep.readthedocs.io"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["aes", "benchmark", "http-client", "no-dependencies", "python", "python3", "qrcode", "single-file", "stdlib-only", "zero-dependency"]
stars: 11
forks: 1
openIssues: 7
closedIssues: 49
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-27T07:16:32Z"
lastCommitAt: "2026-07-16T06:00:25Z"
lastReleaseAt: "2026-04-15T14:33:46Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 52
maintainers: ["Oaklight", "github-actions[bot]", "elena-oaklight[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/239049ce96a2e1f05ff062cedf44b0821c787fb42c570b5b7d05fba724fe9323/Oaklight/zerodep"
---

# zerodep

Zero-dependency, single-file Python implementations of popular libraries — stdlib only, benchmarked for performance parity, Python 3.10+.

零依赖、单文件的 Python 常用库实现 —— 仅使用标准库，性能对标主流库，支持 Python 3.10+。

[English Docs](https://zerodep.readthedocs.io/en/) | [中文文档](https://zerodep.readthedocs.io/zh-cn/)

## Quick Start

```bash
pip install zerodep          # install the CLI
zerodep add yaml retry       # copy modules into your project
```

```python
from yaml import load, dump

data = load("name: Alice\nage: 30")
print(data)  # {'name': 'Alice', 'age': 30}
```

Each module is a **self-contained single `.py` file** — copy it into your project and import. No `pip install` needed at runtime.

## Modules

Modules span Agent Protocols, Web & Networking, Data Formats, Data Validation, Text & Markup, Search & Retrieval, Configuration, CLI & Terminal, Security, and Infrastructure & Tools.

See the [full module list](https://zerodep.readthedocs.io/en/latest/modules/) for details, versions, and benchmarks.

## Versioning

- **Project**: [CalVer](https://calver.org/) `YYYY.M.D` (e.g., `2026.4.15`)
- **Modules**: independent [SemVer](https://semver.org/) per module (e.g., `0.4.1`)

Releases…
