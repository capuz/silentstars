---
repo: "gregschmit/rails-rest-framework"
name: "rails-rest-framework"
description: "A framework for DRY RESTful APIs in Ruby on Rails."
readmeQualityOk: true
url: "https://github.com/gregschmit/rails-rest-framework"
homepage: "https://rails-rest-framework.com"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [88]
topics: ["rails", "api", "rest", "restful-api"]
stars: 59
forks: 3
openIssues: 3
closedIssues: 14
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2020-09-16T03:11:24Z"
lastCommitAt: "2026-07-31T06:24:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 87
undervaluedScore: 45
maintainers: ["gregschmit"]
openGraphImageUrl: "https://opengraph.githubassets.com/58fb982c8d2f43b925345237ccba19138ffeb2be22e1971bccaefd91b8e653e4/gregschmit/rails-rest-framework"
fundingLinks: ["GITHUB:https://github.com/gregschmit", "CUSTOM:https://www.paypal.me/schmitgreg"]
---

# Rails REST Framework

A framework for DRY RESTful APIs in Ruby on Rails.

**The Problem**: Building controllers for APIs usually involves writing a lot of redundant CRUD
logic, and routing them can be obnoxious. Building and maintaining features like ordering,
filtering, and pagination can be tedious.

**The Solution**: This framework implements browsable API responses, CRUD actions for your models,
and features like ordering/filtering/pagination, so you can focus on your application logic.

Website/Guide: [rails-rest-framework.com](https://rails-rest-framework.com)

Demo API: [rails-rest-framework.com/api/demo](https://rails-rest-framework.com/api/demo)

Source: [github.com/gregschmit/rails-rest-framework](https://github.com/gregschmit/rails-rest-framework)

YARD Docs: [rubydoc.info/gems/rest_framework](https://rubydoc.info/gems/rest_framework)

## Installation

Add this line to your application's Gemfile:

```ruby
gem "rest_framework"
```

And then run:

```shell
bundle install
```

## Quick Usage Tutorial

To add REST framework features to a controller, include the `Controller` module:

```ruby
class ApiController < ApplicationController
  include RESTFramework::Controller…
