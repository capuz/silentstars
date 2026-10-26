---
repo: "apple-cross-toolchain/rules_applecross"
name: "rules_applecross"
description: "Apple cross-compilation Bazel toolchains for Linux and macOS"
readmeQualityOk: true
url: "https://github.com/apple-cross-toolchain/rules_applecross"
language: "Rust"
languages: ["Rust"]
languagePcts: [71]
topics: ["bazel", "apple", "objective-c", "swift", "linux", "ios", "macos", "watchos", "tvos", "visionos"]
stars: 84
forks: 12
openIssues: 2
closedIssues: 4
watchers: 5
contributors: 6
recentReleases: 2
createdAt: "2021-05-07T07:24:09Z"
lastCommitAt: "2026-10-26T03:02:15Z"
lastReleaseAt: "2026-10-23T17:01:12Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 91
undervaluedScore: 49
maintainers: ["AttilaTheFun", "thii"]
openGraphImageUrl: "https://opengraph.githubassets.com/348b74d2a15b3c085f856deb5fcb547c30f16ee41538c7300d8f5fa4d89a389b/apple-cross-toolchain/rules_applecross"
---

# Bazel Apple toolchains for Linux

This repository contains toolchains for Bazel that can be used to build apps
and frameworks for Apple platforms from Linux.

Supports:

- Bazel 8.8+
- Linux x86_64 and arm64
- macOS x86_64 and arm64

## Setup

1. Add the dependency to your `MODULE.bazel`:

    ```starlark
    bazel_dep(name = "rules_applecross", version = "0.0.3")
    git_override(
        module_name = "rules_applecross",
        remote = "https://github.com/apple-cross-toolchain/rules_applecross.git",
        commit = "<commit>",
    )
    ```

    Bazel applies `single_version_override` only in the root module, so also
    copy this repository's `patches/` and its `rules_apple` and `apple_support`
    overrides from `MODULE.bazel`.

2. Configure the toolchain in `MODULE.bazel`:

    ```starlark
    apple_cross_toolchain = use_extension(
        "@rules_applecross//toolchain:extensions.bzl",
        "apple_cross_toolchain",
    )
    apple_cross_toolchain.configure(
        name = "apple_cross_toolchain",
        apple_sdk_urls = ["<url-to-apple-sdk-archive>"],
        apple_sdk_archive_type = "tar.xz",  # if not inferrable from URL
        swift_tools = {…
