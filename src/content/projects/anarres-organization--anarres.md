---
repo: "anarres-organization/anarres"
name: "anarres"
description: "Open research and infrastructure for predicting how training environments shape model improvement."
readmeQualityOk: true
url: "https://github.com/anarres-organization/anarres"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["environment-selection", "language-models", "post-training", "reinforcement-learning", "research-software", "rlvr", "scaling-laws"]
stars: 5
forks: 0
openIssues: 7
closedIssues: 0
watchers: 0
contributors: 6
recentReleases: 4
createdAt: "2026-10-12T23:56:02Z"
lastCommitAt: "2026-11-11T19:46:58Z"
lastReleaseAt: "2026-11-11T05:32:28Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 77
undervaluedScore: 47
maintainers: ["madanva"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad047380031d2012561e8a98ad1a11bedf3e8bcdb3ffc1bb0eca1083c2d235c2/anarres-organization/anarres"
---

Anarres is an open-source toolkit and research program for predicting how
training environments shape model improvement. It qualifies task sources,
measures the experience they produce under a starting policy, compares
compatible candidates, and preserves the evidence behind each decision.

Equal post-training budgets can improve a model, do little, or make it worse.
Anarres makes those differences measurable before an expensive training run.

## Install

On macOS or Linux:

```bash
brew install anarres-organization/tap/anarres && anarres --version
```

The standalone installer is available when Homebrew is not:

```bash
curl --proto '=https' --tlsv1.2 -LsSf \
  https://github.com/anarres-organization/anarres/releases/latest/download/anarres-cli-installer.sh | sh
"${CARGO_HOME:-$HOME/.cargo}/bin/anarres" --version
```

Open a new terminal after the standalone installer updates `PATH`. If the shell
still cannot find the command, run `~/.cargo/bin/anarres --version` to confirm
the installation and follow the [PATH troubleshooting guide](https://github.com/anarres-organization/anarres/blob/HEAD/docs/releases.md#command-not-found).

Windows, pinned-version, archive, checksum, and…
