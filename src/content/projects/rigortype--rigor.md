---
repo: "rigortype/rigor"
name: "rigor"
description: "Inference-first static analysis for Ruby"
readmeQualityOk: true
url: "https://github.com/rigortype/rigor"
homepage: "https://rigor.typedduck.fail"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [99]
stars: 105
forks: 1
openIssues: 209
closedIssues: 443
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2026-04-26T15:02:44Z"
lastCommitAt: "2026-09-26T08:47:31Z"
lastReleaseAt: "2026-06-18T15:50:12Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 94
undervaluedScore: 31
maintainers: ["zonuexe"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1221692841/4ec8e8db-ae8b-42cb-b801-6d12eab926fa"
fundingLinks: ["GITHUB:https://github.com/zonuexe", "CUSTOM:https://tadsan.fanbox.cc/"]
discussionCount: 0
---

# Rigor

**Type-aware bug finding for Ruby — no annotations required, and a
zero-false-positive bar enforced against real codebases.** Built on
RBS: Rigor infers types from the values your code produces, reads any
RBS you write as an authoritative source, and generates more — but
needs none to start. Run one command over the code you already have,
and trust every line of output.

```sh
mise use -g ruby@4.0 gem:rigortype   # install the tool, globally, on Ruby 4.0
rigor check app lib                  # find bugs in the code you already have
```

(The tool runs on Ruby 4.0 while your project keeps its own Ruby; the
global `-g` install keeps it off your project's pins. See
[Get started](#get-started-in-one-prompt).)

No annotations required, no runtime dependency, no changes to your
code — and any RBS you do add, Rigor reads and uses. Rigor parses Ruby
with
[Prism](https://github.com/ruby/prism) and runs a flow-sensitive
inference engine that reasons about the *values* your expressions
produce — not just their classes. It catches undefined methods (and
typos) on inferred receivers, wrong argument counts, receivers that
can be `nil` on a live path, unreachable branches and `case`…
