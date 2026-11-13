---
repo: "DNSZLSK/muad-dib"
name: "muad-dib"
description: "Real-time npm/PyPI supply-chain threat detection. Behavioral chain analysis, AST scanning, IOC feeds, and compound scoring engine."
readmeQualityOk: true
url: "https://github.com/DNSZLSK/muad-dib"
homepage: "https://www.npmjs.com/package/muaddib-scanner"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
topics: ["npm", "sarif", "security", "ast", "malware", "mitre-attack", "scanner", "shai-hulud", "shai-hulud2", "supply-chain"]
stars: 17
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-01T19:14:43Z"
lastCommitAt: "2026-11-13T18:30:51Z"
lastReleaseAt: "2026-02-10T19:24:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 87
undervaluedScore: 60
maintainers: ["DNSZLSK", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7af463fef6f09c86544e45a3b3065a6d2ed6c064d19a588197dfac9d07cc620e/DNSZLSK/muad-dib"
fundingLinks: ["GITHUB:https://github.com/DNSZLSK"]
discussionCount: 1
---

---

## Why MUAD'DIB?

npm and PyPI supply-chain attacks are exploding. Shai-Hulud compromised 25K+ repos in 2025. Existing tools detect threats but don't help you respond.

MUAD'DIB combines **22 parallel scanners** (274 detection rules), a **deobfuscation engine**, **inter-module dataflow analysis**, **compound scoring** (21 compound rules), and a gVisor/Docker sandbox to detect known threats and suspicious behavioral patterns in npm and PyPI packages. An XGBoost classifier exists in the codebase but is **currently inactive** (see [Evaluation](#evaluation)).

---

## Positioning

MUAD'DIB is a free, open, and fully auditable supply-chain scanner for npm and PyPI. It detects **known** threats (225,000+ IOCs), install-time RCE, credential-then-exfiltration flows, obfuscated payloads, and other suspicious behavioral patterns — locally, with no telemetry.

It is licensed under the **AGPL-3.0**; a **commercial license** is available for organizations that need to embed it in a proprietary product or run it as a closed hosted service (see [License](#license)).

It deliberately does not try to do everything — see [Scope](#scope) for exactly what it catches and what it does not.

---…
