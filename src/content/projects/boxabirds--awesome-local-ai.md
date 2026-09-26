---
repo: "boxabirds/awesome-local-ai"
name: "awesome-local-ai"
description: "Various configurations for optimal Local AI usage. "
readmeQualityOk: true
url: "https://github.com/boxabirds/awesome-local-ai"
homepage: "https://ailocal.substack.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
topics: ["ai", "ai-local"]
stars: 31
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-16T12:28:20Z"
lastCommitAt: "2026-09-26T08:46:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 38
maintainers: ["boxabirds"]
openGraphImageUrl: "https://opengraph.githubassets.com/d57c32f64a22c47f983238d85ef1d37dc2718022f59aa17c047dac7a2494a522/boxabirds/awesome-local-ai"
---

# awesome-local-ai

One-command installers for running capable models **locally**, as an
OpenAI-compatible API with a coding agent already wired up.

Every combination is a *tested pairing* of model, hardware and stack. Every
performance and memory number in this repo was **measured on real hardware**,
not estimated — and where a figure is extrapolated, it says so.

```bash
git clone https://github.com/boxabirds/awesome-local-ai.git
cd awesome-local-ai
./install.sh             # picks the combination that suits this machine
./start.sh               # run the server; it stays up until you stop it
./start.sh --opencode    # or launch OpenCode against it, and let the server idle out
./start.sh --pi          # or Pi (pi.dev) instead
```

`install.sh` probes the host and reads the combinations tree, whose path
segments already encode the OS and memory tier each combination was measured
against. It shows what it chose and what else would have fit, then hands over
to that combination's own installer — which still qualifies the hardware with
measured thresholds and refuses with numbers if it falls short. Selection
narrows; qualification decides.

On an interactive terminal a bare…
