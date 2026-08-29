---
repo: "2710165659/osu-beatmap-preview"
name: "osu-beatmap-preview"
description: "osu-beatmap-preview supports all four game modes, beatmap conversion, mods, and specifying a time point."
readmeQualityOk: true
url: "https://github.com/2710165659/osu-beatmap-preview"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 8
createdAt: "2026-04-18T16:23:18Z"
lastCommitAt: "2026-08-29T10:21:55Z"
lastReleaseAt: "2026-08-02T11:25:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 61
maintainers: ["2710165659", "L1rics06"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2dd8f2ddba4647a93216270bb69a283e1dce2981222b5a6522ae93e67039a07/2710165659/osu-beatmap-preview"
discussionCount: 0
---

# osu! Beatmap Preview

[中文](https://github.com/2710165659/osu-beatmap-preview/blob/HEAD/README.md) | [English](https://github.com/2710165659/osu-beatmap-preview/blob/HEAD/docs/README.en.md)

> 一个快速的 osu! 谱面预览工具，支持四种模式（Standard / Taiko / Catch / Mania）的 GIF 动图、PNG 静态图与 MP4 视频渲染。

## 特性

- **单可执行文件**：所有资源在编译时嵌入二进制，运行时无任何外部依赖，即开即用。  
- **跨平台**：原生支持 Windows、Linux 与 macOS。  
- **功能完备**：支持四种游戏模式、MOD、转谱及 SV（变速）功能。  
- **三种输出格式**：GIF 动图、PNG 静态长图，以及包含原始谱面音频的 MP4 视频。  
- **高性能**：视频编码采用 GPU 加速，整体处理流程速度快、内存占用低、输出文件体积小。详见[批量渲染报告](https://github.com/2710165659/osu-beatmap-preview/blob/HEAD/docs/report.txt)。

> 如果这个项目对你有帮助，欢迎点个 ⭐ Star 支持一下～

## 使用

```bash
osu-beatmap-preview --bid=<BID> [--convert=mania|ctb|taiko|standard] [--fmt=png|gif|mp4] [--mod=<MOD>]... [--time-points=<SECONDS|preview>]... [--duration-time=<SECONDS>] [--no-log] [--no-cache] [--config=<PATH|JSON|YAML>]
```

### 参数

| 参数 | 说明 |
| --- | --- |
| `--bid` | 必填，纯数字的 Beatmap ID。 |
| `--convert` | 转谱模式，支持 `mania` / `ctb` / `taiko` / `standard` / `std`。仅 Standard 可用。 |
| `--mod` | 单个 Mod，组合时重复传入，例如 `--mod=hd --mod=hr`；倍速类可带数值，如 `--mod=dt1.25`。 |
| `--fmt` | 输出格式：`gif` / `png` / `mp4`。不填时按模式取默认值。 |
| `--time-points` | 时间点列表。GIF 和…
