---
repo: "lightpanda-io/homebrew-browser"
name: "homebrew-browser"
description: "Homebrew tap for Lightpanda, a headless browser for AI agents and automation."
readmeQualityOk: true
url: "https://github.com/lightpanda-io/homebrew-browser"
language: "Shell"
languages: ["Shell", "Ruby"]
languagePcts: [65, 35]
stars: 6
forks: 3
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-03-14T18:21:51Z"
lastCommitAt: "2026-09-19T02:47:45Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 55
maintainers: ["github-actions[bot]", "lightpanda-browser-distribution[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b59f4a1de490e62c127fb3fab0a0ab2b98d3dafc7b299b97008ab4ee6827beb/lightpanda-io/homebrew-browser"
---

# homebrew-browser

Homebrew tap for [Lightpanda](https://github.com/lightpanda-io/browser), a headless browser for AI agents and automation.

## Install

```sh
brew install lightpanda-io/browser/lightpanda
```

You can alternatively first add the tap:

``` sh
brew tap lightpanda-io/browser
```

And the install the binary

``` sh
brew install lightpanda
```

## Updating formula

A github action is triggered by the [browser](https://github.com/lightpanda-io/browser)
repository once a nightly release is built, and can also be triggered manually:
[Update Formula](https://github.com/lightpanda-io/homebrew-browser/blob/HEAD/../../actions/workflows/update.yml)

It will open a pull request and merge it automatically if all checks pass.
