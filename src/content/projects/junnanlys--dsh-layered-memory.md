---
repo: "JunNanLYS/dsh-layered-memory"
name: "dsh-layered-memory"
description: "让 DeepSeek Harness 拥有跨会话长期记忆：AI 自动记住你是谁、你的项目和偏好，新会话直接带上背景，生活与工作记忆自动分开互不干扰，零配置无感运行 | Long-term memory for DeepSeek Harness: the AI remembers who you are, your projects and preferences across sessions, keeps personal and work memories separate, zero-config."
readmeQualityOk: true
url: "https://github.com/JunNanLYS/dsh-layered-memory"
homepage: "https://www.npmjs.com/package/dsh-layered-memory"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
topics: ["deepseek", "deepseek-harness", "dsh", "dsh-plugin", "memory", "agent-memory", "cordis-plugin", "ai-agent", "context-engineering", "embeddings"]
stars: 11
forks: 1
openIssues: 2
closedIssues: 29
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-16T08:09:45Z"
lastCommitAt: "2026-08-28T14:35:42Z"
lastReleaseAt: "2026-08-25T14:31:51Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 61
maintainers: ["JunNanLYS", "Irvington258"]
openGraphImageUrl: "https://opengraph.githubassets.com/1380873b3ad6e9adde8902c7f038b6b8dfc4e5186d3755ba2d40a20097fa9790/JunNanLYS/dsh-layered-memory"
---

alt="DeepSeek Harness hero 横幅：对话自动分层蒸馏成记忆，模型每步前自动召回注入——右侧对话气泡逐层溶解为三层渐亮光带，流入带发光圆球与渐变轨道的玻璃胶囊（下有 日常·工作·智能·关闭 四档刻度），光丝回流示意召回注入">

# dsh-layered-memory

**DeepSeek Harness 的分层蒸馏记忆插件：对话在后台自动完成 L0 捕获 → L1 原子记忆 → L2 场景整合 → L3 画像蒸馏，模型每一步前自动把相关记忆注入上下文。**

[English](https://github.com/JunNanLYS/dsh-layered-memory/blob/HEAD/README.en.md) · [最新发行版](https://github.com/JunNanLYS/dsh-layered-memory/releases/latest) · [反馈问题](https://github.com/JunNanLYS/dsh-layered-memory/issues)

</div>

## 快速开始

需要 Node ≥ 22.16。两种调用方式任选（`npx` 前缀可替换下面任何 `dsh` 命令）：

```bash
# 方式一：npx 直接跑官方 CLI（无需预装 dsh；可 pin 版本，如 dsh-layered-memory@0.8.4）
npx -y @deepseek-ai/dsh plugin --profile web add dsh-layered-memory

# 方式二：已装 dsh CLI（dsh 是 pnpm 转发器，未装 pnpm 时先 npm i -g pnpm）
dsh plugin --profile web add dsh-layered-memory

# 包源备选：GitHub 仓库 / 本地路径（开发调试，link: 指向仓库，npm run build + 重启 dsh 即生效）
dsh plugin --profile web add https://github.com/JunNanLYS/dsh-layered-memory
dsh plugin --profile web add /path/to/dsh-layered-memory
```

### 让 Agent 安装（推荐）

如果当前 Agent 可以执行终端命令，把下面这段话完整发送给它：

```text
请为 DeepSeek Harness 的 web Profile 安装 dsh-layered-memory 插件。

只执行下面两条命令，不要修改其他 Profile：
dsh plugin --profile web add dsh-layered-memory
dsh…
