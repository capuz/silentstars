---
repo: "OWLZOPS/owlzops-mapper"
name: "owlzops-mapper"
description: "Agentless EDR-lite for Linux. One static Rust binary finds rootkits, reverse shells, container escapes and CIS gaps in under a second. Read-only, no agents, nothing left resident."
readmeQualityOk: true
url: "https://github.com/OWLZOPS/owlzops-mapper"
homepage: "https://owlzops.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["devops", "linux", "rust", "security", "sysadmin", "linux-server", "security-scanning", "devsecops", "edr", "forensics"]
stars: 6
forks: 1
openIssues: 2
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-21T16:34:04Z"
lastCommitAt: "2026-11-02T15:17:36Z"
lastReleaseAt: "2026-07-02T14:08:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 54
maintainers: ["drobit", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1276179924/e9f7736b-e21e-446e-9ced-5d0404f894f8"
discussionCount: 0
---

# owlzops-mapper

**One static Rust binary. Sub-second Linux + Docker audit. No agents, no Python, no kernel modules.**

Finds reverse shells, fileless malware, ghost PIDs (LKM rootkits), container escapes, dangerous defaults and CIS gaps — then exits cleanly. Nothing stays on the box. Nothing phones home.

```bash
curl -L https://github.com/OWLZOPS/owlzops-mapper/releases/latest/download/owlzops-mapper-linux-x86_64.tar.gz | tar xz
sudo ./owlzops-mapper audit
```

Prefer signature verification handled for you? See [Install](#install) — the install script checks SHA256 and GPG before it writes anything.

---

## Why this exists

Most scanners force you to choose:

| Tool | Typical trade-off |
|------|-------------------|
| **Lynis** | Excellent checklist, almost no live IoC or memory forensics |
| **osquery / Falco** | Powerful, but needs agents or eBPF and a heavier footprint |
| **chkrootkit / rkhunter** | Aging signatures, noisy false positives |
| **Trivy / kube-bench** | Strong on images and Kubernetes, weak on live host runtime state |

`owlzops-mapper` takes the opposite trade-off:

**one musl binary → drop via SSH → deep host + Docker state in seconds → gone.**

Built…
