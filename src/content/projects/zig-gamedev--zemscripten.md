---
repo: "zig-gamedev/zemscripten"
name: "zemscripten"
description: "Build package and shims for Emscripten emsdk"
readmeQualityOk: true
url: "https://github.com/zig-gamedev/zemscripten"
language: "Zig"
languages: ["Zig"]
languagePcts: [100]
stars: 42
forks: 25
openIssues: 1
closedIssues: 4
watchers: 2
contributors: 14
recentReleases: 0
createdAt: "2024-11-03T20:40:03Z"
lastCommitAt: "2026-10-21T21:15:20Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 94
undervaluedScore: 34
maintainers: ["myQwil"]
openGraphImageUrl: "https://opengraph.githubassets.com/bebaeb47c8001e5d6797f79fc8547a2d56976bc32774612b9a69196b812f6c6f/zig-gamedev/zemscripten"
---

# [zemscripten](https://github.com/zig-gamedev/zemscripten)

Zig build package and shims for [Emscripten](https://emscripten.org) emsdk

## How to use it

Add `zemscripten` and (optionally) `emsdk` to your build.zig.zon dependencies
```sh
    zig fetch --save=emsdk https://github.com/emscripten-core/emsdk/archive/refs/tags/4.0.3.tar.gz
```

Emsdk must be activated before it can be used. You can use `activateEmsdkStep` to create a build step for that:
```zig
    const activate_emsdk_step = @import("zemscripten").activateEmsdkStep(b);
```

Add zemscripten's "root" module to your wasm compile target., then create an `emcc` build step. We use zemscripten's default flags and settings which can be overridden for your project specific requirements. Refer to the [emcc documentation](https://emscripten.org/docs/tools_reference/emcc.html). Example build.zig code:
```zig
    const wasm = b.addStaticLibrary(.{
        .name = "MyGame",
        .root_source_file = b.path("src/main.zig"),
        .target = target,
        .optimize = optimize,
    });

    const zemscripten = b.dependency("zemscripten", .{});
    wasm.root_module.addImport("zemscripten", zemscripten.module("root"));

    const…
