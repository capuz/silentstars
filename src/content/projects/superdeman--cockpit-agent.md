---
repo: "SuperdeMan/cockpit-agent"
name: "cockpit-agent"
description: "Cloud-edge collaborative AI agent for intelligent cockpits: on-device vehicle control in milliseconds, cloud-side declarative Multi-Agent and Skill/DAG orchestration, S2S real-time voice, voiceprint-based multi-user support, and HMI and Android dual clients. The LLM is responsible only for understanding and planning, while VAL handles deterministic, safe execution."
originalDescription: "面向智能座舱的云边协同 AI Agent：端侧毫秒级车控，云端声明式 Multi-Agent 与 Skill/DAG 编排，支持 S2S 实时语音、声纹多用户、HMI和Android双端；LLM 只负责理解与规划，VAL 负责确定性安全执行。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/SuperdeMan/cockpit-agent"
language: "Python"
languages: ["Python"]
languagePcts: [79]
topics: ["automotive-ai", "cloud-edge", "edge-ai", "grpc", "hmi", "intelligent-cockpit", "llm-agent", "multi-agent", "observability", "semantic-memory"]
stars: 21
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-29T13:21:34Z"
lastCommitAt: "2026-10-08T10:47:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 38
maintainers: ["SuperdeMan"]
openGraphImageUrl: "https://opengraph.githubassets.com/7806d1a7bbe277d9264b64e19408516aaf3f9f1c75b1dcf27445de7395b5bbab/SuperdeMan/cockpit-agent"
---

# Intelligent Cockpit Multi-Agent System · Cockpit Agent

> A cloud-edge collaborative AI agent system for intelligent cockpits. Say '小舟小舟' and everything from millisecond-level vehicle control to multi-day trip planning and minute-level deep research is handled through one voice entry point. The cockpit screen is the HMI, and the phone is the Android companion app '小舟随行'. Two user clients share one backend brain, so the same person can keep chatting from inside the car and outside it. The LLM is only responsible for understanding and planning, and a deterministic system carries out execution. No vehicle control command is issued directly by the LLM.

The cockpit HMI and the Android '小舟随行' client share the backend. It includes T0 / T1 / T2, domain agents, real providers, voice, memory, vehicle manual and observability pipelines. **It is currently a Phase 1 engineering PoC**, and vehicle control is verified by a simulated VAL. For release and verification figures, see [QA/release handoff](https://github.com/SuperdeMan/cockpit-agent/blob/HEAD/docs/reviews/2026-08-30-qa-closeout-handoff.md). Historical sample results are not treated as a commitment to cover all scenarios.

The next…
