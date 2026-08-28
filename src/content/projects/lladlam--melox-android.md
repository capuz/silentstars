---
repo: "lladlam/MeloX-Android"
name: "MeloX-Android"
description: "基于MeloX的类似于Apple Music的第三方音乐客户端，提供特色功能。"
readmeQualityOk: true
url: "https://github.com/lladlam/MeloX-Android"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [98]
stars: 67
forks: 5
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-09T00:53:09Z"
lastCommitAt: "2026-08-28T15:32:36Z"
lastReleaseAt: "2026-08-25T14:54:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 80
undervaluedScore: 30
maintainers: ["lladlam"]
openGraphImageUrl: "https://opengraph.githubassets.com/9c48161fc5fa19ebbb74de984d511acd401514d35d5e4b922af831a9aaab313f/lladlam/MeloX-Android"
fundingLinks: ["CUSTOM:https://ifdian.net/a/lladlam"]
discussionCount: 0
---

# MeloX Android

</p>

  使用 Kotlin + Jetpack Compose 构建的 MeloX 原生 Android 迁移版
</p>

> [!IMPORTANT]
> **MeloX Android 仍处于开发阶段。** 已完成当前 Android 平台范围内的核心功能迁移，并持续以 MeloX 主线作为行为基准；第三方接口、OEM 协议和不同系统版本仍可能带来兼容性变化。

> MeloX Android 是非官方开源项目，与网易云音乐、小米、Apple 及其关联公司不存在隶属、合作或授权关系。

## 当前版本：0.5.1

`0.5.1` 完善第三方音乐源与 CHKSZ 解析链路，支持批量导入本地 LX JavaScript 音源、受限 QuickJS 沙箱、按脚本能力降级音质，以及“遇到会员歌曲时再调用”策略；同时改进 QQ 登录、歌词、液态玻璃、预测性返回、MiSans 字体与完整进程日志导出。

- 下载与完整更新日志：[GitHub Releases](https://github.com/lladlam/MeloX-Android/releases/tag/0.5.1)
- 详细版本记录：[CHANGELOG.md](https://github.com/lladlam/MeloX-Android/blob/HEAD/CHANGELOG.md)
- 本次版本说明：[CHANGELOG.md](https://github.com/lladlam/MeloX-Android/blob/HEAD/CHANGELOG.md)

> [!WARNING]
> 第三方音乐源由用户自行导入并依赖外部服务。发布前用于测试的第三方音源均出现接口失效、限流、DNS/证书错误或返回地址不可播放等情况，因此 MeloX 无法保证任意第三方源可用。若遇到问题，请前往“设置 → 关于”，拉到页面底部导出 MeloX 全部日志，并发送至 `lladlam114@gmail.com`。日志可能包含账号状态、歌曲信息、请求地址或其他隐私数据，请在发送前自行检查。

## 项目说明

MeloX Android 基于 [lladlam/MeloX](https://github.com/lladlam/MeloX) 的设计、交互与业务逻辑进行原生 Android 迁移。

项目目标不是使用 WebView 套壳，而是尽可能使用 Android 原生能力重新实现 MeloX：

- 使用 **Kotlin + Jetpack Compose** 重建界面与交互；
- 使用 **AndroidX Media3 / ExoPlayer** 实现播放、后台音频与系统媒体会话；
- 将 iOS 独有能力映射到 Android 平台能力；
- 在小米…
