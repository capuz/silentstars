---
repo: "lawnvi/whisper"
name: "whisper"
description: "Cross-platform LAN sharing for files, text, clipboard, audio, and desktop keyboard/mouse peripherals."
readmeQualityOk: true
url: "https://github.com/lawnvi/whisper"
homepage: "https://whisper.127014.xyz"
language: "Dart"
languages: ["Dart"]
languagePcts: [84]
topics: ["file-sharing", "flutter-app", "audio-sharing", "cross-platform", "keyboard-mouse-sharing", "lan-transfer"]
stars: 65
forks: 3
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2023-12-10T15:24:34Z"
lastCommitAt: "2026-09-10T08:19:09Z"
lastReleaseAt: "2024-05-28T19:08:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 53
maintainers: ["lawnvi"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a42ac0ef7422b8d68873e21fd2a207b410a713facb659897a0d8abeaf0eaa38/lawnvi/whisper"
---

# Whisper

[English](https://github.com/lawnvi/whisper/blob/HEAD/README_en.md)

> 面向个人设备的局域网协作工具，通过经过设备配对的本地加密直连通道，在电脑和手机之间传文本、文件、通知、音频和键鼠输入。
> 本项目与 OpenAI Whisper 语音识别模型无关。

> Android 10 及以上版本不允许后台应用读取其他应用的新剪贴板。Whisper 的 Android 前台服务用于保持局域网连接，不能绕过这项系统限制；在其他应用中复制的文本会在 Whisper 回到前台后再同步。

## 下载

[下载最新版本](https://github.com/lawnvi/whisper/releases/latest) · [查看版本更新说明](https://github.com/lawnvi/whisper/releases)

> **Ubuntu 26.04 临时说明：** 当前 `0.0.50` 的 DEB 安装包未声明 `libjsoncpp26` 依赖，因此无法正常完成安装。源码中的打包配置已经修复，将随下个版本发布；在此之前请改用 AppImage：

```bash
chmod +x whisper-0.0.50-linux-x86_64.AppImage
./whisper-0.0.50-linux-x86_64.AppImage
```

## 解决什么问题

Whisper 解决的是一个很日常但反复出现的问题：自己的电脑、手机、备用机都在身边，却仍然要靠聊天软件、网盘或数据线来搬一点文本、文件或声音。

它不是云盘，也不是公网远程桌面。Whisper 默认工作在可信局域网内，设备之间显式建立点对点连接。适合在自己的设备之间临时传输内容、接收 Android 通知、共享桌面系统音频，或在多台桌面设备之间切换键鼠输入。

## 截图

### 文件传输

| 音频共享 | 键鼠共享 |
| --- | --- |
|  |  |

## 特性

- **传输加密**：配对后的文本、文件、剪贴板、通知、音频和键鼠控制均通过身份验证后的加密直连通道传输，并显示设备身份与可信状态。
- **多设备直连**：一台设备可以同时连接多台电脑或手机，连接关系保持显式、可见、可断开。
- **聊天式传输**：文本和手动发送的文件在会话里完成，自动同步的剪贴板不进入会话；图片可全屏查看，音频可直接播放，视频交给系统播放器打开，并支持多选删除聊天记录。
- **系统快捷发送**：支持 Android 分享菜单、桌面右键入口和全局快捷键，不必先打开会话；桌面草稿可等待可信设备重连，Android 未发出的系统分享会在应用重启时丢弃。
-…
