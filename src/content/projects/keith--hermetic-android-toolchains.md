---
repo: "keith/hermetic_android_toolchains"
name: "hermetic_android_toolchains"
description: "Hermetic bazel toolchains for the Android SDK and NDK"
url: "https://github.com/keith/hermetic_android_toolchains"
language: "Starlark"
languages: ["Starlark", "Python"]
languagePcts: [68, 26]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 2
createdAt: "2026-06-15T20:39:39Z"
lastCommitAt: "2026-06-23T23:28:35Z"
lastReleaseAt: "2026-06-23T18:13:58Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 55
maintainers: ["keith", "Bencodes", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e20b8d3dc2ffe8e0a0120db62a238d4960911c29d59e6a95145b4cbda8cbb91d/keith/hermetic_android_toolchains"
---

# hermetic_android_toolchains

This repo contains hermetic bazel toolchains for the Android SDK and
NDK. This makes bazel automatically download the tools as needed, and
doesn't require that your developers have them installed globally. This
also ensures you will have the exact same version across all your
developers and CI.

## Usage

Add this to your `MODULE.bazel`:

```starlark
bazel_dep(name = "hermetic_android_toolchains", version = "0.0.0", dev_dependency = True)
bazel_dep(name = "rules_android", version = "0.7.3", dev_dependency = True)
bazel_dep(name = "rules_android_ndk", version = "0.1.5", dev_dependency = True)

android = use_extension("@hermetic_android_toolchains//:extensions.bzl", "android", dev_dependency = True)
android.sdk(
    build_tools_version = "37.0.0",
    version = "37.0",
)
android.ndk(version = "r29")
use_repo(android, "androidsdk", "androidndk")

# Make @rules_android's @androidsdk labels resolve to the hermetic SDK.
rules_android_sdk = use_extension("@rules_android//rules/android_sdk_repository:rule.bzl", "android_sdk_repository_extension", dev_dependency = True)

override_repo(rules_android_sdk, "androidsdk")

# Make @rules_android_ndk's @androidndk…
