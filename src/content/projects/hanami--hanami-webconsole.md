---
repo: "hanami/hanami-webconsole"
name: "hanami-webconsole"
description: "Hanami web console for development"
readmeQualityOk: true
url: "https://github.com/hanami/hanami-webconsole"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [78]
topics: ["hanami", "web", "console", "development", "development-tools"]
stars: 7
forks: 3
openIssues: 2
closedIssues: 2
watchers: 12
contributors: 19
recentReleases: 2
createdAt: "2018-01-26T15:40:10Z"
lastCommitAt: "2026-08-16T04:09:26Z"
lastReleaseAt: "2026-07-01T01:14:23Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "funded"]
healthScore: 79
undervaluedScore: 41
maintainers: ["github-actions[bot]", "timriley", "afomera"]
openGraphImageUrl: "https://opengraph.githubassets.com/15e59c355d53f4402ca650de9d09a31d395303f6540197337d5eba2dc9a70d17/hanami/hanami-webconsole"
fundingLinks: ["GITHUB:https://github.com/hanami"]
---

[actions]: https://github.com/hanami/hanami-webconsole/actions
[chat]: https://discord.gg/naQApPAsZB
[forum]: https://discourse.hanamirb.org
[rubygem]: https://rubygems.org/gems/hanami-webconsole

# Hanami Webconsole [][rubygem] [][actions]

## Installation

Add this line to your Hanami project's `Gemfile`:

```ruby
group :development do
  gem "hanami-webconsole"
end
```

And then execute:

```shell
$ bundle install
```

**NOTE:** You need a version of `hanami` `2.0.0+`.

## Usage

When an exception is raised during your local development in-browser, you'll see the web console.

### Code reloading

This gem in **not compatible** with `hanami` code reloading.

In order to use this gem, you have two alternatives:

  1. Start the server without code reloading: `bundle exec hanami server --no-code-reloading`
  1. Use [`hanami-reloader`](https://rubygems.org/gems/hanami-reloader) gem and start the server as usual: `bundle exec hanami server`

## Development

After checking out the repo, run `bin/setup` to install dependencies.
You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake…
