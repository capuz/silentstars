---
repo: "illsk1lls/MiniBot"
name: "MiniBot"
description: "An OpenAI compatible Powershell console client "
readmeQualityOk: true
url: "https://github.com/illsk1lls/MiniBot"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [100]
stars: 9
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-14T03:18:10Z"
lastCommitAt: "2026-07-25T05:59:58Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 39
maintainers: ["illsk1lls", "ByronScottJones"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa7a6b8f9a9da32d0cc78d6201a9c972b8c267d1ed199979fc01b06b7f21b34a/illsk1lls/MiniBot"
---

# MiniBot

**v2.35.1** — Local AI agent for Windows. Connect a PowerShell 5.1 host to any **OpenAI-compatible** model server and get a polished dark WPF workspace: chat, tools, approvals, and live media — on your machine.

</p>

MiniBot is a single-file agent harness: progressive tools, operator approvals for host changes, multi-endpoint model switching, connect recovery when the endpoint is down, and a UI built for day-to-day work.

---

## Highlights

| Area | Capability |
|------|------------|
| **Models** | llama.cpp, vLLM, Unsloth Studio, xAI Grok, and other OpenAI-compatible `/v1` servers |
| **Endpoints** | Primary `-BaseUrl` plus optional extras; per-endpoint auth: **API key**, **NPM Basic**, or **none** |
| **Connect** | If the default host is down (or `-BaseUrl` is empty), a **Connect** dialog collects URL + auth without hard-exiting |
| **UI** | Borderless dark WPF chrome, sticky status, tool-group chips, **PoweredBy** model/endpoint picker, approval strips |
| **Media** | Inline images, video, and audio via `` — external players only as a last resort |
| **Safety** | Auto-approve off by default; mutating actions require Yes / No / All |
| **Tools** | Progressive groups…
