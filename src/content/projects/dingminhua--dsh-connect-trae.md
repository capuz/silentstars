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
stars: 164
forks: 21
openIssues: 3
closedIssues: 51
watchers: 0
contributors: 7
recentReleases: 10
createdAt: "2026-08-28T13:32:13Z"
lastCommitAt: "2026-10-27T12:39:06Z"
lastReleaseAt: "2026-09-25T04:35:25Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 99
undervaluedScore: 34
maintainers: ["eghrhegpe", "dingminhua", "yuantao313"]
openGraphImageUrl: "https://opengraph.githubassets.com/0ba4ce58cfa4f93f1ddcb7d215015fbde1861254f11936ff6d73b7412a53e56c/dingminhua/dsh-connect-trae"
---

A standalone [DeepSeek Harness (DSH)](https://github.com/deepseek-ai/deepseek-harness) bundle plugin. It connects the Trae accounts signed in on this machine (**CN, enterprise, and global editions are all supported**) to DSH's model selector. Models generate structured tool calls, and tools such as `bash` / `read` / `write` / `edit` are executed locally by DSH. It also provides a usage overview (CN edition Work/general credits, enterprise tenant quota, global edition subscription status), daily check-in claiming, and a model management interface. **The CN, enterprise, and global editions are three parallel providers (`trae` / `trae-enterprise` / `trae-global`) that can be used at the same time**. The plugin settings card uses tabs to distinguish the three for unified management.

**Supports macOS, Windows, and Linux**: CI runs the full typecheck / test / build on `ubuntu-latest` and `windows-latest`. Directory detection, app version headers, and lock behavior on Windows have dedicated handling; see [Windows notes](#windows-说明).

> Apart from daily check-in claiming, all of the plugin's queries are read-only and do not consume quota. Check-in claiming also only happens when you…
