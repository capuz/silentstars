---
repo: "r-uby-dev/llm"
name: "llm"
description: "Ruby's capable AI runtime"
url: "https://github.com/r-uby-dev/llm"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
topics: ["ai", "llm", "llm-agents", "llm-framework", "llm-frameworks", "llms", "ruby-lib", "ruby-library", "a2a", "a2a-client"]
stars: 134
forks: 7
openIssues: 0
closedIssues: 19
watchers: 7
contributors: 5
recentReleases: 0
createdAt: "2024-10-03T14:12:21Z"
lastCommitAt: "2026-06-28T02:01:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 44
maintainers: ["bsdrobert"]
openGraphImageUrl: "https://opengraph.githubassets.com/51c3cc83d80c52e6d21da9c19bb7bd3bd803b642e58d20de80717a75b66a2913/r-uby-dev/llm"
---

src="https://github.com/r-uby-dev/llm.rb/raw/main/rubydev.svg"
      width="400"
      height="200"
      border="0"
      alt="a r.uby.dev project"
     >
  </a>
</p>

> A [r.uby.dev](https://r.uby.dev) project.

Welcome to the canonical llm.rb repository.

llm.rb is not a library, framework or toolkit but an advanced runtime
for building highly capable AI applications on CRuby. By default
it has zero runtime dependencies although certain functionality &ndash;
such as ActiveRecord support &ndash; require optional dependencies
that are opt-in.

## Features

The runtime supports OpenAI, OpenAI-compatible endpoints, Anthropic, Google
Gemini, DeepSeek, DeepInfra, xAI, Z.ai, AWS Bedrock, Ollama, and llama.cpp.
It has first-class support for streaming, tool calls,  MCP
and A2A, embeddings, vector stores and the RAG pattern.

There are multiple HTTP backends to choose from, tools can be run concurrently
or in parallel via threads, async tasks, fibers, ractors, and fork, and it is
also possible to make a tool call while the model is still streaming.

The runtime builds on top of three core concepts: providers, contexts, and agents,
so once you learn the fundamentals, everything else…
