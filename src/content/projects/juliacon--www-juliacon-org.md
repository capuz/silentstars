---
repo: "JuliaCon/www.juliacon.org"
name: "www.juliacon.org"
description: "https://juliacon.org/"
readmeQualityOk: true
url: "https://github.com/JuliaCon/www.juliacon.org"
language: "HTML"
languages: ["HTML"]
languagePcts: [93]
stars: 55
forks: 83
openIssues: 8
closedIssues: 122
watchers: 27
contributors: 111
recentReleases: 0
createdAt: "2014-04-02T16:17:43Z"
lastCommitAt: "2026-10-30T10:22:41Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 58
maintainers: ["yangmr04", "DilumAluthge", "aviks"]
openGraphImageUrl: "https://opengraph.githubassets.com/72eb3349985077c7552b5b4230689dcd606f70fe70f88053d212d1b25fbf871d/JuliaCon/www.juliacon.org"
---

# JuliaCon website

This repo serves the [juliacon.org](https://github.com/JuliaCon/www.juliacon.org/blob/HEAD/[https://juliacon.org). It is created using [Franklin.jl](https://github.com/tlienart/Franklin.jl), and is served by Github pages. 

The previous version of this website used Jekyll. This version has been forked from `d542df4792fb409d3546d7a5ff3fd59b131b4761` from branch `src`

The main branch of this repo is `franklin` (this branch). The site is built using a Github Action, and the generated html is pushed to the `master` branch, from where it is deployed by Github pages. 

## Previewing the website locally

You'll need Franklin as well as a helper package:

```julia
using Pkg; Pkg.add(["Franklin", "FranklinUtils"])
```

Then `cd` to the `www.juliacon.org` folder you cloned locally and do

```julia
using Franklin
serve()
```

The [Franklin docs](https://franklinjl.org) as well as the `#franklin` Slack channel might prove useful if you're not familiar with the package.
