---
repo: "Yizhou147/qbittorrent-android"
name: "qbittorrent-android"
description: "qBittorrent for Android - cross-compiled with GitHub Actions"
readmeQualityOk: true
url: "https://github.com/Yizhou147/qbittorrent-android"
language: "Shell"
languages: ["Shell", "Java"]
languagePcts: [56, 33]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-07-04T13:40:01Z"
lastCommitAt: "2026-09-13T08:28:36Z"
lastReleaseAt: "2026-07-08T10:47:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 47
maintainers: ["Yizhou147"]
openGraphImageUrl: "https://opengraph.githubassets.com/86bd295268129dbb1fb86e6c56d3762c85a9167f4ee765a9c49d947696e2f289/Yizhou147/qbittorrent-android"
---

</p>

<h1 align="center">qBittorrent for Android</h1>

</p>

将 [qBittorrent](https://www.qbittorrent.org/) 移植到 Android 平台，通过 WebView 访问 WebUI 进行操作。

**支持三个 qBittorrent 版本**（CI 矩阵构建，任选）：

| qBittorrent | libtorrent | Qt | C++ 标准 | VueTorrent |
|---|---|---|---|---|
| 4.3.9 | 1.2.20 | 5.15.2 | 17 | v0.13.0（v1.0+ 要求 qb ≥ 4.4） |
| 4.6.7 | 2.0.10 | 5.15.2 | 17 | 最新 |
| 5.2.3 | 2.0.14 | 6.6.3 | 20 | 最新 |

不推荐进行PT下载，强行使用后果自负！

## 功能特性

- 完整的 qBittorrent 功能，通过 WebUI 访问
- 支持 ARM64 架构（arm64-v8a）
- 支持多语言界面（含中文）
- 自动初始化配置和密码设置
- 可自定义 WebUI 端口
- 可自定义默认下载路径
- 支持切换 WebUI（默认 WebUI / VueTorrent）
- 支持 BT/磁力链接下载
- 支持种子文件选择上传

## 技术架构

### 核心组件

1. **Qt 框架**（预编译包，经 aqtinstall 安装）
   - 4.3.9 / 4.6.7 使用 Qt 5.15.2 Android 版
   - 5.2.3 使用 Qt 6.6.3 Android 版（qb 5.x 要求 Qt ≥ 6.6，交叉编译需 QT_HOST_PATH）

2. **libtorrent**
   - qb 4.3.9 → libtorrent 1.2.20；qb 4.6.7 → 2.0.10；qb 5.2.3 → 2.0.14
   - 必须用 `git clone --recursive` 获取源码（release tarball 缺 try_signal 子模块）
   - 交叉编译目标 `arm64-v8a`，动态链接 `libc++_shared.so`

3. **qBittorrent**
   - 编译为共享库（libqbt.so），通过 JNI 桥接在 Android 进程内运行
   - 源码改自官方 release tag，补丁见 `ci/patches/<版本>/`
   - 包含完整的 WebUI 翻译文件（宿主机 lrelease 预编译 .qm + qrc）

4. **OpenSSL 3.3.2** + **Boost 1.86.0**…
