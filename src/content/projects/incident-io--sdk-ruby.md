---
repo: "incident-io/sdk-ruby"
name: "sdk-ruby"
description: "The official incident.io Ruby SDK"
readmeQualityOk: true
url: "https://github.com/incident-io/sdk-ruby"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
topics: ["incident", "incident-management", "incident-response", "ruby", "ruby-gem"]
stars: 24
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-09-23T16:48:29Z"
lastCommitAt: "2026-10-06T10:41:42Z"
lastReleaseAt: "2026-10-05T08:57:25Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 35
maintainers: ["github-actions[bot]", "joladev", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4df9213fbde530402aa31a5ae9926e43eb28680851ca08e98e2da5721f2351d8/incident-io/sdk-ruby"
---

# incident.io Ruby SDK

The official Ruby SDK for the [incident.io](https://incident.io)
[public API](https://api-docs.incident.io/).

It is generated automatically from our published OpenAPI schema, so it always
tracks the live API: there is a method for every endpoint, and a class for
every request and response.

## Install

```bash
gem install incident_io_api
```

Or in your `Gemfile`:

```ruby
gem "incident_io_api"
```

The library itself is `require "incident_io"`, and everything lives under the
`IncidentIo` module.

Requires Ruby 3.0 or later.

## Quickstart

Create an API key in your incident.io dashboard under **Settings → API keys**,
then:

```ruby
require "incident_io"

IncidentIo.configure do |config|
  config.access_token = ENV.fetch("INCIDENT_API_KEY")
end

result = IncidentIo::IncidentsV2Api.new.incidents_v2_list(page_size: 25)
result.incidents.each do |incident|
  puts "#{incident.reference} #{incident.name}"
end
```

Each API resource has a class, such as `IncidentsV2Api` or `AlertsV2Api`, with
one method per endpoint. Path parameters and request bodies are positional
arguments; everything optional goes in a trailing hash:

```ruby
api =…
