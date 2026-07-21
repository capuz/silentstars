---
repo: "bazel-contrib/rules_ruby"
name: "rules_ruby"
description: "Ruby ruleset for Bazel"
readmeQualityOk: true
url: "https://github.com/bazel-contrib/rules_ruby"
language: "Starlark"
languages: ["Starlark"]
languagePcts: [87]
topics: ["bazel", "bazel-rules"]
stars: 51
forks: 21
openIssues: 17
closedIssues: 31
watchers: 2
contributors: 26
recentReleases: 0
createdAt: "2022-09-16T17:20:57Z"
lastCommitAt: "2026-07-21T06:12:14Z"
lastReleaseAt: "2024-03-03T03:25:48Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "funded"]
healthScore: 87
undervaluedScore: 40
maintainers: ["renovate[bot]", "p0deje", "alexeagle"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0724a829242ca52c9b6ddbaf2089261a7e9268814acddb3f3dc7a11627fb18d/bazel-contrib/rules_ruby"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/bazel-rules-authors-sig"]
---

# Ruby Rules for Bazel

## Overview

This repository hosts [Ruby][1] language ruleset for [Bazel][2].

The ruleset is known to work with:

- Bazel 8 using WORKSPACE and Bzlmod _(tested on CI)_.
- Bazel 7 using WORKSPACE and Bzlmod _(no longer tested on CI)_.

## Getting Started

### Starter repo

The fastest way to try this in an empty project is to click the green "Use this template" button on https://github.com/bazel-starters/ruby.

### WORKSPACE

1. Install the ruleset following WORKSPACE instructions on the [latest release][13].
2. Download and install Ruby:

```bazel
# WORKSPACE
load("@rules_ruby//ruby:deps.bzl", "rb_register_toolchains")

rb_register_toolchains(
    version = "3.3.9",
    # alternatively, load version from .ruby-version file
    # version_file = "//:.ruby-version",
)
```

3. _(Optional)_ Download and install Bundler dependencies:

```bazel
# WORKSPACE
load("@rules_ruby//ruby:deps.bzl", "rb_bundle_fetch")

rb_bundle_fetch(
    name = "bundle",
    gemfile = "//:Gemfile",
    gemfile_lock = "//:Gemfile.lock",
)
```

4. Start defining your library, binary and test targets in `BUILD` files.

### Bzlmod

1. Install ruleset following Bzlmod instructions on the…
