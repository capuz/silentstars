---
repo: "samwhosung/benilla-re"
name: "benilla-re"
description: "The reverse engineering of the World of Warcraft 1.12.1 client behind benilla"
readmeQualityOk: true
url: "https://github.com/samwhosung/benilla-re"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 15
forks: 1
openIssues: 0
closedIssues: 101
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2026-10-13T02:50:42Z"
lastCommitAt: "2026-10-22T08:51:35Z"
lastReleaseAt: "2026-10-15T08:18:08Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 52
maintainers: ["samwhosung"]
openGraphImageUrl: "https://opengraph.githubassets.com/929b032292ec70392c807adc6c3002a58c71b515312c23bbc74a0868ee21222d/samwhosung/benilla-re"
---

# benilla-re

The reverse engineering of the World of Warcraft 1.12.1 client (`WoW.exe`, build 5875), read at
its bytes and cited by address. It is the reference behind
[benilla](https://github.com/samwhosung/benilla), a from-scratch 1.12.1 client in Rust, and it is
written for anyone else who needs to know what the client does: another client, a server, a
client mod, a format reader.

Browse it at **[samwhosung.github.io/benilla-re](https://samwhosung.github.io/benilla-re/)**: a
page per function, global and struct, per system, per Lua function, event, CVar and opcode, with
search, and `?0x5e6853` to jump to whatever holds an address.

Bring your own client. Nothing here comes from a WoW install. The symbol table, the docs, the
tables, the site and the exports are plain files that need no exe; only the tests, the table
generators and the listing read `WoW/WoW.exe` from your own copy of 1.12.1.5875, and they refuse
any other build.

## Start here

- **Patching or injecting into the client** (a DLL, a loader, a fix): `cargo xtask export` writes
  `benilla-re.h`, every struct with its layout asserted and every function's address with a typed
  pointer in its calling convention, and…
