---
repo: "korulang/koru"
name: "koru"
description: "The event continuation language"
readmeQualityOk: true
url: "https://github.com/korulang/koru"
language: "Zig"
languages: ["Zig"]
languagePcts: [84]
stars: 14
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-12-28T23:17:47Z"
lastCommitAt: "2026-07-12T06:17:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 48
maintainers: ["ungedenstad"]
openGraphImageUrl: "https://opengraph.githubassets.com/c3ac83ad673a83a7e5c465f5978e8f8de6c57129927c9dd0271d0cfe23b9f2bc/korulang/koru"
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
