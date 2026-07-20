---
repo: "yunionio/cloudpods-operator"
name: "cloudpods-operator"
description: "Cloudpods kubernetes operator"
readmeQualityOk: true
url: "https://github.com/yunionio/cloudpods-operator"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["operator", "cloudpods"]
stars: 20
forks: 37
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 21
recentReleases: 0
createdAt: "2019-07-18T05:51:18Z"
lastCommitAt: "2026-07-20T06:33:28Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 92
undervaluedScore: 74
maintainers: ["zexi", "swordqiu", "ioito"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc49f0912851f6df002204da6b1e95451516307a40523c86ee08ccf442de6051/yunionio/cloudpods-operator"
---

# onecloud-operator

## Introduction

See: [./docs/intro.md](https://github.com/yunionio/cloudpods-operator/blob/HEAD/docs/intro.md)

## Development

### Compile

```bash
$ git clone https://github.com/yunionio/onecloud-operator $GOPATH/src/yunion.io/x/onecloud-operator
$ cd $GOPATH/src/yunion.io/x/onecloud-operator
$ make
```

### Install code-generator

```bash
$ git clone https://github.com/kubernetes/code-generator $GOPATH/src/k8s.io/x/code-generator
$ cd $GOPATH/src/k8s.io/x/code-generator
$ git checkout kubernetes-1.15.1
$ go install go install ./cmd/{defaulter-gen,client-gen,lister-gen,informer-gen,deepcopy-gen}
```

Try ./hack/codegen.sh

```bash
$ ./hack/codegen.sh
```

## telegraf-init

```bash
VERSION=release-1.5 make telegraf-init-image
```
