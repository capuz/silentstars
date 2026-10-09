---
repo: "liliang-cn/agent-go"
name: "agent-go"
description: "AI Agent SDK designed for Go developers"
readmeQualityOk: true
url: "https://github.com/liliang-cn/agent-go"
homepage: "https://liliang-cn.github.io/agent-go/"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["llm", "ollama", "rag", "local-llm", "rag-local", "semantic-search"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-08-07T09:46:11Z"
lastCommitAt: "2026-10-09T10:49:55Z"
lastReleaseAt: "2025-08-13T12:26:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 72
maintainers: ["liliang-cn"]
openGraphImageUrl: "https://opengraph.githubassets.com/402ebd077da0b26f5bda03b52a768770af1d6bfdbe380087a1b0658b68ddf814/liliang-cn/agent-go"
---

# AgentGo

A Go library for running an agent loop: tools, memory, MCP, skills, sessions, checkpoints, lints, long runs. No CLI, no UI, no server — embed `pkg/agent` in your own program.

[中文文档](https://github.com/liliang-cn/agent-go/blob/HEAD/README_zh-CN.md)

## Install

```bash
go get github.com/liliang-cn/agent-go/v3
```

Go 1.25+.

## Use

```go
package main

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/liliang-cn/agent-go/v3/pkg/agent"
	"github.com/liliang-cn/agent-go/v3/pkg/pool"
)

func main() {
	llm, err := pool.NewClient("deepseek", "https://api.deepseek.com/v1", os.Getenv("DEEPSEEK_API_KEY"), "deepseek-v4-flash")
	if err != nil {
		log.Fatal(err)
	}

	svc, err := agent.New("assistant").
		WithLLM(llm).
		WithPrompt("You are a concise Go assistant.").
		WithMemory(agent.WithMemoryStoreType("file")).
		Build()
	if err != nil {
		log.Fatal(err)
	}
	defer svc.Close()

	reply, err := svc.Ask(context.Background(), "What is AgentGo?")
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(reply)
}
```

Without `WithLLM`, providers come from `AGENTGO_HOME/data/agentgo.db`.

| call | returns | use when |
| --- | --- | --- |
| `svc.Ask(ctx, q)` | `(string, error)` | one…
