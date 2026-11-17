---
repo: "seifreed/r2morph"
name: "r2morph"
description: "A metamorphic binary transformation engine based on r2pipe and radare2."
readmeQualityOk: true
url: "https://github.com/seifreed/r2morph"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["binary", "malware", "metamorphic", "obfuscation", "r2pipe", "radare2", "reverse-engineering"]
stars: 53
forks: 9
openIssues: 1
closedIssues: 5
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2025-10-06T06:54:14Z"
lastCommitAt: "2026-11-17T14:47:08Z"
lastReleaseAt: "2026-09-07T07:51:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 57
maintainers: ["seifreed"]
openGraphImageUrl: "https://opengraph.githubassets.com/905269c8698ce22bae3a59a53e354cfa01f5ede1c5982bf33c3eb8a241e45dd1/seifreed/r2morph"
---

---

## Overview

**r2morph** is a metamorphic mutation engine that applies tracked binary transformations with validation, rollback, and machine-readable reports. The `0.4.0-alpha.3` support contract is intentionally narrow: Linux ELF x86-64 is the official target. Other formats and architectures remain preview or experimental.

### Key Features

| Feature | Description |
|---------|-------------|
| **Tier 1 Passes** | NOP, instruction substitution, register substitution, instruction expansion, and block reordering on the official target |
| **Declared Support** | Linux ELF x86-64; preview and experimental targets are tracked separately |
| **4 Validation Modes** | Structural, runtime, symbolic (angr), CFG integrity |
| **Session Management** | Checkpoint/rollback system preserving binary state across mutation passes |
| **SARIF 2.1.0 Reports** | OASIS SARIF with MITRE ATT&CK taxonomy, fingerprints, code flows |
| **JSON Reports** | Documented schema, metadata, timing, gate evaluation |
| **Detection Suite** | Packer signatures, entropy analysis, pattern matching, similarity hashing |
| **Devirtualization** | VM handler analysis, MBA simplification (Z3-based) |

---

##…
