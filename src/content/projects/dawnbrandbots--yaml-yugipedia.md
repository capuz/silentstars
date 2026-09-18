---
repo: "DawnbrandBots/yaml-yugipedia"
name: "yaml-yugipedia"
description: "An automatically-updated collection of wikitexts from Yugipedia. Part of YAML Yugi."
readmeQualityOk: true
url: "https://github.com/DawnbrandBots/yaml-yugipedia"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [77, 23]
topics: ["etl", "mediawiki", "yaml", "yu-gi-oh", "yugioh", "yaml-yugi", "yugipedia"]
stars: 8
forks: 1
openIssues: 4
closedIssues: 6
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2022-06-24T01:17:36Z"
lastCommitAt: "2026-09-18T14:02:57Z"
lastReleaseAt: "2023-03-28T00:09:17Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 92
undervaluedScore: 69
maintainers: ["dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f66abe1a7fa74acbfea86217a6f0b7b0b10dd68b9959de5a3e3756d9bf8ed27/DawnbrandBots/yaml-yugipedia"
fundingLinks: ["PATREON:https://patreon.com/alphakretinbots", "KO_FI:https://ko-fi.com/dawnbrandbots"]
---

# YAML [Yugipedia](https://yugipedia.com)

An automatically-updated collection of wikitexts from Yugipedia of cards for intake and transformation into the
[YAML Yugi](https://github.com/DawnbrandBots/yaml-yugi) database. Storing a cache here reduces load on the wiki while
also serving as an external backup of current wiki text. The YAML Yugi project aims to create a comprehensive,
machine-readable, human-editable database of _Yu-Gi-Oh! Trading Card Game_ (TCG), _Official Card Game_ (OCG),
_Master Duel_ video game, _Rush Duel_, and _Speed Duel_.

All files under [`/wikitext`](https://github.com/DawnbrandBots/yaml-yugipedia/blob/HEAD/wikitext) and [`/semantic-mediawiki`](https://github.com/DawnbrandBots/yaml-yugipedia/blob/HEAD/semantic-mediawiki) are downloaded using MediaWiki APIs and copyright belongs to their original
holders. Any Yugipedia-original content is licensed under [CC BY-SA 4.0](https://yugipedia.com/wiki/Yugipedia:Licensing)
but most card text is &copy; Studio Dice/SHUEISHA, TV TOKYO, KONAMI.

The remaining files — the actual source code of this stage of the pipeline — are available under the
GNU Lesser General Public License 3.0 or later. See…
