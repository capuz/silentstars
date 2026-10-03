---
repo: "joshuay03/raptor"
name: "raptor"
description: "A high-performance Ruby web server (rawr 🦖)"
readmeQualityOk: true
url: "https://github.com/joshuay03/raptor"
homepage: "https://joshuay03.github.io/raptor/"
language: "Ruby"
languages: ["Ruby", "C"]
languagePcts: [73, 27]
stars: 19
forks: 0
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 3
recentReleases: 1
createdAt: "2025-10-10T23:12:09Z"
lastCommitAt: "2026-10-03T09:23:28Z"
lastReleaseAt: "2026-07-07T01:12:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 66
maintainers: ["joshuay03"]
openGraphImageUrl: "https://opengraph.githubassets.com/58083f8c7cfff14b7a63a407c4b92d764e4d5de52a8cc404570aa708bf436bdf/joshuay03/raptor"
---

# Raptor

Raptor is a high-performance, preloading, pre-forking, multi-threaded Ruby 4+ web server implementing Rack 3.2+, using
NIO for non-blocking I/O and Ractors for parallel HTTP/1.1 and HTTP/2 parsing via native C extensions, which also
implement HPACK compression.

> [!NOTE]
> **Your application does not need to be Ractor-safe.** Ractors handle protocol-level work only; your Rack application
> is invoked on a thread pool, so any thread-safe Rack app (including Rails) works as-is.

Reference documentation is published at <https://joshuay03.github.io/raptor>.

## Installation

Install the gem and add to the application's Gemfile by executing:

```bash
bundle add raptor
```

If bundler is not being used to manage dependencies, install the gem by executing:

```bash
gem install raptor
```

## Usage

```ruby
# hello_world.ru

# frozen_string_literal: true

run proc { |_env| [200, { "content-type" => "text/plain" }, ["Hello, World!"]] }
```

```
> bundle exec raptor -w 10 -t 3 hello_world.ru
[Raptor 72876|Main|Main] Cluster initializing:
[Raptor 72876|Main|Main] ├─ Version: 0.22.1
[Raptor 72876|Main|Main] ├─ Ruby Version: ruby 4.0.6 (2026-07-14 revision 03b6d3f889) +YJIT +PRISM…
