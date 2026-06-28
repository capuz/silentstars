---
repo: "wxsms/bilibili-video2mp3"
name: "bilibili-video2mp3"
description: "A tool to download all videos and convert to mp3 inside a video set of bilibili."
url: "https://github.com/wxsms/bilibili-video2mp3"
homepage: "https://www.npmjs.com/package/bv2mp3"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["bilibili", "downloader", "mp3"]
stars: 58
forks: 8
openIssues: 2
closedIssues: 4
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2021-12-29T10:11:10Z"
lastCommitAt: "2026-06-28T01:33:34Z"
lastReleaseAt: "2021-12-30T05:59:17Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 92
undervaluedScore: 52
maintainers: ["wxsms", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6228422e26b9f92b9c652818dfa177ecae60b82214b7346abce9b79fc7ff9fde/wxsms/bilibili-video2mp3"
fundingLinks: ["CUSTOM:https://www.paypal.com/paypalme/wxsm"]
---

# bilibili-video2mp3

下载哔哩哔哩视频合集并转换为 MP3 的命令行工具（单个视频也适用）。

需要 Node.js 20+ 环境，系统需安装 [ffmpeg](https://ffmpeg.org/) 并确保在 PATH 中可访问。

## 使用方式

### 交互模式（推荐）

直接运行命令，按步骤操作即可：

```bash
npx bv2mp3
```

流程：输入视频链接 → 选择分集 → 确认下载

确认时会展示默认设置（转 MP3、命名规则、线程数等），如需修改选择对应项即可，无需修改直接确认开始下载。

### 命令行模式

```bash
# 查看帮助
npx bv2mp3 --help

# 下载视频合集
npx bv2mp3 --url=https://www.bilibili.com/video/BV1yZ4y1X7v3

# 下载多个视频
npx bv2mp3 --url=A --url=B

# 自定义文件命名
npx bv2mp3 --naming=INDEX-TITLE-yousa-DATE --url=A --url=B
```

## License

MIT
