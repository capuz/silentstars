---
repo: "nuintun/qrcode"
name: "qrcode"
description: "A pure JavaScript QRCode encode and decode library."
readmeQualityOk: true
url: "https://github.com/nuintun/qrcode"
homepage: "https://nuintun.github.io/qrcode"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["qrcode", "qrcode-decoder", "qrcode-generator", "qrcode-scanner", "qrcode-encoder", "qrcode-reader"]
stars: 239
forks: 27
openIssues: 4
closedIssues: 33
watchers: 5
contributors: 2
recentReleases: 0
createdAt: "2014-09-26T09:57:37Z"
lastCommitAt: "2026-11-09T03:29:55Z"
lastReleaseAt: "2019-05-16T03:39:03Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 79
undervaluedScore: 37
maintainers: ["nuintun"]
openGraphImageUrl: "https://opengraph.githubassets.com/0ee3976a9c83f492cfbc3aa04cd5f2dc30be2cad69a9f5eb7aa829bf5414a00a/nuintun/qrcode"
fundingLinks: ["CUSTOM:https://paypal.me/nuintun"]
discussionCount: 0
---

# QRCode

A pure JavaScript QRCode encode and decode library.

> [][npm-url]
> [][npm-url]
> [][github-url]
> [][zread-url]
>
> [][bundle-phobia-url]
> [][bundle-phobia-url]
> [][bundle-phobia-url]
> [][license-url]

**[English](https://github.com/nuintun/qrcode/blob/HEAD/README.md)** | [简体中文](https://github.com/nuintun/qrcode/blob/HEAD/README.zh-CN.md)

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Encoding Guide](#encoding-guide)
  - [Error Correction Level](#error-correction-level)
  - [Segments and Modes](#segments-and-modes)
  - [Version](#version)
  - [Charsets and ECI](#charsets-and-eci)
  - [FNC1](#fnc1)
  - [Output](#output)
- [Decoding Guide](#decoding-guide)
  - [Pipeline](#pipeline)
  - [Detection](#detection)
  - [Decoding](#decoding)
- [API Reference](#api-reference)
  - [Common Interface](#common-interface)
  - [Encoder Interface](#encoder-interface)
  - [Decoder Interface](#decoder-interface)
- [Links](#links)

## Features

- Pure JavaScript, zero native dependencies, runs in browsers and Node.js.
- Tree shakeable, side effect free, only bundle what you actually use.
- All QR code versions (1 -…
