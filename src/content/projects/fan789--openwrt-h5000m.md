---
repo: "FAN789/openwrt-H5000M"
name: "openwrt-H5000M"
description: "ImmortalWrt builder for Hiveton/Airpi H5000M"
originalDescription: "ImmortalWrt builder for Hiveton/Airpi H5000M"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/FAN789/openwrt-H5000M"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 12
forks: 10
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 9
createdAt: "2026-06-04T11:39:07Z"
lastCommitAt: "2026-07-30T06:07:40Z"
lastReleaseAt: "2026-07-29T16:57:11Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "fork_magnet"]
healthScore: 89
undervaluedScore: 68
maintainers: ["FAN789"]
openGraphImageUrl: "https://opengraph.githubassets.com/82fcd882df8153d562be68598bfa9162e58d9c4912b6fa368abc8850b9337fa9/FAN789/openwrt-H5000M"
---

# openwrt-H5000M

Hiveton/Airpi H5000M 的干净基础固件构建项目。主包直接使用 OpenWrt 官方 ImageBuilder 和官方 H5000M 设备支持，只补充 Web 管理、中文、常用工具和产品级首启默认值，不维护 DTS、端口布局、内核补丁或自研应用副本。

## 主包边界

主包只包含：

- OpenWrt 官方 H5000M 系统与驱动
- LuCI HTTPS 管理界面和简体中文
- 软件包管理器、ttyd（预装但默认停用）
- 常用诊断、存储和 USB 工具
- OpenWrt 官方 UPnP LuCI 与 `miniupnpd-nftables`
- H5000M 插件仓库公钥（仅公钥，不包含签名私钥）

主包明确不包含：

- H5000M 风扇管理
- MT5700M 模组管理和 5G 流量统计
- 有线 WAN / 5G 出口优先级
- PassWall2 主程序、运行依赖、代理核心、节点、分流或凭据配置
- QModem 主程序、第三方 feed、原厂 MT5700M WebUI
- EEPROM 自动写入、非官方 DTS 或内核补丁

这些功能以独立签名插件交付，插件故障不会影响基础系统启动。

## daed 集成变体

daed 依赖内核 BTF 与 XDP sockets，官方 H5000M 镜像未提供这两个能力，因此
另设同一官方源码版本构建的 daed 集成变体。该变体不改变主包的干净
ImageBuilder 路线，也不向官方 ABI 固件混装内核模块。它只对风扇 cooling-map
做最小 DTS 调整，CPU 降频、hot/critical 保护仍由内核管理。配置边界、双版本
GeoData 和验证要求见 [`docs/DAED-INTEGRATED.md`](https://github.com/FAN789/openwrt-H5000M/blob/HEAD/docs/DAED-INTEGRATED.md)。
该变体内置脱敏的 daed 全局、DNS、路由和策略组默认值；节点、订阅、用户及凭据
始终由最终用户自行添加。

## 独立插件

| 功能 | 独立仓库 |
| --- | --- |
| H5000M 风扇管理 | [luci-app-h5000m-fancontrol](https://github.com/FAN789/luci-app-h5000m-fancontrol) |
| MT5700M 模组管理及 5G 流量统计 | [luci-app-mt5700m](https://github.com/FAN789/luci-app-mt5700m) |
| 有线 WAN / 5G 出口优先级 |…
