---
repo: "piglig/go-qr"
name: "go-qr"
description: "A native, high-quality and minimalistic QR code generator and decoder"
readmeQualityOk: true
url: "https://github.com/piglig/go-qr"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["go", "qr-code", "qrcode", "qr", "qr-generator", "qrcode-generator", "golang"]
stars: 64
forks: 8
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 5
recentReleases: 2
createdAt: "2023-06-29T06:05:45Z"
lastCommitAt: "2026-10-07T10:31:01Z"
lastReleaseAt: "2026-10-07T10:07:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 44
maintainers: ["piglig", "neomantra"]
openGraphImageUrl: "https://opengraph.githubassets.com/48a57d4bcddb34f54651adf9829808d198c56ab650123781b9ceeccc74c53180/piglig/go-qr"
discussionCount: 1
---

# go-qr

> 🎶 Minimalist, zero-dependency QR code generator **and decoder** for Go.

## Contents
- [Features](#features)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Encoding](#encoding)
- [Rendering](#rendering)
- [Styling](#styling)
- [Decoding](#decoding)
- [Structured Payloads](#structured-payloads)
- [Batch Processing](#batch-processing)
- [Errors](#errors)
- [Performance](#performance)
- [Command-Line Tool](#command-line-tool)
- [License](#license)

## Features
- QR Code Model 2: all 40 versions and all four error correction levels
- Optimal mixed-mode segmentation (numeric, alphanumeric, byte, Kanji) by default, with optional UTF-8 ECI
- PNG, compact single-path SVG, `image.RGBA` and Unicode text output, with custom colors and logos
- Styled codes: dot and rounded modules, rounded and circular finders, finder colors and gradients, each checkable with `Verify`
- A native decoder that reads rotated, inverted, mirrored, low-contrast and unevenly lit images, plus Kanji and ECI character sets
- Structured payloads: Wi-Fi, MECARD, email, SMS, tel, geo, URL
- Concurrent, cancelable batch encoding and rendering
- No dependencies outside the standard library

##…
