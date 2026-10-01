---
repo: "sisshiki1969/monoruby"
name: "monoruby"
description: "Ruby implementation with yet another JIT compiler."
readmeQualityOk: true
url: "https://github.com/sisshiki1969/monoruby"
language: "Rust"
languages: ["Rust"]
languagePcts: [81]
stars: 141
forks: 7
openIssues: 6
closedIssues: 205
watchers: 1
contributors: 4
recentReleases: 2
createdAt: "2022-02-06T06:11:45Z"
lastCommitAt: "2026-10-01T10:24:07Z"
lastReleaseAt: "2026-07-17T00:30:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 47
maintainers: ["sisshiki1969", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/e2ca9378fe9e9a732f3f747ccf45b30d1f9baf725a7b613533d6b9cfcfbc6d5f/sisshiki1969/monoruby"
discussionCount: 0
---

# monoruby

Ruby implementation with yet another JIT compiler written in Rust.

- 📖 **[Documentation](https://sisshiki1969.github.io/monoruby/docs/)** — [installation and build](https://sisshiki1969.github.io/monoruby/docs/installation.html), [development and build options](https://sisshiki1969.github.io/monoruby/docs/development.html), [benchmark](https://sisshiki1969.github.io/monoruby/docs/benchmarks.html), [compatibility](https://sisshiki1969.github.io/monoruby/docs/compatibility.html) and the full [changelog](https://sisshiki1969.github.io/monoruby/docs/changelog.html), plus architecture overviews and the design documents.
- 📊 **[Project portal](https://sisshiki1969.github.io/monoruby/)** — benchmark and ruby/spec dashboards, re-measured on every push to `master` that touches the interpreter.

## What's New

Highlights from the last two months; earlier months are in the changelog, linked at the end of this section.

### September 2026

- Real-application benchmarking drive (ruby-bench / yjit-bench: railsbench, lobsters, fluentd, activerecord, erubi, graphql) with a long run of runtime fast paths: frame-free leaf and `Foo.new` expansion, machine-code `Hash#[]` probes, a…
