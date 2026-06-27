---
repo: "seifreed/yaraast"
name: "yaraast"
description: "A powerful Python library and CLI tool for parsing, analyzing, and manipulating YARA rules through Abstract Syntax Tree (AST) representation"
url: "https://github.com/seifreed/yaraast"
homepage: "https://github.com/seifreed/yaraast"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ast", "malware", "yara"]
stars: 53
forks: 5
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-08-02T06:38:41Z"
lastCommitAt: "2026-06-27T00:38:10Z"
lastReleaseAt: "2026-03-28T18:31:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 51
maintainers: ["seifreed"]
openGraphImageUrl: "https://opengraph.githubassets.com/f257cfd9d57d034db34d9807bc4eae57ab330131cd632687310c75c5b03cd79b/seifreed/yaraast"
---

</p>

<h1 align="center">yaraast</h1>

  <strong>Parse, analyze, and transform YARA rules with a Python AST toolkit</strong>
</p>

</p>

</p>

---

## Overview

**yaraast** is a Python library for parsing and manipulating YARA-family rules using Abstract Syntax Trees (AST). It supports classic YARA, YARA-L, and YARA-X workflows with automatic dialect detection and CLI tooling.

### Key Features

| Feature | Description |
|---------|-------------|
| **Multi-dialect Parsing** | Parse YARA, YARA-L, and YARA-X from files or strings |
| **Automatic Dialect Detection** | Unified parser auto-detects rule dialects |
| **AST Tooling** | Build, transform, diff, and serialize ASTs |
| **Formatting & Validation** | CLI commands for parse/format/validate workflows |
| **Streaming Support** | Parse very large files with streaming mode |
| **Ecosystem Integrations** | Optional LSP and libyara-related capabilities |

### Supported Rule Ecosystem

```text
Dialects   YARA, YARA-L, YARA-X
Parsers    Standard parser, unified parser, streaming parser
Outputs    YARA, JSON, YAML, AST tree views
Tooling    CLI, visitors, builders, serialization, semantic checks
```

---

## Installation

### From PyPI…
