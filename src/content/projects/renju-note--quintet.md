---
repo: "renju-note/quintet"
name: "quintet"
description: "A Renju mate solver written in Rust and compiled to WebAssembly."
readmeQualityOk: true
url: "https://github.com/renju-note/quintet"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 11
forks: 2
openIssues: 2
closedIssues: 11
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2020-12-26T10:19:44Z"
lastCommitAt: "2026-09-27T09:28:49Z"
lastReleaseAt: "2022-02-14T11:47:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 63
maintainers: ["yubessy"]
openGraphImageUrl: "https://opengraph.githubassets.com/0af7209253e2ab3df080ef6ee739d3d1143a9c6a30f9b2525ad68a21e21bfffa/renju-note/quintet"
---

# quintet

A [Renju](https://www.renju.net/rifrules/) mate solver written in Rust and
compiled to WebAssembly. Given a position and a side to move, it searches for
a forced win and returns the winning sequence.

quintet powers the analysis features of [renju-note](https://github.com/renju-note),
and is published to npm as
[`@renju-note/quintet`](https://www.npmjs.com/package/@renju-note/quintet).

## What it solves

| Mode | Meaning |
| --- | --- |
| **VCF** (Victory by Continuous Fours) | A forced win using only *fours*: every attacking move threatens to complete five, so every reply is forced. |
| **VCT** (Victory by Continuous Threats) | A forced win using *fours and threes*. The defender may answer a three in several ways, so this is a proper AND/OR tree search, solved with proof numbers. |

Renju rules are fully modelled: Black's forbidden moves (double-three,
double-four, overline) are detected — including the recursive "real vs. fake
three" rule — and can be both an obstacle for a Black attacker and a winning
resource for a White attacker. Opening restrictions and passing are not
modelled; the solver takes an arbitrary position.

## Usage

### From JavaScript

```sh
npm…
