---
repo: "blisspixel/deepr"
name: "deepr"
description: "Open-source, multi-provider research automation with persistent experts, eval-based routing, and cost guardrails."
url: "https://github.com/blisspixel/deepr"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["agentic-ai", "ai", "ai-research", "autonomous-research", "deep-research", "knowledge-management", "openai", "research", "research-automation", "temporal-knowledge-graph"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 9
createdAt: "2025-07-06T20:29:01Z"
lastCommitAt: "2026-06-28T12:36:08Z"
lastReleaseAt: "2026-06-12T02:40:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 72
maintainers: ["blisspixel"]
openGraphImageUrl: "https://opengraph.githubassets.com/091732dabdf0f0106b295480fd1ba237e0b820595460a4924e94058edfa84ba1/blisspixel/deepr"
---

# Deepr

**Domain experts, not another chat window.**

Deepr turns research into durable understanding. A research run can become
reports, beliefs, gaps, contradictions, confidence, provenance, loop records,
and handoff payloads that humans or other agents can reuse later.

The core idea is simple: bring the capacity you already have, then route work to
the cheapest capable path.

- Local Ollama is the true `$0` marginal-cost path for quality-tolerant expert
  setup, absorb, sync, eval, and local-context workflows.
- Explicit plan-quota CLIs run on prepaid or subscription capacity only after
  deterministic no-surprise-bills checks.
- Cloud APIs remain the strongest full research path when you provide keys and
  a budget ceiling.

Deepr is useful when research is infrastructure: recurring expert maintenance,
batch research, citable knowledge for coding agents, and durable domain roles
that stay current over time.

```bash
# Preview route and cost before spending.
deepr research "What bottlenecks could constrain NVIDIA Blackwell deployment?" --auto --dry-run

# Run a bounded research job.
deepr research "Will open-weight frontier models erode AI enterprise margins by 2027?" --auto…
