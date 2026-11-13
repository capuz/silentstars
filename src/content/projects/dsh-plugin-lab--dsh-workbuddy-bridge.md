---
repo: "dsh-plugin-lab/dsh-workbuddy-bridge"
name: "dsh-workbuddy-bridge"
description: "DSH plugin: connects the models in the WorkBuddy desktop app to DeepSeek Harness, working out of the box with zero configuration. (Natively embedded in the \"Plugins - Plugin Configuration\" page)"
originalDescription: "DSH 插件：把 WorkBuddy 桌面 App 里的模型接入 DeepSeek Harness，零配置直接用。（原生嵌入\"插件-插件配置页\"）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/dsh-plugin-lab/dsh-workbuddy-bridge"
homepage: "https://www.npmjs.com/package/dsh-workbuddy-bridge"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["agent-harness", "ai", "ai-agent", "deepseek", "deepseek-harness", "dsh", "dsh-plugin", "llm", "models", "plugin"]
stars: 38
forks: 7
openIssues: 1
closedIssues: 11
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-09-25T09:28:29Z"
lastCommitAt: "2026-11-13T11:19:44Z"
lastReleaseAt: "2026-10-29T04:07:11Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 49
maintainers: ["zlZayn", "dependabot[bot]", "dcftradingcrypt"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f09100e3ab74fefe23003f4c35d1bff7a2a48980cc472b6bc431efdf79a35b3/dsh-plugin-lab/dsh-workbuddy-bridge"
---

Release notes for each version → <a href="https://github.com/dsh-plugin-lab/dsh-workbuddy-bridge/releases">Releases</a> (one-to-one with npm versions)

---

> [!NOTE]
> **Credentials never leave this machine:** Login state is read from the WorkBuddy desktop app's own credentials file. The plugin keeps only one encrypted copy locally;
> the browser side cannot obtain tokens, and the raw credentials never appear in the UI.

The domestic **WorkBuddy** and the international **WorkBuddy AI** coexist. Whichever app you install shows up as its own model group. With both installed, the two groups appear side by side, each using its own account and credits. Models appear directly in DSH's model selector, so you don't need to configure a separate provider for them.

## Features

- **Out of the box** — Enable the plugin after installing, and the model groups appear automatically.
- **Two isolated versions** — The domestic and international versions each have their own group. Models, accounts, and credits are not mixed, and each follows only its own app's login state.
- **Reasoning tiers** — Models whose upstream declares tiers can be selected directly. For models without declared tiers, you…
