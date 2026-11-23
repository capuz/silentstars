---
repo: "ksyasuda/SubMiner"
name: "SubMiner"
description: "Integrates Yomitan with MPV - featuring one click Anki mining, realtime subtitle annotations, and immersion tracking. No browser or texthooker required"
readmeQualityOk: true
url: "https://github.com/ksyasuda/SubMiner"
homepage: "https://docs.subminer.moe"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["anki-flashcards", "immersion", "japanese", "language-learning", "mpv", "mpv-script", "sentence-mining", "subtitles", "yomitan", "japanese-language-learners"]
stars: 156
forks: 12
openIssues: 1
closedIssues: 40
watchers: 4
contributors: 6
recentReleases: 0
createdAt: "2026-02-09T04:24:22Z"
lastCommitAt: "2026-11-23T09:16:55Z"
lastReleaseAt: "2026-03-09T05:18:35Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 98
undervaluedScore: 39
maintainers: ["ksyasuda", "YashaNoos", "dandascan"]
openGraphImageUrl: "https://opengraph.githubassets.com/20050bbaacd9d3b3633b6bbf94351cc89417fe8a263b029d454b7cd05b03db1e/ksyasuda/SubMiner"
fundingLinks: ["GITHUB:https://github.com/ksyasuda", "KO_FI:https://ko-fi.com/sudacode"]
---

# SubMiner

Look up words with Yomitan or Hachidori, mine them to Anki, and track your immersion without leaving mpv

[Installation](#quick-start) · [Requirements](#requirements) · [Usage](https://docs.subminer.moe/usage) · [Documentation](https://docs.subminer.moe)

## Features

### Dictionary Lookups

Hover over any word in the subtitles to open the full Yomitan popup with definitions, pitch accent, and frequency data. SubMiner bundles its own Yomitan, separate from any browser install.

Yomitan remains the default. Select the bundled [Hachidori](https://github.com/bee-san/hachidori) backend with `dictionaryBackend: "hachidori"` and restart SubMiner. The tray opens the selected backend's settings. See [dictionary setup](https://docs.subminer.moe/usage#hachidori-setup) for importing dictionaries, linking an external Hachidori host, and configuring Anki.

### Instant Anki Mining

Create an Anki card from the exact playback moment with one key press, click, or controller input. SubMiner fills in the sentence, an audio clip, and a screenshot or animated image.
