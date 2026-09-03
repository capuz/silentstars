---
repo: "sunnyhot/NetBar"
name: "NetBar"
description: "macOS menu bar network traffic monitor"
readmeQualityOk: true
url: "https://github.com/sunnyhot/NetBar"
language: "Swift"
languages: ["Swift"]
languagePcts: [99]
stars: 15
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-05-09T03:14:10Z"
lastCommitAt: "2026-09-03T08:12:25Z"
lastReleaseAt: "2026-05-11T06:50:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 41
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/8cc96d66ea90cde411c1414835bebb054b22cb8d56a3a3d116dcf048c85367b9/sunnyhot/NetBar"
---

# NetBar

NetBar 是一个免费的 macOS 菜单栏网络流量监控 App。它把实时下载、上传速度放进菜单栏，点击后可以查看网络趋势、今日统计和应用级流量，持续高流量时还会本地提醒。菜单栏里还可以养一只动态小宠物，网络越忙跑得越快。

它适合想长期观察网络状态、排查网速异常、了解哪些应用正在使用网络的人。NetBar 使用 macOS 系统接口和系统自带工具读取统计数据，不抓包，不读取网页、请求、聊天、文件等网络内容，也不需要管理员权限。

## 为什么用 NetBar

- **一眼看见实时网速**：菜单栏直接显示当前下载 / 上传速度，不需要打开活动监视器。
- **知道谁在用网**：详情窗口展示应用级实时流量，支持搜索和系统进程过滤。
- **发现异常更快**：总流量持续超过自定义阈值时可发送本地提醒。
- **趋势不只看瞬间**：内置最近趋势图和今日流量统计，适合判断网络是不是持续异常。
- **菜单栏养只小宠物**：35 个内置动态角色，动画速度跟随网络活动，也可以导入自己的角色。
- **菜单栏可自定义**：多种显示模式、布局、颜色模式（纯色 / 彩虹 / 霓虹 / 火焰 / 极光）、字号、顺序、宽度和对齐方式。
- **轻量、透明、免费**：纯 Swift 实现，无外部依赖，不抓包，不需要管理员权限。
- **适合长期挂着**：低流量、低电量、锁屏等场景会自动降低采样或暂停部分刷新，减少不必要的资源消耗。

## 主要功能

### 菜单栏实时监控

NetBar 会在菜单栏显示当前网络速度，默认展示下载和上传速率。你可以在偏好设置里切换上下行、仅下载、仅上传或总速率模式。

菜单栏支持的自定义项包括：

- 下载 / 上传 / 总流量显示模式
- 单行或双行布局
- 自动宽度或手动宽度
- 字号、文字颜色
- 颜色模式：纯色、彩虹、霓虹、火焰、极光
- 下载 / 上传顺序和对齐方式

### 菜单栏动态小宠物

NetBar 内置 35 个动态角色，会常驻菜单栏陪你上网。角色动画是逐帧绘制的，不占用额外窗口，也不会干扰菜单栏布局。按分类全部展示如下（GIF 为固定帧率演示，实际动画速度跟随网络活动变化）：

**默认 · 7 个**

<table>
<tr>
<td align="center"><img src="docs/images/pets/cat.gif" height="80" alt="猫咪 α"><br><sub>猫咪 α</sub></td>
<td align="center"><img src="docs/images/pets/cat_b.gif" height="80" alt="猫咪 β"><br><sub>猫咪 β</sub></td>
<td align="center"><img…
