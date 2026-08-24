---
repo: "Alndaly/OpenStudio"
name: "OpenStudio"
description: "An open-source, AI-native video editing platform"
readmeQualityOk: true
url: "https://github.com/Alndaly/OpenStudio"
homepage: "https://openstudio.team"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [53, 44]
topics: ["agent", "ai", "cut", "image", "video", "studio"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-07-16T12:52:55Z"
lastCommitAt: "2026-08-24T04:21:13Z"
lastReleaseAt: "2026-08-01T12:07:37Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 58
maintainers: ["Alndaly"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b012ce6c1040eba4944df242f5a15e60d6b6ed0e504d1166bc8978ca860f111/Alndaly/OpenStudio"
discussionCount: 2
---

# Open Studio

**简体中文** | [English](https://github.com/Alndaly/OpenStudio/blob/HEAD/README.en.md)

AI 视频创作工作室 = **NLE 内核 + AI 应用中心 + 创作型智能体工作台 + 自媒体矩阵发布**。

本地优先的桌面应用:一个 Electron 壳里跑着 FastAPI 后端(SQLite)、React 前端和一个内嵌浏览器发布执行器。
素材导入 → 逐字剪辑 → 导出成片 → 抖音/B站/小红书/视频号矩阵发布,可由工作流与定时触发器全自动串起来。
工作流可嵌套(子图 / 调用工作流 / 框选折叠);所有持久登录集中在「浏览器池」里,供发布、工作流 RPA 与智能体复用。

> 更多操作演示(工作流搭建、字幕配音、发布矩阵……)见[官网文档](https://openstudio.team)各指南页(源码在 `website/content/docs/`)。

### 近期新增

**子智能体与多智能体协作** —— 主智能体可以把独立调查派给**子智能体**(只读工具,中间过程
留在它那里,主对话只收结论——省的是上下文,不是算力)。派发**默认不阻塞**:立即拿到回执接着
干别的,要不要等、什么时候等由智能体自己决定;同一条消息里派多个就并发跑,没等的报告在收尾时
自动送达,一份也不丢。每个子智能体都是一段**可点进去的会话**(和主对话一模一样的界面),
右侧面板与头部入口都能进;运行中每一步实时可见。不同会话的智能体之间还能**相互 @ 通知**:
对方空闲就立即开跑,忙就排队,消息上带「来自其他智能体」徽章。

**从链接导入素材** —— 粘一个视频或播放列表链接,先看清单再决定下哪几条。**先探再下**是刻意的:
一个链接可能是一条视频,也可能是一整个播放列表(几百条、几十 GB)。音频/视频在下载前选(只要人声
去转写的人,不该为此付几百 MB 和一次转码);画质上限**只列这条链接真有的档**——探测时就知道它最高
能给多少,摆一个选了没用的档位是让界面替站点撒谎。

需要登录才看得到的内容,直接**借浏览器池里的登录身份**,不必去别处导 cookie。YouTube 尤其明显:
不带登录态时它现在只给到 360p(实测),带上之后是 1440p。

**字幕配音,以及「引擎 / 模型」分开** —— 字幕面板里每条字幕自带配音入口,也可以整批配;产物落到
一条专门的配音轨(原声不动,不满意整条删掉就回到原样),再配一次回到同一条轨而不是摞出一叠。
可选「缩放到段落长度」——用的是片段自己的倍速,渲染时 atempo 变速,所以无损、可撤销、事后还能微调。…
