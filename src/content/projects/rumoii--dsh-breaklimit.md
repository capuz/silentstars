---
repo: "rumoii/dsh-breaklimit"
name: "dsh-breaklimit"
description: "A jailbreak plugin for DeepSeek Harness: it strips the host's prompt restrictions and approval gates so the assistant does what you asked instead of refusing or asking permission mid-task. Patches are individually selectable and revert cleanly."
originalDescription: "为 DeepSeek Harness 设计的破限插件：卸掉宿主的提示词限制和审批拦截，让助手照你说的做，不半路拒绝、不反复请示。补丁逐条可选，随时还原原版。 A jailbreak plugin for DeepSeek Harness: it strips the host's prompt restrictions and approval gates so the assistant does what you asked instead of refusing or asking permission mid-task. Patches are individually selectable and revert cleanly."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/rumoii/dsh-breaklimit"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["ai-agents", "coding-agent", "deepseek", "deepseek-harness", "jailbreak", "llm", "plugin", "prompt-engineering"]
stars: 17
forks: 7
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-10-18T14:42:10Z"
lastCommitAt: "2026-10-26T03:01:48Z"
lastReleaseAt: "2026-10-23T11:54:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 51
maintainers: ["rumoii", "GmdsSeikai"]
openGraphImageUrl: "https://opengraph.githubassets.com/b348c7ed32b82ea54852585f2c0d4e3fa78d234b02225b279c0dc24e7ba5cfa2/rumoii/dsh-breaklimit"
---

A plugin for DeepSeek Harness that manages host patches, prompts, and rule sets, with a bilingual (Chinese and English) web settings page.

**[Quick install](#快速安装windows-powershell)** · [Installation, upgrade and troubleshooting](https://github.com/rumoii/dsh-breaklimit/blob/HEAD/docs/install.md) · [Commands and HTTP API](https://github.com/rumoii/dsh-breaklimit/blob/HEAD/docs/reference.md) · [Disclaimer](https://github.com/rumoii/dsh-breaklimit/blob/HEAD/DISCLAIMER.md) · [Changelog](https://github.com/rumoii/dsh-breaklimit/blob/HEAD/CHANGELOG.md)

Current version **0.9.5, internal beta**. For release artifacts and verification scope, see [Releases](https://github.com/rumoii/dsh-breaklimit/releases); the formal release is planned as 1.0.0.

## Highlights

- **Patches are controllable**: select each patch individually; before applying, check file hashes and match counts; if a step fails, attempt a transactional rollback.
- **Prompts are editable**: two tiers, `recommended` and `unrestricted` (fully liberated), with support for custom body text.
- **Rules are switchable**: manage multiple rule sets and activate them into `AGENTS.md` or `CLAUDE.md`; deactivation checks for external…
