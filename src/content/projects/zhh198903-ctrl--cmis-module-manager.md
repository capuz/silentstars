---
repo: "zhh198903-ctrl/cmis-module-manager"
name: "cmis-module-manager"
description: "Browser-based CMIS 5.3 optical module manager (QSFP-DD 800G/400G) — Flask + vanilla JS, MIT licensed, with 4 built-in mock modules and prebuilt Windows EXE"
readmeQualityOk: true
url: "https://github.com/zhh198903-ctrl/cmis-module-manager"
homepage: "https://github.com/zhh198903-ctrl/cmis-module-manager/releases/latest"
language: "Python"
languages: ["Python"]
languagePcts: [77]
stars: 13
forks: 6
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 10
createdAt: "2026-08-08T03:10:27Z"
lastCommitAt: "2026-09-26T08:46:32Z"
lastReleaseAt: "2026-08-10T05:33:58Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 56
maintainers: ["zhh198903-ctrl"]
openGraphImageUrl: "https://opengraph.githubassets.com/7bbdb9b72279f7d793f3d4a65d87332321c2b18b3f793decfb6668b2932970a0/zhh198903-ctrl/cmis-module-manager"
---

# CMIS Module Manager

A browser-based management tool for CMIS-compliant optical modules (QSFP-DD 800G / 400G and other form factors), built with Flask and vanilla JavaScript. Strictly follows the OIF CMIS 5.4 specification.

基于 Flask + 原生 JS 的光模块可视化管理 Web 工具，严格遵循 OIF CMIS 5.4 规范，支持 QSFP-DD 800G / 400G 等 CMIS 兼容模块。

## 📥 下载 / Download

**免安装 Windows 版：[最新 Release](https://github.com/zhh198903-ctrl/cmis-module-manager/releases/latest)**

下载 `CMIS_dist_v<版本>.zip`，解压后双击 `CMIS_Module_Manager.exe` 即可使用 —— 单文件自包含，
目标机**无需安装 Python**。首次运行 Windows SmartScreen 可能拦截，点「更多信息 → 仍要运行」。

| 解压后的文件 | 说明 |
|---|---|
| `CMIS_Module_Manager.exe` | 单文件 Windows EXE，双击即用 |
| `CMIS模块管理工具操作手册.html` | 完整中文操作手册（浏览器打开） |
| `screenshot_main.png` / `qrcode.jpg` | 辅助资源 |

> ⚠️ **v2.0.0 及更早版本存在 Page 10h 控制寄存器地址错位**，在真实模块上会导致 TX Disable 实际
> 翻转极性、写 RX 极性掩码误触发 ApplyDPInit。**请务必升级到 v2.0.1 或更新版本。**

## Features / 功能

- **Register access 寄存器读写** — raw read/write on any Page/Address, with CMIS field decoding
- **Module info 模块信息** — vendor identity, capabilities, power class, applications advertising
- **Real-time monitoring 实时监控** — temperature, VCC, per-lane Tx/Rx power and bias with alarm thresholds, plus the…
