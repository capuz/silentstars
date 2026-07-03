---
repo: "Laisky/laisky-blog-graphql"
name: "laisky-blog-graphql"
description: "graphql backend for laisky-blog"
url: "https://github.com/Laisky/laisky-blog-graphql"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [78, 21]
stars: 22
forks: 7
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2019-04-17T09:20:51Z"
lastCommitAt: "2026-07-03T12:39:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 60
maintainers: ["Laisky", "Copilot", "google-labs-jules[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0cd85245a72007182e79897f189635bb1342dd028ec8f9e0fd5cccfd4c5d09d0/Laisky/laisky-blog-graphql"
---

# laisky-blog-graphql

graphql backend for laisky-blog depends on gqlgen & gin.

Example: <https://gq.laisky.com/ui/>

Introduction: <https://blog.laisky.com/p/gqlgen/>

Docs:

- SSO integration and operations manual: [docs/manual/sso.md](docs/manual/sso.md)
- Remote MCP server manual: [docs/manual/mcp.md](docs/manual/mcp.md)

Run:

```sh
go generate
go run -race main.go \
    --listen=127.0.0.1:8080 \
    --config=./docs/settings.yml \
    --debug
```

Build:

```sh
docker build . -t ppcelery/laisky-blog-graphql:0.3.1
```
