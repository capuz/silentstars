---
repo: "r-uby-dev/llm"
name: "llm"
description: "An agentic runtime"
readmeQualityOk: true
url: "https://github.com/r-uby-dev/llm"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
topics: ["ai", "llm", "llm-agents", "llm-framework", "llm-frameworks", "llms", "ruby-lib", "ruby-library", "a2a", "a2a-client"]
stars: 142
forks: 22
openIssues: 3
closedIssues: 104
watchers: 5
contributors: 19
recentReleases: 0
createdAt: "2024-10-03T14:12:21Z"
lastCommitAt: "2026-11-11T19:45:46Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 44
maintainers: ["altruby", "muhammadsamad99", "r-uby-dev[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/78e3a55b362de424932b545f3d378d5b24218cc543f290661f1c5df442b6a25c/r-uby-dev/llm"
---

<img
      src="rubydev.svg"
      width="400"
      height="200"
      border="0"
      alt="a r.uby.dev project"
     >

> [r.uby.dev](https://r.uby.dev/llm) project.

Welcome to the canonical llm.rb repository.

llm.rb is a runtime for building agentic AI applications
on CRuby. It runs on Ruby's standard library by default,
it supports concurrent and parallel tool execution and has
a single coherent API that spans 15+ providers. The README
covers a lot of ground and the
[changelog](https://github.com/r-uby-dev/llm/blob/HEAD/CHANGELOG.md)
tracks what has changed between releases.

## Install

##### v17

The v17 series requires Ruby 3.4 or later. <br>
This version works with older rubies and dependencies (ie: json v2).

```bash
gem install llm.rb -v 17.0.1
```

##### Latest (v19)

The v19 release is a smaller release that includes a 
tiny eval framework that was authored for the [micro1](https://micro1.ai)
hackathon. It is the recommended release.

It builds on the v18 release, which 
includes [substational runtime improvements](https://github.com/r-uby-dev/llm/blob/HEAD/changelog/v18.md) -
especially for running tool calls on a…
