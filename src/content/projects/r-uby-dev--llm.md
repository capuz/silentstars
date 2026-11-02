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
stars: 144
forks: 20
openIssues: 6
closedIssues: 96
watchers: 5
contributors: 18
recentReleases: 0
createdAt: "2024-10-03T14:12:21Z"
lastCommitAt: "2026-11-02T13:38:21Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 98
undervaluedScore: 44
maintainers: ["altruby", "Vamsi-2581", "badrisatyam1-ctrl"]
openGraphImageUrl: "https://opengraph.githubassets.com/ab6533ad996dc22be0882469889b4c1665606a0343568ed0bee97c88bca08ad7/r-uby-dev/llm"
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
gem install llm.rb
```

##### v18

The v18 series is available as a prerelease. It requires 
Ruby 4.0.0 or later. Ruby 4.1.0+ is recommended.
The _optional_ dependencies ActiveRecord and Sequel
must be updated to their latest version(s). The major
[json](https://github.com/ruby/json) 
version bump (v2 => v3) can require changes and not
all gems have caught up yet. The [r-uby-dev/llm](https://github.com/r-uby-dev/llm)
gem is an early adopter of json v3.…
