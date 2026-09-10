---
repo: "Bergschloss/Refine-Cycle-for-Hermes-Agent"
name: "Refine-Cycle-for-Hermes-Agent"
description: "Self-improvement loop for Hermes Agent: reads its own trajectory, proposes and applies the smallest skill/memory edit (create/patch), journaled with rollback. /refine command, refine_run tool, on_session_end hook."
readmeQualityOk: true
url: "https://github.com/Bergschloss/Refine-Cycle-for-Hermes-Agent"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["ai-agent", "continuous-learning", "hermes-agent", "hermes-plugin", "nous-research", "python", "self-improving-agent"]
stars: 32
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-08-06T08:15:04Z"
lastCommitAt: "2026-09-10T05:57:49Z"
lastReleaseAt: "2026-09-08T06:32:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 40
maintainers: ["Bergschloss"]
openGraphImageUrl: "https://opengraph.githubassets.com/c48f5124f9e311af013457ab4f178bd5fc9c8370fbcce20959dd58f6395ad396/Bergschloss/Refine-Cycle-for-Hermes-Agent"
discussionCount: 0
---

# Refine Cycle for Hermes Agent

**Your agent keeps repeating the same mistake. This makes it stop.**

**Refine Cycle** looks across recent sessions, finds those repeating problems, and
saves one small lesson when the evidence is strong enough. Later, it checks
whether the same problem came back.

**Cross-session by design.** Hermes can learn from the conversation in front of
it, but some problems return across different sessions: the same failed command,
the same wrong assumption, the same workaround you have to explain twice.

Underneath: errors are fingerprinted into comparable shapes, recurrence is
counted **within and across sessions**, and every mutation is journaled before it
runs.

It adapts the `/refine` concept from
[Prime Intellect's Prime Agent](https://www.primeintellect.ai/blog/prime-agent)
(Continual Harness) to the Hermes plugin system.

[**Install on your Hermes host →**](#installation)

## A simple three-step loop

1. **Notice what keeps going wrong.** One bad result may be noise. A problem seen
   in two sessions or five times is a pattern worth examining.
2. **Save the smallest useful lesson.** It can add a short memory,
   create or improve a reusable skill,…
