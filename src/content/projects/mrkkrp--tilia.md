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
openIssues: 2
closedIssues: 9
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2026-08-21T08:54:40Z"
lastCommitAt: "2026-10-01T10:24:44Z"
lastReleaseAt: "2026-09-28T23:46:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 41
maintainers: ["mrkkrp", "rowanG077"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5965e09fbf35daa38a21f97e230e5646c466d9ea694f3b653babef2f89d5db1/mrkkrp/tilia"
---

# Tilia

* [Getting started](#getting-started)
* [Excluding files](#excluding-files)
* [Formatting operator chains](#formatting-operator-chains)
* [Formatting CPP](#formatting-cpp)
* [Comparison with other formatters](#comparison-with-other-formatters)
* [Suggested setup per use-case](#suggested-setup-per-use-case)
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
```…
