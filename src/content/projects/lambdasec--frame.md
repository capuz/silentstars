---
repo: "lambdasec/frame"
name: "frame"
description: "Neuro-Symbolic Security Agent: detect, exploit, fix, verified"
readmeQualityOk: true
url: "https://github.com/lambdasec/frame"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["application-security", "entailment", "hip", "hoare-logic", "program-analysis", "s2s", "sast", "sat", "sat-solver", "separation-logic"]
stars: 15
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-11-16T04:29:18Z"
lastCommitAt: "2026-07-16T06:00:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 49
maintainers: ["claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/0018b80b1c139e2eb1ab2d7f47b5ac4d8eaf155c87d3a3672406cda89eff6f00/lambdasec/frame"
---

<strong>Neuro-symbolic security agent: detect, exploit, fix — proven, not probable</strong>
  </p>
  </p>
</p>

---

Frame is a **neuro-symbolic security agent**. A sound static-analysis core — taint analysis plus separation-logic verification with Z3 — is fused with an LLM layer in one loop: the model proposes, the sound core disposes.

It runs the whole loop end to end: **detect** vulnerabilities across 5 languages, **exploit** them with a working proof-of-concept against a live target, **fix** the code, and **verify** the bug is gone. Symbolic findings are proven, not guessed; LLM findings are tiered separately so the two are never confused. On independent real-world benchmarks Frame is competitive with commercial AI-SAST vendors, and it scores 80%+ on the synthetic OWASP suites. The LLM layer runs on any OpenAI-compatible endpoint, on-device if you want.

## Highlights

**Real-world security benchmarks.** Frame is competitive with commercial AI-SAST vendors, validated on five independent datasets with published ground truth — spanning detection, exploitation, and remediation on real applications. Every Frame number uses open models (local Qwen via mlx-optiq, or hosted…
