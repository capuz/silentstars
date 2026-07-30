---
repo: "openmodu/modu"
name: "modu"
description: "Yet Another Agent Runtime"
readmeQualityOk: true
url: "https://github.com/openmodu/modu"
language: "Go"
languages: ["Go"]
languagePcts: [96]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-04-19T13:23:16Z"
lastCommitAt: "2026-07-30T06:07:19Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 71
maintainers: ["dyike"]
openGraphImageUrl: "https://opengraph.githubassets.com/8643f93e002ba0e62e085dc68288dfbb19030984ecf1f89687c1060b606f30a1/openmodu/modu"
---

[English](https://github.com/openmodu/modu/blob/HEAD/README.md) | [中文](https://github.com/openmodu/modu/blob/HEAD/README_zh.md)

</p>

<h1 align="center">Modu</h1>

Modu is a Go toolkit for building agent applications. It provides an agent loop, LLM provider adapters, tool execution, multi-agent coordination, messaging channels, scheduling, and terminal UI components; applications still own their prompts, tools, persistence policy, and deployment.

## Requirements

- Go 1.26.2 or later, as declared in [`go.mod`](https://github.com/openmodu/modu/blob/HEAD/go.mod)
- An LLM endpoint such as Ollama, LM Studio, OpenAI, Anthropic, DeepSeek, Gemini, or another OpenAI-compatible API

## Install

```bash
go get github.com/openmodu/modu
```

## Minimal agent

The example below registers an Ollama endpoint, runs one prompt, and prints assistant text:

```go
package main

import (
	"context"
	"fmt"
	"os"

	"github.com/openmodu/modu/pkg/agent"
	"github.com/openmodu/modu/pkg/providers"
	"github.com/openmodu/modu/pkg/providers/openai"
	"github.com/openmodu/modu/pkg/types"
)

func main() {
	providers.Register(openai.New(
		"ollama",
		openai.WithBaseURL("http://localhost:11434/v1"),
	))

	model…
