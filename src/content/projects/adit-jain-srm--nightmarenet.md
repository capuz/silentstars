---
repo: "Adit-Jain-srm/NightmareNet"
name: "NightmareNet"
description: "Biologically-grounded adversarial training platform: cyclic Wake/Dream/Nightmare/Compress phases that accumulate model robustness without catastrophic forgetting. Dockerized, EU AI Act compliance reporting."
readmeQualityOk: true
url: "https://github.com/Adit-Jain-srm/NightmareNet"
homepage: "https://frontend-aj5.vercel.app"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [70, 27]
topics: ["adversarial-robustness", "adversarial-training", "deep-learning", "fastapi", "knowledge-distillation", "machine-learning", "nextjs", "nlp", "pytorch", "text-classification"]
stars: 40
forks: 57
openIssues: 48
closedIssues: 216
watchers: 0
contributors: 40
recentReleases: 2
createdAt: "2026-04-01T16:16:00Z"
lastCommitAt: "2026-07-24T06:09:38Z"
lastReleaseAt: "2026-07-23T15:56:17Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "funded", "fork_magnet"]
healthScore: 95
undervaluedScore: 55
maintainers: ["Adit-Jain-srm", "Jivan-Patel", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/beb2826f74bbf5503952cfdae7059db0e656131e63cd628353a7cbdfe7a743e9/Adit-Jain-srm/NightmareNet"
fundingLinks: ["GITHUB:https://github.com/Adit-Jain-srm"]
discussionCount: 1
---

# NightmareNet

**Autonomous Adversarial Robustness Training Platform**

*A cyclic adversarial training platform that continuously strengthens model robustness through the Wake → Dream → Nightmare → Compress learning cycle.*

</div>

---

# NightmareNet

### Zero-Install Research Sandboxes

**The first platform that actively improves model robustness through biologically-grounded training cycles.**

*Wake. Dream. Nightmare. Compress. Repeat.*

</div>

---

## The Problem

Production models silently degrade. Adversarial perturbations as small as a single token swap collapse model accuracy from 92% to 23% (Jin et al. 2020, *TextFooler*). Conventional adversarial training trades clean accuracy for robustness — and worse, it suffers from "robustness forgetting" (AAAI 2025, ICCV 2025), where each new training run erodes previously-acquired defenses. The EU AI Act Article 15 (fully applicable August 2, 2026) now mandates demonstrable robustness for high-risk AI systems, but no existing tool combines adversarial generation, forgetting prevention, compression, and orchestration into a single coherent workflow.

> [!NOTE]
> NightmareNet is not a runtime guardrail (Lakera) or evaluation…
