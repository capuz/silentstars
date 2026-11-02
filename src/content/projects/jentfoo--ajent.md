---
repo: "jentfoo/ajent"
name: "ajent"
description: "Lightweight terminal agent interface implemented in Golang"
readmeQualityOk: true
url: "https://github.com/jentfoo/ajent"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["agent", "cli-agent", "coding-agent", "llm-agents"]
stars: 13
forks: 1
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-08-09T18:25:16Z"
lastCommitAt: "2026-11-02T17:57:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 33
maintainers: ["jentfoo", "dependabot[bot]", "jmizell"]
openGraphImageUrl: "https://opengraph.githubassets.com/6550dee66f47ef64750577526037922240123427be54bb162311b83da8dfa9e1/jentfoo/ajent"
---

# ajent

A very lightweight, minimal CLI coding agent interface written in Go.

The project is deliberately opinionated. It trims the UI to maximize working space and makes firm choices about things like sub-agents and tool barriers. Those opinions are an ongoing exploration of CLI agent ergonomics, so expect them to shift as the project evolves.

Feedback is welcome. Please open issues if you have any suggestions or comments.

## Install

```sh
go install github.com/jentfoo/ajent@latest
```

### Getting started

For those that would prefer to test out `ajent` rather than read the docs, you can onboard quickly:
1. Assuming go and your `~/go/bin` `PATH` are setup: `go install github.com/jentfoo/ajent@latest`
2. Then run `ajent`. On first start it walks you through wiring up your first provider (alternatively refer to the configuration below to define `~/.ajent/models.json`).
3. Try your first prompt to learn about features and how to use `ajent`:
   ```
   Review @docs/*design.md and provide a concise overview of the user
   facing features and key combinations I should be aware of as a new user.
   ```

## Design Philosophy

You may like `ajent` if:
  * You care about copy and…
