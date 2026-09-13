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
forks: 8
openIssues: 1
closedIssues: 5
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2025-10-06T06:54:14Z"
lastCommitAt: "2026-09-13T08:28:31Z"
lastReleaseAt: "2026-09-07T07:51:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 52
maintainers: ["seifreed"]
openGraphImageUrl: "https://opengraph.githubassets.com/be68f501ec2389ed44981fcc44c82fd268f015abbaf591f124aecaea4379e00b/seifreed/r2morph"
---

</p>

<h1 align="center">r2morph</h1>

  <strong>Metamorphic mutation engine with structured validation and reporting</strong>
</p>

</p>

</p>

---

## Overview

**r2morph** is a metamorphic mutation engine that applies tracked binary transformations with validation, rollback, and machine-readable reports. The `0.4.0-alpha.3` support contract is intentionally narrow: Linux ELF x86-64 is the official target. Other formats and architectures remain preview or experimental.

### Key Features

| Feature | Description |
|---------|-------------|
| **Tier 1 Passes** | NOP, instruction substitution, and register substitution on the official target |
| **Declared Support** | Linux ELF x86-64; preview and experimental targets are tracked separately |
| **4 Validation Modes** | Structural, runtime, symbolic (angr), CFG integrity |
| **Session Management** | Checkpoint/rollback system preserving binary state across mutation passes |
| **SARIF 2.1.0 Reports** | OASIS SARIF with MITRE ATT&CK taxonomy, fingerprints, code flows |
| **JSON Reports** | Documented schema, metadata, timing, gate evaluation |
| **Detection Suite** | Packer signatures, entropy analysis, pattern matching, similarity…
