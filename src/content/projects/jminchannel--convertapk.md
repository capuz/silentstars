---
repo: "Jminchannel/ConvertAPK"
name: "ConvertAPK"
description: "一款可以将Web项目/HTML网页，甚至安卓源码快速打包成安卓APK和Windows桌面应用的工具站，你可以在同一界面中快速构建你的专属安装包！"
readmeQualityOk: true
url: "https://github.com/Jminchannel/ConvertAPK"
homepage: "https://gentsergame.com"
language: "Python"
languages: ["Python"]
languagePcts: [47]
topics: ["convertapk"]
stars: 132
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-13T07:25:51Z"
lastCommitAt: "2026-08-17T04:18:03Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 30
maintainers: ["Jminchannel"]
openGraphImageUrl: "https://opengraph.githubassets.com/d2eb132617c422c54da2c5ac36abf2dca94ae571a6536de7d76e38aacea3b91d/Jminchannel/ConvertAPK"
---

# ConvertAPK

ConvertAPK 是一套把 **Web 项目、PWA、单页 HTML** 打包成 **Android APK/AAB** 的源码可见工具链，也包含管理端、构建端和 Electron/Tauri 桌面端能力。它适合开发者、小团队和工具站作者快速验证自己的 Web 应用在 Android WebView/Capacitor 容器中的发布效果。

在线体验：[https://gentsergame.com/](https://gentsergame.com/)

示例视频：[Bilibili BV1XakbBGE16](https://www.bilibili.com/video/BV1XakbBGE16/)

## 项目展示

ConvertAPK 的核心路径是：上传授权 Web 项目，填写 Android 应用配置，交给 Docker 构建器生成 APK/AAB，并在任务页查看日志与下载产物。

</p>

### 从上传到产物

</p>

### 能力地图

</p>

### 系统架构

</p>

## 适合谁

- 想把 Vite、Vue、React、PWA 或静态 HTML 项目快速打包成 Android 安装包的开发者。
- 想学习 Android 打包、签名、AAB、WebView、Capacitor 和 Docker 构建链路的人。
- 想搭建自用 Web-to-APK/AAB 工具站或内部打包平台的小团队。
- 想通过构建日志定位 Gradle、npm、资源文件、签名配置问题的项目维护者。

## 主要能力

- 上传 Web 项目 ZIP 或单页 HTML 后创建构建任务。
- 配置应用名、包名、版本号、图标、启动页、状态栏、横竖屏和签名信息。
- 支持 APK/AAB 构建、任务队列、构建日志、失败诊断和产物下载。
- 支持 Docker 构建器，后端可调用宿主机 Docker 中的 `apk-builder:latest` 镜像完成 Android 构建。
- 提供管理端任务看板、公告、反馈、版本发布、文件管理和概览统计。
- 提供 Electron/Tauri 桌面端，用于本地启动后端并加载用户端界面。

## 快速体验

访问在线站点：

```text
https://gentsergame.com/
```

推荐先上传一个你拥有完整授权的简单 Web 项目，例如 Vite/Vue/React 项目构建源码 ZIP，或一个单页 HTML 文件。创建任务后可以在页面中查看构建日志并下载 APK/AAB 产物。

## Docker 快速启动

```bash
git clone https://github.com/Jminchannel/ConvertAPK.git
cd ConvertAPK…
