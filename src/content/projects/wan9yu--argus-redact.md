---
repo: "wan9yu/argus-redact"
name: "argus-redact"
description: "Encrypt PII, not meaning. Locally."
readmeQualityOk: true
url: "https://github.com/wan9yu/argus-redact"
homepage: "https://gateway.agilist.cn"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [64, 36]
topics: ["chinese-nlp", "gdpr", "llm", "llm-security", "pii", "pii-detection", "privacy", "pseudonymization", "python", "redaction"]
stars: 9
forks: 1
openIssues: 7
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-24T08:18:09Z"
lastCommitAt: "2026-07-11T05:56:39Z"
lastReleaseAt: "2026-03-27T06:10:26Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 85
undervaluedScore: 47
maintainers: ["wan9yu", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ddb33d9e3e53d69fa68afd48144f0f704e88efef1f7ce94ee92bbce057e97147/wan9yu/argus-redact"
---

# argus-redact

English · [中文说明](https://github.com/wan9yu/argus-redact/blob/HEAD/README.zh.md)

**Encrypt PII, not meaning. Locally.**

The privacy layer between you and AI. Your identity stays on your device — AI gets the meaning, not you.

Rated **[PRvL-Gold](https://github.com/wan9yu/argus-redact/blob/HEAD/docs/prvl-standard.md)** on the PRvL reference suite — see the spec for what it measures.

```python
from argus_redact import redact

redacted, key = redact("张三的电话是13812345678，身份证号110101199003074610", names=["张三"], lang="zh", salt=42)
print(redacted)
# expected: P-83811的电话是138****5678，身份证号ID-03292

print(sorted(key.items()))
# expected: [('138****5678', '13812345678'), ('ID-03292', '110101199003074610'), ('P-83811', '张三')]
```

```bash
pip install argus-redact
```

## Three Promises

| | Promise | How |
|-|---------|-----|
| 🛡️ | **Protected** — your PII never leaves your device | 3-layer local detection: regex → NER → local LLM |
| 🧠 | **Usable** — AI can still understand and help you | Pseudonym replacement preserves meaning and context |
| 🔄 | **Reversible** — substring-level inverse via per-message key | One-line `restore()` for verbatim LLM echoes; paraphrase / coref…
