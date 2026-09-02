---
repo: "371684029/oh-my-co-work"
name: "oh-my-co-work"
description: "人机协同·万物归元·皆可 Workflow"
readmeQualityOk: true
url: "https://github.com/371684029/oh-my-co-work"
language: "JavaScript"
languages: ["JavaScript", "Vue"]
languagePcts: [71, 26]
stars: 12
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 4
createdAt: "2026-07-21T02:56:42Z"
lastCommitAt: "2026-09-02T08:06:35Z"
lastReleaseAt: "2026-09-02T06:09:18Z"
status: "thriving"
tags: []
healthScore: 86
undervaluedScore: 50
maintainers: ["371684029", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/b197147459e7812cf4312d24cb4bedbbba0af69b956cdafb4103376fb21d15db/371684029/oh-my-co-work"
---

# oh-my-co-work

</p>

<h3 align="center">人机协同 · 万物归元 · 皆可 Workflow · 终端守护者 · 熔炉连接一切</h3>

  把人、Agent、脚本和 TUI 放进同一条 Workflow · 本地优先 · 人工闸门 · 内嵌真实终端
</p>

</p>

> **节点是死的，人是活的。**
> Workflow 负责串起过程，人可以确认、拒绝、插队、绕行，也可以随时回来继续。

</p>

## 为什么做它

很多自动化工具仍然散落在 BAT、PowerShell、CLI、TUI 和不同 Agent 里：执行在终端，决策在聊天，进度靠人脑记，出错后很难复盘。

`oh-my-co-work` 把这些能力收进一个本地工作台：

- **像群聊一样协作**：一个工作流就是一个群聊，一个 Agent / 脚本就是一个成员。
- **关键决定交给人**：启动、参数、审核都可以设置人工闸门；群聊同意最后一步即完成并归档。
- **过程始终可见**：左边看会话，中间对话和执行，右边看流程与报告。
- **终端不再跳出去**：真实 PTY 内嵌 TUI。熔炉是本机官方 `grok` CLI 的宿主（不是自研 Chat API）：默认铺满 **GUI**，可切 **TUI**、可缩小回三栏。未装或未登录时点桌宠弹出 Grok Build 教程。
- **数据留在本机**：SQLite、Markdown 台账、附件和日志全部保存在本地。

## 使用场景

把日常流水线收成一条群聊：每一步是脚本、CLI、TUI 或 Agent 成员，关键处加人闸门。下面是几种常见配法，克隆群模板就能改。

**前端开发流**

切分支 → 起本地服务 → 脚本截 Figma / 对照稿 → 导出或拉取接口文档 → 氛围编程改页面 → 跑单测或 e2e → 提交并开/合 PR。本地服务和 TUI 走内嵌终端；合代码前用「同意」闸门。

**接口联调流**

拉最新 OpenAPI / 导出接口文档 → 起 mock 或连测试环境 → 跑集成脚本 → 人眼对一下响应 → 改客户端 → 提交。文档和命令都做成脚本成员，对不上就停在闸门。

**发版验收流**

切发布分支 → 跑测试与打包 → 预览包 / 打开产物 → 人验收截图或清单 → 打 tag、合并主干。打包用本机命令；「能不能发」留给最后一步人工同意。

**本机排障 + 熔炉**

复现命令进终端卡 → 需要改代码时点桌宠开熔炉（Grok）→ 人确认补丁 → 回归脚本 → 提交。熔炉和脚本同一条群聊里插队，不用另开窗口记进度。

## 2.0：真实 TUI，不是终端模拟

服务端使用 `node-pty`，前端使用 `xterm.js`。普通命令继续走原有 pipe…
