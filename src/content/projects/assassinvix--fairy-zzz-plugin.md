---
repo: "AssassinVIX/fairy-zzz-plugin"
name: "fairy-zzz-plugin"
description: "A theme that completely replaces the Web interface of DeepSeek Harness with the H.D.D terminal theme of \"Fairy\" from the game \"Zenless Zone Zero\", including the boot animation"
readmeQualityOk: true
url: "https://github.com/AssassinVIX/fairy-zzz-plugin"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [92]
topics: ["dsh-plugin", "dsh-theme"]
stars: 8
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-10-23T03:49:37Z"
lastCommitAt: "2026-10-29T12:22:43Z"
lastReleaseAt: "2026-10-27T13:41:12Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 70
undervaluedScore: 34
maintainers: ["AssassinVIX", "xiao1"]
openGraphImageUrl: "https://opengraph.githubassets.com/280c187e96f1b7ed11b5aacd8caa8eed2960566825a0e8462b2fce5729534bf5/AssassinVIX/fairy-zzz-plugin"
---

# Fairy Ⅲ · 绝区零 H.D.D 皮肤

**中文** · [English](#english)

把 DeepSeek Harness 的 Web 界面换成《绝区零》Fairy 的 H.D.D 终端：满屏开机动画 → 居中问好 → 收成会话区左侧的常驻眼徽，并可用本地 GPT-SoVITS 的 Fairy 音色把回复念出来。

| 眼徽状态 | 设置面板 |
| --- | --- |
|  |  |

## 特性

- **开机动画**：整屏播放 H.D.D 启动片，视频按 `object-fit: contain` 完整显示，多余区域由同帧的模糊铺底填充，任何窗口比例都不会出现硬黑边。启动片自带音轨：页面允许自动播放时直接带声音放，被浏览器拦下就先静音播放，等你第一次点按/敲键再把声音打开。
- **居中问好**：动画结束后淡入 H.D.D 眼徽（深蓝环 / 白盘 / 蓝瞳 / 高光点），背后是蓝光晕图，`HOLLOW DEEP DIVE SYSTEM` 标题带镜面倒影，下方按当前时段（凌晨/上午/中午/下午/傍晚/深夜）播一句问候并同步播放预录音频。
- **收成眼徽**：问候结束约 1.9s 后眼徽飞到会话区左缘的中线（侧栏右侧的蓝色圈内）常驻，光晕图淡出。默认可以按住拖到屏幕任意位置，坐标写进 `localStorage`，刷新后仍在原位；不想要拖动就去 `设置 → Fairy` 关掉「拖动眼徽」，或用「眼标复位」回到会话区左缘。
- **用量气泡**：单击眼徽弹出一个小气泡，显示 DeepSeek 账户余额、今天的花费（按百万 token 折算，含缓存命中/未命中/输出三段拆分）和当前是高峰还是空闲时段（带倒计时，直接告诉你还有多久换价）；再点一下收起。每轮对话跑完会自动弹一次，这时只报「本轮花费 + 峰谷」，不显示余额与今日合计，18 秒后自己消失。价格表与时段规则都在 `index.js` 的 `PRICES` / `peakState()` 里，改一处就够。
- **状态动效**（复刻参考实现 Fairy-DSH 的几何与时长）：
  - `idle` 呼吸 + 缓慢自转 + 扫描光带；
  - `thinking/working` 上眼睑压到半闭并轻微呼吸；
  - 待机随机眨眼（3.4–8.6s 一次，约 24% 概率连眨，眨眼后可能瞟一眼）；
  - 待机随机「花屏」：把整只眼切成 2–4 条横带横向错位；
  - `done` 眼睑轻扫一下。
- **品牌位替换**：隐藏官方 SVG 字标，在原位置叠上 Fairy 眼徽 + 斜体 `Fairy` 字标，位置由量测官方元素得到，随窗口自适应。
- **主题**：深蓝玻璃 + 青蓝霓虹 token、网格与扫描线壁纸、H.D.D 风滚动条与焦点光。
-…
