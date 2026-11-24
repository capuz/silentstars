---
repo: "mongoid/mongoid-slug"
name: "mongoid-slug"
description: "Generates a URL slug/permalink based on fields in a Mongoid-based model."
readmeQualityOk: true
url: "https://github.com/mongoid/mongoid-slug"
homepage: "https://github.com/mongoid/mongoid-slug"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
stars: 485
forks: 165
openIssues: 7
closedIssues: 137
watchers: 16
contributors: 51
recentReleases: 0
createdAt: "2010-06-22T09:39:11Z"
lastCommitAt: "2026-11-24T14:10:43Z"
lastReleaseAt: "2021-08-11T17:45:24Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 78
undervaluedScore: 27
maintainers: ["dblock", "aurelien-reeves-scalingo"]
openGraphImageUrl: "https://opengraph.githubassets.com/2eb4bd425d615cbe3d3ab178c8f2f341e9f004ebd2402c80f46317f57ad13611/mongoid/mongoid-slug"
---

# Mongoid Slug

Mongoid Slug generates a URL slug or permalink based on one or more fields in a Mongoid model. It sits idly on top of [stringex](https://github.com/rsl/stringex), supporting non-Latin characters.

CI collects SimpleCov coverage on Ruby 3.4 with Mongoid 9 and MongoDB 8.0 and submits one report to Coveralls using GitHub's workflow token. To generate a local report, run `COVERAGE=true MONGOID_VERSION=9 bundle install` followed by `COVERAGE=true MONGOID_VERSION=9 bundle exec rake spec`. Reports are written to `coverage/`.

## Version Support

Mongoid Slug 7.x requires at least Mongoid 7.0.0 and Ruby 2.7.0. For earlier Mongoid and Ruby version support, please use an earlier version of Mongoid Slug.

Mongoid Slug is compatible with all MongoDB versions which Mongoid supports, however, please see "Slug Max Length" section below for MongoDB 4.0 and earlier.

## Installation

Add to your Gemfile:

```ruby
gem 'mongoid-slug'
```

## Usage

### Set Up a Slug

```ruby
class Book
  include Mongoid::Document
  include Mongoid::Slug

  field :title
  slug :title
end
```
