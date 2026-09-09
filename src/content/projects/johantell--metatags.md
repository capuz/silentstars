---
repo: "johantell/metatags"
name: "metatags"
description: "Metatags for elixir"
readmeQualityOk: true
url: "https://github.com/johantell/metatags"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [100]
stars: 33
forks: 8
openIssues: 0
closedIssues: 9
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2017-04-01T11:01:02Z"
lastCommitAt: "2026-09-09T08:18:39Z"
lastReleaseAt: "2025-09-03T12:26:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 46
maintainers: ["dependabot[bot]", "johantell"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2105b32bb57f3324524ce6a15ec9f4cbf9b8edc1c8ca099118b6f386dcdeb8e/johantell/metatags"
---

# Metatags

Metatags provides an easy and flexible way to set both default and page specific metatags that are
used for SEO, Facebook, Twitter etc.

Documentation is available at [https://hexdocs.pm/metatags](https://hexdocs.pm/metatags).

## Installation

Add `metatags` to your list of dependencies in `mix.exs`:

```elixir
def deps do
  [{:metatags, "~> 0.6.1"}]
end
```

### For LiveView

Add the `on_mount` option to initialize and set up a hook to automatically set
the canonical url.

```elixir
@metatags_config = Application.compile_env(:my_app, Metatags)

live_session :default, on_mount: [{Metatags.LiveView, {:init, metatags_config}}]
```

In your live views `mount/3`/`handle_params/3`:

```elixir
def handle_params(_params, _url, socket) do
  socket =
    socket
    |> Metatags.put("author", "Johan Tell")
    |> Metatags.put("description", "My perfect description")

  {:noreply, socket}
end

```

### For Plug

Add the plug to your router and configure the defaults
(You can use `Application.get_env/3` if you'd like to extract it into the
configuration file).

```elixir
defmodule MyRouter do
  use Plug.Conn

  plug Metatags.Plug,
    sitename: "My_app",
    title_separator: "-",…
