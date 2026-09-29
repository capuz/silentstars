---
repo: "xiaoqidun/ofdgo"
name: "ofdgo"
description: "The first native, cross-platform, pure Go high-performance OFD engine"
originalDescription: "首个原生、全平台、纯 Go 语言高性能 OFD 引擎"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/xiaoqidun/ofdgo"
homepage: "https://aite.me"
language: "Go"
languages: ["Go"]
languagePcts: [77]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-12-29T13:42:07Z"
lastCommitAt: "2026-09-29T08:10:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 55
maintainers: ["xiaoqidun"]
openGraphImageUrl: "https://opengraph.githubassets.com/962bc69ed5c7f34f3d2ce4d7cd49afe438f5aa9df6ac5408001db400045ae158/xiaoqidun/ofdgo"
---

# OFDGo [](https://pkg.go.dev/github.com/xiaoqidun/ofdgo)
The first native, cross-platform, pure Go high-performance OFD engine

# Main Capabilities
- Document Processing: create, read and write, navigation, splitting, merging
- Rendering and conversion: vector, bitmap, import, export, batch
- Document Security: encryption, decryption, signature, seal, signature verification
- Page Management: add, import, copy, sort, delete
- Text Processing: insert, edit, typesetting, search, extract
- Image Processing: insert, replace, scale, crop, extract
- Graphics Processing: draw, combine, transform, align, distribute
- Annotation Management: comments, highlight, link, watermark, stamp
- Resource Management: fonts, colors, images, media, attachments

# Online Usage
[OFDGo WebUI](https://ofdgo.aite.me/), OFDGo compiled as WASM service

# Link Integration
```text
https://ofdgo.aite.me/#url=<URL-encoded file address>
```

| Parameter | Required | Description |
| --- | --- | --- |
| `url` | Yes | File address, supports OFD, PDF |
| `name` | No | File name, automatically obtained by default |
| `page` | No | Physical page number, default 1, if exceeded, take the last page |

Parameters are…
