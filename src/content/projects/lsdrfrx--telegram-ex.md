---
repo: "lsdrfrx/telegram_ex"
name: "telegram_ex"
description: "Elixir library for building Telegram bots with macro-based API"
readmeQualityOk: true
url: "https://github.com/lsdrfrx/telegram_ex"
homepage: "https://hex.pm/packages/telegram_ex"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [100]
topics: ["bot", "telegram", "telegrambot", "telegrambotapi", "bot-development", "elixir"]
stars: 48
forks: 8
openIssues: 2
closedIssues: 12
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2026-03-06T17:37:29Z"
lastCommitAt: "2026-07-05T20:55:01Z"
lastReleaseAt: "2026-05-18T18:03:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 44
maintainers: ["lsdrfrx", "alexeev-prog", "SAY-5"]
openGraphImageUrl: "https://opengraph.githubassets.com/d78ae76a7de5d46dd280b031020f24253bd1410c2a640c6d5568cc6337af864f/lsdrfrx/telegram_ex"
---

# TelegramEx

Elixir library for building Telegram bots with a macro-based API.

## Installation

```elixir
def deps do
  [
    {:telegram_ex, "~> 1.2.0"}
  ]
end
```

## Quickstart

Configure your bot token in `config/runtime.exs`:

```elixir
import Config

config :telegram_ex,
  my_bot: System.fetch_env!("MY_BOT_TELEGRAM_TOKEN")
```

Define a minimal bot:

```elixir
defmodule MyBot do
  use TelegramEx, name: :my_bot

  def handle_message(%{text: "/start", chat: chat}, ctx) do
    ctx
    |> Message.text("Hello from TelegramEx.")
    |> Message.send(chat["id"])
  end

  def handle_callback(_callback, _ctx), do: :ok
end
```

Start it under your supervision tree:

```elixir
children = [MyBot]
Supervisor.start_link(children, strategy: :one_for_one)
```

## Guides

- [Getting Started](https://github.com/lsdrfrx/telegram_ex/blob/HEAD/guides/getting-started.md)
- [Development Model](https://github.com/lsdrfrx/telegram_ex/blob/HEAD/guides/development.md)
- [Effects](https://github.com/lsdrfrx/telegram_ex/blob/HEAD/guides/effects.md)
- [Commands](https://github.com/lsdrfrx/telegram_ex/blob/HEAD/guides/commands.md)
- [Messages and…
