---
repo: "sodahub-org/libmssdk"
name: "libmssdk"
description: "Signing service for the Soda Music app: wraps the official client's bdms.node as an HTTP/stdio service, providing X-Helios / X-Medusa for Linux clients such as libresoda"
originalDescription: "汽水音乐应用签名服务：把官方客户端 bdms.node 封装成 HTTP/stdio 服务，为 libresoda 等 Linux 客户端提供 X-Helios / X-Medusa"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/sodahub-org/libmssdk"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [93]
stars: 6
forks: 3
openIssues: 8
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-15T01:53:37Z"
lastCommitAt: "2026-10-29T05:49:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 67
undervaluedScore: 35
maintainers: ["zephyr-cheung"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe5d57a013542647af92783022c26af3a2cb07018071096d48cc0a8318972e01/sodahub-org/libmssdk"
---

# libmssdk

> A local signing service wrapper for the `bdms.node` native signing module in the Soda Music PC client. It exposes the official client's bundled native signing module as HTTP / stdio interfaces, for [libresoda](https://github.com/sodahub-org/libresoda) to call and generate the `X-Helios` / `X-Medusa` request headers.

> **Important**: This repository does not include or redistribute `bdms.node` or `metasecml.dll`. You must copy these two files from your own installed Soda Music client, and only for personal use. This project is not affiliated with ByteDance, Douyin, or Soda Music.

## How it works

```text
libresoda / third-party client
  → POST /sign { url, method, headers, body }
  → libmssdk calls bdms.node
  → returns { X-Helios, X-Medusa }
  → client uses this pair of headers to make the real request
```

The signature covers the URL and all request headers, so the headers passed to `/sign` must be exactly the ones that will actually be sent.

## What credentials are needed for full-track playback

Two things: **the `bdms.node` in your own client**, and **the fact that this song is already fully licensed for you**.

No need for the device ID to match the…
