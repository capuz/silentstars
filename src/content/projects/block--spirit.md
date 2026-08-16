---
repo: "block/spirit"
name: "spirit"
description: "Online schema change and data operations for MySQL 8.0+"
readmeQualityOk: true
url: "https://github.com/block/spirit"
language: "Go"
languages: ["Go"]
languagePcts: [97]
stars: 197
forks: 35
openIssues: 9
closedIssues: 374
watchers: 8
contributors: 31
recentReleases: 0
createdAt: "2023-01-25T15:10:50Z"
lastCommitAt: "2026-08-16T04:09:35Z"
lastReleaseAt: "2026-02-03T13:43:34Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 42
maintainers: ["morgo", "aparajon"]
openGraphImageUrl: "https://opengraph.githubassets.com/df10ad376330099939dc04a96dead4b30db9508701b91652fefec10034cc52ba/block/spirit"
---

# What is this?

Spirit is a _reimplementation_ of the schema change tool [gh-ost](https://github.com/github/gh-ost).

It is similar to gh-ost except:
- It only supports MySQL 8.0 and higher
- It is multi-threaded in both the row-copying and the binlog applying phase

The goal of Spirit is to apply schema changes as fast as possible, while also preserving safety. This makes it unsuitable in the following scenarios:
- You require read replicas to be less than 10s behind the writer
- You require support for older versions of MySQL

If this is the case, `gh-ost` remains a fine choice.

Quick Links:
* [USAGE](https://github.com/block/spirit/blob/HEAD/docs/README.md) - more information on how to use Spirit.
* [More Resilient Schema Changes at Scale](https://code.cash.app/more-resilient-schema-changes-at-scale) - a high-level overview of the motivations behind Spirit.
* [Introducing Spirit](https://code.cash.app/introducing-spirit) - our launch blog post.
* [MySQL Belgian Days 2024 Slides](https://www.slideshare.net/slideshows/introducing-spirit-online-schema-change/266175200) - more information in presentation form.

## Optimizations

The following are some of the optimizations that…
