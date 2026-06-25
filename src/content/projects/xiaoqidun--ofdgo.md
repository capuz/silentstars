---
repo: "xiaoqidun/ofdgo"
name: "ofdgo"
description: "首个原生、全平台兼容的纯 Go 语言 OFD 渲染库"
url: "https://github.com/xiaoqidun/ofdgo"
homepage: "https://aite.me"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-12-29T13:42:07Z"
lastCommitAt: "2026-06-25T01:31:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 67
undervaluedScore: 16
maintainers: ["xiaoqidun"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a44a234695417c4b33fb9a4c6f3fe13ce0a7a40c9986d4f1f2f87e4eb4b8099/xiaoqidun/ofdgo"
---

# OFDGo [![PkgGoDev](https://pkg.go.dev/badge/github.com/xiaoqidun/ofdgo)](https://pkg.go.dev/github.com/xiaoqidun/ofdgo)
首个原生、全平台兼容的纯 Go 语言 OFD 渲染库

# 安装指南
```shell
go get -u github.com/xiaoqidun/ofdgo
```

# 快速开始
```go
package main

import (
	"log"
	"os"

	"github.com/xiaoqidun/ofdgo"
)

func main() {
	// 1. 打开OFD文件
	reader, err := ofdgo.Open("test.ofd")
	if err != nil {
		log.Fatal(err)
	}
	defer reader.Close()
	// 2. 创建PDF文件
	pdfFile, err := os.Create("test.pdf")
	if err != nil {
		log.Fatal(err)
	}
	defer pdfFile.Close()
	// 3. 渲染PDF文件
	renderer := ofdgo.NewRenderer(reader)
	if err := renderer.RenderToMultiPagePDF(pdfFile); err != nil {
		log.Fatal(err)
	}
}
```

# 授权协议
本项目使用 [Apache License 2.0](https://github.com/xiaoqidun/ofdgo/blob/main/LICENSE) 授权协议
