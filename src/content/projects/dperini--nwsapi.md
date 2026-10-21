---
repo: "dperini/nwsapi"
name: "nwsapi"
description: "Fast CSS Selectors API Engine"
readmeQualityOk: true
url: "https://github.com/dperini/nwsapi"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 141
forks: 52
openIssues: 2
closedIssues: 133
watchers: 2
contributors: 19
recentReleases: 0
createdAt: "2017-06-04T14:39:12Z"
lastCommitAt: "2026-10-21T17:31:32Z"
lastReleaseAt: "2018-12-20T20:51:45Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 98
undervaluedScore: 47
maintainers: ["jdalton", "dperini"]
openGraphImageUrl: "https://opengraph.githubassets.com/5bda698c678c74f8adce11798636835d8f2dc62d2c0961831c4126553ca30464/dperini/nwsapi"
fundingLinks: ["GITHUB:https://github.com/dperini", "PATREON:https://patreon.com/dperini", "OPEN_COLLECTIVE:https://opencollective.com/diego-57bc890e", "BUY_ME_A_COFFEE:https://buymeacoffee.com/dperini", "THANKS_DEV:https://thanks.dev/u/gh/dperini", "CUSTOM:https://paypal.me/perinidiego"]
---

# [NWSAPI](http://dperini.github.io/nwsapi/)

Fast CSS Selectors API Engine

   

NWSAPI is the development progress of [NWMATCHER](https://github.com/dperini/nwmatcher) aiming at [Selectors Level 4](https://www.w3.org/TR/selectors-4/) conformance. It has been completely reworked to be easily extended and maintained. It is a right-to-left selector parser and compiler written in pure Javascript with no external dependencies. It was initially thought as a cross browser library to improve event delegation and web page scraping in various frameworks but it has become a popular replacement of the native CSS selection and matching functionality in newer browsers and headless environments.

It uses [regular expressions](https://en.wikipedia.org/wiki/Regular_expression) to parse CSS selector strings and [metaprogramming](https://en.wikipedia.org/wiki/Metaprogramming) to transforms these selector strings into Javascript function resolvers. This process is executed only once for each selector string allowing memoization of the function resolvers and achieving unmatched performances.

## Start contributing

From the checkout root, install and prepare the checkout:

```sh
npm i
```

This…
