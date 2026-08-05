---
repo: "chenxin527/uboot-qsdk12.5-build"
name: "uboot-qsdk12.5-build"
description: "uBootKit - Qualcomm IPQ Platform U-Boot"
readmeQualityOk: true
url: "https://github.com/chenxin527/uboot-qsdk12.5-build"
language: "C"
languages: ["C", "Python"]
languagePcts: [35, 27]
stars: 43
forks: 11
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-01-02T17:09:56Z"
lastCommitAt: "2026-08-05T06:05:47Z"
lastReleaseAt: "2026-07-30T10:52:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 39
maintainers: ["chenxin527"]
openGraphImageUrl: "https://opengraph.githubassets.com/c82d0234873ad7437b540929da7e1706ecf7dd42cb60fafa502a617c82808cb6/chenxin527/uboot-qsdk12.5-build"
---

# uBootKit - Qualcomm IPQ Platform U-Boot

## 项目简介

- 支持通过 DHCP 为客户端分配 IP，无需手动固定 IP。
- 自动过滤来自上级路由的 DHCP 报文（OFFER / ACK 等），防止干扰 U-Boot DHCP（IPQ50xx 暂不支持）。
- 类 Argon 风格的 Web 界面，针对移动端也进行了优化。

## 浏览器兼容性

由于 Web 前端使用了很多新特性（gzip 压缩等），所以建议使用新版浏览器访问，过于古老的浏览器可能无法正常渲染。

| 浏览器 | 最低版本 | 推荐版本 | 兼容状态 |
|:-------|:--------|:--------|:---------|
| **Google Chrome** | 80+ | 最新版 | ✅ **兼容** |
| **Microsoft Edge** | 80+ | 最新版 | ✅ **兼容** |
| **Mozilla Firefox** | 75+ | 最新版 | ✅ **兼容** |
| **Apple Safari** | 14.1+ | 最新版 | ✅ **兼容** |
| **Opera** | 67+ | 最新版 | ✅ **兼容** |
| **Internet Explorer** | - | - | ❌ **不兼容** |

## 进 Web 界面

默认后台 IP 为 192.168.1.1（进入 Web 后可在 “系统 -> 网络设置” 页面下自定义，建议修改为与上级路由不同网段的 IP）。

| 方法                                                   | 说明                                                         |
| :----------------------------------------------------- | :----------------------------------------------------------- |
| 按键                                                   | 有什么键就按什么键，Reset、WPS、Mesh、Joy、Screen、Sync 等等，除电源开关（部分机型有）外都能按。按住按键后给机器通电，观察到 LED 闪烁 3 次后常亮说明 httpd 已经启动。 |
| 环境变量                                               | 设置 failsafe 环境变量：1. 设为 "always"，U-Boot 每次启动都会进入…
