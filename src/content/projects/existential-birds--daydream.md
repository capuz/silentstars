---
repo: "existential-birds/daydream"
name: "daydream"
description: "Agentic code-review CLI that records each review/fix/test run trajectory, building a corpus for fine-tuning open-weight models."
readmeQualityOk: true
url: "https://github.com/existential-birds/daydream"
homepage: "https://existentialbirds.com"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["cli", "code-review", "agent", "rlhf", "agentic-ai", "claude", "fine-tuning", "llm", "machine-learning"]
stars: 16
forks: 2
openIssues: 111
closedIssues: 121
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-02-01T06:30:58Z"
lastCommitAt: "2026-08-14T05:13:42Z"
lastReleaseAt: "2026-03-03T23:41:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 45
maintainers: ["anderskev", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fcc5bebbe68cf04e15cfa4d92bb7477cad5dcd343033c8efa5a1c123f29072e2/existential-birds/daydream"
---

# daydream

Daydream is a code-review agent that produces structured training data from its own runs. It reviews diffs using stack-specific [Beagle](https://github.com/existential-birds/beagle) skills, applies fixes, validates via test suite, and records every agent interaction as an [ATIF v1.7](https://www.harborframework.com/docs/agents/trajectory-format) trajectory. A bitemporal corpus pipeline then scores, labels, and projects those trajectories into JSONL datasets for SFT and RL fine-tuning.

The goal is an open-weight code-review model trained on daydream's own trajectory archive, benchmarked against commercial code-review bots on a held-out PR replay corpus.

## Quick Start

Requires Python 3.12.13+, [uv](https://docs.astral.sh/uv/), and [Claude Code](https://claude.ai/code) CLI.

```bash
git clone https://github.com/existential-birds/daydream.git
cd daydream
uv sync
```

Install the [Beagle](https://github.com/existential-birds/beagle) plugin:

```bash
claude plugin marketplace add https://github.com/existential-birds/beagle
claude plugin install beagle
```

Optional: [GitHub CLI](https://cli.github.com/) (`gh`) for PR feedback and `--comment` mode. [Codex…
