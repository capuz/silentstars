---
repo: "0xSteph/patient-zero"
name: "patient-zero"
description: "Supply-chain attack scanner for the agent era. Triage in 30s with `npx patient-zero`, block malicious installs before postinstall runs, or drop into CI as a GitHub Action. Covers npm + Python + MCP agent configs. Free, MIT, no signup, no telemetry."
url: "https://github.com/0xSteph/patient-zero"
homepage: "https://www.npmjs.com/package/patient-zero"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["agent-security", "cli", "ioc-scanner", "javascript", "mcp", "npm", "pypi", "security", "shai-hulud", "supply-chain-security"]
stars: 9
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-05-14T05:49:53Z"
lastCommitAt: "2026-07-04T19:19:40Z"
lastReleaseAt: "2026-05-14T09:59:17Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 56
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/aa5edd435be9bd98989cb1b2295cf80d771c622c59a6a7646d5238c032785b11/0xSteph/patient-zero"
---

# patient-zero

Scans Node, Python, and AI-agent configs for indicators of compromise from npm and PyPI supply-chain attacks (Sept 2025 – present). Triage in 30 seconds, block malicious installs before postinstall runs, or wire it into your CI — same IoC database, three modes, one command.

```
$ npx patient-zero

Findings
────────

chalk maintainer phish (Sept 2025)
  ❌ CRITICAL · GHSA-demo-chalk
     Package: chalk@4.0.0 in package-lock.json
     What to do:
       • Run `npm ls chalk` to find which workspace pulls this version
       • Pin to a clean version (chalk@5.0.0+) in package.json and re-install
       • Rotate any tokens that were in env during the install window
     Commands:
       $ npm ls chalk
       $ npm install chalk@5.0.0
     Source: https://security.snyk.io/

Scanned 1 lockfiles · 234 processes · 2 MCP configs · 0 repos · 0 paths checked
0.02s · coverage 2025-09-08 → present · 7 families · 6 indicators · IoC: fresh
```

<details><summary>Or watch the 12-second animated demo</summary>

</details>

## Three ways to use it

### 1. On-demand triage — when the news breaks

```sh
npx patient-zero@latest
```

No global install, no signup, no config. Runs against…
