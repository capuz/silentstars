---
repo: "alphagov/rubocop-govuk"
name: "rubocop-govuk"
description: "RuboCop style rules for GOV.UK's Ruby projects"
readmeQualityOk: true
url: "https://github.com/alphagov/rubocop-govuk"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
topics: ["govuk"]
stars: 11
forks: 10
openIssues: 1
closedIssues: 10
watchers: 39
contributors: 77
recentReleases: 0
createdAt: "2019-10-31T14:34:52Z"
lastCommitAt: "2026-10-21T08:49:22Z"
status: "watched"
tags: ["legacy_hero", "community_watch", "fork_magnet"]
healthScore: 95
undervaluedScore: 63
maintainers: ["dependabot[bot]", "govuk-ci", "jaskaransarkaria"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0c9ac4f60c0ff3e224f3f431d69898a292672c2f836e0cf7f2a841d4e46cd8d/alphagov/rubocop-govuk"
---

# RuboCop GOV.UK

Defines the linting rules for GDS Ruby applications, primarily those associated with GOV.UK.

GOV.UK has used a styleguide for many years, starting with rules in written form, which we then [automated with RuboCop](https://github.com/alphagov/styleguides/commit/cb589cdc4ba17f9c341f4db75900e554dd042672#diff-99f257b41e6471357be7e37c3a41d79045d11f7f0ae1000d6f7fc63b502273e7) and later [moved into this repo](https://github.com/alphagov/govuk-rfcs/blob/main/rfc-100-linting.md#proposal). A styleguide is a valuable asset: it keeps our code consistent and prevents stylistic squabbles. Everyone on GOV.UK is encouraged to use it in their Ruby projects and [contribute](https://github.com/alphagov/rubocop-govuk/blob/HEAD/CONTRIBUTING.md) to dependency upgrades and new releases, keeping pace with the rest of the Ruby community.

## Installation

Add `rubocop-govuk` to your Gemfile and then run `bundle install`:

```ruby
# Gemfile
gem 'rubocop-govuk', require: false
```

Then inherit the default rules by adding the following in your project:

```yaml
# .rubocop.yml
inherit_gem:
  rubocop-govuk:
    - config/default.yml

inherit_mode:
  merge:
    - Exclude

#…
