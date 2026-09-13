---
repo: "tuantuan0218/TDSH"
name: "TDSH"
description: "DeepSeek Harness 桌面壳：把 DeepSeek Harness Web 界面装进原生 Electron 窗口，双击即用，含自动更新与 agent-loop 无限续跑补丁"
readmeQualityOk: true
url: "https://github.com/tuantuan0218/TDSH"
homepage: "https://github.com/tuantuan0218/TDSH/releases"
language: "TypeScript"
languages: ["TypeScript", "HTML"]
languagePcts: [70, 26]
topics: ["agent", "ai-assistant", "deepseek", "deepseek-harness", "desktop-app", "electron", "electron-updater", "typescript"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-15T22:24:56Z"
lastCommitAt: "2026-09-13T08:30:25Z"
lastReleaseAt: "2026-08-20T13:30:44Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 60
maintainers: ["tuantuan0218"]
openGraphImageUrl: "https://opengraph.githubassets.com/dccfd1d61d1fc86326a20bccdf25652572591648cefdc119486f97b3818bb1fc/tuantuan0218/TDSH"
---

# TDSH — 团团的 DeepSeek 桌面壳

</p>

> **T** = 团团（开发者）· **DSH** = DeepSeek Harness
>
> 把 DeepSeek Harness 的 Web 界面装进一个原生桌面窗口，双击即用，含自动更新与 agent-loop 无限续跑补丁。

</p>

---

## 截图

</p>

---

## 功能特性

| 特性 | 说明 |
|---|---|
| 🐋 **DeepSeek 鲸鱼闪屏** | 启动时显示官方鲸鱼 Logo + "探索未至之境" 动画，窗口加载完成后自动关闭 |
| 🔄 **一键自动更新** | 检测到新版本时弹出确认对话框，后台下载进度条 + 自动安装 |
| 📌 **版本标签** | 窗口右下角显示版本号（如 `v0.1.28`），点击可触发更新检查 |
| 🔗 **attach-or-spawn 模式** | 检测本地 `dsh web` 是否已运行：已运行则复用窗口，否则自动拉起新实例 |
| 🪟 **Hanako 式窗口交互** | 对话头部即拖拽区，右上角独立圆角胶囊内嵌最小化/最大化/关闭三键 |
| 🔒 **单实例锁** | 防止重复启动，关闭窗口自动回收子进程 |
| 💾 **磁盘友善** | 所有数据落盘在应用目录，不写系统盘 |

---

## 关键补丁：agent-loop 无限自动续跑

> ⚠️ **注意：此补丁不在 TDSH 安装包内，需手动应用。**
>
> 备份：`harness-patches/agent-loop/`（已推此仓库）

dsh 的 `ReactLoopAgent` 默认在模型产出无工具调用消息时 yield（等待用户输入）。
本补丁删除 `autoContinued` 守卫，改为**无限次注入 `[自动续跑]` 指令**——GPT/Claude 风格永不 yield。

### 验证结果（deepseek-v4-flash，2026-08-22）

| 指标 | 数值 |
|---|---|
| 连续运行时间 | 133+ 分钟 |
| 完成目标数 | 21 个 |
| 中途停止次数 | 0 |

模型完成一个目标 → `complete_goal` → `goal-complete-inject` → MCTS → 新目标 → 循环。
期间做了真实工作：修复炉石 JVM idle-halt、GameplayModeStrategy 投降回归、清理 11GB 磁盘、创建 UUMit 技能赚 UT 等。

---

## 安装

### Windows 安装包

1. 前往 [GitHub Releases](https://github.com/tuantuan0218/TDSH/releases)…
