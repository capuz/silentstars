---
repo: "SecurityRonin/issen"
name: "issen"
description: "Point it at disk + memory evidence; get a correlated, ATT&CK-mapped attack timeline. Rust DFIR orchestrator: one command ingests E01/EWF/VMDK/raw + memory dumps, parses NTFS/registry/EVTX/prefetch/LNK/SRUM/browser/Amcache + memory (processes, netstat, injection), correlates into a DuckDB super-timeline, scans threat-intel, and reports."
url: "https://github.com/SecurityRonin/issen"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["dfir", "digital-forensics", "forensics", "incident-response", "rust", "sigma", "threat-intelligence", "timeline", "yara", "memory-forensics"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-03-23T02:49:22Z"
lastCommitAt: "2026-06-26T23:41:49Z"
lastReleaseAt: "2026-06-26T07:19:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 48
maintainers: ["h4x0r"]
openGraphImageUrl: "https://opengraph.githubassets.com/b7e7d43bb6a14e8b04f1b2a3b1bdef8235cdaddabf837bff34bff7e6435700f3/SecurityRonin/issen"
---

alt="Issen — fast forensic triage for incident responders" width="640" />
       alt="Issen — fast forensic triage for incident responders" width="640" />
</p>

</p>

**One command turns disk + memory evidence into a correlated, ATT&CK-mapped attack narrative.**

Issen is the orchestration layer of the SecurityRonin forensic fleet — a multi-crate Rust workspace and the `issen` CLI. Hand it acquired evidence, and it auto-detects the container, triages the filesystem for the artifacts that matter, parses each one, and builds a single queryable timeline you can scan and report on.

---

```bash
# One command: ingest disk artifacts, parse memory dumps, correlate, and scan —
# in a single resumable pass. Auto-detects E01/EWF/VMDK/raw + memory dumps.
issen evidence.E01 memory.raw -o case.duckdb

# Read the result: the correlated attack narrative as text (or a shareable HTML report)
issen report case.duckdb --format text
```

One command takes a raw acquisition to a correlated attack narrative. No Python env, no dependency hell — one static binary.

---

## How it works

Issen ingests evidence from five independent source types, then correlates across all of them:

       alt="Issen…
