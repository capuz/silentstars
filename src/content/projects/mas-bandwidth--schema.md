---
repo: "mas-bandwidth/schema"
name: "schema"
description: "Your constants, enums, flags, types and tables generated across multiple languages."
readmeQualityOk: true
url: "https://github.com/mas-bandwidth/schema"
language: "Go"
languages: ["Go"]
languagePcts: [47]
stars: 48
forks: 2
openIssues: 28
closedIssues: 382
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-08-05T04:40:51Z"
lastCommitAt: "2026-10-31T02:00:41Z"
lastReleaseAt: "2026-08-19T07:17:04Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 97
undervaluedScore: 42
maintainers: ["gafferongames", "rowan-claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/16a3b98c2d4a56af41ca611d299ff42e8f98f6aa8eabd8a4f31ba3aa59d66a93/mas-bandwidth/schema"
fundingLinks: ["GITHUB:https://github.com/mas-bandwidth", "PATREON:https://patreon.com/MasBandwidth", "CUSTOM:https://www.patreon.com/MasBandwidth/membership"]
---

# schema

**Schema. The data language for games.**

Schema is a data language where you define your constants, enums, flags, types and tables for your game. 

From this one definition, schema generates code in multiple languages: C, C++, C#, Dart, Elixir, Go, Java, JavaScript and Rust.

Schema is currently under active development. See **[ROADMAP.md](https://github.com/mas-bandwidth/schema/blob/HEAD/ROADMAP.md)** for details.

If this work helps you, **[please support it.](https://www.patreon.com/MasBandwidth/membership)**

## Design

Schema is designed to support the following use-cases in game development:

* Packets sent between a client and server.
* Messages sent between your server and backend.
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
    x float64
    y float64
    z float64
    w float64 = 1.0…
