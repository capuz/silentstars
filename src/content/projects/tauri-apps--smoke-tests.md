---
repo: "tauri-apps/smoke-tests"
name: "smoke-tests"
description: "A collection of frameworks used as a suite of smoke-tests for tauri"
readmeQualityOk: true
url: "https://github.com/tauri-apps/smoke-tests"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [27]
stars: 81
forks: 22
openIssues: 4
closedIssues: 9
watchers: 10
contributors: 37
recentReleases: 0
createdAt: "2019-09-04T12:37:14Z"
lastCommitAt: "2026-10-16T08:26:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 92
undervaluedScore: 45
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/292b093549073a402bdf9065b0f48f37bb65844ebe31ee406f587e2064ec0b85/tauri-apps/smoke-tests"
---

# Examples

A collection of examples of Tauri apps using frontends written in Rust or JavaScript.

These examples are a great way to see how Tauri works with a variety of frameworks.

Uses the template project of each framework.

## How to run

Ensure that you have read the README of the example to check that your first-time setup is done.

The examples assume that this git repository was cloned in the root of the [tauri repo](https://github.com/tauri-apps/tauri) clone on your machine.
The recommended way of running the examples is using [mask](https://github.com/jakedeichert/mask):

```bash
$ cargo install mask
$ git clone https://github.com/tauri-apps/tauri
$ cd tauri
$ mask prepare
$ mask list smoke-tests # this will show all the examples names
$ mask run smoke-test some-example-name # run an example listed on the previous command
```

## Error reporting

Please report all library errors at https://github.com/tauri-apps/tauri

## License

Everything in this repo is MIT License unless otherwise specified.
