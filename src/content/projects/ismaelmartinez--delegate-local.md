---
repo: "IsmaelMartinez/delegate-local"
name: "delegate-local"
description: "Claude Code skill that delegates summarisation, log triage, and bulk-text tasks to local models. Saves API tokens, keeps content on-device, hardware-aware model auditing."
readmeQualityOk: true
url: "https://github.com/IsmaelMartinez/delegate-local"
language: "Shell"
languages: ["Shell"]
languagePcts: [98]
topics: ["agent-skills", "apple-silicon", "claude-code", "claude-skill", "llm", "local-first", "local-llm", "mlx", "ollama", "on-device"]
stars: 7
forks: 2
openIssues: 10
closedIssues: 144
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-28T07:19:39Z"
lastCommitAt: "2026-10-07T10:31:21Z"
lastReleaseAt: "2026-05-27T09:25:38Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 56
maintainers: ["IsmaelMartinez", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee1fc44856a213554dd63eb83c14c21a855d64aef0d7809fb62499474c6cef4f/IsmaelMartinez/delegate-local"
---

# delegate-local

An agent skill that routes summarisation, triage, and bulk-text tasks to locally-installed models (Ollama or MLX) instead of the cloud API. Keeps content on-device, preserves the agent's context window, and uses `llmfit` to keep the model set current.

## 30-second quickstart

One linear path from nothing to a first delegated call:

```bash
# 1. Install the whole skill (SKILL.md + scripts/) into Claude Code, user-scoped
npx skills add IsmaelMartinez/delegate-local -a claude-code -g

# 2. Confirm at least one local model is installed and see how tiers route
bash ~/.claude/skills/delegate-local/scripts/audit-models.sh

# 3. (optional) Personalise commit style to this machine: it derives a
#    profile from your own git history, has you confirm or edit each value, and
#    writes nothing without confirmation. Run it from a repo that reflects your style.
bash ~/.claude/skills/delegate-local/scripts/onboard.sh

# 4. Make your first delegated call
git diff | bash ~/.claude/skills/delegate-local/scripts/delegate.sh prose "Summarise this diff in 3 bullets."
```

Step 2 requires [Ollama](https://ollama.com) (or [`mlx-lm`](https://github.com/ml-explore/mlx-lm) on Apple…
