---
repo: "YUCLing/open-orpheus"
name: "open-orpheus"
description: "An open-source and cross-platform (Linux, macOS, Windows) implementation of Netease Cloud Music's Orpheus browser host. 网易云音乐的Orpheus浏览器宿主的跨平台（Linux、macOS、Windows）开源实现。"
url: "https://github.com/YUCLing/open-orpheus"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [65]
topics: ["cloudmusic", "electron", "music-player", "netease", "netease-cloud-music", "orpheus", "ncm", "cross-platform", "svelte", "typescript"]
stars: 190
forks: 15
openIssues: 8
closedIssues: 51
watchers: 3
contributors: 5
recentReleases: 10
createdAt: "2026-03-04T20:47:39Z"
lastCommitAt: "2026-06-28T03:09:54Z"
lastReleaseAt: "2026-04-13T02:00:53Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "release_machine"]
healthScore: 96
undervaluedScore: 32
maintainers: ["YUCLing", "github-actions[bot]", "1254qwer"]
openGraphImageUrl: "https://opengraph.githubassets.com/9d308de225fc85571f0cdcc00988bfeffcd875cc68d5a3fc1293ec273bceb268/YUCLing/open-orpheus"
discussionCount: 11
---

# Open Orpheus

[English Version](docs/README_en.md)

一个对网易云音乐 Orpheus 浏览器宿主的开源实现。

项目当前的开发计划请追踪：https://github.com/users/YUCLing/projects/3

## 功能

- 跨平台支持
  - 优秀的原生 Wayland 支持
  - X11
  - macOS
  - Windows
- 开源

不然你还想要啥！它本质上就是给原版客户端提供一个运行环境！

## 截图

<details>
<summary>主界面</summary>

</details>

<details>
<summary>播放界面</summary>

</details>

<details>
<summary>设置界面</summary>

</details>

<details>
<summary>迷你播放器和桌面歌词</summary>

</details>

<details>
<summary>迷你播放器列表</summary>

</details>

## 安装

### Flathub

通过 Flathub 一键安装

### Fedora Linux

可通过 Copr 仓库进行安装

```sh
dnf copr enable luorain/open-orpheus # 启用 Copr 仓库
dnf install open-orpheus # 安装
```

### Arch Linux（第三方AUR）

感谢 @zlicdt 发布

https://aur.archlinux.org/packages/open-orpheus

### Debian Linux、Flatpak、AppImage、Windows、macOS

前往 [Releases](https://github.com/YUCLing/open-orpheus/releases/latest) 下载

### 资源文件

这个项目不会打包某些必需资源，因为它们归网易所有。

Open Orpheus 在首次启动时如果检测到资源缺失，会自动从网易的 CDN **自动下载**，通常无需手动配置。

资源存放在数据目录的子文件夹 `package` 中：

- 开发模式：`data/package/`（相对于工作目录）
- 打包后：`{userData}/package/`

#### `package` 和 `resource` 文件夹

整个 `package` 和 `resource` 文件夹都是必需的。

如果自动下载失败，可以从官方网易云音乐的安装目录手动复制这两个文件夹，例如…
