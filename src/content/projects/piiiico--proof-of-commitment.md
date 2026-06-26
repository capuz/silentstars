---
repo: "piiiico/proof-of-commitment"
name: "proof-of-commitment"
description: "Supply chain security risk scorer for npm, PyPI, Cargo, and Go — behavioral signals that can't be faked"
url: "https://github.com/piiiico/proof-of-commitment"
homepage: "https://getcommit.dev/audit"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
topics: ["mcp", "cli", "dependencies", "npm", "pypi", "security", "supply-chain", "github-action", "mcp-server", "software-supply-chain"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-03-22T15:03:07Z"
lastCommitAt: "2026-06-26T21:31:38Z"
lastReleaseAt: "2026-05-16T08:38:53Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 68
maintainers: ["piiiico"]
openGraphImageUrl: "https://opengraph.githubassets.com/2a8c8314bd3b7424ad634ca0d94403ef3dbac416c9e9d26876bac1aad83335c7/piiiico/proof-of-commitment"
discussionCount: 2
---

# Proof of Commitment

> **Stars lie. Behavioral signals don't.**

An MCP server and web tool that scores npm packages, PyPI packages, Rust crates, Go modules, and GitHub repos on **behavioral commitment** — signals that are harder to fake than stars, READMEs, or download counts.

```text
$ npx proof-of-commitment axios zod chalk lodash minimatch
Scoring 5 npm packages... done in 3.0s

Package      Risk          Score   Publishers   Downloads      Age    Provenance
chalk        🔴 CRITICAL   72      1            432.9M/wk      14.6y  —
minimatch    🔴 CRITICAL   78      1            634.1M/wk      14.9y  —
lodash       🔴 CRITICAL   80      1            158.9M/wk      14.1y  —
zod          🔴 CRITICAL   83      1            161.2M/wk      6.3y   🔐 verified
axios        🔴 CRITICAL   88      1            115.7M/wk      11.8y  🔐 verified
                ⚠ COMPROMISED — axios token theft (2026-03-30)

⚠  5 CRITICAL packages found.
   CRITICAL = sole npm publisher + >10M weekly downloads (publish-access concentration risk)
```

`npm audit` flags none of these. They're not vulnerabilities — they're attack-surface concentration. One stolen npm token, one phished maintainer, and a…
