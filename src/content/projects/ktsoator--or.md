---
repo: "ktsoator/or"
name: "or"
description: "Choose the path from intent to action."
readmeQualityOk: true
url: "https://github.com/ktsoator/or"
homepage: "https://ktsoator.github.io/or/"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["generative-ai", "llm", "multi-provider"]
stars: 160
forks: 9
openIssues: 0
closedIssues: 5
watchers: 3
contributors: 3
recentReleases: 9
createdAt: "2026-06-18T03:04:42Z"
lastCommitAt: "2026-07-10T07:01:15Z"
lastReleaseAt: "2026-07-10T02:45:46Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 36
maintainers: ["ktsoator", "dependabot[bot]", "uterflec"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd1ba4e0e761f8917efd9be98dfb5729579e0c5c728cda7b54d3a541d341bc16/ktsoator/or"
---

<p><strong>Choose the path from intent to action.</strong></p>
  <p>English | <a href="README.zh.md">简体中文</a></p>
  <p>
  </p>
</div>

## About

`or` is a modular Go toolkit for building applications with language models and
higher-level agents. A provider-neutral LLM package keeps conversations, tools,
reasoning, and streaming events stable while models and wire protocols change
underneath, and an agent package builds the tool-call loop, state, and streaming
events on top.

## Why `or`

- Use one conversation model across OpenAI-compatible and Anthropic-compatible
  providers.
- Stream text, reasoning, tool calls, usage, and errors through typed events.
- Define tools from Go structs and validate model-generated arguments.
- Preserve provider metadata needed for multi-turn reasoning and tool use.
- Switch models between turns without rebuilding conversation history.
- Add custom model protocols without expanding the shared request API.
- Run autonomous multi-step tool loops with streaming events, mid-run steering,
  and per-turn model switching.
- Layer transcript persistence, context compaction, per-turn system prompts, and
  skills on top with the harness.

## Packages

|…
