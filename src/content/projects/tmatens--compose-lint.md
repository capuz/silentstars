---
repo: "tmatens/compose-lint"
name: "compose-lint"
description: "Security-focused linter for Docker Compose files. Catches dangerous misconfigurations before they reach production. Grounded in OWASP and CIS Docker Benchmark."
readmeQualityOk: true
url: "https://github.com/tmatens/compose-lint"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["cis-benchmark", "container-security", "devops", "devsecops", "docker", "docker-compose", "github-actions", "hardening", "iac-security", "linter"]
stars: 49
forks: 1
openIssues: 4
closedIssues: 87
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-04-06T03:45:55Z"
lastCommitAt: "2026-08-18T04:09:27Z"
lastReleaseAt: "2026-04-23T11:17:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 36
maintainers: ["tmatens", "renovate[bot]", "jhomer-hscl"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1202463834/649a3822-910c-41e2-92c5-d979b8dfce5f"
---

# compose-lint

**Security-focused linter for Docker Compose files.** Catches dangerous misconfigurations before they reach production — and auto-fixes the unambiguous ones, dry-run first. Grounded in OWASP and the CIS Docker Benchmark.

Static-analysis checks for `docker-compose.yml` and `compose.yaml`, covering privileged containers, unpinned images, host-network sharing, sensitive bind mounts, hard-coded credentials, and more. Full rule documentation lives at **[tmatens.github.io/compose-lint](https://tmatens.github.io/compose-lint/)** (the same pages `--explain` prints offline).

In a scan of 5,417 public Docker Compose files on GitHub, **91% of those that parse had at least one security finding.** Nearly all skip basic capability restrictions, 49% run images without a pinned digest, and 64% bind ports to all interfaces. compose-lint catches these in CI before they ship. **[Read the full *State of Docker Compose Security* report →](https://tmatens.github.io/compose-lint/state-of-compose/)**

**What it catches:**

- Privilege flaws — `privileged: true`, missing `cap_drop`, `no-new-privileges` not set, root user, host namespace sharing
- Network exposure — wildcard port binds,…
