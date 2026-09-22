---
repo: "thibautbus/gen1recomp-translation-mod-generator"
name: "gen1recomp-translation-mod-generator"
description: "Generate ready-to-import multilingual translation mods for gen1recomp using your own dumps of the US cartridges."
readmeQualityOk: true
url: "https://github.com/thibautbus/gen1recomp-translation-mod-generator"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 26
forks: 3
openIssues: 2
closedIssues: 7
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-29T12:55:49Z"
lastCommitAt: "2026-09-22T08:46:02Z"
lastReleaseAt: "2026-09-17T15:19:17Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 95
undervaluedScore: 47
maintainers: ["thibautbus"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e9bdb9cae6992ff59b1d7010aac52466521394b8adfc1d9e26f9775f20366ca/thibautbus/gen1recomp-translation-mod-generator"
---

# Gen1Recomp translation mod generator

This repository reproducibly generates multilingual `Gen1Recomp` translation
mods without storing a ROM or ROM extract. It currently produces three separate
artifacts per language:

- a universal Pokémon Red, Blue and Yellow mod, with a runtime-selected Yellow
  layer;
- a Pokémon Gold, Silver and Crystal mod for Gen1Recomp's generation-2 runtime;
- a Pokémon FireRed mod for Gen1Recomp's generation-3 (game3) runtime.

The artifacts have distinct mod IDs and filenames, so they can be installed
side by side.

> **AI-assisted development disclosure:** The repository and pipeline were
> developed with AI assistance. Changes are checked through automated tests,
> generated-artifact validation, and code review.

## Quick start

### Recommended: use the graphical application

Download the GUI executable for your platform from the
[latest release](https://github.com/thibautbus/gen1recomp-translation-mod-generator/releases/latest),
then select the target games and the corresponding ROM dumps:

1. Red, Blue and Yellow, Gold and Silver, or FireRed;
2. your own canonical US ROM dumps for the selected games;
3. the target language and output directory.…
