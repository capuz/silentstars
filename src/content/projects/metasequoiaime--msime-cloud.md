---
repo: "metasequoiaime/msime-cloud"
name: "msime-cloud"
description: "水杉云: the shared Go backend for 水杉输入法, providing cloud candidates, AI association, translation, speech recognition, and Swagger API documentation"
originalDescription: "水杉云：水杉输入法共通 Go 后端，提供云候选、AI 联想、翻译、语音识别与 Swagger 接口文档"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/metasequoiaime/msime-cloud"
language: "Go"
languages: ["Go"]
languagePcts: [85]
stars: 5
forks: 1
openIssues: 7
closedIssues: 2
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-09-08T00:31:26Z"
lastCommitAt: "2026-10-21T21:15:23Z"
lastReleaseAt: "2026-09-08T09:33:32Z"
status: "thriving"
tags: ["funded", "release_machine"]
healthScore: 84
undervaluedScore: 54
maintainers: ["houko", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4daa4c5e21c6b40e12accc47c128943bd1b2fa9eaf1ee39b55cacb6f07dfc4c2/metasequoiaime/msime-cloud"
fundingLinks: ["GITHUB:https://github.com/houko"]
---

# 水杉云（msime-cloud）

水杉云 is the shared network backend for 水杉输入法, implemented in Go. The HTTP service is built on the standard library, and WebSocket uses a pinned version of [coder/websocket](https://github.com/coder/websocket). It centrally stores provider credentials and serves HTTP APIs and real-time speech WebSockets to Windows, macOS, iOS, and Linux. Platforms remain responsible for local input, focus, candidate merging, microphone permissions, and committing text to the document.

The current service and per-platform source integration are implemented. Network tests from a real client to a synthetic upstream have passed, and native host acceptance is still in progress. For the full requirements and open items, see [需求核对](https://github.com/metasequoiaime/msime-cloud/blob/HEAD/docs/requirements.md) (requirements review).

## Getting Started

Requires Go 1.26.10 or later. Docker builds and CI use the same minimum version, which includes the published standard library security fixes. CI checks for known Go vulnerabilities reachable from the project using `govulncheck`.

```sh
cp config.example.json config.json
export MSIME_CLIENT_TOKEN="$(openssl rand -hex 32)"
go run…
