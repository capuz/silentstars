---
repo: "nxt-insurance/nxt_support"
name: "nxt_support"
description: "Support through reusable Mixins and Helpers for Ruby on Rails Applications"
readmeQualityOk: true
url: "https://github.com/nxt-insurance/nxt_support"
homepage: "https://rubygems.org/gems/nxt_support"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [99]
stars: 13
forks: 1
openIssues: 1
closedIssues: 0
watchers: 11
contributors: 15
recentReleases: 0
createdAt: "2019-09-29T15:45:31Z"
lastCommitAt: "2026-07-22T06:11:33Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 72
undervaluedScore: 30
maintainers: ["depfu[bot]", "nsommer", "mitnal"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e5c3f89b67929f503de2b08d130ec802a53a9edfc3b6d48134391a3c3950907/nxt-insurance/nxt_support"
---

# NxtSupport

This is a collection of mixins, helpers and classes that cover several aspects of a ruby on rails application, such as models, controllers and job processing. 
At [Getsafe](https://hellogetsafe.com), we run multiple Ruby on Rails apps as part of our insurance infrastructure and we found that we wrote quite some 
shared helpers that are duplicated among applications and serve a generic purpose that we could share in this gem. 
Look at it as our version of ActiveSupport (which is amazing! ❤️), dropping in the pieces we sometimes miss in the beautiful puzzle of Rails.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'nxt_support'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install nxt_support

## Usage

Here's an overview all the supporting features.

### NxtSupport::Middleware::SentryErrorID
A Rack middleware that adds a `Sentry-Error-ID` header to 5xx responses. 
The header is only added if an error was reported during the request. 
The error ID is gotten from [`sentry.error_event_id` in the Rack env](https://github.com/getsentry/sentry-ruby/pull/1849)).
You can then visit…
