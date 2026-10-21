---
repo: "sanger/traction-service"
name: "traction-service"
description: "Ruby on Rails exposing a RESTful API for a Long Read LIMS"
readmeQualityOk: true
url: "https://github.com/sanger/traction-service"
homepage: "https://traction.psd.sanger.ac.uk"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
stars: 5
forks: 5
openIssues: 14
closedIssues: 301
watchers: 7
contributors: 22
recentReleases: 0
createdAt: "2018-11-12T11:24:04Z"
lastCommitAt: "2026-10-21T21:15:06Z"
lastReleaseAt: "2019-02-27T15:10:35Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 89
maintainers: ["depfu[bot]", "BenTopping", "kshriniwas92"]
openGraphImageUrl: "https://opengraph.githubassets.com/ca861f9082a8ec807aae413768398123caa3c5d07873126d23a058f18d694dff/sanger/traction-service"
---

# Traction service

Rails app which exposes a RESTful API for a Long Read LIMS

- Add details aboout traction ui
- importing samples from external sources currently:
  - Sequencescape
  - Samples extraction
- creating libraries
- creating pools of libraries with support for multiplexing
- creating sequencing runs
- printing sample sheets
- supports the following technologies:
  - Pacbio
  - ONT (In progress)

## Requirements

1. Ruby (check `.ruby-version` for the version) and ruby version manager
1. Bundler `gem install bundler`
1. Graphviz (for mac OS `brew install graphviz`)
1. OpenSSL
1. MySQL `brew install mysql@8.4`

## Installation

1. Run `bin/setup`

This will:

- Run bundle install
- Create copies of any .example files
- Create the database
- Seed basic data such as library types and tags.

Note:

- If the mysql-client cannot be found (possibly due to the homebrew installation path not being the default), the `mysql2` gem will fail to install with the exception:

  ```text
  ...
  /Users/<user>/.rbenv/versions/3.1.2/lib/ruby/3.1.0/mkmf.rb:1086:in `block in find_library': undefined method `split' for nil:NilClass (NoMethodError)
  ...
  ```

- The fix is to add mysql@8.4…
