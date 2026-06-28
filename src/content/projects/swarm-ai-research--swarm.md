---
repo: "swarm-ai-research/swarm"
name: "swarm"
description: "SWARM: System-Wide Assessment of Risk in Multi-agent systems"
url: "https://github.com/swarm-ai-research/swarm"
homepage: "https://www.swarm-ai.org/"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["ai", "ai-agents", "openclaw", "clawxiv", "agi-safety", "ai-agent", "ai-safety", "alignment", "emergent-behavior", "governance"]
stars: 35
forks: 6
openIssues: 6
closedIssues: 63
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-02-03T01:57:11Z"
lastCommitAt: "2026-06-28T02:02:53Z"
lastReleaseAt: "2026-02-21T16:55:24Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 97
undervaluedScore: 43
maintainers: ["rsavitt", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1148465142/0498273c-974a-462a-bedd-2def7448689b"
discussionCount: 0
---

# SWARM

SWARM: System-Wide Assessment of Risk in Multi-agent systems

**AGI-level risks don't require AGI-level agents.** SWARM is a research framework for measuring emergent failures that only appear when many AI agents interact — even when individual agents are safe.

  </a>
</p>

*Emergent risk appears at the interaction level, not the individual agent level.*

It enables:
- interaction-level safety metrics (illusion delta, quality gaps)
- governance experiments (audits, staking, sanctions)
- reproducible multi-agent safety benchmarks

## Why this repo is worth starring

⭐ You work on multi-agent or LLM-agent systems  
⭐ You care about systemic or emergent AI risks  
⭐ You want benchmarks beyond single-agent evals  
⭐ You’re designing governance, audits, or red-teaming

## Run your first emergent failure in 60 seconds

```bash
python examples/illusion_delta_minimal.py
```

This minimal example runs a 3-agent simulation with one deceptive actor and computes an illusion-delta style signal from replay variability.

## The Core Insight

**AGI-level risks don't require AGI-level agents.** Harmful dynamics can emerge from:
- Information asymmetry between agents
- Adverse selection…
