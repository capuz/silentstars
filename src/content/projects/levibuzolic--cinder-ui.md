---
repo: "levibuzolic/cinder_ui"
name: "cinder_ui"
description: "LiveView component library for Elixir/Phoenix based on shadcn UI"
url: "https://github.com/levibuzolic/cinder_ui"
homepage: "https://levibuzolic.github.io/cinder_ui/"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [79]
topics: ["elixir", "elixir-lang", "elixir-phoenix", "phoenix-framework", "phoenix-liveview", "shadcn", "shadcn-ui", "ui-components", "phoenix"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-02-22T06:48:06Z"
lastCommitAt: "2026-07-03T12:39:40Z"
lastReleaseAt: "2026-07-03T00:07:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 55
maintainers: ["levibuzolic", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7661764dcf3d813c0d87eee424f59aed40a2795d919dc1fadd0ec7d1465c9795/levibuzolic/cinder_ui"
---

# Cinder UI

[shadcn/ui](https://ui.shadcn.com/docs) components for Phoenix + LiveView.

Cinder UI is a Hex-oriented component library that ports [shadcn/ui](https://ui.shadcn.com/docs) design patterns, classes, tokens, and compositional structure into Elixir function components.

## Installation

### Prerequisites

You need an existing Phoenix 1.7+ project. If you don't have one yet:

```bash
mix phx.new my_app
cd my_app
```

### 1. Set up Tailwind CSS

Cinder UI requires Tailwind CSS v4+. New Phoenix projects generated with `mix phx.new` include Tailwind by default — if yours already has it, skip to [step 2](#2-add-cinder-ui).

Add the Tailwind plugin to your dependencies in `mix.exs`:

```elixir
defp deps do
  [
    {:tailwind, "~> 0.3", runtime: Mix.env() == :dev},
    # ...
  ]
end
```

Configure Tailwind in `config/config.exs`:

```elixir
config :tailwind,
  version: "4.1.12",
  my_app: [
    args: ~w(
      --input=assets/css/app.css
      --output=priv/static/assets/app.css
    ),
    cd: Path.expand("..", __DIR__)
  ]
```

Add the Tailwind watcher in `config/dev.exs`:

```elixir
config :my_app, MyAppWeb.Endpoint,
  watchers: [
    tailwind: {Tailwind, :install_and_run,…
