---
repo: "mas-bandwidth/schema"
name: "schema"
description: "Your constants, enums, flags, types and tables generated across multiple languages."
readmeQualityOk: true
url: "https://github.com/mas-bandwidth/schema"
language: "Go"
languages: ["Go"]
languagePcts: [50]
stars: 50
forks: 2
openIssues: 28
closedIssues: 382
watchers: 0
contributors: 6
recentReleases: 4
createdAt: "2026-08-05T04:40:51Z"
lastCommitAt: "2026-11-11T19:47:43Z"
lastReleaseAt: "2026-08-19T07:17:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 42
maintainers: ["rowan-claude", "gafferongames"]
openGraphImageUrl: "https://opengraph.githubassets.com/ca660b92918267eaf2bbfa543be3a4e4b47039087c0c3646525f85a880b698ea/mas-bandwidth/schema"
fundingLinks: ["GITHUB:https://github.com/mas-bandwidth", "PATREON:https://patreon.com/MasBandwidth", "CUSTOM:https://www.patreon.com/MasBandwidth/membership"]
---

# schema

**Schema. The data language for games.**

Schema is a data language where you define your constants, enums, flags, types and tables for your game, then from this one definition, it generates code in multiple languages: C, C++, C#, Dart, Elixir, Go, Java, JavaScript, Lua and Rust.

Schema is currently under active development. See **[ROADMAP.md](https://github.com/mas-bandwidth/schema/blob/HEAD/ROADMAP.md)** for details.

If this work helps you, **[please support it.](https://www.patreon.com/MasBandwidth/membership)**

## Design

Schema is designed to support the following use-cases in game development:

* Packets sent between a client and server.
* Messages sent between your server and backend.
* Asset file formats and recursive data structures.
* Save game files that must load in a future game build.
* Game assets cooked to an efficient runtime binary format.
* Render data written in one language and read in another - sixty times per-second.

## Example

```
package example

const MaxHealth = 1000

enum ShipType { Fighter, Corvette, Bomber }

flags ShipFlags { Firing, Thrusting, Disabled }

type Vec3
{
    x float64
    y float64
    z float64
}

type Quaternion
{
    x…
