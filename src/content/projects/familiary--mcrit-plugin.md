---
repo: "familiary/mcrit-plugin"
name: "mcrit-plugin"
description: "A plugin to use MCRIT from IDA Pro"
readmeQualityOk: true
url: "https://github.com/familiary/mcrit-plugin"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 5
forks: 2
openIssues: 1
closedIssues: 7
watchers: 0
contributors: 3
recentReleases: 6
createdAt: "2025-12-22T15:16:22Z"
lastCommitAt: "2026-10-22T08:51:29Z"
lastReleaseAt: "2026-10-15T20:46:00Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 83
maintainers: ["r0ny123", "danielplohmann", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2db96594e5e433cc9f93fccc608e5d0d37a2d6988fb91799428109722e62012c/familiary/mcrit-plugin"
---

# MCRIT Plugin

Client for [MCRIT](https://github.com/familiary/mcrit), the MinHash-based code similarity server, for IDA Pro, Binary Ninja and Ghidra. It exports your database as an SMDA report, uploads it, and shows matching blocks, functions and labels from the server next to your analysis.

- Block and function matches for the current cursor position
- Function overview with label import and conflict resolution
- Matching jobs against the whole server
- YARA string builder from a selection
- CFG view of remote matched functions

## IDA Pro

Requires IDA 9.0 or newer.

### Install with HCLI

```bash
python -m pip install --upgrade ida-hcli
hcli plugin install mcrit-ida
```

`hcli plugin upgrade mcrit-ida` and `hcli plugin uninstall mcrit-ida` work as usual.

Coming from 1.x: `hcli plugin upgrade` does not find 2.0.0, because 1.x was installed from the
repository's old home (`danielplohmann/mcrit-plugin`). Uninstall it, then install again:

```bash
hcli plugin uninstall mcrit-ida
hcli plugin install mcrit-ida
```

To install a local build instead:

```bash
python scripts/ida/package_plugin.py --repo . --output ../mcrit-ida.zip
hcli plugin install ../mcrit-ida.zip
```

In CI or a…
