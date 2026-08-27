---
repo: "openai/openai-ruby"
name: "openai-ruby"
description: "Official Ruby SDK for the OpenAI API"
readmeQualityOk: true
url: "https://github.com/openai/openai-ruby"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [99]
stars: 451
forks: 56
openIssues: 3
closedIssues: 45
watchers: 8
contributors: 2683
recentReleases: 0
createdAt: "2025-03-05T18:31:42Z"
lastCommitAt: "2026-08-27T14:30:24Z"
lastReleaseAt: "2025-05-29T16:16:37Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 36
maintainers: ["jbeckwith-oai", "apcha-oai", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4bec4883d8193a510063f1eb29fc27e3ec968b071b921343f98832c4144abe1c/openai/openai-ruby"
---

# OpenAI Ruby API library

The OpenAI Ruby library provides convenient access to the OpenAI REST API from any Ruby 3.3.0+ application. It ships with comprehensive types & docstrings in Yard, RBS, and RBI – [see below](https://github.com/openai/openai-ruby#Sorbet) for usage with Sorbet. The standard library's `net/http` is used as the HTTP transport, with connection pooling via the `connection_pool` gem.

## Documentation

Documentation for releases of this gem can be found [on RubyDoc](https://gemdocs.org/gems/openai).

The REST API documentation can be found on [platform.openai.com](https://platform.openai.com/docs).

## Installation

To use this gem, install via Bundler by adding the following to your application's `Gemfile`:

```ruby
gem "openai", "~> 0.82.0"
```

## Usage

```ruby
require "bundler/setup"
require "openai"

openai = OpenAI::Client.new(
  api_key: ENV["OPENAI_API_KEY"] # This is the default and can be omitted
)

chat_completion = openai.chat.completions.create(messages: [{role: "user", content: "Say this is a test"}], model: "gpt-5.2")

puts(chat_completion)
```

### Streaming

We provide support for streaming responses using Server-Sent Events (SSE).

```ruby…
