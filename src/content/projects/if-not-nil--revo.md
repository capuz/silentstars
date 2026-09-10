---
repo: "if-not-nil/revo"
name: "revo"
description: "a dynamic language for the joy of programming"
readmeQualityOk: true
url: "https://github.com/if-not-nil/revo"
homepage: "https://revo.lung.fyi"
language: "Zig"
languages: ["Zig"]
languagePcts: [94]
topics: ["language", "programming-language"]
stars: 410
forks: 16
openIssues: 2
closedIssues: 18
watchers: 1
contributors: 20
recentReleases: 4
createdAt: "2026-05-07T14:18:56Z"
lastCommitAt: "2026-09-10T08:20:02Z"
lastReleaseAt: "2026-09-05T08:41:18Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 30
maintainers: ["if-not-nil", "nervecenter", "Gingeh"]
openGraphImageUrl: "https://opengraph.githubassets.com/81e1e741ed0166c2b25974d60080a0bc1f66ec0047d9b344d7c31861c5c5df67/if-not-nil/revo"
discussionCount: 13
---

# `revo, the programming language

[homepage & docs](https://revo.lung.fyi)
| [introduction & learn](https://revo.lung.fyi/docs)
| [playground](https://revo.lung.fyi/ide)
| [source & issues](https://github.com/if-not-nil/revo)
| [discuss & chat](https://discord.com/invite/XzGWh7TX59)

an expressive, dynamically-typed language for the joy of programming

> browser-runnable examples [here](https://revo.lung.fyi/docs)

 

[tools](#tools)
| [editors](#editors)
| [credits](#credits)
| [examples](https://github.com/if-not-nil/revo/blob/HEAD/examples)
| [made with revo](#made-with-revo)

## get

the latest release is hosted at [github releases](https://github.com/if-not-nil/revo/releases)

however, this project is rapidly changing. i recommend you build from source instead

## install from source

you need [zig](https://ziglang.org/download) `0.16.0` to build revo. i also recommend the [anyzig](https://github.com/marler8997/anyzig) version manager

### linux/bsd/mac/etc

```bash
git clone https://github.com/if-not-nil/revo --recursive && cd revo
git submodule update --init --recursive
zig build --fetch
zig build -Doptimize=ReleaseSafe
                  # =ReleaseSmall for a ~1mb…
