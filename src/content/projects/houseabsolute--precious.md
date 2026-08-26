---
repo: "houseabsolute/precious"
name: "precious"
description: "One code quality tool to rule them all"
readmeQualityOk: true
url: "https://github.com/houseabsolute/precious"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 155
forks: 6
openIssues: 9
closedIssues: 74
watchers: 5
contributors: 6
recentReleases: 0
createdAt: "2019-03-04T16:24:58Z"
lastCommitAt: "2026-08-26T03:41:58Z"
lastReleaseAt: "2021-02-20T20:09:59Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 87
undervaluedScore: 36
maintainers: ["autarch"]
openGraphImageUrl: "https://opengraph.githubassets.com/07eed652c99b051139430f58d99bab0258979880dd9ca8548dd5537de7748633/houseabsolute/precious"
fundingLinks: ["GITHUB:https://github.com/autarch"]
---

# Precious - One Code Quality Tool to Rule Them All

Who doesn't love linters and tidiers (aka pretty printers)? I sure love them. I love them so much
that in many of my projects I might have five or ten!

Wouldn't it be great if you could run all of them with just one command? Wouldn't it be great if
that command just had one config file to define what tools to run on each part of your project?
Wouldn't it be great if Sauron were our ruler?

Now with Precious you can say "yes" to all of those questions.

## TLDR

Precious is a code quality tool that lets you run all of your linters and tidiers with a single
command. It's features include:

- One file, `precious.toml`, defines all of your linter and tidier commands, as well as what files
  they operate on.
- Respects VCS ignore files and allows global, shared, and per-command includes and excludes.
- Language-agnostic, and it works the same way with single- or multi-language projects.
- Easy integration with commit hooks and CI systems.
- When a command needs to be invoked multiple times with different sets of files (for example, a
  tidier that runs once per file), that command will be run multiple times in parallel, with one…
