---
repo: "0sec-labs/0sec"
name: "0sec"
description: "[RESEARCH PREVIEW] The open cybersecurity harness - by the Swiss Applied AI Cybersecurity Research Lab."
readmeQualityOk: true
url: "https://github.com/0sec-labs/0sec"
homepage: "https://docs.0.security"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [71, 25]
topics: ["llm-agents", "security-research", "security-tools", "ai-security", "application-security", "autonomous-agents", "binary-analysis", "cve", "cybersecurity", "devsecops"]
stars: 27
forks: 4
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 3
createdAt: "2026-08-19T07:54:37Z"
lastCommitAt: "2026-08-30T09:25:18Z"
lastReleaseAt: "2026-08-29T23:30:58Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 47
maintainers: ["peaktwilight"]
openGraphImageUrl: "https://opengraph.githubassets.com/4973ce216e580ecf4a60838f8e27a5ca7612394ca365ed21f91bc2f0eccc20de/0sec-labs/0sec"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/0sec-aperture-white.svg">
  </picture>
</p>

  <strong>[RESEARCH PREVIEW] Your open & extensible AI cybersecurity team.</strong><br/>
  0sec finds vulnerabilities, creates working exploits, and writes the fix.
  Multi-model, multi-agent, but most importantly: yours.
</p>

  <sub>🇨🇭 Maintained by the Swiss Applied AI & Cybersecurity Research Lab · <a href="https://0.security">0.security</a></sub>
</p>

</p>

  <sub>Note: This project is currently in active development; features change daily! See <a href="#honest-limitations">Current limitations</a>.</sub>
</p>

</p>

## Install & Quick Start

```bash
curl -fsSL https://raw.githubusercontent.com/0sec-labs/0sec/main/install.sh | bash
0
```
The verified binary is installed to `~/.0sec/bin`. Prefer it when you want no
Node/Bun dependency. The optional `0sec-cli` npm launcher downloads the matching
verified release binary on first invocation when it is available on npm; use the
installer above if the registry does not yet offer it.

</p>

## What 0sec aims to cover

Most AI pentesting harnesses and tools stop at the web app layer to find and chain…
