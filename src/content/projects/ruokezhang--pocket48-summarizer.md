---
repo: "RuokeZhang/pocket48-summarizer"
name: "pocket48-summarizer"
description: "Local web app for transcribing and summarizing public Pocket48 replays"
readmeQualityOk: true
url: "https://github.com/RuokeZhang/pocket48-summarizer"
language: "Python"
languages: ["Python"]
languagePcts: [71]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-23T15:47:51Z"
lastCommitAt: "2026-08-30T09:24:04Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 50
maintainers: ["RuokeZhang"]
openGraphImageUrl: "https://opengraph.githubassets.com/18a77ab5b31e753abb02062cd46aa253ec98419166ff5c20e604fd1453fb87bc/RuokeZhang/pocket48-summarizer"
---

# Pocket48 Replay Summarizer

一个可在本机或自托管服务器运行的 Web 应用：粘贴公开的口袋48成员直播分享链接，自动提取回放音频、生成时间戳字幕、解析弹幕，并输出带字幕证据的中文结构化总结。

示例输入：

```text
https://h5.48.cn/2019appshare/memberLiveShare/index.html?id=1297967327104274432
```

## 功能边界

- 仅处理无需登录即可访问的已结束公开回放。
- 不支持实时直播、私有内容、口袋48登录、`pa` 签名或网易云信 QChat。
- 不永久保存原始整场视频；通过 FFmpeg 从 HLS 直接提取临时音频。
- 字幕由可配置的阿里云百炼 DashScope 非实时语音识别模型生成。
- 总结通过可配置的 OpenAI-compatible `/chat/completions` API 生成。
- SQLite 保存任务、中英文字幕、翻译队列、弹幕、ASR 原始 JSON 和总结。
- 成功识别后删除本地临时音频和私有 OSS 临时对象。
- 默认仅监听 `127.0.0.1`。
- 可启用邀请账号：已完成结果公开浏览，提交新任务和剪视频需要登录。
- 同一直播全局去重；邀请账号默认每天最多提交 3 个任务。
- 默认不限制回放时长；如需保护资源，可通过 `MAX_REPLAY_HOURS` 设置正数小时上限，`0` 表示关闭。
- 时间线剪辑会先打开桌面弹窗或移动端全屏编辑器，可调整起止点、吸附字幕与邻近静音、点击锁定红色时间标记，并在标记处分割、删除或恢复片段；预览和导出会按原顺序自动跳过删除区间并拼接所有保留片段。
- 烧录字幕支持按比例调整字号；竖屏字幕固定为纯白文字加黑色描边，不叠任何底色或色块，横屏沿用米白画布配色。横屏预览与最终 ASS 导出使用同一套 1920×1080 比例坐标，长字幕固定在左栏换行，弹幕使用与预览等宽的右栏卡片，并按右栏可用高度自动决定同时显示多少条。
- 桌面剪辑器可选择保留原竖屏 9:16 布局，或导出 1920×1080
  横屏：中间放竖屏视频，左右使用米白画布，左侧显示红色字幕，右侧
  使用玫瑰粉作者名和暖深色弹幕卡片。选择横屏后，原右侧时间线与
  设置工具区会移动到 16:9 预览下方。横屏字幕默认使用开源
  霞鹜文楷，也可切换思源宋体或思源黑体；移动端保持原竖屏编辑体验。
- 桌面剪辑器内置管理员专用的 Seedream AI 封面工作流：以精细时间线的
  MARK 画面为参考，一次独立生成 16:9 与 4:3 两种横屏封面。模型保留原
  人物、房间和画面主色，只做自然扩图与轻度修图，也不固定使用粉色或重绘
  宏大场景。封面上的中文标题由 Seedream…
