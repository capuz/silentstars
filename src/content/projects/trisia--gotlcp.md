---
repo: "Trisia/gotlcp"
name: "gotlcp"
description: "Implementation of the Transport Layer Cryptography Protocol (TLCP GMSSL) in Go language, following GB/T 38636-2020 Information security technology Transport Layer Cryptography Protocol (TLCP)"
originalDescription: "Go语言实现的传输层密码协议(TLCP GMSSL)，TLCP协议遵循 GB/T 38636-2020 Information security technology Transport Layer Cryptography Protocol (TLCP)"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Trisia/gotlcp"
homepage: "https://trisia.github.io/gotlcp/"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 95
forks: 24
openIssues: 0
closedIssues: 21
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2022-07-29T15:02:33Z"
lastCommitAt: "2026-07-07T06:38:33Z"
lastReleaseAt: "2022-11-18T13:29:59Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 32
maintainers: ["Trisia", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b754ef4445068d201fbdcf5d96e089ee4a3a2c1b288e8df2322aefc144ff8af1/Trisia/gotlcp"
---

# Go TLCP



Information security technology **T**ransport **L**ayer **C**ryptography **P**rotocol (TLCP)

GoTLCP is an implementation of the Transport Layer Cryptography Protocol (TLCP, also known as GMSSL) in Go language, which adheres to GB/T 38636-2020 "Information Security Technology Transport Layer Cryptography Protocol".

GoTLCP implements the record layer protocol, handshake protocol family, and key computation in the TLCP protocol, supporting complete TLCP handshake, session reuse, transport protection, and one-way authentication (authenticating the server) as well as two-way authentication.

The supported cipher suites and their priorities are as follows:

1. `ECC_SM4_GCM_SM3`
2. `ECC_SM4_CBC_SM3`
3. `ECDHE_SM4_GCM_SM3`
4. `ECDHE_SM4_CBC_SM3`

**Before using GOTLCP, please be sure to read [***"Go TLCP Disclaimer"***](https://github.com/Trisia/gotlcp/blob/HEAD/免责声明.md)!**

*If you encounter difficulties with cloning and document preview, please visit [https://gitee.com/Trisia/gotlcp](https://gitee.com/Trisia/gotlcp)*

## Installation

To install and use GoTLCP, you first need to install [Go](https://go.dev/) and set up your Go environment. GoTLCP requires at least Go…
