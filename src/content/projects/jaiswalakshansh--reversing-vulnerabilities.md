---
repo: "jaiswalakshansh/Reversing-Vulnerabilities"
name: "Reversing-Vulnerabilities"
description: "Reversing Vulnerabilities for Fun"
readmeQualityOk: true
url: "https://github.com/jaiswalakshansh/Reversing-Vulnerabilities"
language: "Shell"
languages: ["Shell", "Python", "PHP"]
languagePcts: [39, 30, 22]
stars: 16
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-30T11:20:54Z"
lastCommitAt: "2026-10-23T08:47:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 26
maintainers: ["jaiswalakshansh"]
openGraphImageUrl: "https://opengraph.githubassets.com/e2d42d5f4f627b4b7949128c2089fdb7ff3b9e51f48d8e1ea8a563aafe4b96c3/jaiswalakshansh/Reversing-Vulnerabilities"
---

# Reversing-Vulnerabilities

Hands-on labs that reverse-engineer publicly disclosed vulnerabilities: understand the
root cause and code flow, then reproduce the exploit end to end in a self-contained,
local Docker environment.

> For local, authorized, educational use only. Everything runs against your own
> machine. Never point any technique here at systems you don't own.

## Labs

| Lab | Vulnerability | Impact | Advisory |
|---|---|---|---|
| [GHSA-7hp6-4w63-5g45](https://github.com/jaiswalakshansh/Reversing-Vulnerabilities/blob/HEAD/GHSA-7hp6-4w63-5g45/) | LiteLLM — cross-domain reuse of the salt key | `internal_user` → `proxy_admin` → RCE (CVSS 9.9) | [GHSA-7hp6-4w63-5g45](https://github.com/BerriAI/litellm/security/advisories/GHSA-7hp6-4w63-5g45) |
| [CVE-2026-108097](https://github.com/jaiswalakshansh/Reversing-Vulnerabilities/blob/HEAD/CVE-2026-108097/) | Drupal core Field UI — render-array `#region_callback` injection | Unauthenticated RCE (CVSS 9.8) | [SA-CORE-2026-014](https://www.drupal.org/sa-core-2026-014) |
| [CVE-2026-109618-109619](https://github.com/jaiswalakshansh/Reversing-Vulnerabilities/blob/HEAD/CVE-2026-109618-109619/) | PHP core "PHP2Shell" — four…
