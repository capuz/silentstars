---
repo: "561410590/ssh-nradio-plugin-installer"
name: "ssh-nradio-plugin-installer"
description: "NRadio plugin assistant scripts and support page"
readmeQualityOk: true
url: "https://github.com/561410590/ssh-nradio-plugin-installer"
homepage: "https://n-radio.vercel.app"
language: "Shell"
languages: ["Shell", "Lua"]
languagePcts: [55, 23]
stars: 20
forks: 2
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-27T08:53:11Z"
lastCommitAt: "2026-08-31T10:00:11Z"
lastReleaseAt: "2026-05-03T18:32:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 19
maintainers: ["561410590"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c074c400c748b0156b326e63d5fa3003d6a32f1bb08b1a90c30a424e5e331a7/561410590/ssh-nradio-plugin-installer"
---

# NRadio 插件助手

NRadio 官方 NROS 路由器使用的 SSH 菜单脚本。

- 当前版本：`V3.0.0`（2026-08-30 本地构建）
- 当前公网正式版本：`V3.0.0`，下载与校验以 GitHub Releases 页面为准
- 当前状态：`V3.0.0` 总脚本、支持页、仓库资料和 Repository checks 已同步。
- 公网页：[https://nradio.mayebano.shop/](https://nradio.mayebano.shop/)
- GitHub Releases：[发布页](https://github.com/561410590/ssh-nradio-plugin-installer/releases)

## 当前维护状态

`V3.0.0` 总脚本、支持页、仓库资料与检查规则使用同一版本。公开 `main`、tag 和 Release 以 GitHub 实际页面为准。

## QoS 应用商店插件 1.0.24

- 当前下载包：`luci-app-nradio-qos-pro_1.0.24-1_all.ipk`；支持页固定入口为 [nradio-qos-pro.ipk](https://nradio.mayebano.shop/nradio-qos-pro.ipk)。在 NRadio 应用商店选择本地安装，配置真实带宽后启用。
- VPN 与双线路联动：启停、VPN 重连和后台检查同步站点路由的 mwan3 排除集合；失败显示诊断，VPN-only 恢复保留限速队列。
- C8-788：依据 `HC-WT9302 / HCMT7987-NAND / NROS 2.2.12.n0.c1` 实机输出适配 `eth3` 蜂窝出口及原厂双栈全宽 mark 分类顺序。
- 合并 IPv6 多地址跟踪、减少队列重建、未保存输入保护和请求超时处理。本地回归与安装包检查通过；实机 VPN 连通性和限速数值需按设备验收。
- 本节是独立 QoS 插件更新，总脚本版本仍为 `V3.0.0`。

## 适用设备

支持以下官方 NROS 设备：

| 设备 | 机型代号 | NROS 范围 |
| --- | --- | --- |
| `NRadio_C8-688` | `HC-WT9104` | NROS 2.x |
| `NRadio_C8-668` | `HC-WT9108` | NROS 2.x |
| `NRadio_C8-788` | `HC-WT9302` / `HCMT7987-NAND` | NROS 2.x（小容量 NAND 受限配置） |
| `NRadio_C5800-650` | `HC-WT9120` | NROS 2.x |
| `NRadio_C5800-688` |…
