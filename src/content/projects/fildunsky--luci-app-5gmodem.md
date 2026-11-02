---
repo: "fildunsky/luci-app-5gmodem"
name: "luci-app-5gmodem"
description: "LuCI app for m2, pcie, usb modems: Network status, signal, operator, IP, band management, TTL fix, modem auto-detect, SMS, USSD, AT"
readmeQualityOk: true
url: "https://github.com/fildunsky/luci-app-5gmodem"
homepage: "https://t.me/openwrt_fun"
language: "Shell"
languages: ["Shell", "JavaScript"]
languagePcts: [51, 41]
stars: 172
forks: 17
openIssues: 3
closedIssues: 48
watchers: 4
contributors: 5
recentReleases: 0
createdAt: "2026-07-11T12:56:20Z"
lastCommitAt: "2026-11-02T13:38:41Z"
lastReleaseAt: "2026-07-14T11:56:24Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 31
maintainers: ["fildunsky", "mskvortsov", "rfedorchuk"]
openGraphImageUrl: "https://opengraph.githubassets.com/469d3c22f7ad8486327c3d52c440ea496d21aa2178dd826de54a6c6c26b8de5a/fildunsky/luci-app-5gmodem"
---

# luci-app-5gmodem

*[Русская версия](https://github.com/fildunsky/luci-app-5gmodem/blob/HEAD/README.ru.md) · [简体中文](https://github.com/fildunsky/luci-app-5gmodem/blob/HEAD/README.zh-CN.md) · [日本語](https://github.com/fildunsky/luci-app-5gmodem/blob/HEAD/README.ja.md) · [Tiếng Việt](https://github.com/fildunsky/luci-app-5gmodem/blob/HEAD/README.vi.md) · [Bahasa Indonesia](https://github.com/fildunsky/luci-app-5gmodem/blob/HEAD/README.id.md)*

A LuCI app for 4G/5G modems on OpenWrt. It merges [`3ginfo-lite`](https://github.com/4IceG/luci-app-3ginfo-lite), [`sms-tool-js`](https://github.com/4IceG/luci-app-sms-tool-js) and some pieces of `modemband` into a single app.

## Installation
Grab the `.apk` (OpenWrt 25.12.x) or `.ipk` (24.10.x) link from the [Releases](https://github.com/fildunsky/luci-app-5gmodem/blob/HEAD/../../releases) page then issue a command:

### .apk (OpenWrt 25.12.x)
```sh
apk update && apk add curl
curl -L https://github.com/fildunsky/luci-app-5gmodem/releases/download/v3.9.13/luci-app-5gmodem-3.9.13-r1.apk > /tmp/luci-app-5gmodem.apk
apk add /tmp/luci-app-5gmodem.apk --allow-untrusted
```

For **eSIM** (optional) install our patched `lpac` too — **pick the build…
