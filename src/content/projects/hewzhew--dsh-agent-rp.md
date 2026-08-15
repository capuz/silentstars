---
repo: "hewzhew/dsh-agent-rp"
name: "dsh-agent-rp"
description: "SillyTavern migration and next-generation Agent RP for DSH"
readmeQualityOk: true
url: "https://github.com/hewzhew/dsh-agent-rp"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [51, 49]
topics: ["agent", "dsh", "roleplay", "sillytavern"]
stars: 113
forks: 3
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-13T12:49:30Z"
lastCommitAt: "2026-08-15T04:05:11Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 31
maintainers: ["hewzhew"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ab45a4cc766a31229c0c9ecfbbbc7b61a153973496874f51dc46ad9c79c6d33/hewzhew/dsh-agent-rp"
---

# DSH Agent RP

把 SillyTavern 角色卡、预设和聊天记录带进 DSH，在原生会话里继续一段角色对话。

这是一个面向下一代 Agent RP 的公开预览版。现在已经可以从角色库选择角色，设置开场和 Persona，并在 DSH 会话中使用角色卡、世界书、预设、轻前端与持久记忆。欢迎带着自己有权使用的卡片来体验，也欢迎一起补全不同卡片生态的兼容性。

## 现在可以体验什么

- 导入 Character Card V1/V2/V3：PNG、JSON 与 CHARX。
- 保存角色到可视化角色库，收起或恢复角色，不影响已有对话。
- 选择默认或备选开场，并为玩家选择可复用 Persona。
- 导入 SillyTavern JSONL 聊天记录，或与对应角色卡一起迁移。
- 使用角色世界书，直接导入独立 World Info 与 SillyTavern Chat Completion 预设。
- 运行角色自带的显示正则、轻量 HTML 界面与 MVU 状态。
- 重写、续写和切换回复版本，并保留明确的长期记忆。
- 在沉浸视图与调试视图之间切换，检查实际生效的提示内容。

角色本身就是顶层 Agent。这里没有额外的旁白、协调器或 Character 子代理，角色对话直接发生在普通会话中。

## 安装

需要已经公开发布的 DSH，以及 Node.js 和 pnpm。无需克隆仓库，直接从公开仓库安装：

```powershell
npx -p @deepseek-ai/dsh@latest dsh plugin --profile web add github:hewzhew/dsh-agent-rp#main
npx -p @deepseek-ai/dsh@latest dsh --profile web
```

以后更新插件时运行：

```powershell
npx -p @deepseek-ai/dsh@latest dsh plugin --profile web update @dsh-external/dsh-agent-rp
```

这种安装方式不会依赖某个长期留在原位的本地克隆目录。贡献者需要修改源码时，才应克隆仓库并在仓库根目录运行 `pnpm install`、`pnpm run build` 与 `dsh plugin --profile web add .`。

早期安装器写入的版本不会自动迁移。若启动错误中出现 `.dsh\plugins\dsh-agent-rp`，请先把该目录移出 `plugins` 目录作备份，确认 DSH 能启动后，再按上面的 profile 命令安装。不要删除整个 `.dsh`，会话数据与旧插件目录不是一回事。

如果你正在参与 DSH 内测并使用指定 RC…
