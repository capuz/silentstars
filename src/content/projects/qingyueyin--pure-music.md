---
repo: "qingyueyin/Pure-music"
name: "Pure-music"
description: "Windows端本地音乐播放器"
readmeQualityOk: true
url: "https://github.com/qingyueyin/Pure-music"
homepage: "https://qingyueyin.github.io/Pure-music/"
language: "Dart"
languages: ["Dart"]
languagePcts: [83]
topics: ["bass", "dio", "equalizer", "flutter", "lofty", "material-design", "music-player", "rust", "smtc", "wasapi"]
stars: 86
forks: 5
openIssues: 7
closedIssues: 16
watchers: 0
contributors: 3
recentReleases: 8
createdAt: "2026-02-01T14:18:49Z"
lastCommitAt: "2026-08-10T05:04:51Z"
lastReleaseAt: "2026-08-07T13:37:44Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 39
maintainers: ["qingyueyin", "github-actions[bot]", "asterlore"]
openGraphImageUrl: "https://opengraph.githubassets.com/db1ad922885299eea662572b2ae927feb284e5e5776da8d296d3be3308824512/qingyueyin/Pure-music"
discussionCount: 7
---

# Pure Music

</p>

  专为 Windows 打造的本地音乐播放器
</p>

</p>

一款纯粹的本地音乐播放器。

---

## 截图预览

**深色模式**

**浅色模式**

**曲库浏览**

**桌面歌词样式**

**媒体集成**

**标签编辑**

---

## 特色

**🎨 沉浸式界面** — 封面 k-means 取色驱动 Material You，动态背景，竖屏·横屏·沉浸三档响应式布局

**📝 多格式歌词** — YRC / QRC / KRC / TTML / LRC（含增强 LRC），逐字跟唱，QQ·网易·酷狗·AMLL 在线源，原文 / 翻译 / 注音并排

**🎛️ 专业音频** — 10 段 EQ、半音音调与速度、WASAPI 独占、ReplayGain

**📐 本地曲库** — 艺术家 / 专辑 / 文件夹 / 歌单 / 统计，全局搜索，会话恢复，便携或安装双数据目录

---

## 快速开始

<details>
<summary>构建流程</summary>

```bash
flutter pub get
flutter run

# 构建 Release
flutter build windows --release

# 修改 Rust 后重新生成 FRB 绑定
# 需先安装: cargo install flutter_rust_bridge_codegen
flutter_rust_bridge_codegen generate
```

</details>

<details>
<summary>功能总览</summary>

**播放** — 顺序 / 列表循环 / 单曲循环、随机、下一首播放、淡入淡出、会话恢复、迷你播放条
**音频** — WASAPI 独占、10 段 EQ（前级 / 预设 / AutoEq）、半音音调、速度、KeepPitch、ReplayGain、应用音量 + 系统音量
**主题** — Material You、封面自动取色 / 自定义固定色、系统主题同步、网格渐变与流光背景（音频律动）、主题色进度条·歌词·间奏·控件、自定义字体、沉浸模式
**歌词** — 本地外挂 + 内嵌 + 在线（QQ / 网易 / 酷狗 / AMLL）、逐字随格式、注音 / 翻译、简繁转换、行模糊、行动效、逐字上抬、辉光缩放、间奏动画、桌面歌词
**音乐库** — 歌曲 / 艺术家 / 专辑 / 文件夹 / 歌单浏览、列表·表格与排序记忆、全局搜索、歌单导出、播放统计、SQLite、封面缓存
**布局** — 响应式三档（竖屏 / 横屏 / 沉浸）、播放页仅主区 / 带歌词 / 带队列、波浪进度条分模式开关
**系统** — SMTC…
