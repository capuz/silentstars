---
repo: "provael/provael"
name: "provael"
description: "Provael — red-team open Vision-Language-Action (VLA) robot policies in simulation and report an Attack Success Rate (ASR). Prove it. Prevail."
readmeQualityOk: true
url: "https://github.com/provael/provael"
homepage: "https://www.provael.com"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["adversarial-attacks", "ai-safety", "lerobot", "libero", "llm", "red-team", "robot-learning", "robotics", "security", "smolvla"]
stars: 7
forks: 0
openIssues: 1
closedIssues: 12
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-06-03T04:31:41Z"
lastCommitAt: "2026-09-19T08:13:08Z"
lastReleaseAt: "2026-07-07T19:27:28Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 63
maintainers: ["sattyamjjain", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1257863851/8eef3d46-c56a-4cdb-b880-3c28c9bc47e2"
discussionCount: 0
---

</p>

# Provael™

> **Red-team open Vision-Language-Action (VLA) robot policies in simulation and get an Attack
> Success Rate.**

  </a>
</p>

**The finding.** Under a single `roleplay` instruction, a **real SmolVLA** policy left its safe
envelope on **44 of 50 matched pairs across all ten `libero_object` tasks (88%, task-clustered 95%
CI [72%, 100%]) against a benign control of 2/50 (4.0%, Wilson 95% [1.1%, 13.5%])** — and against
**0** benign twins at the same (task, seed), McNemar exact **p = 4.6e-13**, surviving Holm
correction across the six-arm screen. The headline interval is **clustered over *tasks*, not
episodes**, because episodes inside one task are correlated and pooling them reports an interval far
too narrow. The two numbers are quoted together because an attack-success rate is a difference
against that floor: read alone, 88% is a rate with no control arm.

**What the controls say it is** ([E-2026-12](https://github.com/provael/provael/blob/HEAD/docs/errata.md), 14 September 2026): the same frame
with **no target named** left the envelope in **27/30** cells and the same tokens in **scrambled
order** in **18/30**, against 0/30 for two meaning-preserving rewordings.…
