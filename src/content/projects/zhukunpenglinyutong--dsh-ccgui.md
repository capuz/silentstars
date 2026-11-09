---
repo: "zhukunpenglinyutong/dsh-ccgui"
name: "dsh-ccgui"
description: "在 DeepSeek Harness 里直接使用 Claude Code、Codex、PI、OMP 等 Agent CLI"
readmeQualityOk: true
url: "https://github.com/zhukunpenglinyutong/dsh-ccgui"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["dsh-plugin"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-11-08T12:34:06Z"
lastCommitAt: "2026-11-09T04:35:45Z"
lastReleaseAt: "2026-11-09T04:36:47Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 31
maintainers: ["zhukunpenglinyutong"]
openGraphImageUrl: "https://opengraph.githubassets.com/727d4ac8b66cd6a4bd382c98696273d1062bc92173344a5653dde747fc28036b/zhukunpenglinyutong/dsh-ccgui"
---

---

# DSH CCGUI

**在 DeepSeek Harness 里直接使用 Claude Code、Codex、PI、OMP 等 Agent CLI**

   

[快速开始](#快速开始) · [功能](#功能) · [接入其他 CLI](#接入其他-cli) · [已知限制](#已知限制) · [开发](#开发)

在输入框旁选一个 CLI，就像用模型一样和它对话。工具调用、审批和改动摘要都走 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)（DSH）的原生界面。

---

## 快速开始

需要 DSH `>=0.2.2-rc.1 <0.3.0`，以及已安装并登录的 CLI。

1. 点 DSH 左侧栏的「插件」，再点右上角「添加插件」，输入 `dsh-ccgui`，点「安装」。
2. 提示“请重启 DSH 加载它”时，Cmd+Q 完全退出再打开，不要点“立即启用”，否则新旧代码混在一个进程里会启动失败。
3. 新建会话，点输入框 `+` 右边的 CLI 按钮选一个 CLI。

```sh
# DSH 桌面版：先 Cmd+Q 完全退出，再用应用内置的 dsh 安装
"/Applications/DeepSeek Harness.app/Contents/Resources/runtime/cli/bin/dsh" plugin --profile desktop add dsh-ccgui@1.0.2

# DSH 命令行版（dsh web）
dsh plugin --profile web add dsh-ccgui@1.0.2
```

卸载把 `add ...` 换成 `remove dsh-ccgui`。

> [!TIP]
> 从源码安装时先 `pnpm install && pnpm run build`，再在「添加插件」里填仓库的本地路径（命令行则把 `dsh-ccgui@1.0.2` 换成仓库路径）；pnpm 的 peerDependencies 警告可以忽略。

| 功能 | Claude<br>Code | Kimi<br>CLI | Codex<br>CLI | PI<br>CLI | OMP<br>CLI | Open<br>Code |
| --- | :---: | :---: | :---: | :---: | :---: | :---: |
| 真实账号验证 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 免安装（`npx` 自动拉取） | ✅ | ✅ | ✅ | ✅ | 先装 `omp` | 先装 `opencode` |
| 会话中途换模型<br><sub>输入框右侧的模型菜单</sub> | ✅ |…
