---
repo: "ikskuh/zig-args"
name: "zig-args"
description: "Simple-to-use argument parser with struct-based config"
readmeQualityOk: true
url: "https://github.com/ikskuh/zig-args"
language: "Zig"
languages: ["Zig"]
languagePcts: [100]
topics: ["zig", "ziglang", "option-parser", "option-parsing", "zig-package"]
stars: 312
forks: 34
openIssues: 8
closedIssues: 16
watchers: 7
contributors: 24
recentReleases: 0
createdAt: "2020-03-04T21:34:00Z"
lastCommitAt: "2026-10-02T10:00:19Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 68
undervaluedScore: 19
maintainers: ["ikskuh", "der-teufel-programming", "Khitiara"]
openGraphImageUrl: "https://opengraph.githubassets.com/f52f13e25dd487989a4d796cfbb65a10091712862967f8eee53f127df7a0fda0/ikskuh/zig-args"
---

# Zig Argument Parser

Simple-to-use argument parser with struct-based config

## Features

- Automatic option generation from a config struct
- Familiar *look & feel*:
  - Everything after the first `--` is assumed to be a positional argument
  - A single `-` is interpreted as a positional argument which can be used as the stdin/stdout file placeholder
  - Short options with no argument can be combined into a single argument: `-dfe`
  - Long options can use either `--option=value` or `--option value` syntax (use `--option=--` if you need `--` as a long option argument)
  - verbs (sub-commands), with verb specific options. Non-verb specific (global) options can come before or after the verb on the command line. Non-verb option arguments are processed *before* determining verb.  (see `demo_verb.zig`)
- Integrated support for primitive types:
  - All integer types (signed & unsigned)
  - Floating point types
  - Booleans (takes optional argument. If no argument given, the bool is set, otherwise, one of `yes`, `true`, `y`, `no`, `false`, `n` is interpreted)
  - Strings
  - Enumerations

## Use in your project

Add the dependency in your `build.zig.zon` by running the following…
