---
repo: "blueokanna/VeloGuard"
name: "VeloGuard"
description: "VeloGuard is a cross-platform proxy client built with Flutter UI and a high-performance Rust core. It supports protocols like Shadowsocks and VMess, and manages system traffic via VPN/TUN on Android and Wintun/tun-rs on desktops."
readmeQualityOk: true
url: "https://github.com/blueokanna/VeloGuard"
language: "Dart"
languages: ["Dart"]
languagePcts: [76]
stars: 11
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-01-03T19:22:38Z"
lastCommitAt: "2026-09-17T08:51:20Z"
lastReleaseAt: "2026-08-01T08:16:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 94
undervaluedScore: 47
maintainers: ["blueokanna"]
openGraphImageUrl: "https://opengraph.githubassets.com/25025128a3d3706506080383347e7faa620480777249d79e4a2f5154cd11b37d/blueokanna/VeloGuard"
fundingLinks: ["LIBERAPAY:https://liberapay.com/blueokanna", "BUY_ME_A_COFFEE:https://buymeacoffee.com/blueokanna"]
---

# VeloGuard

</p>

  Flutter + Rust 跨平台代理客户端<br>
</p>

> 状态：预发布。本仓库尚未达到在全部六个目标平台与全部协议上提供生产支持的标准。本文档只描述代码与验证证据支持的能力。

## 当前实现

- Flutter Material Design 3 UI：明暗主题、动态颜色、Google Fonts、响应式导航和页面/组件动画。
- Rust 侧只留一层 FFI：代理引擎、DNS、TUN 数据路径与全部代理协议都由 [corduit](https://crates.io/crates/corduit) 0.1.8 提供，本仓库不再重复实现协议；桥接层负责同步/异步适配、DTO 映射与平台入口。
- 配置转换采用显式降级：corduit 无法构建的协议节点会被丢弃、引用回落 `DIRECT`，corduit 没有对应类型的规则会被跳过——每次降级都通过 `onWarning` 上报，不静默处理。
- 可选本地递归解析：开启后由 [RecurseX](https://crates.io/crates/recurse-x) 从根服务器迭代解析，corduit 的 DNS 上游指向该前端。
- 规则集（`rule-providers`）由 Dart 侧托管：`RuleProviderService` 下载、校验、规范化并缓存到应用私有目录，按 profile 声明的 `interval`（默认 86400 秒）自动刷新；交给引擎的一律是本地 `file` 规则集，刷新失败沿用上一次可用副本，规则集缺失时引用它的 `RULE-SET` 规则按 Clash 语义直接跳过并上报警告，不会拖垮整个配置。
- GeoIP 数据库随安装包分发（`assets/Country.mmdb`），启动时解包到应用支持目录并注册给引擎；解包或注册失败会记录原因，此时 `GEOIP` 规则不会被匹配——不静默降级。
- Android、Windows、Linux 共用 Rust TUN 数据包处理器，各平台独立管理设备生命周期。
- Windows、macOS、Linux、Android、iOS、HarmonyOS NEXT 的应用图标均由 `assets/veloguard.png` 统一生成。

## 协议状态

协议实现位于 corduit 0.1.5；本仓库只负责把它们接进 Flutter，并未对真实服务端互操作做验证。

| 协议 | 实现来源 | 说明 |
| --- | --- | --- |
| HTTP / SOCKS5 | corduit | 出入站路径均在引擎内 |
| Shadowsocks | corduit | 含 AEAD 与流密码路径 |
| VMess / VLESS / Trojan |…
