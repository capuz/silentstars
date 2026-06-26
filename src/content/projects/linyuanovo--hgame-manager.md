---
repo: "LinYuanovo/HGame-Manager"
name: "HGame-Manager"
description: "黄油仓库 - 本地HGame管理工具，支持游戏库管理、刮削、标签分类等功能"
url: "https://github.com/LinYuanovo/HGame-Manager"
language: "Dart"
languages: ["Dart"]
languagePcts: [97]
stars: 152
forks: 1
openIssues: 0
closedIssues: 8
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-05-28T08:58:09Z"
lastCommitAt: "2026-06-26T06:47:14Z"
lastReleaseAt: "2026-06-14T12:04:23Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 34
maintainers: ["LinYuanovo"]
openGraphImageUrl: "https://opengraph.githubassets.com/533936d626aa19f35fc2c576ca36f81750f0a12bf4d253303a06ced85dc5ab7a/LinYuanovo/HGame-Manager"
---

<h1 align="center">黄油仓库</h1>

  <b>HGame-Manager</b>
</p>

  <nobr>
  </nobr>
</p>

  <b>一款基于 Flutter 开发的 Windows 本地 HGame 管理器</b><br>
  <i>玻璃拟态设计 · 智能刮削 · 存档管理 · 转区启动 · 分类存放</i>
</p>

***

## 快速开始

### 环境要求

<details>
<summary>点击展开查看环境要求</summary>

#### 用户使用（直接下载）
- **操作系统**: Windows 10/11 (64位)
- **内存**: 建议 4GB+
- **磁盘空间**: 200MB+（解压后）

#### 开发构建
- **Flutter SDK**: >= 3.41.9
- **Dart SDK**: >= 3.11.5
- **操作系统**: Windows 10/11 (64位)
- **内存**: 建议 8GB+
- **磁盘空间**: 2GB+（含构建缓存）

</details>

### 安装步骤

#### 直接使用

Windows 系统在 [releases](https://github.com/LinYuanovo/HGame-Manager/releases) 页面直接下载 zip 压缩包后**解压**即可使用([网盘](https://docs.qq.com/sheet/DVXZ6U2xmbFZuVGtQ?tab=BB08J2))

#### 使用教程

- [图文教程](https://github.com/LinYuanovo/HGame-Manager/blob/master/%E4%BD%BF%E7%94%A8%E6%95%99%E7%A8%8B.docx)

- [视频教程在网盘内](https://docs.qq.com/sheet/DVXZ6U2xmbFZuVGtQ?tab=BB08J2)

#### 自行构建

<details>
<summary>点击展开查看自行构建方式</summary>

```bash
# 克隆仓库
git clone https://github.com/LinYuanovo/HGame-Manager.git
cd HGame-Manager

# 安装依赖
flutter pub get

# 运行应用（开发模式）
flutter run -d windows

# 构建发布版本
flutter build windows --release
```

可执行文件位于：
```
build/windows/x64/runner/Release/hgame_manager.exe
```…
