---
repo: "openharmony-zig/zig-napi"
name: "zig-napi"
description: "A zig tool use zig to build arkts-module and node add-on"
url: "https://github.com/openharmony-zig/zig-napi"
language: "Zig"
languages: ["Zig"]
languagePcts: [68]
topics: ["napi", "openharmony", "zig", "nodejs"]
stars: 15
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2025-01-15T12:03:28Z"
lastCommitAt: "2026-06-28T01:46:57Z"
lastReleaseAt: "2026-05-24T01:54:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 45
maintainers: ["richerfu"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6f455732abacbaeb298f14c76906db6157cd1d7a6d8f9229b9da69ae050f204/openharmony-zig/zig-napi"
---

# zig-napi

This project can help us to build native module libraries for OpenHarmony/HarmonyNext ArkTS and Node.js with zig-lang.

## Require

For openharmony, we must use a patched zig library to build. See detail with [zig-patch](https://github.com/openharmony-zig/zig-patch).

## Install

We recommend you use ZON(Zig Package Manager) to install it.

```zon
// build.zig.zon
.{
    .name = "appname",
    .version = "0.0.0",
    .minimum_zig_version = "0.16.0",
    .dependencies = .{
        .@"zig-napi" = .{
            .url = "https://github.com/openharmony-zig/zig-napi/archive/refs/tags/<GIT_TAG>.tar.gz",
            .hash = "HASH_GOES_HERE",
        },
    },
}
```

(To aquire the hash, please remove the line containing .hash, the compiler will then tell you which line to put back)

```zig
// build.zig
const std = @import("std");
const napi_build = @import("zig-napi").napi_build;

pub fn build(b: *std.Build) !void {
    const target = b.standardTargetOptions(.{});
    const optimize = b.standardOptimizeOption(.{});

    const zig_napi = b.dependency("zig-napi", .{});

    const napi = zig_napi.module("napi");

    // Build ArkTS/OpenHarmony artifacts.
    const result = try…
