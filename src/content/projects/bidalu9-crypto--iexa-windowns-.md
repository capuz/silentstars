---
repo: "bidalu9-crypto/IEXA-windowns-"
name: "IEXA-windowns-"
description: "Intelligent agents for PC terminals"
originalDescription: "Intelligent agents for PC terminals"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/bidalu9-crypto/IEXA-windowns-"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [48, 30]
stars: 21
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-11T08:36:35Z"
lastCommitAt: "2026-10-19T09:14:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 68
undervaluedScore: 39
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/309fa3b4f0e53c333251e5f12f93155af6dcb1b5112163247777d3fd15aea397/bidalu9-crypto/IEXA-windowns-"
---

# IEXA-WIN

> IEXA-WIN is the **Windows desktop version** of the [IEXA](https://IEXA.app) iOS / Android app, bringing mainstream AI models into a native desktop experience, with support for a real shell, filesystem access, web page fetching, cross-session memory, and multi-device sync.

---

## 2026-09-13 Security and Runtime Update

Details of this fix are in the [remediation delivery record](https://github.com/bidalu9-crypto/IEXA-windowns-/blob/HEAD/docs/REMEDIATION_2026-09-13.md), and build details are in the [reproducible build notes](https://github.com/bidalu9-crypto/IEXA-windowns-/blob/HEAD/docs/RENDERER_BUILD_REPRODUCIBILITY.md).

- `start.bat` / `npm start` only listen on the loopback address and open the workbench directly, no longer requiring a one-time login code. Electron still automatically establishes an HttpOnly session, while programmatic APIs and test servers still use explicit Bearer/Cookie identity.
- By default, HTTP only listens on the loopback address. The phone bridge enables HTTPS separately. On first connection, either trust the `iexa-bridge-certificate.crt` exported from the workspace on the phone, or specify a trusted certificate via `IEXA_TLS_CERT` /…
