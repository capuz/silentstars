---
repo: "mthamil107/prompt-shield"
name: "prompt-shield"
description: "Prompt-injection firewall for LLM applications — 33 input detectors, 9 output scanners, federated ed25519-signed threat-intel feed. Apache 2.0, 1040 tests, F1 96.0% with 0% false positives. Docker, GitHub Action, LangChain/LlamaIndex/CrewAI integrations."
readmeQualityOk: true
url: "https://github.com/mthamil107/prompt-shield"
homepage: "https://mthamil107.github.io/prompt-shield/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["agentic-ai", "ai-safety", "fastapi", "langchain", "llm-firewall", "llm-security", "mcp", "owasp", "prompt-injection", "python"]
stars: 16
forks: 8
openIssues: 3
closedIssues: 3
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-02-12T12:53:04Z"
lastCommitAt: "2026-09-23T08:46:46Z"
lastReleaseAt: "2026-04-20T06:53:11Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 86
undervaluedScore: 54
maintainers: ["mthamil107", "MohamedIdhries", "DYNOSuprovo"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1156257942/e6edfac9-892d-440a-9e41-c4d3035b46da"
discussionCount: 1
---

</p>

<h1 align="center">prompt-shield</h1>

  <strong>Secure your agent prompts. Detect. Redact. Protect.</strong>
</p>

</p>

  <code>pip install prompt-shield-ai</code>
</p>

  <sub>If prompt-shield helps you ship safer LLM apps, please ⭐ <a href="https://github.com/mthamil107/prompt-shield">the repo</a> — it helps other developers find the project.</sub>
</p>

  <sub>— the honest adoption metric. PyPI counts CI, mirrors, and scanners; this counts production subscribers polling the federated threat-intel feed. Subscribe in <a href="#federated-threat-intel-feed-v060">3 lines</a>.</sub>
</p>

---

The most comprehensive open-source prompt injection firewall for LLM applications. Combines **35 input detectors** (10 languages, 7 encoding schemes, Smith-Waterman sequence alignment for paraphrased attacks, structural many-shot detection, custom YAML rules, language enforcement, denied-topic policy, multi-turn topic drift, and — as of v0.7.5, opt-in — perplexity-CUSUM change-point analysis), **9 output scanners** (toxicity, code injection, prompt leakage, PII, schema validation, jailbreak detection, sentiment, bias/fairness, hallucination/grounding), a semantic ML classifier (DeBERTa)…
