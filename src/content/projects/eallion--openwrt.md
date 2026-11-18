---
repo: "eallion/openwrt"
name: "openwrt"
description: "📦️ Build ImmortalWrt quickly using ImageBuilder in GitHub Actions."
readmeQualityOk: true
url: "https://github.com/eallion/openwrt"
homepage: "https://github.com/wukongdaily/ImmortalWrt-ImageBuilder"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["openwrt", "lede", "router", "imagebuilder", "immortalwrt"]
stars: 16
forks: 9
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2020-06-16T06:20:54Z"
lastCommitAt: "2026-11-18T12:02:39Z"
lastReleaseAt: "2025-06-27T01:29:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 61
undervaluedScore: 53
maintainers: ["eallion"]
openGraphImageUrl: "https://opengraph.githubassets.com/07741da5532521d78a9ce2d625982a3632568195c99bcbfb86279063a8ac1f3b/eallion/openwrt"
---

# OpenWrt(ImmortalWrt) ImageBuilder

Build ImmortalWrt quickly using `immortalwrt/imagebuilder` in GitHub Actions.

### 这是什么？

它是一个工作流，可快速构建带 Docker 且支持自定义固件大小的 ImmortalWrt。

> 1、支持自定义固件大小 默认 `4GB`  
> 2、支持预安装 `docker`（可选）  
> 3、默认 LAN 口 IP 为 `192.168.0.1`  
> 4、可以通过 `files/etc/uci-defaults/99-custom.sh` 配置和调整  
> 5、可以通过 `shell/apk-custom-packages.sh` 添加或删除第三方插件  
> 6、可以通过 `x86-64/build.sh` 添加删除插件  
> 7、`shell/cloudflared.sh` 独立模块按需重打包并安装 Cloudflared 最新版及 LuCI 中文 APK（默认保持注释）  
> 8、`shell/ddns-go.sh` 独立模块按需重打包并安装 DDNS-GO 最新版及 LuCI 中文 APK（默认保持注释）  
> 9、`shell/easytier.sh` 独立模块按需安装 EasyTier 核心及 APK 插件  
> 10、`shell/trafficctl.sh` 独立模块按需安装 trafficctl 核心、trafficctl-telegram、luci-app-trafficctl 及中文语言包 APK  

### ImmortalWrt 软件仓库镜像

- https://help.mirrors.cernet.edu.cn/immortalwrt/

### 如何查询都有哪些插件？

- https://downloads.immortalwrt.org/releases/25.12.2/packages/x86_64/luci/
- https://mirrors.cernet.edu.cn/immortalwrt/releases/25.12.2/packages/x86_64/luci/
- https://mirrors.sjtug.sjtu.edu.cn/immortalwrt/releases/25.12.2/packages/x86_64/luci/
- https://mirror.nju.edu.cn/immortalwrt/releases/25.12.2/packages/x86_64/luci/
