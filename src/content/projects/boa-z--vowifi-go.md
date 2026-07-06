---
repo: "boa-z/vowifi-go"
name: "vowifi-go"
description: "This project is developed based on the public interface of the closed-source vowifi version originally relied upon by VoHive. This project has no affiliation with the official VoHive team. The functionality of this project has not yet been implemented and is in the experimental stage, intended for personal learning use."
originalDescription: "本项目基于 VoHive 原本依赖的闭源 vowifi 版本的公共接口进行开发，本项目与 VoHive 官方团队无任何关联，本项目功能尚未实现且处于实验阶段，仅个人学习使用"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/boa-z/vowifi-go"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 12
forks: 25
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-05T02:35:52Z"
lastCommitAt: "2026-07-06T07:04:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 70
undervaluedScore: 48
maintainers: ["boa-z"]
openGraphImageUrl: "https://opengraph.githubassets.com/6bb6c3809c2530ccc410cd29798bfade5b918a1acaa467ac24ade666126ffcbc/boa-z/vowifi-go"
---

# vowifi-go

An independent, open Go implementation of the VoHive VoWiFi runtime boundary.

This repository focuses on the public runtime APIs and protocol layers that
VoHive consumes for SIM/ISIM AKA, SWu/ePDG tunneling, IMS registration,
messaging, voice bridging, and userspace dataplane experiments.

## Status

vowifi-go is still under active development. It is not affiliated with,
endorsed by, or a drop-in replacement for any vendor, operator, or official
closed-source VoWiFi implementation.

The project does **not** yet implement the complete feature set of the official
closed-source implementation. Full SIP transaction timer state machines,
advanced IMS feature interworking, carrier-specific behavior, production
hardening, and real-world compatibility work are still being implemented
incrementally behind the current APIs.

## Quick Start

Run the test suite:

```sh
go test ./...
```

Run the same local CI entry point used by GitHub Actions:

```sh
make ci
```

When developing VoHive and vowifi-go side by side, VoHive can point at this
checkout with a workspace replace:

```go
replace github.com/iniwex5/vowifi-go v1.1.2 => ../vowifi-go
```

## Documentation

-…
