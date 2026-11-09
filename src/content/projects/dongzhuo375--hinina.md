---
repo: "dongzhuo375/Hinina"
name: "Hinina"
description: "For XCPC"
readmeQualityOk: true
url: "https://github.com/dongzhuo375/Hinina"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [57, 31]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-09T08:49:33Z"
lastCommitAt: "2026-11-09T11:59:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 50
maintainers: ["dongzhuo375"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b1347e64491c1228319306a14bb50da05cee3780d494ddf79ef1d728ee0fc7c/dongzhuo375/Hinina"
---

# Hinina

Hinina 是一个面向XCPC竞赛的桌面客户端。它把登录、题目、代码编辑、提交、榜单和公告放在同一个比赛工作台里，比赛时不用在浏览器标签页之间来回切换。

项目目前仍在开发中，界面和配置格式可能继续调整。当前仓库没有发布稳定版，想试用的话需要从源码构建；正式发布（GitHub Releases 草稿验收后公开）提供免安装的 Windows x64 裸 exe。

## 界面一览

下面的图片使用的是仓库内的演示数据，账号、比赛和题目名称均为虚构内容。

登录页会显示比赛标题和倒计时。登录成功后，客户端会根据比赛阶段决定是否进入工作台。

题目总览展示通过数、提交数和个人状态。每道题的题号下方会保留比赛设置的颜色，也可以从这里直接打开题目或快捷提交。

解题页左侧是题面，右侧是代码编辑器。提交后，评测状态会在当前页面更新。

设置页默认隐藏。进入比赛工作台后，连续点击右下角的版本号 5 次，顶部导航会出现“环境设置”；重启客户端后需要重新点击解锁。

## 现在能做什么

- 连接 HOJ 或 Hydro 实例，保存多个 OJ 实例并在设置页切换
- 登录、恢复会话和退出登录
- 查看比赛题目、时间限制、空间限制和个人做题状态
- 在内置 Monaco 编辑器中写代码，选择语言并自动保存工作区
- 提交代码并轮询评测结果，查看提交历史、提交详情和测试点
- 查看 ACM/OI 榜单、比赛公告和未读状态
- 在比赛结束后保留本地工作区和提交源码留档
- 调整 OJ 服务器、比赛引用、编辑器字体、Tab 宽度、编辑器主题、自动保存间隔和本地数据目录

客户端界面目前固定为浅色主题；解题页的编辑器可以单独切换主题。

## 环境设置

解锁设置页后，可以在左侧分组之间切换：

- **OJ 服务器**：选择当前 OJ、填写服务器地址和比赛 ID / 引用，设置请求超时、评测轮询间隔、轮询总时长和题面缓存
- **编辑器**：设置默认语言、字号、Tab 宽度、自动保存开关和自动保存间隔
- **布局**：调整解题页左右分栏比例
- **主题**：选择界面主题（当前版本固定浅色）和编辑器主题
- **重置与清理**：重置可重新获取的缓存，预览并清理日志、过期提交源码留档
- **数据目录**：查看或更改本地数据目录；可以选择是否迁移现有工作区、提交留档、配置和会话
- **关于**：查看客户端版本、存储目录和日志路径

保存设置后，大部分选项立即生效。OJ 地址和数据目录的更改需要重启客户端；更改当前 OJ 后会回到登录页，由新 OJ 的会话重新进入比赛。

## 支持的 OJ

仓库内建并已接入的适配器是：

- [HOJ](https://github.com/HOJ-Inc/HOJ)
-…
