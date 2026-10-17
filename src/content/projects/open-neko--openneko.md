---
repo: "open-neko/openneko"
name: "openneko"
description: "Ask your business anything. Open-source operating intelligence that reads your data, answers questions, and acts within your rules. Apache 2.0."
readmeQualityOk: true
url: "https://github.com/open-neko/openneko"
homepage: "https://openneko.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [80]
topics: ["ai", "business-intelligence", "context-engineering", "harness-engineering"]
stars: 18
forks: 2
openIssues: 3
closedIssues: 12
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-05-06T06:00:29Z"
lastCommitAt: "2026-10-17T07:59:02Z"
lastReleaseAt: "2026-05-20T06:22:58Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 47
maintainers: ["amitdeshmukh", "open-neko-release-please[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c826a82eca5b3511d4a59192568de5b9832c818e801141b43dcd89c7b991692b/open-neko/openneko"
---

# OpenNeko

**OpenNeko watches your business data, flags what's worth a look, and drafts the next action — for you to approve.** Self-hosted, on your infrastructure, with whichever LLM you prefer.

> The intelligence is rented; the findings, rules, and decisions are yours. Models keep changing — the memory of how your business actually runs (promises, exceptions, baselines, decisions) shouldn't live inside the vendor that rents you the model. OpenNeko keeps the agent **and** that memory on your infrastructure.

## Quickstart

You'll need **Docker** and **one LLM provider API key**.

```bash
curl -fsSL https://openneko.app/install.sh | sh
mkdir -p ~/openneko && cd ~/openneko
openneko setup --mode demo
```

The installer detects your OS/arch (Homebrew on macOS, a checksum-verified release binary on Linux) and checks for Docker. `openneko setup` then runs preflight checks, brings up the stack, and walks you through configuration **right in the terminal** — admin password, data source, model provider + key. Prefer a browser? Choose **browser** at the first prompt (or pass `--skip-onboarding`) to finish the wizard at [http://localhost:3000](http://localhost:3000).

The demo seeds three…
