---
repo: "crazysmile-PhD/downkyicore"
name: "downkyicore"
description: "哔哩下载姬(跨平台版)downkyi，哔哩哔哩网站视频下载工具，支持批量下载，支持8K、HDR、杜比视界，提供工具箱（音视频提取、去水印等）。"
readmeQualityOk: true
url: "https://github.com/crazysmile-PhD/downkyicore"
language: "C#"
languages: ["C#"]
languagePcts: [93]
stars: 143
forks: 75
openIssues: 11
closedIssues: 34
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-05-11T02:34:45Z"
lastCommitAt: "2026-08-21T04:09:56Z"
lastReleaseAt: "2026-07-10T04:03:25Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "under_pressure", "fork_magnet"]
healthScore: 93
undervaluedScore: 37
maintainers: ["crazysmile-PhD", "fsahohfe"]
openGraphImageUrl: "https://opengraph.githubassets.com/a9c5d2d9247aa94099273258266c4d41187a6ae0e9dace8feacb28c8665bc933/crazysmile-PhD/downkyicore"
discussionCount: 0
---

# DownKyi Core

</div>

DownKyi Core 是基于哔哩下载姬 Windows 版与 Avalonia 的跨平台 B 站视频下载工具。v1.1.2 使用 .NET 10、Avalonia 12、Microsoft Generic Host、Microsoft DI 与 CommunityToolkit MVVM，并重构了导航、下载状态、SQLite、HTTP、日志、aria2、FFmpeg 和应用生命周期。

## 下载

- Windows: `DownKyi-*-win-x64.zip` 或 `DownKyi-*-win-x86.zip`
- macOS: `DownKyi-*-osx-arm64.dmg` 或 `DownKyi-*-osx-x64.dmg`
- Linux: AppImage / deb / rpm

更新内容见 [CHANGELOG.md](https://github.com/crazysmile-PhD/downkyicore/blob/HEAD/CHANGELOG.md)。

## 功能

- 支持视频、合集、番剧、课程、收藏、历史记录、稍后再看等入口解析。
- 支持音频、视频、封面、弹幕、普通字幕和 AI 字幕下载。
- 支持 aria2 与内置下载器，并保留断点续传所需的临时文件与状态。
- 下载中删除任务时会同步停止下载器并清理已产生的媒体、`.aria2`、`.download` 等临时文件。
- 支持诊断日志导出，导出内容会脱敏 Cookie、token、邮箱、uid 和本机用户路径。
- 默认使用 AppData / Application Support / XDG 配置目录保存数据，避免把用户数据写进程序目录。

## 运行与数据目录

发布包包含运行所需的 .NET、ffmpeg 和 aria2，不需要用户额外安装。Windows x64 与 Linux 使用 BtbN GPL FFmpeg build，macOS 使用同时提供 x64 / arm64 的静态 FFmpeg build；这些发布包会优先携带可用的硬件 encoder。Windows x86 仍保留兼容性 build，硬件加速不可用时会自动降级。

FFmpeg 合并策略遵循“效能优先，但成功率更重要”：优先无损 stream copy；只有必须重新编码时才自动检测 NVENC / QSV / AMF / VAAPI / VideoToolbox；如果 GPU encoder 不存在、驱动不可用或参数失败，程序会记录原因并回退到低 CPU 软编码。

默认数据目录：

- Windows: `%APPDATA%\DownKyi`
- macOS: `~/Library/Application…
