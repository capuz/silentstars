---
repo: "saeki-mototsune/CyberTrain"
name: "CyberTrain"
description: "CyberTrain is a Rails-shaped web application framework written natively for Spinel."
readmeQualityOk: true
url: "https://github.com/saeki-mototsune/CyberTrain"
homepage: "https://saeki-mototsune.github.io/CyberTrain/"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [90]
stars: 7
forks: 0
openIssues: 0
closedIssues: 54
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2026-09-25T21:03:28Z"
lastCommitAt: "2026-11-23T10:25:30Z"
lastReleaseAt: "2026-11-04T13:28:16Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 61
maintainers: ["saeki-mototsune"]
openGraphImageUrl: "https://opengraph.githubassets.com/e202c2450c5e1364a57053cfd8f97c1f00e3ab02ad235883dc46905c8427438f/saeki-mototsune/CyberTrain"
---

# cybertrain

A Rails-shaped web framework written natively for
[Spinel](https://github.com/matz/spinel), matz's ahead-of-time Ruby compiler.
`cybertrain build` compiles your controllers, models, views and the framework
into **one native binary**: no Rack, no gems at runtime, no Ruby interpreter
in production. The Rails vocabulary (`before_action`, `Article.where(...)`,
`resources :articles`) comes from plain Ruby generated at build time instead
of runtime metaprogramming.

## Status

Pre-alpha. What is listed here works end to end.
[examples/blog](https://github.com/saeki-mototsune/CyberTrain/blob/HEAD/examples/blog) is the Rails "Getting Started" blog built on
it, in English and Japanese, with an admin user guarding its `/admin` pages.
