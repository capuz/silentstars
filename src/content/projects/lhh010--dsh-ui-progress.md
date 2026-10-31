---
repo: "lhh010/dsh-ui-progress"
name: "dsh-ui-progress"
description: "DSH Web UI session progress plugin: a persistent progress bar in the input dock area (real todo progress / token rate and ETA / orange-red interrupted state / cyan background task and sub-agent state / token usage badge and cache hit panel), adaptive two-line layout for narrow windows, zero core changes"
originalDescription: "DSH Web UI 会话进度插件：输入框停靠区常驻进度条（todos 真实进度 / token 速率与 ETA / 中断橘红态 / 后台任务与子代理青色态 / Token 用量徽标与缓存命中面板），窄窗口两行自适应，零核心改动"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/lhh010/dsh-ui-progress"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [56, 39]
topics: ["dsh", "dsh-plugin", "progress-bar", "session-status", "todo", "token-rate"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-13T13:10:11Z"
lastCommitAt: "2026-10-31T09:55:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 47
maintainers: ["lhh010"]
openGraphImageUrl: "https://opengraph.githubassets.com/d136cae2cdfa6d6ad7a1523d6651a724dddf2e6e0dce2ef6c4c7261c02c8bc1c/lhh010/dsh-ui-progress"
---

# @dsh-external/dsh-ui-progress

DSH Web UI session progress plugin: provides a persistent session progress bar in the input dock area of the DeepSeek Harness Web GUI, **zero core changes** (pure client plugin, does not touch agent-loop).

> **Your DSH version determines which plugin version to install** (installing the wrong one will crash; common symptom: `useConversation is not a function`)
>
> - DSH **0.1.2-alpha.1 ~ 0.2.1-alpha.1**: install the **new version** (default command below; for the plugin tag corresponding to each DSH version, see the [version compatibility table](#版本对应--version-compatibility))
> - Older DSH (0.1.1-rc.2 and earlier): **no available version**
>

## Installation

> **Installation method (auto-mounted since v0.11.4)**: Since v0.11.4, this package ships with `cordis.patch.yml` and declares `dsh.bundle.patch`. After `dsh plugin --profile web add` installation, it **automatically registers the profile layer and mounts**, so you no longer need to hand-write `insert` config lines (deployments pinned to older tags still need them). **GUI note**: the plugin page's "Add plugin" only accepts registry package names or local directory paths.…
