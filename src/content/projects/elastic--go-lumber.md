---
repo: "elastic/go-lumber"
name: "go-lumber"
description: "Go based lumberjack client and server implementation."
url: "https://github.com/elastic/go-lumber"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["beats", "golang", "logstash", "lumberjack"]
stars: 56
forks: 39
openIssues: 7
closedIssues: 3
watchers: 54
contributors: 249
recentReleases: 0
createdAt: "2016-06-15T14:52:50Z"
lastCommitAt: "2026-06-25T01:31:42Z"
lastReleaseAt: "2021-01-05T17:10:34Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 84
undervaluedScore: 25
maintainers: ["efd6"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d90dc961bd8e11990706bf93c414ab88b4e7047a97fe44d17c69aae150f15a8/elastic/go-lumber"
---

# go-lumber
Card](https://goreportcard.com/badge/github.com/elastic/go-lumber)](https://goreportcard.com/report/github.com/elastic/go-lumber)

Lumberjack protocol client and server implementations for go.

## Example Server

There is an example server in [cmd/tst-lj](cmd/tst-lj/main.go). It will accept
connections and log when it receives batches of events.

```
# Install to $GOPATH/bin.
go install github.com/elastic/go-lumber/cmd/tst-lj@latest

# Start server.
tst-lj -bind=localhost:5044 -v2
2022/08/14 00:13:54 Server config: server.options{timeout:30000000000, keepalive:3000000000, decoder:(server.jsonDecoder)(0x100d88e80), tls:(*tls.Config)(nil), v1:false, v2:true, ch:(chan *lj.Batch)(nil)}
2022/08/14 00:13:54 tcp server up
```
