---
repo: "brennhill/sloppy-joe"
name: "sloppy-joe"
description: "Shields against supply-chain, slopsquatting, and typosquatting attacks from dependencies and code."
readmeQualityOk: true
url: "https://github.com/brennhill/sloppy-joe"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 32
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-21T12:40:10Z"
lastCommitAt: "2026-10-23T08:47:30Z"
lastReleaseAt: "2026-04-17T06:14:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 39
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/87f7f6053548b1ee14bcb421ba394cd7375549848a38c34e6f81286ed3f0982f/brennhill/sloppy-joe"
---

---

> Compromised releases can use a legitimate package name. The [LiteLLM maintainer report](https://github.com/BerriAI/litellm-docs/blob/main/blog/security_update_march_2026/index.md) identifies malicious versions 1.82.7 and 1.82.8 in March 2026. sloppy-joe's default 72-hour publication-age gate can reject newly published versions when you scan the resolved dependency graph with `--ci` or `--full` **before installation**. This is a timing policy, not inspection of the malicious payload.

Research documents [package hallucinations in generated code](https://arxiv.org/abs/2406.10279). sloppy-joe checks dependency names and metadata before installation; existence alone cannot establish that a registered package is safe.

Package names are limited to 214 bytes for npm and 1,024 bytes for other ecosystems to bound typo-analysis work. Longer names report `Scan not supported` (exit 2).

## How to Use

```bash
# Install (single static binary, no runtime dependencies)
cargo install sloppy-joe

# Or download a prebuilt binary archive from GitHub Releases
# https://github.com/brennhill/sloppy-joe/releases

# Fast local guardrail — auto-detects ecosystem from manifest files
sloppy-joe…
