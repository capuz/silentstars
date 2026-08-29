---
repo: "khasinski/ruby_llm-responses_api"
name: "ruby_llm-responses_api"
description: "Responses API provider for RubyLLM"
readmeQualityOk: true
url: "https://github.com/khasinski/ruby_llm-responses_api"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
stars: 17
forks: 8
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-01-03T18:44:48Z"
lastCommitAt: "2026-08-29T10:21:30Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 29
maintainers: ["khasinski", "lucas-domeij", "molily"]
openGraphImageUrl: "https://opengraph.githubassets.com/ed4e95e5b17c2fa16590d0bcb0c0398a80b336d5d9d8524fe9c8e815a426ab1a/khasinski/ruby_llm-responses_api"
---

# RubyLLM Responses API

A [RubyLLM](https://github.com/crmne/ruby_llm) provider for OpenAI's [Responses API](https://platform.openai.com/docs/api-reference/responses).

## Installation

```ruby
gem 'ruby_llm-responses_api'
```

## Quick Start

```ruby
require 'ruby_llm-responses_api'

RubyLLM.configure do |config|
  config.openai_api_key = ENV['OPENAI_API_KEY']
end

chat = RubyLLM.chat(model: 'gpt-5.5', provider: :openai_responses)
response = chat.ask("Hello!")
puts response.content
```

All standard RubyLLM features work as expected (streaming, tools, vision, structured output).

## Stateful Conversations

Conversations automatically chain via `previous_response_id`:

```ruby
chat = RubyLLM.chat(model: 'gpt-5.5', provider: :openai_responses)
chat.ask("My name is Alice.")
chat.ask("What's my name?")  # => "Your name is Alice."
```

## Rails Persistence

For conversations that survive app restarts, add a migration:

```ruby
class AddResponseIdToMessages < ActiveRecord::Migration[7.0]
  def change
    add_column :messages, :response_id, :string
  end
end
```

Then use normally:

```ruby
# Day 1
chat = Chat.create!(model_id: 'gpt-5.5', provider: :openai_responses)
chat.ask("My name…
