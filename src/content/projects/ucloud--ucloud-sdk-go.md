---
repo: "ucloud/ucloud-sdk-go"
name: "ucloud-sdk-go"
description: "UCloud SDK for Golang"
readmeQualityOk: true
url: "https://github.com/ucloud/ucloud-sdk-go"
homepage: "https://docs.ucloud.cn/opensdk-go/README"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["ucloud", "sdk", "ucloud-sdk", "devops", "developer-tools"]
stars: 86
forks: 43
openIssues: 5
closedIssues: 12
watchers: 8
contributors: 16
recentReleases: 0
createdAt: "2015-09-15T07:24:41Z"
lastCommitAt: "2026-09-28T10:06:03Z"
lastReleaseAt: "2018-11-12T07:22:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 91
undervaluedScore: 52
maintainers: ["ucloud-bot", "Episkey-G", "Ali1213"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/42502153/c35a6f00-aedd-11e9-8631-e8855baff489"
---

English | [简体中文](https://github.com/ucloud/ucloud-sdk-go/blob/HEAD/README_cn.md)

</p>

<h1 align="center">UCloud Go SDK</h1>

- [Website](https://www.ucloud.cn/)
- [Documentation](https://docs.ucloud.cn/opensdk-go/README)

## Installation

### Requirements

- Go 1.10+

### Use `go get`

```bash
go get github.com/ucloud/ucloud-sdk-go
```

**Note** if meet network problem, you can use go proxy to speed up the downloaded, eg: use GOPROXY environment variable

```go
export GOPROXY=https://goproxy.io
```

Replay the command to retry installation.

### Use `go mod`

Add the following snippet to any code.

```go
import _ "github.com/ucloud/ucloud-sdk-go"
```

And execute this commands：

```bash
go mod init
go mod tidy
```

**Note**：If using `go mod` and `Goland IDE` together, please search `vgo` on `Settings`, and enable `vgo` support.

**Note**：If using `go mod` 和 `GOPATH`, notice the `go mod init/tidy` can not run with `GOPATH`, please move out current project from `GOPATH`.

### Use `dep`

```bash
dep ensure -add github.com/ucloud/ucloud-sdk-go
```

## First Using

Currently, Go SDK use `PublicKey/PrivateKey` as authentication method, the key can be found from：

- [UAPI Key…
