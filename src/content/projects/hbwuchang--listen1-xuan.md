---
repo: "HBWuChang/listen1_xuan"
name: "listen1_xuan"
description: "This software is a Flutter rewrite of Listen1, supporting Windows, MacOS, Android, and iOS platforms."
originalDescription: "本软件为flutter重写的Listen1,支持Windows、MacOS、Android及iOS平台"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/HBWuChang/listen1_xuan"
homepage: "https://www.bilibili.com/video/BV133VHzaEPt/"
language: "Dart"
languages: ["Dart"]
languagePcts: [85]
topics: ["dart", "flutter", "listen1"]
stars: 87
forks: 8
openIssues: 4
closedIssues: 26
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-12-14T05:42:54Z"
lastCommitAt: "2026-07-07T06:38:50Z"
lastReleaseAt: "2025-05-05T12:47:25Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 86
undervaluedScore: 50
maintainers: ["HBWuChang"]
openGraphImageUrl: "https://opengraph.githubassets.com/988ac3833bf86c18952ba40cecf6a7b00ef95c8084dbb1106a2ca44c48db68e5/HBWuChang/listen1_xuan"
fundingLinks: ["CUSTOM:https://github.com/user-attachments/assets/8164b742-068e-4e85-9edc-6884719380a2"]
discussionCount: 1
---

# listen1_xuan

This software is a Flutter rewrite of Listen1, supporting Windows, MacOS, Android, and iOS platforms.
-https://www.bilibili.com/video/BV133VHzaEPt/
flutter version 3.38.10

## Releases说明

- Windows：下载 `windows-build-artifact-<commit>.zip`
- macOS：下载 `listen1_xuan-<version>-macos-<commit>.zip`
- iOS：下载 `listen1_xuan-ios-<commit>.app.zip`
- Android：按设备CPU架构选 APK（推荐优先选择单架构包，体积更小）
  - 安卓务必授予全部存储访问权限！！！
  - `app-arm64-v8a-release-<commit>.apk`：大多数近年真机（64位ARM）
  - `app-armeabi-v7a-release-<commit>.apk`：老旧32位ARM设备
  - `app-x86_64-release-<commit>.apk`：x86_64模拟器/少数设备
  - `app-release-<commit>.apk`：通用包（包含多架构，体积最大）
  - 若你的`安卓`设备`没有`GooglePlay服务，请考虑优先下载`不带有`without.embedded.Cronet后缀的安装包，否则可能会导致部分github相关请求不成功
- 请在设置页面登录各平台账号(尤其`网易云账号`，否则无法搜索、查看网易云相关歌曲)以确保相应平台可用
- `播放即下载`，安卓在Download/Listen1,win与mac在`默认下载文件夹/Listen1`,ios在`文件`中`listen1Xuan`（可在`2.4.1+38`及之后版本关闭默认下载功能
- 登录Github账号后可使用Github同步歌单、一键下载最新测试版
- 若`win`下网易、QQ、Github登录页面打不开，请尝试检查[webview2运行环境](https://github.com/jnschulze/flutter-webview-windows?tab=readme-ov-file#target-platform-requirements)

## ~~可能需要的~~提示
### 竖屏状态
- 当应用显示`高大于宽`即会以`竖屏布局`渲染
- 竖屏状态地步播放栏可`上划`展示更多控制组件/展示歌词
- 点击播放栏`封面`进入歌词页面
- 在`歌曲信息及控制按钮区域`中：
  -…
