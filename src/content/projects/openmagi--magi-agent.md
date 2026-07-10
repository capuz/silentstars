---
repo: "openmagi/magi-agent"
name: "magi-agent"
description: "Open-source runtime for personal AI agents that can finish work reliably."
readmeQualityOk: true
url: "https://github.com/openmagi/magi-agent"
language: "Python"
languages: ["Python"]
languagePcts: [85]
stars: 8
forks: 0
openIssues: 3
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-05-07T11:51:27Z"
lastCommitAt: "2026-07-10T07:03:31Z"
lastReleaseAt: "2026-06-05T06:16:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 43
maintainers: ["kevin-hs-sohn"]
openGraphImageUrl: "https://opengraph.githubassets.com/c58f077616a680e5d27606bccfb4de1de4efb51370a5df16d830f80d53528e12/openmagi/magi-agent"
---

# Open Magi Agent

**A programmable AI agent that does real work under rules you author.**

[Website](https://openmagi.ai) ·
[CLI](https://github.com/openmagi/magi-agent/blob/HEAD/docs/cli/magi.md) ·
[What works today](https://github.com/openmagi/magi-agent/blob/HEAD/docs/what-works-today.md) ·
[Releases](https://github.com/openmagi/magi-agent/releases)

</div>

> **Early beta.** Under active development; expect rough edges.

Magi is a governed agent runtime built on ADK. The model proposes work; a
deterministic control plane you program decides which of those proposals become
state, evidence, side effects, or user-visible output. It runs locally, works
with any provider you bring, and is Apache-2.0.

## Install & quickstart

```bash
# 1. Install (Homebrew, prebuilt bottle)
brew install --force-bottle openmagi/tap/magi-agent

# 2. Set whichever provider key you have (auto-detected, one is enough)
export ANTHROPIC_API_KEY=...     # or OPENAI_API_KEY / GEMINI_API_KEY (GOOGLE_API_KEY)
                                 #    / FIREWORKS_API_KEY / OPENROUTER_API_KEY

# 3. Run the CLI, or serve the local dashboard
magi -p "Inspect this repository and summarize the runnable surfaces"…
