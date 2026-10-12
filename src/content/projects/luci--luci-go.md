---
repo: "luci/luci-go"
name: "luci-go"
description: "LUCI (go) (GitHub mirror)"
readmeQualityOk: true
url: "https://github.com/luci/luci-go"
homepage: "https://chromium.googlesource.com/infra/luci/luci-go"
language: "Go"
languages: ["Go"]
languagePcts: [77]
stars: 162
forks: 50
openIssues: 0
closedIssues: 0
watchers: 27
contributors: 100
recentReleases: 0
createdAt: "2015-03-30T19:27:37Z"
lastCommitAt: "2026-10-12T11:09:04Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 70
undervaluedScore: 42
maintainers: ["tiffz", "gregorynisbet-google", "vadimsht"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff87a27ca9f1c998e2f833d043c791f97e6312be51c2c3c54967cc320bedfa71/luci/luci-go"
---

# luci-go: LUCI services and tools in Go

Reference](https://pkg.go.dev/badge/go.chromium.org/luci.svg)](https://pkg.go.dev/go.chromium.org/luci)

## Installing

LUCI Go code is meant to be worked on from an Chromium
[infra.git](https://chromium.googlesource.com/infra/infra.git) checkout, which
enforces packages versions and Go toolchain version. First get fetch via
[depot_tools.git](https://chromium.googlesource.com/chromium/tools/depot_tools.git)
then run:

    fetch infra
    cd infra/go
    eval `./env.py`
    cd src/go.chromium.org/luci

It is now possible to directly install tools with go install:

    go install go.chromium.org/luci/auth/client/cmd/...@latest
    go install go.chromium.org/luci/buildbucket/cmd/...@latest
    go install go.chromium.org/luci/cipd/client/cmd/...@latest
    go install go.chromium.org/luci/client/cmd/...@latest
    go install go.chromium.org/luci/cv/cmd/...@latest
    go install go.chromium.org/luci/gce/cmd/...@latest
    go install go.chromium.org/luci/grpc/cmd/...@latest
    go install go.chromium.org/luci/logdog/client/cmd/...@latest
    go install go.chromium.org/luci/luci_notify/cmd/...@latest
    go install…
