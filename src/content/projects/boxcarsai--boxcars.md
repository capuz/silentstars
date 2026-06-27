---
repo: "BoxcarsAI/boxcars"
name: "boxcars"
description: "Building applications with composability using Boxcars with LLM's."
url: "https://github.com/BoxcarsAI/boxcars"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [88]
topics: ["activerecord", "langchain", "ruby", "openai", "sql"]
stars: 462
forks: 42
openIssues: 0
closedIssues: 54
watchers: 10
contributors: 20
recentReleases: 0
createdAt: "2023-02-09T23:38:50Z"
lastCommitAt: "2026-06-27T00:46:41Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 22
maintainers: ["francis", "cerebrixos"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/599811829/de017aa2-09cc-4716-8c75-4b879370afab"
---

<h2 align="center">Boxcars</h2>

<h4 align="center">
</h4>

</p>

Boxcars is a Ruby framework for building LLM-powered systems with less cognitive load, especially for Ruby and Rails teams.
If you want one gem that can search, calculate, query data, call external APIs, run retrieval, and coordinate all of that in one runtime, Boxcars is built for that workflow.

Inspired by LangChain, Boxcars brings a Ruby-first design that favors practical composition over framework lock-in.

## Why Boxcars

- Tool composability by default: package domain logic as `Boxcar` objects and reuse them across assistants, jobs, and services.
- Lower cognitive load for Ruby/Rails developers: one consistent programming model (`Boxcar`, `Train`, `Engine`) for controllers, jobs, and service objects instead of one-off wrappers per provider.
- Multiple orchestration modes: keep legacy text ReAct (`Boxcars::ZeroShot`) or use native provider tool calling (`Boxcars::ToolTrain`).
- Structured output paths: enforce JSON contracts with JSON Schema through `JSONEngineBoxcar`.
- MCP-ready integration: connect MCP servers over stdio and merge MCP tools with local Boxcars in one tool-calling runtime.
- Provider…
