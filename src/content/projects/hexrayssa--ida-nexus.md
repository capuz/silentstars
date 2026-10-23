---
repo: "HexRaysSA/ida-nexus"
name: "ida-nexus"
description: "⚠️ Experimental ⚠️ IDA Nexus allows multiple clients to seamlessly share and operate on IDA databases."
readmeQualityOk: true
url: "https://github.com/HexRaysSA/ida-nexus"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["experimental"]
stars: 150
forks: 5
openIssues: 22
closedIssues: 32
watchers: 4
contributors: 8
recentReleases: 10
createdAt: "2026-05-13T20:43:34Z"
lastCommitAt: "2026-10-23T12:05:41Z"
lastReleaseAt: "2026-08-13T13:40:58Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 89
undervaluedScore: 30
maintainers: ["mrexodia", "github-actions[bot]", "thebabush"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f0053bdb8d28f62f8ffeffb0dcd5d6f0ddefb9915f25f7346f1f2f3453ada54/HexRaysSA/ida-nexus"
---

# IDA Nexus

⚠️ Experimental prerelease ⚠️

IDA Nexus allows multiple clients to seamlessly share and operate on IDA databases.

Consumers of the IDA Nexus library will transparently discover and share databases
already open in the IDA GUI, or start a managed idalib worker when necessary.
The goal is to enable an ecosystem where many tools can freely operate on a single IDB together.
To achieve this, IDA Nexus exposes a compact Python execution surface with the
[`ida-domain`](https://github.com/HexRaysSA/ida-domain) API available.

## IDA plugin

Install the plugin so IDA Nexus can share databases that are open in the IDA
GUI, and so headless workers run in IDA's own Python:

```bash
uvx ida-hcli plugin install https://github.com/HexRaysSA/ida-nexus
```

With the plugin installed, a new headless worker is an `idat` process: IDA
opens the database itself and plugins find the packages hcli installed for
them. `DatabaseOpenOptions(gui=True)` opens a new database in the IDA GUI
instead; that window belongs to the user and stays open when clients leave.

Without the plugin, workers run through idalib in the client's own Python, so
plugins that need packages installed for IDA cannot…
