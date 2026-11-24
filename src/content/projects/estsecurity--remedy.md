---
repo: "ESTsecurity/remedy"
name: "remedy"
description: "ESTsecurity dedicated antivirus: a Windows · Linux tool that runs without installation to find, remediate, and revert specific threats"
originalDescription: "ESTsecurity 전용백신 — 설치 없이 실행해 특정 위협을 찾고 · 치료하고 · 되돌리는 Windows · Linux 도구"
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/ESTsecurity/remedy"
language: "Rust"
languages: ["Rust"]
languagePcts: [75]
stars: 6
forks: 2
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-11-01T15:45:17Z"
lastCommitAt: "2026-11-24T02:03:00Z"
lastReleaseAt: "2026-11-09T16:54:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 65
maintainers: ["jhpark844"]
openGraphImageUrl: "https://opengraph.githubassets.com/9cb93e3d7a7d2d25cca3ec7ecaf3dbe05a8a9714bbcb1616bd7a05ff315de8a5/ESTsecurity/remedy"
---

# remedy — ESTsecurity dedicated antivirus

A dedicated antivirus that runs without installation and can **find, remediate, and revert** specific threats. Used on Windows · Linux.

- **Shows before changing** — Scanning changes nothing. Remediation shows everything it will change and starts only after you approve.
- **Reversible** — Deleted files are quarantined and can be restored with the menu item *Restore to before remediation*.
- **No communication** — The scan and remediation executables have no network features, so they work on air-gapped networks. The *Remote check* item, which uses the network, is handled by the separately included `remedy-net`, and you are notified before you choose it.
- **Uses only signed rules** — Rule signatures are verified with the public key built into the executable.

## Quick start

1. **Download** — From [latest version](https://github.com/ESTsecurity/remedy/releases/latest), download one file for your platform.
   One file contains the program and the rules for that OS.
