---
repo: "radiumCN/inkwell"
name: "inkwell"
description: "克制、专注的 Android 小说阅读器：本地 txt/EPUB/MOBI 阅读 + 自定义/Legado 书源在线追更 + WebDAV 同步，Jetpack Compose 全自绘。"
readmeQualityOk: true
url: "https://github.com/radiumCN/inkwell"
homepage: "https://github.com/radiumCN/inkwell/releases"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [94]
topics: ["android", "android-app", "ebook-reader", "epub", "jetpack-compose", "kotlin", "legado", "material3", "mobi", "novel-reader"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-07-13T01:28:34Z"
lastCommitAt: "2026-08-07T05:05:39Z"
lastReleaseAt: "2026-07-13T16:05:58Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 63
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/6d63a946eca38faf2d361598d6a30cbecd4cdfe5fd8915ad63899bdbe89babbd/radiumCN/inkwell"
---

# Inkwell · 墨水

> 一款克制、专注的 Android 文本阅读器 —— 暖纸质感、仿真翻页、进度永不丢失。本地 txt / EPUB / MOBI(AZW3) 阅读 · 可选自定义规则 · WebDAV 跨端同步。

-3DDC84?logo=android&logoColor=white)

Inkwell 用 Jetpack Compose 从零写成，没有广告、没有账号、没有推送。排版引擎全自绘、进度以「章节 + 章内偏移」为真身，改字号也不丢位置；书架、进度与用户配置可通过 WebDAV 单文件同步，书籍文件不上云。**默认不内置任何第三方内容或访问规则**；规则如需使用，均由用户自行导入并对其合法性负责（见下方免责声明）。

## ✨ 功能特性

**阅读**
- 四种翻页：仿真（贝塞尔卷页 + 背面镜像 + 折线阴影）/ 覆盖 / 平移 / 无动画，拖拽跟手、按位移与速度裁决提交或回滚，左右点击与音量键复用同一动画。
- 自绘排版引擎：Canvas + `TextMeasurer` 分页，测量产出的 `TextLayoutResult` 即渲染对象，机制上杜绝分页溢出。
- 进度真身为 `(章节索引, 章内字符偏移)`，页码只是当前排版下的投影 —— 换字号 / 字体 / 屏幕都不丢位置。
- 四款系统预设字体（默认 / 衬线 / 无衬线 / 等宽），亮暗主题跟随暖纸配色。
- 阅读中可切换用户已配置的规则来源；同一次阅读会话内会复用已找到的候选，不必每次重搜。

**书架与规则**
- 本地导入 txt / EPUB / MOBI(AZW3)，与经用户规则加载的内容统一为 `ContentElement` 段落流，一套引擎渲染；同名同作者的本地书不会重复入库。
- 支持用户自行导入 JSON 规则（含与 Legado 文本规则兼容的子集，见下节「高级：规则说明」）；应用不预置、不推荐任何具体规则来源。
- 目录刷新：书架下拉可检查更新、显示最新章节与未读提示。
- 分组筛选、书内 / 全局搜索、可开关的发现入口（仅在用户已导入相应规则时可用）。
- 长按书籍弹出操作面板（详情 / 分组 / 删除等）；面板内可进入多选，批量删除、分组或隐藏。
- 私密书架：可选生物识别 / 密码保护的隐藏分区，入口本身不可见（长按书架标题进入）。
- RSS 订阅：导入订阅源、浏览文章列表与正文。

**同步与维护**
- WebDAV 单文件（`inkwell/backup.json.gz`）增量同步，字段级 Last-Write-Wins 合并（进度按 `readAt`、元数据按 `updatedAt`）；凭据经系统密钥库加密存放。
- 应用内更新检查，稳定 / 测试双通道。
- 一键清理正文缓存（不影响书架与阅读进度）。

## 🧩…
