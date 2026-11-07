---
repo: "sue445/rubicure"
name: "rubicure"
description: "All about Japanese battle heroine \"Pretty Cure (Precure)\""
readmeQualityOk: true
url: "https://github.com/sue445/rubicure"
homepage: "https://en.wikipedia.org/wiki/Pretty_Cure"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
topics: ["precure", "gem"]
stars: 139
forks: 17
openIssues: 1
closedIssues: 39
watchers: 12
contributors: 15
recentReleases: 0
createdAt: "2013-12-15T04:37:34Z"
lastCommitAt: "2026-11-07T13:54:13Z"
lastReleaseAt: "2025-01-16T13:50:17Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 93
undervaluedScore: 44
maintainers: ["sue445", "dependabot[bot]", "sue445-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ea312980baa9c911dcbff32bd830c9741aa20f189f164e95d9f93e0d7a7d17e1/sue445/rubicure"
---

# Rubicure (Ruby + Precure)

All about Japanese battle heroine "Pretty Cure (Precure)".

Inspired by [Acme::PrettyCure](http://perl-users.jp/articles/advent-calendar/2010/acme/6) and [pycure](https://github.com/drillbits/pycure).

## Example

[examples/maho_girls.rb](https://github.com/sue445/rubicure/blob/HEAD/examples/maho_girls.rb)

## Supporting
see followings

* [config/girls/](https://github.com/sue445/rubicure/blob/HEAD/config/girls/)

## Requirements

* Ruby
  * see `spec.required_ruby_version` in [rubicure.gemspec](https://github.com/sue445/rubicure/blob/HEAD/rubicure.gemspec)

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'rubicure'

# for ruby 2.2
gem 'backport_dig'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install rubicure

## Usage

```ruby
>> require "rubicure"
```

### Select own precure series

```ruby
>> Precure.title
=> "ふたりはプリキュア"

>> Precure.unmarked.title
=> "ふたりはプリキュア"

>> Precure.max_heart.title
=> "ふたりはプリキュア Max Heart"

>> Precure.splash_star.title
=> "ふたりはプリキュア Splash☆Star"

>> Precure.yes.title
=> "Yes！ プリキュア5"

>> Precure.yes_gogo.title
=> "Yes！ プリキュア5 Go Go！"

>> Precure.fresh.title
=>…
