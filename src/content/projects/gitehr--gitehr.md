---
repo: "gitehr/gitehr"
name: "gitehr"
description: "The Git-based, decentralised, open-source, multi-contributor Electronic Health Record"
readmeQualityOk: true
url: "https://github.com/gitehr/gitehr"
homepage: "https://gitehr.org/"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
topics: ["decentralised", "ehr", "git", "opensource"]
stars: 6
forks: 4
openIssues: 14
closedIssues: 10
watchers: 1
contributors: 4
recentReleases: 4
createdAt: "2023-05-22T13:25:28Z"
lastCommitAt: "2026-10-06T10:42:09Z"
lastReleaseAt: "2026-07-22T11:46:53Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 88
undervaluedScore: 91
maintainers: ["pacharanero", "claude", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/90ea70b489a36684e544b5db9c65ff2fa6356e0c2bdbcdcabce4eebb6e018e66/gitehr/gitehr"
fundingLinks: ["GITHUB:https://github.com/bawmedical"]
---

# GitEHR

A Git-based, decentralised, multi-contributor Electronic Health Record system.

## Design Philosophy

1. **Git-based Storage**

   - Leverages Git's distributed nature and version control
   - Each change is tracked and auditable
   - Multiple contributors can work on the same record
   - Full history is preserved

2. **Immutable Journal Structure**

    - Clinical entries are stored in chronological order
    - Each entry is committed to Git as a chronological history
    - Git content-addresses commits and file blobs, making stored objects tamper-evident
    - A planned policy checker will enforce GitEHR-specific append-only and authorship rules

3. **Clear Data Organization**

   - `/journal` - Immutable chronological entries
   - `/state` - Current clinical state that may be updated
   - `/imaging` - Medical imaging and related data
   - `/.gitehr` - Configuration and internal data

4. **Security First**

   - A known Git history is tamper-evident through content-addressed hashing; authorship and rewrite protection require future controls
   - Encryption at rest is planned, not yet implemented (roadmap R67/R68)
   - Digital signatures are planned, not yet implemented…
