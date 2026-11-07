---
repo: "lvaoliveira/sonda"
name: "sonda"
description: "Open-source static analysis and quality gates for JavaScript/TypeScript, Python, Java and C/C++"
readmeQualityOk: true
url: "https://github.com/lvaoliveira/sonda"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-10-29T07:53:01Z"
lastCommitAt: "2026-11-07T10:36:11Z"
lastReleaseAt: "2026-11-06T13:22:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 53
maintainers: ["lvaoliveira", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b4979366b4d45e8f3f886337110582b30bc500fefc10dfed6d3b75ee5d1d44f/lvaoliveira/sonda"
---

# sonda

Open-source static analysis and quality gates, in the spirit of SonarQube, as a single fast binary.

sonda scans JavaScript/TypeScript, Python, Java, C/C++, C# and Rust code for bugs, vulnerabilities and code smells. It measures size, complexity, duplication and coverage, and fails your CI build when **new code** does not meet your quality gate.

```
$ sonda scan . --new-code origin/main --coverage coverage/lcov.info

src/payments/refund.js
*   42:9    MAJOR     Bug            js/eqeqeq                        Use '===' or '!==' instead.
*   88:3    CRITICAL  Code smell     common/cognitive-complexity      Refactor 'applyRefund' to reduce its cognitive complexity from 23 to the 15 allowed.

Summary (new code = changes since origin/main, marked *)
  Files 170 · Lines of code 29123 · Functions 3836 · Complexity 6756
  Bugs 3 (1 new) · Vulnerabilities 0 (0 new) · Code smells 307 (12 new)
  Duplication 1.6% · Coverage 71.3% (new code 84.0%) · Debt 8d 4h

Quality gate: FAILED
  ✗ fails if new_bugs > 0 (actual: 1)
  ✓ fails if new_vulnerabilities > 0 (actual: 0)
  ✓ fails if new_coverage < 80 (actual: 84)
  ✓ fails if new_duplicated_lines_density > 3 (actual: 0.4)
  – fails if…
