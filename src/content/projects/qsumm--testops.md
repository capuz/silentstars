---
repo: "qsumm/TestOPS"
name: "TestOPS"
description: "TestOPS all-in-one AI ops platform · By 一鸣 (WeChat official account: 一鸣AI编程)"
originalDescription: "TestOPS一站式AI运维平台 · By 一鸣（公众号：一鸣AI编程）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/qsumm/TestOPS"
language: "Python"
languages: ["Python"]
languagePcts: [77]
topics: ["aiops", "alerting", "fastapi", "incident-management", "llm", "monitoring", "root-cause-analysis", "devops"]
stars: 32
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-10-16T16:02:02Z"
lastCommitAt: "2026-11-12T11:37:48Z"
lastReleaseAt: "2026-10-28T07:57:09Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 70
undervaluedScore: 3
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/199435d06814d6b55ab9d76a4f93b6690da8103a80696b519d23523600f085d1/qsumm/TestOPS"
---

# TestOPS · AI Ops Monitoring Platform

**The alert fired, the AI has already investigated, and the chain of evidence is laid out in front of you.**

[English](https://github.com/qsumm/TestOPS/blob/HEAD/README.en.md) | **Simplified Chinese**

An open-source, self-hosted AI ops monitoring platform. A pull-based Agent takes over host and service monitoring (monitored machines need **zero inbound ports**). Alerts are consolidated into incidents, which are handed to a **diagnostic Agent that produces an evidence chain** and investigates autonomously. Remediation only runs within a whitelist and after passing **nine guardrails** for admission. **The AI is responsible for establishing the facts; the decision rests with people.**

| **82 seconds** | **10 minutes** | **0** |
|:---:|:---:|:---:|
| Alert refresh (three-way liveness probing) | Root-cause report with evidence chain produced | Inbound ports (pull-based Agent) |

*The figures above come from measurements of a real incident response (including the CONFIRMED conclusion and the full audit log).*

```bash
git clone https://github.com/qsumm/TestOPS.git && cd TestOPS
cp backend/.env.example .env   # Replace JWT_SECRET /…
