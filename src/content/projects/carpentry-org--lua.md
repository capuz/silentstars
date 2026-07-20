---
repo: "carpentry-org/lua"
name: "lua"
description: "A simple way to embed Lua in Carp [WIP]"
readmeQualityOk: true
url: "https://github.com/carpentry-org/lua"
language: "Lua"
languages: ["Lua"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2020-10-15T20:14:14Z"
lastCommitAt: "2026-07-20T06:34:21Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 95
undervaluedScore: 70
maintainers: ["hellerve", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/f35ffea03fb7e59f7e716009341e870236ee334989cb433e94333fa7ca6d28c8/carpentry-org/lua"
---

# lua

Embed Lua in Carp. Provides two modules: `Lua` for direct access to the Lua C
API, and `Luax` for a safer, higher-level interface built on top of it.

## Installation

```clojure
(load "https://github.com/carpentry-org/lua@0.4.0")

; tell Carp where your Lua headers live
(Lua.setup "lua")

; if your library is named differently (e.g. lua5.4):
(Lua.setup "lua" "lua5.4")
```

## Usage

All interaction happens inside a `Lua.with-lua-do` block, which creates a Lua
state and closes it when the block exits:

```clojure
(defn main []
  (Lua.with-lua-do
    (Lua.libs lua)

    ; define and call a Lua function
    (ignore (Lua.fun lua add [x y] "return x + y"))
    (let [result (Luax.call-fn lua add Lua.get-int
                   (Lua.push-int 3)
                   (Lua.push-int 4))]
      (match result
        (Result.Success v) (IO.println &(fmt "3 + 4 = %d" v))
        (Result.Error e) (IO.errorln &e)))))
```

The `Lua` module wraps the Lua C API directly: stack operations
(`push-int`, `push-float`, `push-bool`, `push-string`, `get-int`, etc.),
globals (`get-global`, `set-global`), tables (`create-table`, `set-field`,
`get-field`, `next`), code execution (`do-string`, `do-file`,…
