---
repo: "tmatens/compose-lint"
name: "compose-lint"
description: "Security-focused linter for Docker Compose files. Catches dangerous misconfigurations before they reach production. Grounded in OWASP and CIS Docker Benchmark."
readmeQualityOk: true
url: "https://github.com/tmatens/compose-lint"
homepage: "https://tmatens.github.io/compose-lint/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["cis-benchmark", "container-security", "devops", "devsecops", "docker", "docker-compose", "github-actions", "hardening", "iac-security", "linter"]
stars: 63
forks: 6
openIssues: 3
closedIssues: 186
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2026-04-06T03:45:55Z"
lastCommitAt: "2026-10-30T11:02:48Z"
lastReleaseAt: "2026-04-23T11:17:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 40
maintainers: ["tmatens", "renovate[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1202463834/649a3822-910c-41e2-92c5-d979b8dfce5f"
---

# compose-lint

**Docker Compose security linter.** Catches dangerous misconfigurations in `compose.yml` before they reach production — and auto-fixes the unambiguous ones, dry-run first. Grounded in OWASP and the CIS Docker Benchmark.

In a scan of 11,111 public Compose files on GitHub, **99% had at least one security finding**, and more than one in four carried a literal credential. **[Read the *State of Docker Compose Security* report →](https://tmatens.github.io/compose-lint/state-of-compose/)**

**What it catches:**

- Privilege flaws — `privileged: true`, missing `cap_drop`, `no-new-privileges` not set, root user, host namespace sharing
- Network exposure — wildcard port binds, `network_mode: host`
- Supply-chain — unpinned images, missing digest pins
- Filesystem and credential leaks — Docker socket mounts, sensitive host paths, plaintext credentials in `environment:`

Zero config, sub-second whether you lint one file or a hundred, and grounded in the [OWASP Docker Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Docker_Security_Cheat_Sheet.html) and [CIS Docker Benchmark](https://www.cisecurity.org/benchmark/docker). Full rule docs at…
