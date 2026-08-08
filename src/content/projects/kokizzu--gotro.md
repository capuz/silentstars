---
repo: "kokizzu/gotro"
name: "gotro"
description: "GotRo is a collection of libraries and a Golang web framework "
readmeQualityOk: true
url: "https://github.com/kokizzu/gotro"
language: "HTML"
languages: ["HTML", "Go"]
languagePcts: [49, 43]
topics: ["database", "go", "golang", "web-framework"]
stars: 53
forks: 19
openIssues: 1
closedIssues: 3
watchers: 6
contributors: 13
recentReleases: 0
createdAt: "2017-02-23T04:52:07Z"
lastCommitAt: "2026-08-08T04:33:27Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 89
undervaluedScore: 49
maintainers: ["kokizzu", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/638e92c719bf1daf13c3168d5e8849f154661129d252e35c5c5d41f935114d80/kokizzu/gotro"
---

# GotRo

GotRo is abbreviation of `Gotong Royong`. the meaning in `Indonesia`: "do it together", "mutual cooperation". 
This Framework is rewrite of [gokil](https://github.com/kokizzu/gotro/blob/HEAD//gitlab.com/kokizzu/gokil), that previously use [httprouter](https://github.com/kokizzu/gotro/blob/HEAD//github.com/julienschmidt/httprouter) but rewritten using [fasthttprouter](https://github.com/kokizzu/gotro/blob/HEAD//github.com/buaazp/fasthttprouter) (`W` framework, deprecated), latest framework `W2` are now using [fiber](https://github.com/kokizzu/gotro/blob/HEAD//gofiber.io).

## Versioning

versioning using this format 1.`(M+(YEAR-2021)*12)DD`.`HMM`,
so for example v1.213.1549 means it was released at `2021-02-13 15:49`

## Design Goal
- As similar as possible to [gokil](https://github.com/kokizzu/gotro/blob/HEAD//gitlab.com/kokizzu/gokil) that still used by my old company (2014-now).
- Opinionated (choose the best dependency), for example by default uses `int64` and `float64` for values, and `uint64` for id(s).
- 1-letter supporting package so we only need to write a short common function, such as: `I.ToS(1234)` to convert `int64` to `string`)
  -…
