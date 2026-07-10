---
repo: "imengying/AeroBoxForAndroid"
name: "AeroBoxForAndroid"
description: "AeroBox for Android / sing-box / universal proxy toolchain for Android "
readmeQualityOk: true
url: "https://github.com/imengying/AeroBoxForAndroid"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["proxy", "sing-box", "vless", "vpn"]
stars: 42
forks: 0
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-03-04T02:41:31Z"
lastCommitAt: "2026-07-10T07:00:47Z"
lastReleaseAt: "2026-04-06T14:56:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 34
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/ec24d42757ebcd5b6057596da373bf81f89df23905e5ac334c4964e4fa97b34e/imengying/AeroBoxForAndroid"
---

# AeroBox for Android

AeroBox for Android is a sing-box / libbox based proxy toolchain for Android.

一款基于 sing-box / libbox 的 Android 原生通用代理软件。

## 下载 / Downloads

- [GitHub Releases](https://github.com/imengying/AeroBoxForAndroid/releases)

## 功能 / Features

- 基于 sing-box / libbox 的 Android VPN 模式代理
- 订阅管理、手动更新、自动更新
- 分应用代理
- 路由模式切换：全局代理 / 规则分流 / 直连
- 使用官方 Geo 规则集
- DNS 自定义，支持 DNS over TLS / HTTPS
- IPv6 支持、开机自连、断线自动重连
- 节点延迟测试、运行日志、通知栏快捷切换
- Material 3 + Jetpack Compose 界面

## 支持的代理协议 / Supported Proxy Protocols

- Shadowsocks
- Shadowsocks 2022
- VMess
- VLESS
- Trojan
- Hysteria 2
- TUIC
- SOCKS5
- HTTP Proxy
- Naive

## 支持的订阅格式 / Supported Subscription Formats

- Clash / Clash.Meta YAML
- 常见 URI 节点订阅格式
- sing-box outbound JSON / 常见 JSON 节点列表
- 支持读取部分订阅流量与到期信息
- 支持本地、扫码和单节点导入

说明：

- 当前主要是导入节点信息
- 订阅中的分流规则等信息不会直接照搬进应用配置

## 系统要求 / Requirements

- Android 12+ (`minSdk 31`)
- 推荐使用 GitHub Actions 构建发布版本

## Credits

- Core: [SagerNet/sing-box](https://github.com/SagerNet/sing-box)
- Android runtime bridge: `libbox` / `gomobile`
- UI & Android stack: AndroidX, Jetpack Compose, Room, WorkManager

## License

GPL-3.0-or-later

See…
