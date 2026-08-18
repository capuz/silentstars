---
repo: "888helloworld/yudi-ai-studio"
name: "yudi-ai-studio"
description: "面向内容创作者和电商卖家的 AI 图文创作工作台"
readmeQualityOk: true
url: "https://github.com/888helloworld/yudi-ai-studio"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [57, 38]
stars: 12
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-12T05:58:38Z"
lastCommitAt: "2026-08-18T04:08:41Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 68
undervaluedScore: 34
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/492255452d30372e61fd3457863ceb3eea2db80c0fc9756696ef4c4550fbdca5/888helloworld/yudi-ai-studio"
---

# 御弟哥哥 AI 图文创作工作台

嘿，欢迎来到“御弟哥哥”——一个给内容创作者、电商卖家、设计团队和运营同学准备的小工具。

你可以把它理解成一个能帮你写文案、配图、改图的个人助手，顺便还带个后台管管积分和用量。项目目前最核心、最好玩的部分叫“画面工坊”，基本就是你上传参考图、写几句描述，然后让 AI 给你出图的页面。

整个系统是一个轻量的 Node.js 单体应用，数据库跑着 SQLite，前端就是原生三件套（HTML/CSS/JS），后端用 Express 搭起来。选型主打简单直接，适合一个人或小团队在本地、内网先跑起来，以后有需要再往复杂架构上走。

---

## 这玩意儿到底能干啥？

| 模块 | 页面/接口 | 说明 |
| --- | --- | --- |
| 首页 | `index.html` | 内容创作的入口，从这里出发 |
| 小红书工作台 | `xhs.html` | 小红书配图、标题、正文、标签一站搞定 |
| 画面工坊 | `image-studio.html` | **主角**：文生图、参考图改图、看图写 Prompt、生成记录 |
| 旧生图入口 | `xi-image.html` | 自动跳转到画面工坊，免得你迷路 |
| 看图写 Prompt | `reverse-prompt.html` | 上传一张图，让 AI 反推出提示词 |
| 个人中心 | `profile.html` | 查看积分、历史、卡密、订单、邀请码 |
| 管理后台 | `admin.html` | 管理员专用：管用户、充积分、看流水、发卡密 |
| 登录/注册 | `login.html` / `register.html` | 用 JWT 登录；本地或内网访问时可以不需要邀请码 |
| 帮助与协议 | `help.html`、`terms.html`、`privacy.html`、`content-policy.html` | 一些基础说明 |

如果你刚来，建议直奔**画面工坊**（`image-studio.html`），那是目前打磨最久、功能最集中的地方。

---

## 画面工坊：你的私人 AI 画室

画面工坊是整个项目目前最重要的页面。它专门负责和图片模型打交道，尤其是 `gpt-image-2` 这个能在文字描述和参考图之间切换的画图引擎。

### 它能做的事情

- **文生图**：写一段描述，AI 给你出图。
- **参考图改图**：上传最多 4 张参考图，告诉 AI“照着这个感觉，但改改光线/构图”。
- **多种上传方式**：点击上传、拖拽上传、甚至直接粘贴剪贴板里的图片。
- **批量生成**：你只需要选“要生成几张”，一次最多 5 张，系统自动安排。
-…
