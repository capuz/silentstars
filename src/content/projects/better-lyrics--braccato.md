---
repo: "better-lyrics/braccato"
name: "braccato"
description: "Synchronized lyrics rendering as a web component. Word-by-word animated lyrics with any audio source, extracted from the Better Lyrics rendering engine."
readmeQualityOk: true
url: "https://github.com/better-lyrics/braccato"
homepage: "https://braccato.betterlyrics.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["lyrics", "ttml", "web-components"]
stars: 13
forks: 1
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-03-10T20:46:35Z"
lastCommitAt: "2026-09-20T08:46:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 53
maintainers: ["boidushya", "adaliea", "better-lyrics-harmonizer[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c58a2aa7aa628abbc625fb321575653303a17f70c098d122c8230a75a6077eda/better-lyrics/braccato"
---

</p>

<h1 align="center">Braccato</h1>

  Synchronized lyrics rendering as a web component.<br>
</p>

</p>

</p>

> [!IMPORTANT]
> `@braccato/core` 1.0.0 is a rewrite, not a version bump. If you are on 0.1.x, read
> [MIGRATION.md](https://github.com/better-lyrics/braccato/blob/HEAD/MIGRATION.md) before upgrading.

## Packages

| Package | Description |
|---------|-------------|
| `@braccato/core` | The `<braccato-lyrics>` element: synchronized lyrics, word by word |
| `@braccato/parsers` | Format parsers: TTML, LRC, SRT, QRC, Plain |
| `@braccato/provider-blyrics` | Lyrics provider chain with priority and validation |
| `@braccato/rics` | RICS CSS preprocessor |
| `@braccato/types` | The lyric shapes core and parsers share |

`@braccato/core`, the `<braccato-lyrics>` element itself, is [`packages/core`](https://github.com/better-lyrics/braccato/blob/HEAD/packages/core). It
moved here from the [Better Lyrics repository](https://github.com/better-lyrics/better-lyrics), where
the rendering engine still runs as part of the extension. Its
[README](https://github.com/better-lyrics/braccato/blob/HEAD/packages/core/README.md) is the reference for properties, attributes, events, theming…
