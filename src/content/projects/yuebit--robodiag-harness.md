---
repo: "YueBit/robodiag-harness"
name: "robodiag-harness"
description: "A diagnostic harness for ROS 2 robots."
readmeQualityOk: true
url: "https://github.com/YueBit/robodiag-harness"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 23
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-14T13:59:11Z"
lastCommitAt: "2026-11-26T15:25:24Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 43
maintainers: ["YueBit"]
openGraphImageUrl: "https://opengraph.githubassets.com/7f5a9c3ed2ec39d1e147f0be76e458e4cc541a11b010afa0e208d8f119136000/YueBit/robodiag-harness"
---

# RoboDiag Harness 🩺🤖

**A diagnostic harness for ROS 2 robots.**

**Official website:** <https://robodiag.cn>

Your robot is connected. But is it *healthy*?

Is telemetry arriving at the rate it should? Are the joints reporting sane values? Are the controllers actually running? And when something goes wrong, what evidence should you gather before you reach for a screwdriver?

RoboDiag puts robot telemetry, deterministic health checks, diagnostic history, and AI-assisted investigation into one terminal window.

The whole idea fits on one line:

```text
Robot → Evidence → Tests → Diagnosis
```

AI can help you decide what to look at and explain what the evidence means. But the measured data and the deterministic code stay the source of truth.

## What RoboDiag does

RoboDiag can look at the live ROS 2 graph, read standard `/diagnostics`, sample any topic over time, run deterministic health tests, and remember every result in SQLite.

On top of that sits an optional diagnostic agent that uses the *same* tools to gather evidence and explain it.

You can use it to:
