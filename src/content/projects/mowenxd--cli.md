---
repo: "mowenxd/cli"
name: "cli"
description: "Official command-line interface for MoWen"
readmeQualityOk: true
url: "https://github.com/mowenxd/cli"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 32
forks: 6
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-05-08T08:36:13Z"
lastCommitAt: "2026-08-25T04:10:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 65
undervaluedScore: 19
maintainers: ["HarryBird", "mowenxd"]
openGraphImageUrl: "https://opengraph.githubassets.com/63627438db3dad255b2c9a6ca3a0c4d70f4a66baba1978a7a08341ed3beb873d/mowenxd/cli"
---

# mocli

这里是墨问官方 CLI 工具、墨问官方 Skill 仓库。安装 mocli 和相关 Skills 之后，墨问用户可以使用自然语言在 AI Agent 工具里使用墨问，比如查看我的笔记、查询墨问动态、搜索用户、创建或编辑笔记等等。

mocli 和 Skills 一次安装，所有 Agent 可用，支持的 AI Agent 工具包含并不限于：OpenClaw（龙虾）、 Hermes Agent（爱马仕）、TRAE SOLO、Codex、Claude Code、Cursor、CodeBuddy 等等。

## 功能

| 类别　　 | 命令　　　　　　 | 能力 |
| --- | --- | --- |
| 🔐 认证 | `mocli auth` | 初始化墨问 API Key、查看本机认证状态，并可校验 API Key 对应的墨问账号信息 |
| 📝 笔记 | `mocli note` | 笔记详情、评论/引用上下文、创建/编辑笔记、笔记标签管理和公开/私有/部分公开规则设置 |
| 📒 笔记列表 | `mocli notes` | 查看我的墨问笔记、查看指定用户主页笔记、搜索墨问笔记，以及按标签筛选当前认证用户标签下的笔记（多标签为交集） |
| 🏷️ 标签 | `mocli tag` | 获取当前认证用户的标签列表，目前支持查看我的笔记标签 |
| 👤 用户 | `mocli user` | 搜索墨问用户，获取用户基础信息，并可结合主页笔记样本辅助总结创作者画像 |
| 🏷️ 备注 | `mocli remark` | 为墨问 UID 设置本地昵称、查询已保存备注、移除备注，方便用类似“老池” “二爷” “五哥”这样的个人惯用昵称发起查询 |
| 🔔 动态 | `mocli disco` | 获取墨问账号近期动态和社区更新，例如被关注、点赞、评论、收藏以及关注用户的新笔记 |
| 📎 文件 | `mocli misc` | 上传本地或远端图片、音频、PDF，获取可在笔记正文中引用的墨问文件 ID |
| ❔ 帮助 | `mocli help` | 查看全局帮助、子命令帮助和版本信息，快速了解可用参数与使用方式 |

## Skills 导航

内置 Skills 列表，可被 AI Agent 直接调用：

| 类别　　 | Skill　　　　　　 | 说明 |
| --- | --- | --- |
| 🧭 规则 | `mo-shared` | 墨问 CLI 的前置规则，覆盖 API Key 初始化、响应解析、错误处理、展示规范和安全约束 |
| 🔐 认证 | `mo-auth` | 配置或更新墨问 API Key，查看当前认证状态，并获取 API Key 对应的墨问 Profile 信息 |
| 📝 笔记 |…
