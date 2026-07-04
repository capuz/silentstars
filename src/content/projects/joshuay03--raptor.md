---
repo: "joshuay03/raptor"
name: "raptor"
description: "A high-performance Ruby web server (rawr 🦖)"
readmeQualityOk: true
url: "https://github.com/joshuay03/raptor"
homepage: "https://joshuay03.github.io/raptor/"
language: "Ruby"
languages: ["Ruby", "C"]
languagePcts: [64, 35]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 9
createdAt: "2025-10-10T23:12:09Z"
lastCommitAt: "2026-07-04T22:20:01Z"
lastReleaseAt: "2026-07-02T08:31:08Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 79
undervaluedScore: 55
maintainers: ["joshuay03"]
openGraphImageUrl: "https://opengraph.githubassets.com/e99531cb0b8110f2a88d1922f59abc804c59f9b3c89449cabcdd51ed6ae9bb0d/joshuay03/raptor"
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
> bundle exec raptor -w 4 -t 3 hello_world.ru
[Raptor 76577|Main|Main] Cluster initializing:
[Raptor 76577|Main|Main] ├─ Version: 0.8.0
[Raptor 76577|Main|Main] ├─ Ruby Version: ruby 4.0.5 (2026-05-20 revision 64336ffd0e) +YJIT +PRISM…
