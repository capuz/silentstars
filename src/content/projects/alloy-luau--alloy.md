---
repo: "alloy-luau/alloy"
name: "alloy"
description: "A strict superset of Luau that compiles to plain Luau, line for line. "
readmeQualityOk: true
url: "https://github.com/alloy-luau/alloy"
homepage: "https://alloy-luau.github.io/"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
topics: ["luau", "luau-lang", "luau-language", "transpile", "transpiled-language"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-05T05:21:19Z"
lastCommitAt: "2026-11-05T08:05:01Z"
lastReleaseAt: "2026-10-01T17:42:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 59
maintainers: ["savruun"]
openGraphImageUrl: "https://opengraph.githubassets.com/2133bb49bf0007e8a9e03059c916fcb472f96088447df7254627e12b1e62224a/alloy-luau/alloy"
---

A strict superset of Luau that compiles to plain Luau, line for line.

Every Luau file is already an Alloy file. Alloy adds structs, enums,
traits, pattern matching, safe access, async, typed remotes, and a
strict checker. Each construct compiles to fixed Luau on the same line,
so a stack trace, a breakpoint, and an analyzer diagnostic all point at
the line you wrote. One binary builds, checks, lints, formats, and
documents. One language server shows Alloy to the editor.

```luau
struct Player
    name: string
    hp: number = 100
end

enum Msg
    Join(Player)
    Leave(Player)
end

local function greet(m: Msg): string
    match m with
        case Join(p) then return `welcome, {p.name}`
        case Leave(p) then return `bye, {p.name}`
    end
end

local hp = workspace->Arena->Boss?.Humanoid?.Health ?? 0
```

## Install

```sh
cargo install alloy-luau alloy-luau-lsp
alloy init          # alloy.toml, .luaurc, .config.luau
alloy build -W      # compile src into build, again on every change
```

A project may write its configuration in Alloy instead of TOML: a
`.config.aly` that exports the same tables, and runs its code on load.
`alloy doc config` shows the three forms.

The…
