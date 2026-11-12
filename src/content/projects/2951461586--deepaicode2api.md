---
repo: "2951461586/DeepAICode2API"
name: "DeepAICode2API"
description: "Reverse-engineers the upstream service of the DeepAI Code desktop client into a Go gateway compatible with both OpenAI and Anthropic protocols (including a batch registration pipeline and an embedded console)"
originalDescription: "把 DeepAI Code 桌面端的上游服务逆向成 OpenAI / Anthropic 双协议兼容的 Go 网关（含批量注册链路与内嵌控制台）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/2951461586/DeepAICode2API"
language: "Go"
languages: ["Go"]
languagePcts: [84]
stars: 69
forks: 42
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-11-06T04:45:34Z"
lastCommitAt: "2026-11-12T11:43:05Z"
lastReleaseAt: "2026-11-12T08:59:17Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 77
undervaluedScore: 39
maintainers: ["2951461586"]
openGraphImageUrl: "https://opengraph.githubassets.com/b449250fe4ec992889315c564f87cf50f09a210a334481cd2e1637037c26e174/2951461586/DeepAICode2API"
---

# DeepAICode2API

Reverse-engineers the upstream model service of the local **DeepAI Code desktop client** into an **OpenAI / Anthropic dual-protocol compatible Go gateway**.

It reuses the API Key that the desktop client writes after login, so no separate key needs to be applied for. Implemented with the pure Go standard library, it is about 10 MB as a single file with zero external dependencies.

> ℹ️ 0.3.19 restricted DeepAI Code inference to accounts that log in with **Google/Apple** (email-password accounts received `403 social_login_required`). **Retested on 2026-11-09: this restriction has been lifted.** Email-registered accounts again return 200 on `/theos` and on the inference endpoints (see `docs/recon.md` §4.1). The gateway still retains `blocked` terminal-state handling, so if the policy is tightened again, no code change is needed.

| Capability | Description |
| --- | --- |
| Dual protocol | OpenAI `/v1/chat/completions`, `/v1/responses`; Anthropic `/v1/messages` |
| Protocol alignment | Lane 4 + `X-DeepAI-Code-Instance` + `/theos` check-in; distinguishes `social_login_required` / `machine_required` / `lane_version_unsupported` |
| Pool governance | Round-robin by…
