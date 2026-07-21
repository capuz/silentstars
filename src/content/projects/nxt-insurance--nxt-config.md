---
repo: "nxt-insurance/nxt_config"
name: "nxt_config"
description: "Simple configuration objects, loadable from YAML files"
readmeQualityOk: true
url: "https://github.com/nxt-insurance/nxt_config"
homepage: "https://rubygems.org/gems/nxt_config"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [99]
topics: ["ruby", "configuration", "yaml", "gem"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 12
contributors: 5
recentReleases: 0
createdAt: "2020-01-04T16:46:54Z"
lastCommitAt: "2026-07-21T06:11:13Z"
status: "watched"
tags: ["solo_builder", "legacy_hero", "community_watch"]
healthScore: 87
undervaluedScore: 41
maintainers: ["depfu[bot]", "mitnal"]
openGraphImageUrl: "https://opengraph.githubassets.com/086bbd7f313e8874911ea2c40d5717180350dbbd6f31325bc5bba91b36a322eb/nxt-insurance/nxt_config"
---

# NxtConfig

This is a very simple tool to load YAML files into strict configuration structs, accessible through global constants. This is inspired by the famous [config](https://github.com/railsconfig/config) gem. The core features are:

* Load the content of a YAML file as a configuration object
* Strict attribute accessors
* Infinite amount of YAML files/configuration objects loadable (not just one)
* Configuration objects can be registered in a given namespace (especially useful when in use in ruby gems loaded by other applications) by calling `NxtConfig::load` in the namespace where the constant lives that its config struct is assigned to.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'nxt_config'
```

And then execute:

    $ bundle install

Or install it yourself as:

    $ gem install nxt_config

## Usage

You can create a configuration object using `NxtConfig.load` from YAML files or directly from a hash. 
If you are in a rails application, you can do this in an initializer (e.g. `config/initializers/nxt_config.rb`).

```ruby
module MyRailsApp
  ExternalApiConfig = NxtConfig.load Rails.root.join('config', 'external_api.yml.erb')
end
```

Of…
