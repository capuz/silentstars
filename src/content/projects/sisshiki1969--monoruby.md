---
repo: "sisshiki1969/monoruby"
name: "monoruby"
description: "Ruby implementation with yet another JIT compiler."
readmeQualityOk: true
url: "https://github.com/sisshiki1969/monoruby"
language: "Rust"
languages: ["Rust", "Ruby"]
languagePcts: [79, 21]
stars: 141
forks: 7
openIssues: 2
closedIssues: 68
watchers: 1
contributors: 4
recentReleases: 2
createdAt: "2022-02-06T06:11:45Z"
lastCommitAt: "2026-09-14T09:13:00Z"
lastReleaseAt: "2026-07-17T00:30:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 47
maintainers: ["sisshiki1969", "makenowjust"]
openGraphImageUrl: "https://opengraph.githubassets.com/bcd2de8ba16d40b68da10df68f30e704a7a059e2a566604079ef3c1e543ac9a5/sisshiki1969/monoruby"
discussionCount: 0
---

# monoruby

Ruby implementation with yet another JIT compiler written in Rust.

- 📖 **[Documentation](https://sisshiki1969.github.io/monoruby/docs/)** — [installation and build](https://sisshiki1969.github.io/monoruby/docs/installation.html), [development and build options](https://sisshiki1969.github.io/monoruby/docs/development.html), [benchmark](https://sisshiki1969.github.io/monoruby/docs/benchmarks.html), [compatibility](https://sisshiki1969.github.io/monoruby/docs/compatibility.html) and the full [changelog](https://sisshiki1969.github.io/monoruby/docs/changelog.html), plus architecture overviews and the design documents.
- 📊 **[Project portal](https://sisshiki1969.github.io/monoruby/)** — benchmark and ruby/spec dashboards, re-measured on every push to `master` that touches the interpreter.

## What's New

Highlights from the last two months; earlier months are in the changelog, linked at the end of this section.

### August 2026

- Broad early-month ruby/spec compliance drive across Kernel, Enumerator, IO and process handling: `Enumerator::Lazy` / `Product` / `Chain`, fiber-free `#each`/`#with_index` internals, ARGF reimplemented in Rust, Refinements, and a full…
