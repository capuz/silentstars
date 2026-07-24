---
repo: "aiven/go-client-codegen"
name: "go-client-codegen"
description: "A code generated Go client for Aiven API"
readmeQualityOk: true
url: "https://github.com/aiven/go-client-codegen"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["aiven", "client-library", "code-generation", "golang"]
stars: 6
forks: 5
openIssues: 0
closedIssues: 2
watchers: 8
contributors: 52
recentReleases: 0
createdAt: "2023-11-08T12:49:37Z"
lastCommitAt: "2026-07-24T06:08:27Z"
lastReleaseAt: "2024-05-27T08:34:18Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 81
maintainers: ["github-actions[bot]", "vmyroslav", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/325c49562784a89522de238dc68aae98e7278fdb6e42087a8b171414e35b0d06/aiven/go-client-codegen"
---

# go-client-codegen

`go-client-codegen` is an automatically code generated Aiven Go Client from the Aiven API specification.

_Warning:_ this client is under heavy development.

## Setup

```bash
go get github.com/aiven/go-client-codegen
```

### Configuration and Usage

#### Via Environment Variables

| Name               | Type     | Description                    |
| ------------------ | :------- | ------------------------------ |
| `AIVEN_TOKEN`      | `string` | Aiven API Authentication Token |
| `AIVEN_WEB_URL`    | `string` | Aiven API URL                  |
| `AIVEN_USER_AGENT` | `string` | User Agent                     |
| `AIVEN_DEBUG`      | `bool`   | Debug Output Flag (stderr)     |

See all configuration options in [`client.go`](https://github.com/aiven/go-client-codegen/blob/HEAD/client.go).

#### Via Constructor Options

```go
import "github.com/aiven/go-client-codegen"

client, err := aiven.NewClient(DebugOpt(true), UserAgentOpt("foo"))
if err != nil {
	return err
}

services, err := client.ServiceList(ctx, "bar-project")
```

See [CONTRIBUTING.md](https://github.com/aiven/go-client-codegen/blob/HEAD/CONTRIBUTING.md) for instructions on how to contribute to the…
