---
repo: "TIMER-err/qplayer"
name: "qplayer"
description: "A NetEase Cloud Music player for Multi-Platform, Powered With QML4J Engine."
url: "https://github.com/TIMER-err/qplayer"
language: "Java"
languages: ["Java", "QML"]
languagePcts: [63, 37]
topics: ["apple-music", "md3", "netease", "netease-cloud-music", "player"]
stars: 24
forks: 2
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-06-10T15:24:28Z"
lastCommitAt: "2026-06-27T06:22:34Z"
lastReleaseAt: "2026-06-18T16:08:25Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 93
undervaluedScore: 46
maintainers: ["TIMER-err"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0de672bdaf78c4ae179253db0892eed75e1e83880502bbc510a90b1b3c0bfdc/TIMER-err/qplayer"
---

</p>

<h1 align="center">QPlayer</h1>

  <b>简体中文</b> · <a href="README.en.md">English</a>
</p>

  <b>一个界面由 QML 渲染的跨平台网易云音乐播放器</b><br>
  由 <a href="https://github.com/TIMER-err/qml4j">qml4j</a> 强力驱动
</p>

</p>

---

</p>
  <sub>首页 · 浅色莫奈 &nbsp;|&nbsp; 首页 · 深色 &nbsp;|&nbsp; 歌词 · 逐字 + 罗马音/翻译 &nbsp;|&nbsp; 歌词 · 流体背景 + 波浪进度</sub>
</p>

界面不使用任何原生 View。除歌词页正文外,所有控件都由 QML 描述并经 qml4j 渲染;歌词正文(逐字滚动 + 流体背景)由宿主通过 Skija 直接手工绘制,不走 QML。qml4j 本身是用纯 Java 实现的 QML 运行时。

## 特性

- 端到端播放:基于网易云音乐 API,覆盖推荐、搜索、用户歌单、最近播放与本地文件。
- 扫码登录,喜欢与取消喜欢,播放队列,三种播放模式(列表循环、随机、单曲循环)。
- 自动换源:灰色、VIP、仅试听的曲目按歌名与歌手匹配替代音源,在播放前完成切换(可关闭)。
- 歌词页:由宿主直接通过 Skija 绘制。逐字滚动(优先 AMLL TTML,网易云作为回退),基于封面取色的流体背景,罗马音与翻译,Material 波浪进度条;支持拖动滚动、释放后惯性滑动与点击行跳转。
- Material 3 界面:整套 UI 为 QML(`md3.Core`),运行在 qml4j 引擎上。
- 莫奈动态取色:主题色从当前封面提取(可关闭);支持深色、浅色与跟随系统。
- 系统媒体控件与后台播放:前台 `MediaSession` 服务接管锁屏、通知栏与蓝牙控制,处理自动续播、进度同步、来电暂停与失焦降音。
- 响应式布局:界面随窗口/屏幕宽度自适应(MD3 断点 600 / 840)——窄屏底部导航,宽屏切换为左侧 `NavigationRail`,歌单栅格列数随宽度增减。这套布局是宽度驱动的,安卓横屏与平板同样生效。
- 桌面端(LWJGL3):同一套 QML 与 `player-core` 逻辑跑在桌面,GLFW 开窗、Skija 渲染。**OpenGL / Vulkan 图形后端可在启动时切换**;任务栏图标 + 系统托盘,托盘菜单镜像播放控制;**最小化到托盘时销毁渲染线程与 GPU 资源,恢复时重建**(播放与界面状态保留)。

## 仓库结构

| 模块 | 说明 |
|---|---|
| `player-core/` |…
