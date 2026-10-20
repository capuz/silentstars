---
repo: "alphagov/govuk_app_config"
name: "govuk_app_config"
description: "Gem to configure GOV.UK Ruby applications"
readmeQualityOk: true
url: "https://github.com/alphagov/govuk_app_config"
homepage: "https://rubygems.org/gems/govuk_app_config"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
topics: ["govuk"]
stars: 11
forks: 4
openIssues: 2
closedIssues: 5
watchers: 55
contributors: 76
recentReleases: 0
createdAt: "2017-08-17T13:45:14Z"
lastCommitAt: "2026-10-20T08:48:50Z"
status: "watched"
tags: ["legacy_hero", "community_watch"]
healthScore: 88
undervaluedScore: 53
maintainers: ["dependabot[bot]", "jfharden", "govuk-ci"]
openGraphImageUrl: "https://opengraph.githubassets.com/86bebfaedf9a3292bcdf5a275d2a3f47c1299a9b0dbebe2d86476c9762061c0c/alphagov/govuk_app_config"
---

# GOV.UK Config

Adds the basics of a GOV.UK application:

- Puma as a web server
- Error reporting with Sentry
- Prometheus monitoring for EKS
- Statsd client for reporting stats (deprecated; use Prometheus instead)
- Rails logging
- Content Security Policy generation for frontend apps
- Sets the time zone to London

## Installation

Add this line to your application's Gemfile:

```ruby
gem "govuk_app_config"
```

Then run `bundle`.

## Puma

### Configuration

Create a file `config/puma.rb` in the app, containing:

```rb
require "govuk_app_config/govuk_puma"
GovukPuma.configure_rails(self)
```

### Usage

To run an app locally with Puma, run: `bundle exec puma` or `bundle exec rails s`.

## Error reporting

### Automatic error reporting

If you include `govuk_app_config` in your `Gemfile` and set the following environment variables, your application will automatically log errors to Sentry.

- `SENTRY_DSN` - the [Data Source Name (DSN)][dsn] for Sentry
- `SENTRY_CURRENT_ENV` - the `environment` tag to pass to Sentry, for example `production`
- `GOVUK_STATSD_PREFIX` - a Statsd prefix like `govuk.apps.application-name.hostname` (deprecated; statsd functionality will be removed in a…
