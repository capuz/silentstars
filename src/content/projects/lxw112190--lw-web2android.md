---
repo: "lxw112190/lw.Web2Android"
name: "lw.Web2Android"
description: "轻量级 Web → Android APK 打包工具，将本地 Web 项目或在线 URL 快速转换为可安装 APK，无需 Android Studio 或 Gradle。 Lightweight Web-to-Android APK packer that turns local web projects or URLs into installable APKs without Android Studio or Gradle."
readmeQualityOk: true
url: "https://github.com/lxw112190/lw.Web2Android"
language: "C++"
languages: ["C++", "Java"]
languagePcts: [65, 25]
stars: 7
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 9
createdAt: "2026-08-18T01:24:21Z"
lastCommitAt: "2026-08-21T04:11:34Z"
lastReleaseAt: "2026-08-20T11:02:07Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 50
maintainers: ["lxw112190"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b9f6ec709c10d4adf87729f730c4013b1dfdfb3f99accc7e9e086ded276f586/lxw112190/lw.Web2Android"
---

# lw.Web2Android

[English](https://github.com/lxw112190/lw.Web2Android/blob/HEAD/README_EN.md) | 简体中文

将本地 HTML、Vue、React、Vite 等静态 Web 项目，或一个在线 URL，打包为可安装的 Android APK。

`lw.Web2Android` 面向 Windows 10/11 x64，提供原生 GUI 和 CLI。最终用户不需要安装 Android Studio、Gradle、完整 Android SDK 或完整 JDK；首次使用时确认 Android SDK License，程序会从官方源下载锁定版本的最小组件，并保存在应用程序目录中供后续复用。

## 界面预览

</p>

## 主要能力

- 本地静态网站和在线 URL 两种模式；
- 原生 Windows GUI，支持高 DPI、后台构建和固定尺寸双栏布局；
- 网页来源与应用设置采用左右双栏，左侧内嵌项目支持二维码且不依赖外部图片；
- 预编译 Android Runtime DEX，无需为每个项目重新编译 Java；
- AAPT2 资源生成、ZIP 组装、`zipalign` 和 `apksigner` 完整流水线；
- 每个 Package Name 独立且可复用的 RSA 3072 签名身份；
- Windows DPAPI 加密私钥，以及密码保护的 PFX/P12 备份；
- APK、证书和工具链版本的机器可读发行元数据；
- Packer 与 Android Runtime 轮转日志；
- 标准 `<input type="file">` 系统文件选择器和 Android `DownloadManager`；
- HTML5 视频全屏播放，支持返回键退出与横竖屏切换；
- 对没有移动端 viewport 的固定宽度老式网页启用 Wide Viewport 与 Overview Mode，采用 fit-to-width 整体缩放，不重新排版；
- CLI/project.json 支持正方形 PNG 应用图标，自动生成五档 Android Launcher mipmap 资源；GUI 未指定时使用内置默认图标；
- Custom Scheme 外部应用跳转失败时保留当前 WebView；
- GitHub Actions 自动构建 Runtime、Packer、GUI 和真实 React/Vite Demo。

当前版本：`v0.2.8`<br>
Android：`minSdk 23`，`targetSdk 35`

## 下载与首次使用

从 [GitHub…
