---
repo: "rubocop/rubocop-rspec_rails"
name: "rubocop-rspec_rails"
description: "Code style checking for Rails-related RSpec files."
readmeQualityOk: true
url: "https://github.com/rubocop/rubocop-rspec_rails"
homepage: "https://docs.rubocop.org/rubocop-rspec_rails"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
topics: ["lint", "rails", "rspec", "rspec-rails", "rubocop", "ruby", "static-analysis", "testing"]
stars: 43
forks: 14
openIssues: 13
closedIssues: 16
watchers: 1
contributors: 125
recentReleases: 0
createdAt: "2024-03-05T13:40:02Z"
lastCommitAt: "2026-09-27T09:28:11Z"
lastReleaseAt: "2025-11-12T12:32:48Z"
status: "thriving"
tags: ["needs_contributors", "funded"]
healthScore: 86
undervaluedScore: 56
maintainers: ["ydah", "dependabot[bot]", "bquorning"]
openGraphImageUrl: "https://opengraph.githubassets.com/e8fe58d15499e752e9b2976fffb63dda7f0f8be218b28d2701371c44c9ec7180/rubocop/rubocop-rspec_rails"
fundingLinks: ["GITHUB:https://github.com/bbatsov", "PATREON:https://patreon.com/bbatsov", "OPEN_COLLECTIVE:https://opencollective.com/rubocop", "TIDELIFT:https://tidelift.com/funding/github/rubygems/rubocop", "CUSTOM:https://www.paypal.me/bbatsov"]
---

# RuboCop RSpec Rails

[RSpec Rails](https://rspec.info/)-specific analysis for your projects, as an extension to
[RuboCop](https://github.com/rubocop/rubocop).

## Installation

**This gem implicitly depends on the `rubocop-rspec` gem, so you should install it first.**
Just install the `rubocop-rspec` and `rubocop-rspec_rails` gem

```bash
gem install rubocop-rspec rubocop-rspec_rails
```

or if you use bundler put this in your `Gemfile`

```ruby
gem 'rubocop-rspec', require: false
gem 'rubocop-rspec_rails', require: false
```

## Usage

You need to tell RuboCop to load the RSpec Rails extension. There are three
ways to do this:

### RuboCop configuration file

Put this into your `.rubocop.yml`.

```yaml
plugins: rubocop-rspec_rails
```

Alternatively, use the following array notation when specifying multiple extensions.

```yaml
plugins:
  - rubocop-rspec
  - rubocop-rspec_rails
```

Now you can run `rubocop` and it will automatically load the RuboCop RSpec Rails
cops together with the standard cops.

> [!NOTE]
> The plugin system is supported in RuboCop 1.72+. In earlier versions, use `require` instead of `plugins`.

### Command line

```bash
rubocop --plugin…
