---
repo: "korulang/koru"
name: "koru"
description: "The event continuation language"
readmeQualityOk: true
url: "https://github.com/korulang/koru"
language: "Zig"
languages: ["Zig"]
languagePcts: [82]
stars: 16
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-12-28T23:17:47Z"
lastCommitAt: "2026-07-20T06:32:35Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 48
maintainers: ["ungedenstad"]
openGraphImageUrl: "https://opengraph.githubassets.com/420e8e76c80e20264301435f64348990d9d4f4359d003a4856e7244f602c0bf9/korulang/koru"
---

# Koru

Koru is an event continuation/effect language with backends for Zig and JavaScript. It is aspirational and immature.

```koru
import std/io

event greet { name: []const u8 } -> []const u8

greet -> "Hello, " ++ name ++ "!"

greet ("World"): msg |> std/io:print.ln(msg)
```

## Building

Requires Zig 0.15.1 or later.

```bash
zig build
```

## Links

- [Website](https://korulang.org)
- [X](https://x.com/korulang)
- [Learn](https://korulang.org/learn)
- [Status](https://korulang.org/status)
- [Discord](https://discord.gg/tYWvdrda8h)

## License

MIT
