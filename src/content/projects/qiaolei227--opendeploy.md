---
repo: "qiaolei227/opendeploy"
name: "opendeploy"
description: "Kingdee K3Cloud ERP AI agent for 金蝶 云星空 implementation and 二开 (secondary development), an intelligent agent (智能体)"
originalDescription: "kingdee k3cloud erp AI agent 金蝶 云星空 实施 二开 智能体"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/qiaolei227/opendeploy"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
stars: 28
forks: 8
openIssues: 4
closedIssues: 3
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-04-20T12:06:38Z"
lastCommitAt: "2026-10-30T10:23:46Z"
lastReleaseAt: "2026-06-05T07:04:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 34
maintainers: ["davidqiao", "haixiZ11", "qiaolei227"]
openGraphImageUrl: "https://opengraph.githubassets.com/234437362209826da170f801f18b436c9b7e3ccc5f4c62d221e6790cdbc20889/qiaolei227/opendeploy"
---

> An open-source AI agent for ERP implementation consultants — making "a one-person delivery team" possible.

[English](https://github.com/qiaolei227/opendeploy/blob/HEAD/README.md) | [简体中文](https://github.com/qiaolei227/opendeploy/blob/HEAD/README.zh-CN.md)

---

Most "AI assistant tools" today look like this:

> **Consultant**: The client wants an xxx feature.
>
> **AI**: Sure, I'll write the Python plugin.
>
> **Consultant**: ...but the field needs to be created in the system first, and the approval flow edited too.
>
> **AI**: That part's on you.

**What OpenDeploy aims to do: the whole thing, done by AI.**

## Demo

## Features

**LLM providers** (BYO API key): Claude · GPT · DeepSeek · Qwen · GLM · Kimi · Doubao · Hunyuan · MiniMax · Baichuan · Ollama (local)

**Kingdee Cloud Cosmic V9 customization** (BOS HTTP RPC end-to-end — never touches your database):

- **Create new metaobjects via BOS template inheritance** — 27 templates across 4 ModelTypes (BillForm / BaseDataForm / SysReport / DynamicForm), wire-equivalent to BOS Designer's "New Wizard → Template Inheritance" (**new in v0.2**)
- **SysReport (账表) filter parameters + columns config** — program-equivalent to BOS…
