---
repo: "quarkusio/es.quarkus.io"
name: "es.quarkus.io"
description: "(incubating) Spanish localization project for https://github.com/quarkusio/quarkusio.github.io"
readmeQualityOk: true
url: "https://github.com/quarkusio/es.quarkus.io"
language: "HTML"
languages: ["HTML"]
languagePcts: [96]
topics: ["i18n", "internationalization", "localization", "translation", "translations"]
stars: 9
forks: 11
openIssues: 15
closedIssues: 185
watchers: 4
contributors: 54
recentReleases: 0
createdAt: "2022-04-22T13:06:26Z"
lastCommitAt: "2026-10-18T08:16:10Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 96
undervaluedScore: 83
maintainers: ["github-actions[bot]", "rdnovell", "ynojima"]
openGraphImageUrl: "https://opengraph.githubassets.com/ca898e27c9ae59f01603275dfd1f6dd4c9cce7654e94fc1f987508594ee6cd5f/quarkusio/es.quarkus.io"
---

# es.quarkus.io

Spanish Localization project for [https://github.com/quarkusio/quarkusio.github.io](https://github.com/quarkusio/quarkusio.github.io) (The repository for [quarkus.io website](https://quarkus.io))

Localized site: [https://es.quarkus.io/](https://es.quarkus.io)

## Localization architecture

Original [quarkusio.github.io](https://github.com/quarkusio/quarkusio.github.io) is built with Jekyll, 
and most of its contents are written in asciidoctor (.adoc) files.
es.quarkus.io uses [tsuji](https://github.com/doc-l10n-kit/tsuji) to extract texts to po files,
translate, write back to asciidoctor files, and build a localized site.
Most workflow including pre-translation by DeepL API are automated by GitHub Actions. 
Translators can focus on post-editing to improve fluency.
If you are interested in contributing localization, please edit .po files, and submit a pull request.

### .adoc files localization

#### sync workflow

The `es.quarkus.io` GitHub repository has a GitHub Actions workflow which checks upstream repository(submodule) update, 
extracts texts from upstream .adoc files to [.adoc.po files](https://github.com/quarkusio/es.quarkus.io/blob/HEAD/l10n/po),…
