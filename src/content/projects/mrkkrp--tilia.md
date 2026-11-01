---
repo: "mrkkrp/tilia"
name: "tilia"
description: "A formatter for Haskell source code"
readmeQualityOk: true
url: "https://github.com/mrkkrp/tilia"
language: "Haskell"
languages: ["Haskell"]
languagePcts: [99]
topics: ["formatter", "haskell", "code-formatter", "cpp"]
stars: 45
forks: 1
openIssues: 17
closedIssues: 132
watchers: 1
contributors: 2
recentReleases: 7
createdAt: "2026-08-21T08:54:40Z"
lastCommitAt: "2026-11-01T10:43:38Z"
lastReleaseAt: "2026-11-01T00:53:56Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "under_pressure"]
healthScore: 98
undervaluedScore: 42
maintainers: ["mrkkrp"]
openGraphImageUrl: "https://opengraph.githubassets.com/c3754adb09d83c9641bb48c2f117a1718372ae61d1184ae50d9473a5542a5e7d/mrkkrp/tilia"
---

# Tilia

* [Getting started](#getting-started)
* [Editor integration](#editor-integration)
* [Excluding files](#excluding-files)
* [Formatting operator chains](#formatting-operator-chains)
* [Formatting CPP](#formatting-cpp)
* [Comparison with other formatters](#comparison-with-other-formatters)
* [Suggested setup per use-case](#suggested-setup-per-use-case)
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

The two most useful commands are `inplace` and `check`:

```console
$ tilia inplace [COMPONENT] # format all files of COMPONENT in place
$ tilia check   [COMPONENT] # check that all files of COMPONENT are formatted…
