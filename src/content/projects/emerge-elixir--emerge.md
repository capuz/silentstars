---
repo: "emerge-elixir/emerge"
name: "emerge"
description: "Elxir UI library for dirct GPU rendering, backed by rust and skia"
readmeQualityOk: true
url: "https://github.com/emerge-elixir/emerge"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
stars: 42
forks: 4
openIssues: 3
closedIssues: 6
watchers: 1
contributors: 5
recentReleases: 4
createdAt: "2026-01-27T13:20:42Z"
lastCommitAt: "2026-10-21T21:15:00Z"
lastReleaseAt: "2026-09-29T06:55:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 48
maintainers: ["Damirados", "lawik"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0dc11a873bd73d6382995daac5504469fcc3fbdbbbe4d2faad33e5b9fcb2994/emerge-elixir/emerge"
---

# Emerge

Write native GUI directly from Elixir using a declarative API.

## Installation

Emerge **0.5.0** introduces breaking configuration and raw-input changes. See the
[0.5 migration guide](https://github.com/emerge-elixir/emerge/blob/HEAD/guides/migrations/0.5.md) when upgrading from 0.4.

Add `:emerge` to your dependencies:

```elixir
defp deps do
  [
    {:emerge, "~> 0.5.0"}
  ]
end
```

Then run:

```bash
mix deps.get
```

## Quick example

```elixir
defmodule MyApp.View.Counter do
  use Emerge
  use Solve.Lookup

  @impl Viewport
  def mount(opts) do
    output = %Emerge.Config.Window{title: Keyword.get(opts, :title, "Counter")}
    {:ok, %Emerge.Config{output: output}}
  end

  @impl Viewport
  def render() do
    counter = solve(MyApp.State, :counter)

    row(
      [
        Background.color(color(:slate, 800)),
        Font.color(color(:white)),
        spacing(12),
        padding(12)
      ],
      [
        my_button([Event.on_press(event(counter, :increment))], text("+")),
        el([padding(10)], text("Count: #{counter.count}")),
        my_button([Event.on_press(event(counter, :decrement))], text("-"))
      ]
    )
  end

  # Reusable "component" is just…
