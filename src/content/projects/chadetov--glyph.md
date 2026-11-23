---
repo: "chadetov/glyph"
name: "glyph"
description: "A statically typed, transpile-to-TypeScript language designed so AI agents can read, write, and modify code safely."
readmeQualityOk: true
url: "https://github.com/chadetov/glyph"
homepage: "https://glyphlang.io"
language: "HTML"
languages: ["HTML"]
languagePcts: [87]
topics: ["compiler", "mcp", "programming-language", "static-typing", "type-safety", "typescript"]
stars: 8
forks: 0
openIssues: 8
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-05-26T16:59:33Z"
lastCommitAt: "2026-11-23T10:21:15Z"
lastReleaseAt: "2026-07-21T09:14:32Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 80
undervaluedScore: 39
maintainers: ["chadetov"]
openGraphImageUrl: "https://opengraph.githubassets.com/55ddac731471badbaa7cd19093b612521862c76d47f51512f1cf586ba75a8723/chadetov/glyph"
discussionCount: 0
---

# Glyph

A statically typed, transpile-to-TypeScript language built so code an AI agent writes can be read, checked and changed without guessing.

```sh
npx -y @glyphlang/glyph init hello && cd hello && npm install && npx glyph run
```

That needs Node 18 or later and installs nothing globally: the project pins the
compiler, `typescript` and `tsx` in `devDependencies`. To have `glyph` on your
PATH instead, `npm install -g @glyphlang/glyph tsx typescript`. Prebuilt binaries cover macOS
and Linux on x64 and ARM, and Windows on x64.

**[glyphlang.io](https://glyphlang.io)** · **[playground](https://glyphlang.io/playground/)** · **[AGENTS.md](https://github.com/chadetov/glyph/blob/HEAD/AGENTS.md)** if you are pointing an agent at this

## What it looks like

```glyph
module main

import std/array
import std/option { Some, None }
import std/result { Result, Ok, Err }

type User = {
  id: string,
  name: string,
}

pub fn find_user(users: Array<User>, id: string) -> Result<User, string> {
  let found = array.find(users, fn(u: User) -> bool {
    return u.id == id
  })
  return match found {
    Some(u) => Ok(u),
    None => Err("no user with id ${id}"),
  }
}
```
