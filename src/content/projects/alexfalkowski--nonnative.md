---
repo: "alexfalkowski/nonnative"
name: "nonnative"
description: "Allows you to keep using the power of Ruby to test other systems."
readmeQualityOk: true
url: "https://github.com/alexfalkowski/nonnative"
homepage: "https://alexfalkowski.github.io/nonnative"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [85]
topics: ["bdd", "cucumber", "ruby"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2019-07-27T11:07:11Z"
lastCommitAt: "2026-07-19T06:11:11Z"
lastReleaseAt: "2026-04-09T10:30:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 82
maintainers: ["alexfalkowski", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e1caf328a67bde9fc30974357e21d55d6e42b8204f0a63723934f9191d532884/alexfalkowski/nonnative"
---

# 🧪 Nonnative

Nonnative is a Ruby-first harness for end-to-end testing of systems implemented in other languages.

It helps you:
- start **OS processes** (e.g. your Go/Java/Rust service binary),
- start **in-process Ruby servers** (e.g. small HTTP/TCP/gRPC fakes for dependencies),
- optionally start **service proxies** for fault-injection in front of externally managed dependencies,
- wait for readiness/shutdown using **TCP port checks**, optional process HTTP/gRPC checks, and optional service TCP checks.

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

## 🛠️ Contributor Bootstrap

Fresh clones need the shared `bin/` submodule before Make targets can load:

```bash
git submodule sync && git submodule update --init
make help
```

Use `make dep` before local validation when dependencies are missing. The CI-parity checks are
`make lint`, `make sec`, `make features`, and `make benchmarks`.…
