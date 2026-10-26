---
repo: "openctemio/openctem"
name: "openctem"
description: "Open-source Continuous Threat Exposure Management (CTEM) platform: asset discovery, attack surface management, risk-based prioritization, validation and remediation in one place. Go API + Next.js web UI."
readmeQualityOk: true
url: "https://github.com/openctemio/openctem"
homepage: "https://openctem.io"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [68, 27]
topics: ["appsec", "attack-path-analysis", "continuous-threat-exposure-management", "cybersecurity", "devsecops", "easm", "open-source", "postgresql", "risk-based-vulnerability-management", "security-tools"]
stars: 8
forks: 6
openIssues: 5
closedIssues: 3
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-02-04T19:37:00Z"
lastCommitAt: "2026-10-26T01:49:01Z"
lastReleaseAt: "2026-04-15T10:30:50Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 87
undervaluedScore: 67
maintainers: ["0xmanhnv", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/54191ce65551cb423608cf59adea2c7cf50f38a33ade4cce9f8d18d02a2110f5/openctemio/openctem"
discussionCount: 1
---

# OpenCTEM

Open-source Continuous Threat Exposure Management platform. This repository holds
the two parts that ship together:

| Directory | What | Image |
|---|---|---|
| [`api/`](https://github.com/openctemio/openctem/blob/HEAD/api/) | Go API server, migrations, admin CLI (module `github.com/openctemio/openctem/api`) | `ghcr.io/openctemio/openctem-api` |
| [`web/`](https://github.com/openctemio/openctem/blob/HEAD/web/) | Next.js web console | `ghcr.io/openctemio/openctem-web` |
| [`deploy/allinone/`](https://github.com/openctemio/openctem/blob/HEAD/deploy/allinone/) | API + web + gateway in one container (Postgres/Redis external) | `ghcr.io/openctemio/openctem` |

Released separately, in their own repositories:
[sensor](https://github.com/openctemio/sensor) (runs scans in your networks),
[sdk-go](https://github.com/openctemio/sdk-go),
[ctis](https://github.com/openctemio/ctis) (shared contract),
[ci](https://github.com/openctemio/ci) (CI/CD runner and pipeline integrations),
[sast-rules](https://github.com/openctemio/sast-rules) (the signed SAST rules pack for opengrep),
[helm-charts](https://github.com/openctemio/helm-charts),
[docs](https://github.com/openctemio/docs)…
