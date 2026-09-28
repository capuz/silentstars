---
repo: "mrkkrp/tilia"
name: "tilia"
description: "A formatter for Haskell source code"
readmeQualityOk: true
url: "https://github.com/mrkkrp/tilia"
language: "Haskell"
languages: ["Haskell"]
languagePcts: [98]
stars: 38
forks: 1
openIssues: 6
closedIssues: 5
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-08-21T08:54:40Z"
lastCommitAt: "2026-09-28T10:06:23Z"
lastReleaseAt: "2026-09-16T15:14:21Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 34
maintainers: ["mrkkrp", "rowanG077"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa6d7b8b94a80523729eee9ed5194b82dd5cb71467aca9753780ed2b28d5b831/mrkkrp/tilia"
---

# Tilia

* [Getting started](#getting-started)
* [Excluding files](#excluding-files)
* [Formatting operator chains](#formatting-operator-chains)
* [Formatting CPP](#formatting-cpp)
* [Comparison with other formatters](#comparison-with-other-formatters)
* [Development](#development)
* [Contribution](#contribution)
* [License](#license)

Tilia is a formatter for Haskell source code. Its primary design choices
are:

* Use `ghc-lib-parser` for parsing, thus achieving correct parsing at all
  times.
* Let single vs multiline layout be influenced by the input.
* Admit no configuration.
* Ensure high-quality formatting of comments.
* Provide first-class support for CPP.
* Guarantee inference of operator fixity with absolute precision at all
  times.

*If you are curious how Tilia works, see this [blog post][blog-post].*

[blog-post]: https://markkarpov.com/post/announcing-tilia

## Getting started

The two most useful (and only!) commands are `inplace` and `check`:

```console
$ tilia inplace [COMPONENT] # format all files of COMPONENT in place
$ tilia check   [COMPONENT] # check that all files of COMPONENT are formatted
```

`COMPONENT` may be omitted and in that case it defaults to…
