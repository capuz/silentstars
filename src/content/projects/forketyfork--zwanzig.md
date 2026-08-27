---
repo: "forketyfork/zwanzig"
name: "zwanzig"
description: "A static analyzer and linter for Zig"
readmeQualityOk: true
url: "https://github.com/forketyfork/zwanzig"
language: "Zig"
languages: ["Zig"]
languagePcts: [99]
topics: ["code-quality", "linter", "static-analysis", "zig"]
stars: 28
forks: 0
openIssues: 0
closedIssues: 7
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-01-19T05:38:40Z"
lastCommitAt: "2026-08-27T14:30:01Z"
lastReleaseAt: "2026-02-03T14:09:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 44
maintainers: ["forketyfork", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5378ff3575fc6a155c79401202712534ab8d4a529a139dae16b07bdbfd8507d9/forketyfork/zwanzig"
---

# zwanzig

Zwanzig is a static analyzer and linter for Zig code, combining fast AST/token rules with CFG-driven analysis built on ZIR output.

## Installation and usage

### Release binary

Download the archive for your platform from the [latest release](https://github.com/forketyfork/zwanzig/releases/latest):

| Platform | Embedded frontend | Archive |
| --- | --- | --- |
| Linux x86_64 | Zig 0.15.2 | `zwanzig-vX.Y.Z-zig-0.15.2-linux-x86_64.tar.gz` |
| Linux x86_64 | Zig 0.16.0 | `zwanzig-vX.Y.Z-zig-0.16.0-linux-x86_64.tar.gz` |
| macOS ARM64 | Zig 0.15.2 | `zwanzig-vX.Y.Z-zig-0.15.2-macos-aarch64.tar.gz` |
| macOS ARM64 | Zig 0.16.0 | `zwanzig-vX.Y.Z-zig-0.16.0-macos-aarch64.tar.gz` |
| Windows x86_64 | Zig 0.15.2 | `zwanzig-vX.Y.Z-zig-0.15.2-windows-x86_64.zip` |
| Windows x86_64 | Zig 0.16.0 | `zwanzig-vX.Y.Z-zig-0.16.0-windows-x86_64.zip` |

Extract the archive and either add its directory to `PATH` or invoke the executable directly:

```bash
./zwanzig src/
```

On Windows, run `.\zwanzig.exe src\` instead.

### Zig frontend compatibility

Zwanzig embeds the Zig frontend used to build it. Source builds support Zig 0.15.2 and Zig 0.16.0, and select the matching compatibility…
