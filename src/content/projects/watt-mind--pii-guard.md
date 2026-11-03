---
repo: "watt-mind/pii-guard"
name: "pii-guard"
description: "Open-source privacy firewall for AI agents: masks personal data in text, tool calls and images before it reaches the LLM, and restores it in the answer. Built on Meta's open models; runs on-device."
readmeQualityOk: true
url: "https://github.com/watt-mind/pii-guard"
homepage: "https://guard.watt-mind.com"
language: "Python"
languages: ["Python"]
languagePcts: [82]
topics: ["ai-agents", "anonymization", "data-protection", "gdpr", "hungarian", "llm", "meta-ai", "ner", "openai-compatible", "pii"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-10-26T20:16:07Z"
lastCommitAt: "2026-11-03T11:15:08Z"
lastReleaseAt: "2026-11-03T06:07:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 61
maintainers: ["hdkiller", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5718c8aeee84124cd516d483516398da6a27adb9792c11cda4a13f4b728486bc/watt-mind/pii-guard"
---

# PII Guard

## Meta Global AI Developer Hackathon 2026: submission overview

| | |
|---|---|
| **Track · problem statement** | Startup · Push the Frontier |
| **Built** | From scratch during the hackathon window, Oct 26 – Nov 4, 2026 |
| **Demo** | [3-minute video](https://youtu.be/VrY8x3h26ws) · [try it as a guest](https://guard.watt-mind.com), no install or account · `uvx --python 3.12 --from wattmind-pii-guard pii-guard up` runs keyless with a mock model |
| **Bonus prizes in scope** | Best Build on Meta Open Weight Models · Best Agentic Use-Case |

**Meta models, what each does and where it runs** ([details](#which-meta-models-do-what)):

- **Muse Spark Open** (open weights, on Baseten Model APIs as `meta-models/muse-spark-open-1026`, or your own endpoint via `PII_GUARD_OCR_URL`): reads the text in every image so it can be masked. Without it the gateway refuses images. Also the optional audit-mode detector.
- **Muse Glimmer 30B** (open weights, served on Modal GPUs): the teacher. It labelled the training corpus for our XLM-RoBERTa detector, which now masks text on every request on CPU in 43 ms ([model](https://huggingface.co/watt-mind/pii-guard-ner-xlmr-base)).
- **Muse Spark…
