---
repo: "activeadmin-plugins/active_admin_date_range_preset"
name: "active_admin_date_range_preset"
description: "Preset links for ActiveAdmin date_range inputs"
readmeQualityOk: true
url: "https://github.com/activeadmin-plugins/active_admin_date_range_preset"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
stars: 11
forks: 5
openIssues: 0
closedIssues: 1
watchers: 4
contributors: 8
recentReleases: 0
createdAt: "2015-06-04T13:57:28Z"
lastCommitAt: "2026-10-01T10:24:20Z"
lastReleaseAt: "2017-08-19T13:55:22Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 94
undervaluedScore: 45
maintainers: ["Fivell"]
openGraphImageUrl: "https://opengraph.githubassets.com/08743dd54d2ff5873b862a556c29b011a992d9409beb689e4ca9b9ad88daa05e/activeadmin-plugins/active_admin_date_range_preset"
---

# active_admin_date_range_preset

Preset links for ActiveAdmin date_range inputs in sidebar filters in forms

This is how it looks like

## Compatibility

Active Admin 3.2 or newer, in the 3.x series. Rails 7.1 or newer, Ruby 3.2 or
newer. CI covers Active Admin 3.2 and 3.5 against the Rails versions in the
matrix.

The Rails and Ruby floors are declared explicitly because Active Admin 3.2
still allows `railties >= 6.1` and Ruby `>= 2.6`, both long past end of life
and neither tested here.

Active Admin 4 is not supported. It drops `jquery-rails` and the
`app/assets/javascripts` tree, and this gem is a jQuery plugin shipped through
Sprockets, so nothing here loads there. Supporting it means a rewrite rather
than a port, and that is tracked separately.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'active_admin_date_range_preset'
```

And then execute:

    $ bundle install

Or install it yourself as:

    $ gem install active_admin_date_range_preset

##### Using assets via Sprockets

 JS asset
 ```//= require active_admin_date_range_preset```

 CSS
 ```@import "active_admin_date_range_preset";```

##### Using assets via Webpacker (or any other assets…
