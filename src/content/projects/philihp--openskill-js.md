---
repo: "philihp/openskill.js"
name: "openskill.js"
description: "A faster, open-license alternative to Microsoft TrueSkill"
readmeQualityOk: true
url: "https://github.com/philihp/openskill.js"
homepage: "https://npmx.dev/package/openskill"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 254
forks: 27
openIssues: 2
closedIssues: 40
watchers: 1
contributors: 14
recentReleases: 0
createdAt: "2020-04-21T20:59:34Z"
lastCommitAt: "2026-07-25T06:00:02Z"
lastReleaseAt: "2021-02-10T00:07:25Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 97
undervaluedScore: 42
maintainers: ["renovate[bot]", "philihp"]
openGraphImageUrl: "https://opengraph.githubassets.com/764e25a6f01c3d01b08028fe2e5ae4fe90a084d4149a447f905b18fb2d11defa/philihp/openskill.js"
fundingLinks: ["GITHUB:https://github.com/philihp"]
---

Javascript implementation of Weng-Lin Rating, as described at https://www.csie.ntu.edu.tw/~cjlin/papers/online_ranking/online_journal.pdf

📖 **Full documentation: https://philihp.github.io/openskill.js/** — including idiomatic examples for every language port.

## Speed

Up to 20x faster than TrueSkill!

| Model                            | Speed (higher is better) | Variance |         Samples |
| -------------------------------- | -----------------------: | -------: | --------------: |
| Openskill/bradleyTerryFull       |           62,643 ops/sec |   ±1.09% | 91 runs sampled |
| Openskill/bradleyTerryPart       |           40,152 ops/sec |   ±0.73% | 91 runs sampled |
| Openskill/thurstoneMostellerFull |           59,336 ops/sec |   ±0.74% | 93 runs sampled |
| Openskill/thurstoneMostellerPart |           38,666 ops/sec |   ±1.21% | 92 runs sampled |
| Openskill/plackettLuce           |           23,492 ops/sec |   ±0.26% | 91 runs sampled |
| TrueSkill                        |            2,962 ops/sec |   ±3.23% | 82 runs sampled |

See [this post](https://philihp.com/2020/openskill.html) for more.

## Changelog

See…
