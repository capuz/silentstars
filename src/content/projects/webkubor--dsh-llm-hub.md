---
repo: "webkubor/dsh-llm-hub"
name: "dsh-llm-hub"
description: "Fills in the missing half of the official adapter on DSH's model page: gateway reachability detection, model directory fetching with selection write-back, persistent balance/quota display, and visible protocol and access address. Zero runtime dependencies, no modifications to DSH installation."
originalDescription: "给 DSH 模型页补上官方适配器缺的那半：网关可达性探测、模型目录拉取并勾选写回、余额/配额常驻、协议与接入地址可见。零运行时依赖，不改动 DSH 安装。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/webkubor/dsh-llm-hub"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["deepseek", "deepseek-harness", "dsh", "dsh-plugin", "anthropic-api", "deepseek-harness-plugin", "devtools", "llm", "model-catalog", "openai-api"]
stars: 12
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-13T16:00:51Z"
lastCommitAt: "2026-09-23T08:47:47Z"
lastReleaseAt: "2026-09-15T06:41:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 56
maintainers: ["webkubor", "lunove"]
openGraphImageUrl: "https://opengraph.githubassets.com/c382c7420dae3e5cd8920a861e774088454091abf3baebb2b1a3bc4b5d5b8249/webkubor/dsh-llm-hub"
---

</p>

</p>

  &nbsp;·&nbsp; <a href="README.en.md">English</a> · <a href="CHANGELOG.md">Changelog</a>
</p>

DSH's model page is missing half of what the official adapter should do. This plugin fills in the gap:

| | Official Adapter | dsh-llm-hub |
|---|---|---|
| What models does DeepSeek have | Can't see | **One-click fetch available models** |
| How much balance is left in account | Can't see | **Balance card + threshold alert** |
| Whether gateway works and how fast | Button click has no response | **Actual latency and status + health dashboard** |
| How many models on the gateway | Can't see | **Tested: 71 models** (manual entry only has 11) |
| Why detection fails | No hint | **Clearly states 'baseURL not configured'** |
| How many tokens spent this month | Not available | **Usage statistics + top 5 most-used models + CSV export** |
| Unavailable providers still in dropdown | Still appears | **Silently removed from dropdown, marked red on card + reason** |
| External agent CLI (codex/claude/agy) | Regardless of install, no impact | **If installed, sub-agent tools appear** |

  <br />
  <sub>After installation, the model page: each provider card has an additional line below —…
