---
repo: "korulang/koru"
name: "koru"
description: "The event continuation language"
readmeQualityOk: true
url: "https://github.com/korulang/koru"
language: "Zig"
languages: ["Zig"]
languagePcts: [81]
stars: 18
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-12-28T23:17:47Z"
lastCommitAt: "2026-07-28T15:04:18Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 47
maintainers: ["ungedenstad"]
openGraphImageUrl: "https://opengraph.githubassets.com/e4e153052e8949f773ae08123445d920c2c2df6122c67c9f932c5fdd28f3716d/korulang/koru"
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
