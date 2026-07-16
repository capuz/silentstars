---
repo: "liangguifeng/rtp2httpd-fnos-app"
name: "rtp2httpd-fnos-app"
description: "FlyCow APP application developed based on rtp2httpd"
originalDescription: "基于rtp2httpd开发的飞牛APP应用"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/liangguifeng/rtp2httpd-fnos-app"
homepage: "https://findcat.cn"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["fnos", "fnos-appcenter", "fnapp", "rtp2httpd"]
stars: 19
forks: 2
openIssues: 1
closedIssues: 5
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-01-22T03:28:28Z"
lastCommitAt: "2026-07-16T05:59:44Z"
status: "thriving"
tags: []
healthScore: 85
undervaluedScore: 37
maintainers: ["stackia", "liangguifeng"]
openGraphImageUrl: "https://opengraph.githubassets.com/d33004b29e9a4edad68de41bfb5a26996373e9180e10db5eb23313d714420fdc/liangguifeng/rtp2httpd-fnos-app"
---

# rtp2httpd-fnos-app

rtp2httpd - IPTV streaming media forwarding server, this is an application package developed for the FlyCow fnOS platform, used to convert multicast RTP/UDP streams into unicast HTTP streams, supporting RTSP to HTTP, and providing M3U/M3U8 playlists.

## 🚀 Features

For complete functionality description, see https://github.com/stackia/rtp2httpd project.

## 📋 System Requirements

- fnOS 1.1.3100 or higher
- Architecture: x86_64 or aarch64

## 📦 Installation and Deployment

1. Install by searching for `rtp2httpd` in the fnOS application center.
2. During installation, you need to configure the following parameters:
   - Default upstream interface (default: enp2s0)
   - Service listening port (default: 5140; leave empty or 0 to access only through the unified gateway)

## ⚙️ Configuration Instructions

The main configuration file for the application is located at `${TRIM_PKGETC}/rtp2httpd.conf`. For specific parameters, please refer to [Configuration File Format](https://rtp2httpd.com/reference/configuration#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%BC%E5%BC%8F).

## 🔧 Usage Instructions

1. After installation, the service will start automatically.
2.…
