---
repo: "IngmarStein/homebrew-paperless-ngx"
name: "homebrew-paperless-ngx"
description: "Easy paperless-ngx on bare-metal for macOS"
readmeQualityOk: true
url: "https://github.com/IngmarStein/homebrew-paperless-ngx"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
topics: ["bare-metal", "homebrew", "homebrew-formulae", "homebrew-tap", "macos", "paperless-ngx"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-05-22T17:34:15Z"
lastCommitAt: "2026-10-03T22:04:07Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 70
maintainers: ["IngmarStein", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c20b7168aed0289a1094f8e24d22edaf66b2edafac9a7bd3af601aabfec43de8/IngmarStein/homebrew-paperless-ngx"
---

# Paperless-ngx

## How do I install these formulae?

`brew install ingmarstein/paperless-ngx/<formula>`

Or `brew tap ingmarstein/paperless-ngx` and then `brew install <formula>`.

Or, in a `brew bundle` `Brewfile`:

```ruby
tap "ingmarstein/paperless-ngx"
brew "<formula>"
```

## Documentation

`brew help`, `man brew` or check [Homebrew's documentation](https://docs.brew.sh).

## Install and run paperless-ngx

Prerequisites:

```shell
brew install redis
brew services start redis
```

Install paperless-ngx:

```shell
brew install ingmarstein/paperless-ngx/paperless-ngx
```

Configure paperless-ngx in `$(brew --prefix)/etc/paperless-ngx/paperless.conf`

Start services:

```shell
brew services start paperless-ngx
```

By default, the consume, data, media, etc. directories are in `"$(brew --prefix)/var/paperless-ngx/"`.
