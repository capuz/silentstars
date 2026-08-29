---
repo: "icedracon/adhammer"
name: "adhammer"
description: "Active Directory security-assessment toolkit in Rust — PingCastle-class audit + authorized red-team validation, on a from-scratch DCE/RPC · NTLM · SMB2 · Kerberos stack. One static binary, from Kali or Windows."
readmeQualityOk: true
url: "https://github.com/icedracon/adhammer"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
topics: ["active-directory", "dcerpc", "kerberos", "pentesting", "rust", "security-tools", "adcs", "bloodhound", "infosec", "red-team"]
stars: 89
forks: 6
openIssues: 0
closedIssues: 2
watchers: 3
contributors: 2
recentReleases: 10
createdAt: "2026-07-17T11:15:38Z"
lastCommitAt: "2026-08-29T17:27:12Z"
lastReleaseAt: "2026-08-18T06:57:20Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 38
maintainers: ["icedracon"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1303908770/1150bc17-7a50-4d8f-9814-f7cd40c83d79"
fundingLinks: ["CUSTOM:https://github.com/icedracon/adhammer#-support"]
---

</p>

</p>

<h3 align="center">Open-source Rust · Active Directory pentest tool</h3>

  &nbsp;·&nbsp;
  &nbsp;·&nbsp;
  &nbsp;·&nbsp;
</p>

</p>

  <sub><b>validation ledger in <code>docs/VALIDATION.md</code></b> · <b>release notes in <code>CHANGELOG.md</code></b> · MIT</sub>
</p>

<br/>

## The idea

> **Evidence over assumption.** Collect the directory, trace the path, and validate supported findings with captured proof.

ADhammer collects the domain, graphs every control path that ends at Tier-0, then *proves* the interesting ones with the same protocol code the attacker would use. One continuous session from LDAP recon to a signed AS-REP on disk. Findings you can hand to a customer with the exact byte sequence that produced them.

<br/>

</p>

  <sub>The reference DA kill-chain demo, live against a hardened Server 2025 DC — under a minute on the lab environment.</sub>
</p>

<br/>

</p>

  <sub>Or the 30-second capability tour — audit, posture, Kerberoast, ADCS rule pack.</sub>
</p>

<br/>

## 🎯 Detect ≠ Validate

Most AD security tools stop at *"potential attack path detected."*

ADhammer keeps going.

```text
Finding detected
      ↓
Attack path constructed
      ↓…
