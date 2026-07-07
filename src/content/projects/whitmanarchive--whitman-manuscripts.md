---
repo: "whitmanarchive/whitman-manuscripts"
name: "whitman-manuscripts"
description: "Data Repo | Whitman Manuscripts TEI"
readmeQualityOk: true
url: "https://github.com/whitmanarchive/whitman-manuscripts"
language: "HTML"
languages: ["HTML"]
languagePcts: [99]
topics: ["tei", "tei-xml", "whitman", "walt-whitman-archive", "cdrh"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 20
recentReleases: 0
createdAt: "2016-12-06T20:55:52Z"
lastCommitAt: "2026-07-07T06:39:04Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 90
undervaluedScore: 71
maintainers: ["kmcmullen", "brettttt", "andrewsjcpoetry-cpu"]
openGraphImageUrl: "https://opengraph.githubassets.com/de0d35b6671758a107e0b5c7e5c0bd45f9235c79a6322e80395b690b4144b132/whitmanarchive/whitman-manuscripts"
---

# whitman-manuscripts
Data Repo | Whitman Manuscripts TEI

This repo shares its Ruby gem dependencies with all other Whitman data
repos via the
[Gemfile](https://github.com/whitmanarchive/whitman-scripts/blob/main/Gemfile)
in the [whitman-scripts
repo](https://github.com/whitmanarchive/whitman-scripts)

This repo also has works-related documents which require `post`-ing
with `threads: 1` in `config/public.yml` or `config/private.yml` to not
break writing to `../whitman-scripts/source/json/works_and_items.json`

If you do not set threads to 1, then there will be a message `set threads to 1 in private.yml to modify works_and_items file`. See [works ingest documentation](https://github.com/whitmanarchive/whitman-scripts/blob/dev/docs/work-ingest.md).

[<em>The Walt Whitman Archive</em>](http://whitmanarchive.org/) endeavors to make Whitman's vast work freely and conveniently accessible to scholars, students, and general readers. Whitman's major life work, <em>Leaves of Grass</em>, went through six very different editions, each of which was issued in a number of formats, creating a book that is probably best studied as numerous distinct creations rather than as a single revised work.…
