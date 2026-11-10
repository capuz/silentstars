---
repo: "cyj265/lanxing-vod"
name: "lanxing-vod"
description: "揽星影视 · Android phone video on-demand / live streaming player (compatible with TVBox JSON interface), supporting DLNA casting, live EPG and time-shift, multi-repository source management, and a frosted-glass UI. Secondary development based on Fongmi TV."
originalDescription: "揽星影视 · 安卓手机端影视点播/直播播放器（兼容 TVBox JSON 接口），支持 DLNA 投屏、直播 EPG 与时移、多仓源管理、毛玻璃 UI。基于 Fongmi TV 二次开发。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/cyj265/lanxing-vod"
language: "Java"
languages: ["Java"]
languagePcts: [92]
stars: 7
forks: 3
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-09-13T07:09:13Z"
lastCommitAt: "2026-11-10T14:48:54Z"
lastReleaseAt: "2026-11-09T04:49:01Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 69
undervaluedScore: 52
maintainers: ["cyj265"]
openGraphImageUrl: "https://opengraph.githubassets.com/ab09d4cc214efc4f69fd6111a794eb9f95d7c5734883ed6692fb9676f1b216bd/cyj265/lanxing-vod"
fundingLinks: ["KO_FI:https://ko-fi.com/fongmi", "CUSTOM:https://paypal.me/fongmitw"]
---

# 揽星影视

An audio-video app for Android phones (including tablets / foldables), developed as a secondary build based on [FongMi/TV](https://github.com/FongMi/TV). It integrates media browsing and playback, is compatible with the TVBox (JSON) interface protocol, and supports external configuration and [CatVod](https://github.com/CatVodTVOfficial/CatVodTVJarLoader) Spider interface extensions.

**The App itself does not bundle or provide any content sources.** External content must be configured by the user. You can also open local media files or push media URLs.

## Project Overview

揽星影视 builds on the upstream FongMi/TV core with a phone-oriented experience overhaul. Main differences:

- **Frosted-glass UI**: the playback page, settings page, dialogs, and more widely use a frosted-glass (Blur) style.
- **Customizable bottom navigation tabs**: the home page bottom navigation can be reordered and shown or hidden.
- **Picture-in-picture (PiP)**: phone playback supports picture-in-picture.
- **Enhanced live streaming**: live EPG program guide, Catchup replay, and time-shift.
- **Casting**: the DLNA sender (phone) uses a self-developed lightweight SSDP discovery and SOAP control stack;…
