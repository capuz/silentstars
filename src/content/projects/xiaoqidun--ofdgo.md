---
repo: "xiaoqidun/ofdgo"
name: "ofdgo"
description: "首个原生、全平台兼容的纯 Go 语言 OFD 渲染库"
readmeQualityOk: true
url: "https://github.com/xiaoqidun/ofdgo"
homepage: "https://aite.me"
language: "Go"
languages: ["Go", "JavaScript"]
languagePcts: [75, 20]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-12-29T13:42:07Z"
lastCommitAt: "2026-09-14T09:09:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 55
maintainers: ["xiaoqidun"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf27badc9f030098ca6c66a5876e1d04571edb25b2f1d0cab72839f9e3e89e49/xiaoqidun/ofdgo"
---

# OFDGo [](https://pkg.go.dev/github.com/xiaoqidun/ofdgo)
首个原生、全平台兼容的纯 Go 语言 OFD 渲染库

# 在线体验
[OFDGo WebUI](https://ofdgo.aite.me/)，将OFDGo编译为WASM提供服务

# 一键部署
```shell
docker run -d -p 80:80 ccr.ccs.tencentyun.com/xiaoqidun/ofdgo:latest
```

# 构建指南
```batch
:: 1. 编译OFDGo WASM
set GOOS=js
set GOARCH=wasm
go build -o assets/webui/ofdgo.wasm -trimpath -ldflags "-s -w -buildid=" ./cmd/webui/wasm.go
:: 2. 编译OFDGo WebUI
set GOOS=windows
set GOARCH=amd64
go build -o ofdgo_webui.exe -trimpath -ldflags "-s -w -buildid=" ./cmd/webui/webui.go
```

# 安装为库
```shell
go get -u github.com/xiaoqidun/ofdgo
```

# 渲染输出
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

# 签名验证
```go
package main

import (
	"log"
	"os"

	"github.com/xiaoqidun/ofdgo"
)

func main() {
	// 1. 打开OFD文件
	data, err :=…
