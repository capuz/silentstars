---
repo: "ruby-grape/grape-on-goliath"
name: "grape-on-goliath"
description: "A demo of Grape mounted behind a Goliath web server."
readmeQualityOk: true
url: "https://github.com/ruby-grape/grape-on-goliath"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [99]
stars: 46
forks: 11
openIssues: 0
closedIssues: 2
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2013-10-20T13:16:59Z"
lastCommitAt: "2026-10-27T12:39:35Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 100
undervaluedScore: 32
maintainers: ["dblock"]
openGraphImageUrl: "https://opengraph.githubassets.com/fbc967283f5afe4bc23881c9d7cad4d7cea3cb8cf1cd63309200567891514728/ruby-grape/grape-on-goliath"
---

# Grape on Goliath

A [Grape](https://github.com/ruby-grape/grape) API mounted on [Goliath](https://github.com/postrank-labs/goliath), a non-blocking Ruby web server framework.

* [ping](https://github.com/ruby-grape/grape-on-goliath/blob/HEAD/api/ping.rb): a hello world example that returns a JSON document

Tests
-----

GitHub Actions tests Goliath 0.9 on Ruby 2.7 and the latest Goliath 1.x on Ruby 2.7, 3.3, 3.4, and 4.0. Goliath's `async-rack` dependency requires Rack 1.x, so the example explicitly keeps Rack 1.6 and the compatible Grape 1.8 line rather than resolving an incompatible modern Rack/Grape combination. Ruby 2.7 jobs use Ubuntu 22.04 and JSON 2.x for compatibility with the last MultiJson releases supporting that Ruby. These legacy dependencies are retained for integration testing, not as a recommendation for new applications.

Run `bundle exec rake spec`. The Goliath 0.9 job also selects HTTP parser 0.5.3 because newer parsers remove APIs used by that server, and a compatible EM HTTP client. On the legacy stack, use `GOLIATH_VERSION='~> 0.9.0' HTTP_PARSER_VERSION='~> 0.5.3' HTTP_CLIENT_VERSION='~> 1.0.3' bundle update` and set the same variables when running tests.…
