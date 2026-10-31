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
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-26T20:16:07Z"
lastCommitAt: "2026-10-31T15:57:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 49
maintainers: ["hdkiller"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb22e9ec99c8082308c99d62476fb901768787121944208acd294cdd30ec530a/watt-mind/pii-guard"
---

# PII Guard

- **What it does.** An OpenAI-compatible gateway for AI agents. Change one base URL, and the names, addresses, IDs and faces it detects become reversible placeholders (`[[PERSON_7f3a]]`) before the request leaves. The real values come back in the answer, mid-stream and inside tool calls. Detection is rules plus a small NER that runs on CPU: XLM-RoBERTa base, distilled from Meta's Muse Glimmer 30B.
- **How well.** On 990 fictional agent-traffic documents (de, en, hu), 0.2% of personal values reached the model and 0.7% of masks hit text that was not personal data. The lowest-leak alternative, PrivAiTe, leaked 2.4% and over-masked 35.2% on the same documents.
- **How fast.** The NER takes 43 ms per message on a laptop CPU (p50; p95 50 ms, [measurement](https://github.com/watt-mind/pii-guard/blob/HEAD/eval/results/2026-10-30-lab-1625-ner-v42/latency-cpu-local.json)). No LLM call and no API cost in fast mode.
- **Where your data goes.** In fast mode, the default (rules plus the on-device NER, no LLM call), the original text is processed only on your machine. The hosted demo receives what you type, so use fictional data there. The optional audit and SAM 3.1 endpoints…
