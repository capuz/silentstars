---
repo: "dingminhua/dsh-connect-trae"
name: "dsh-connect-trae"
description: "Connect locally signed-in Trae models to DeepSeek Harness with a read-only credits overview."
originalDescription: "Connect locally signed-in Trae models to DeepSeek Harness with a read-only credits overview."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/dingminhua/dsh-connect-trae"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["dsh-plugin", "dsh-plugin-market", "dsh-plugins"]
stars: 207
forks: 26
openIssues: 3
closedIssues: 62
watchers: 1
contributors: 8
recentReleases: 10
createdAt: "2026-08-28T13:32:13Z"
lastCommitAt: "2026-11-07T09:29:29Z"
lastReleaseAt: "2026-09-25T04:35:25Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 99
undervaluedScore: 33
maintainers: ["eghrhegpe", "dingminhua", "yuantao313"]
openGraphImageUrl: "https://opengraph.githubassets.com/e5fefd2f78a2f0d1fa04197ef6575d99587d7b2eb3259e1217b42f2f4c716723/dingminhua/dsh-connect-trae"
---

> The account names, quotas, and timestamps in this document and its illustrations are **demo data** (`demo-*`) and contain no real account information.

An independent [DeepSeek Harness (DSH)](https://github.com/deepseek-ai/deepseek-harness) bundle plugin. It connects locally signed-in Trae accounts (**China, Enterprise, and International editions are all supported**) to DSH's model selector. Models generate structured tool calls, while tools such as `bash` / `read` / `write` / `edit` are executed locally by DSH. It also provides a usage overview (China edition Work/general credits, Enterprise tenant quota, International edition subscription status), daily check-in claiming, and a model management UI. **The China, Enterprise, and International editions are three parallel providers (`trae` / `trae-enterprise` / `trae-global`) and can be used at the same time.** The plugin settings page (**Settings → Trae**, a separate page in the sidebar navigation) uses tabs to distinguish the three, for unified management.

**Supports macOS, Windows, and Linux**: CI runs the full typecheck / tests / build on `ubuntu-latest` and `windows-latest`. Windows-specific directory detection, app version…
