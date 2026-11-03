---
repo: "MixinNetwork/bot-api-go-client"
name: "bot-api-go-client"
description: "🤖️ Mixin API for Go"
readmeQualityOk: true
url: "https://github.com/MixinNetwork/bot-api-go-client"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["mixin", "mixin-bot"]
stars: 70
forks: 26
openIssues: 1
closedIssues: 8
watchers: 13
contributors: 18
recentReleases: 0
createdAt: "2018-04-27T07:08:39Z"
lastCommitAt: "2026-11-03T12:46:38Z"
lastReleaseAt: "2022-06-15T06:52:08Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 94
undervaluedScore: 51
maintainers: ["dependabot[bot]", "cedricfung", "crossle"]
openGraphImageUrl: "https://opengraph.githubassets.com/ab3c025cdad50adaf168ca76d07d69541a05261d23014d4ff3d96e3ec8b7b6be/MixinNetwork/bot-api-go-client"
---

## Installation

```
go get github.com/MixinNetwork/bot-api-go-client/v3
```

## User-Agent

Set a User-Agent that identifies your application during startup, before making
requests:

```go
import bot "github.com/MixinNetwork/bot-api-go-client/v3"

bot.SetUserAgent("my-app/1.0 (+https://example.com)")
```

If the User-Agent is empty or still uses the SDK default, the SDK logs a warning
once when it sends an HTTP request. `SetUserAgent` configures the whole process;
call it before starting concurrent requests.

For more info, see [api](https://developers.mixin.one/docs/api/guide).
