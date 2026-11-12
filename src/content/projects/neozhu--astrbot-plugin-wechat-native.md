---
repo: "neozhu/astrbot-plugin-wechat-native"
name: "astrbot-plugin-wechat-native"
description: "Connect AstrBot to personal WeChat through the agent-wechat-native /v1 API. The plugin is installed inside AstrBot, so no extra Bridge service is needed."
originalDescription: "让 AstrBot 通过 agent-wechat-native /v1 API 接入个人微信。插件装在 AstrBot 内，不需要额外 Bridge 服务。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/neozhu/astrbot-plugin-wechat-native"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["astrbot-plugin", "agent-wechat", "astrbot-wechat"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 13
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-10-29T02:03:53Z"
lastCommitAt: "2026-11-12T11:42:51Z"
lastReleaseAt: "2026-11-11T23:27:05Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 60
maintainers: ["neozhu", "Wings-030"]
openGraphImageUrl: "https://opengraph.githubassets.com/a4cf0ca658f08b5939aac03bf8e5cbf87df1994c311715a931abe00c8b216394/neozhu/astrbot-plugin-wechat-native"
---

# WeChat Native

Connect AstrBot to personal WeChat and use models, voice, and plugin capabilities in private and group chats.
The plugin connects to WeChat through the **agent-wechat-native /v1 API**, runs inside AstrBot, and needs no extra Bridge service.

**Compatible versions:** AstrBot `>=4.29.3,<5` · Native `v2.3.0` · Python `3.12+`

[Feature overview](#功能概览) · [Installation and configuration](#安装与配置) · [Docker deployment](#docker-部署同一台-linux-主机) · [FAQ](#常见问题) · [Detailed usage](https://github.com/neozhu/astrbot-plugin-wechat-native/blob/HEAD/docs/features.md)

## Feature overview

### Message intake and smart replies

Image recognition requires a vision model; speech recognition and speech synthesis require separately configured STT and TTS. AstrBot text-to-image is supported; sending regular files is not supported yet.
See [image sending](https://github.com/neozhu/astrbot-plugin-wechat-native/blob/HEAD/docs/features.md#支持发送图片), [media reading commands](https://github.com/neozhu/astrbot-plugin-wechat-native/blob/HEAD/docs/features.md#图片识别), [voice sending and receiving](https://github.com/neozhu/astrbot-plugin-wechat-native/blob/HEAD/docs/features.md#微信语音收发), and [quoted…
