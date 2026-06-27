---
repo: "alexfalkowski/nonnative"
name: "nonnative"
description: "Allows you to keep using the power of Ruby to test other systems."
url: "https://github.com/alexfalkowski/nonnative"
homepage: "https://alexfalkowski.github.io/nonnative"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [87]
topics: ["bdd", "cucumber", "ruby"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 4
recentReleases: 7
createdAt: "2019-07-27T11:07:11Z"
lastCommitAt: "2026-06-27T06:23:30Z"
lastReleaseAt: "2026-04-09T10:30:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "release_machine"]
healthScore: 100
undervaluedScore: 90
maintainers: ["alexfalkowski"]
openGraphImageUrl: "https://opengraph.githubassets.com/d9456c0449be6bd366bcb4e9f485fc530fd52e2b32314ab2ca594e7bc120a01d/alexfalkowski/nonnative"
---

# 🧪 Nonnative

Nonnative is a Ruby-first harness for end-to-end testing of systems implemented in other languages.

It helps you:
- start **OS processes** (e.g. your Go/Java/Rust service binary),
- start **in-process Ruby servers** (e.g. small HTTP/TCP/gRPC fakes for dependencies),
- optionally start **service proxies** for fault-injection in front of externally managed dependencies,
- wait for readiness/shutdown using **TCP port checks**.

Once started, you can test however you like (TCP, HTTP, gRPC, etc).

## 📦 Installation

> [!IMPORTANT]
> Nonnative currently supports Ruby `>= 4.0.0` and `< 5.0.0`.

Add this line to your application's Gemfile:

```ruby
gem 'nonnative'
```

And then execute:

```bash
bundle
```

Or install it yourself as:

```bash
gem install nonnative
```

## 🚀 Usage

Nonnative is configured via `Nonnative.configure` (programmatic) or `config.load_file(...)` (YAML).
YAML configuration is loaded as data only: ERB is not evaluated and arbitrary Ruby objects are not
deserialized.

> [!CAUTION]
> Treat YAML configuration as plain data. ERB is not evaluated and arbitrary Ruby object tags are rejected.

High-level configuration fields:
- `version`: configuration…
