---
repo: "allyourcodebase/SDL"
name: "SDL"
description: "SDL ported to the Zig build system."
readmeQualityOk: true
url: "https://github.com/allyourcodebase/SDL"
language: "Zig"
languages: ["Zig"]
languagePcts: [97]
topics: ["zig-package"]
stars: 82
forks: 27
openIssues: 10
closedIssues: 9
watchers: 4
contributors: 11
recentReleases: 5
createdAt: "2025-05-28T01:17:24Z"
lastCommitAt: "2026-11-26T23:31:39Z"
lastReleaseAt: "2026-11-21T06:24:21Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 84
undervaluedScore: 51
maintainers: ["MasonRemaley", "jayschwa", "nat3Github"]
openGraphImageUrl: "https://opengraph.githubassets.com/ce2e78e41a1135f381b2a3b134afc4c2b7d29caff20caac12e4fc0925a25a751/allyourcodebase/SDL"
---

# SDL Zig

SDL ported to the Zig build system.

Supports cross compilation and custom platform configuration.

# Versioning

See `build.zig.zon` for the current Zig version, see releases for support for previous Zig versions.

The versions specified in `build.zig.zon` are split between the package version (before the plus)
and the SDL version (after the plus). For example, version `1.0.0+3.4.4` is package version 1.0.0
with support for SDL 3.4.4.

For SDL2, see the SDL2 branch.

# Setup

You can add SDL to your project like this by updating `build.zig.zon` from the command line:

```sh
zig fetch --save <url-of-this-repo>
```

And then you can add it to your `build.zig` like this:

```zig
const sdl = b.dependency("sdl", .{
    .optimize = optimize,
    .target = target,
});
exe.root_module.addImport("sdl3", sdl.module("sdl3"));
```

Finally, you can use SDL's C API from Zig like this:

```zig
const std = @import("std");
const sdl = @import("sdl3");
if (!sdl.SDL_Init(sdl.SDL_INIT_VIDEO)) {
    std.debug.panic("SDL_Init failed: {s}\n", .{sdl.SDL_GetError()});
}
defer sdl.SDL_Quit();
```

## Example

You can run `src/example.zig` from the command line:
