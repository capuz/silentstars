---
repo: "nxt-insurance/nxt_http_client"
name: "nxt_http_client"
description: "Super simple http client dsl on top of the typhoeus gem. "
readmeQualityOk: true
url: "https://github.com/nxt-insurance/nxt_http_client"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [99]
topics: ["http-client", "httparty", "rest-client", "typhoeus", "faraday", "dsl", "ruby", "ruby-on-rails"]
stars: 9
forks: 0
openIssues: 1
closedIssues: 0
watchers: 13
contributors: 11
recentReleases: 0
createdAt: "2019-07-15T20:07:59Z"
lastCommitAt: "2026-07-22T06:11:35Z"
lastReleaseAt: "2022-06-08T11:23:43Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "community_watch"]
healthScore: 74
undervaluedScore: 26
maintainers: ["depfu[bot]", "mitnal"]
openGraphImageUrl: "https://opengraph.githubassets.com/e42a9727725a5e76bb1d8599a7158c92fd59a85be1809d180dc3064c13e3966b/nxt-insurance/nxt_http_client"
---

# NxtHttpClient

Build http clients with ease. NxtHttpClient is a DSL on top of the [typhoeus](https://github.com/typhoeus/typhoeus)
gem. NxtHttpClient provides configuration functionality to set up HTTP connections on the class level, and attach
callbacks that allow you to seamlessly handle responses, as well as configure the original
`Typhoeus::Request` before making a request.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'nxt_http_client'
```

And then execute:

```sh
bundle
````

## Usage

With NxtHttpClient, you can create client classes for interacting with external services:

```ruby
class UserServiceClient < NxtHttpClient::Client
  # Set a base URL, and any other request options you need
  configure do |config|
    config.base_url = 'www.example.com'
    config.request_options.deep_merge!(
      headers: { API_KEY: '1993' },
      followlocation: true
    )
    config.json_request = true
    config.raise_response_errors = true
    config.x_request_id_proc = -> { ('a'..'z').to_a.shuffle.take(10).join }
  end

  # You may add a log handler if you wish...
  log do |info|
    Rails.logger.info(info)
  end

  # ...as well as a response handler…
