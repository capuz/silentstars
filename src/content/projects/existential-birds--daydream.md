---
repo: "existential-birds/daydream"
name: "daydream"
description: "Agentic code-review CLI that records each review/fix/test run trajectory, building a corpus for fine-tuning open-weight models."
readmeQualityOk: true
url: "https://github.com/existential-birds/daydream"
homepage: "https://existentialbirds.com"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["cli", "code-review", "agent", "rlhf", "agentic-ai", "claude", "fine-tuning", "llm", "machine-learning"]
stars: 21
forks: 4
openIssues: 42
closedIssues: 648
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-02-01T06:30:58Z"
lastCommitAt: "2026-09-19T01:17:23Z"
lastReleaseAt: "2026-03-03T23:41:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 53
maintainers: ["anderskev", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/89f0759990731ea5bb370a4d25afaa64bfc1c3b76b8b7fd1707f978cde92dfcf/existential-birds/daydream"
---

# daydream

Daydream is an automated code-review agent. It reviews a code change, applies fixes, and runs the test suite to validate the result. It records every agent action as a structured trajectory.

The goal of daydream is an open-weight code-review model. Daydream trains this model on the trajectory archive that it collects from its own runs. Training is a staged recipe: reward construction, then SFT cold-start, then RFT (rejection fine-tuning), then online RL. Daydream benchmarks the model against commercial code-review bots on a held-out PR replay corpus.

## Requirements

Daydream requires the following tools:

- Python 3.12.13 or newer
- [uv](https://docs.astral.sh/uv/)
- The [Claude Code](https://claude.ai/code) command line interface

The following tools are optional:

- [GitHub CLI](https://cli.github.com/) (`gh`) for PR feedback and `--comment` mode
- [Codex CLI](https://openai.com/codex) for the `codex` backend
- [Pi CLI](https://pi.dev) for the `pi` backend
- Osprey CLI for the `osprey` backend

## Quick start

Clone the repository and install the `daydream` command:

```bash
git clone https://github.com/existential-birds/daydream.git
cd daydream
uv tool install…
