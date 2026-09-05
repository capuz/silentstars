---
repo: "elaforge/fix-imports"
name: "fix-imports"
description: "Automatically add and delete imports in a Haskell module."
readmeQualityOk: true
url: "https://github.com/elaforge/fix-imports"
language: "Haskell"
languages: ["Haskell"]
languagePcts: [98]
stars: 17
forks: 1
openIssues: 1
closedIssues: 2
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2018-02-27T19:08:36Z"
lastCommitAt: "2026-09-05T07:48:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 83
undervaluedScore: 35
maintainers: ["elaforge"]
openGraphImageUrl: "https://opengraph.githubassets.com/33a1c91de16cd20daa9677988a7fb1bf51f7381afc312021d9812526ea05c101/elaforge/fix-imports"
---

`fix-imports` is a small standalone program to manage the import block of a
haskell program.  It will try to add import lines for qualified names
with no corresponding import, remove unused import lines, and keep the
import block sorted, with optional rules for grouping.

Support for unqualified imports is limited to symbols you explicitly configure,
so if you list `System.FilePath ((</>))`, it will add that import when you use
it, or remove when it's no longer used, but it won't go search modules for
unqualified imports.

It doesn't mess with non-managed unqualified imports, so you can still use
unqualified imports, you just have to do it manually.

Since it's a unix-style filter, it should be possible to integrate into any
editor.  There's an example vimrc to bind to a key in vim.

### Usage:

Normally you would integrate it with your editor (see `vimrc` for a vim
example), but for testing, here's an example invocation:

    fix-imports -i src -i test src/A/B/C.hs <src/A/B/C.hs
    [ fixed contents of A/B/C.hs, or an error ]

The `-i` flag is like ghc's `-i` flag, it will add an aditional root to the
module search path.  The example will find modules in both `test/*` and…
