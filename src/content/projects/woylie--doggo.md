---
repo: "woylie/doggo"
name: "doggo"
description: "Headless UI components for Phoenix"
readmeQualityOk: true
url: "https://github.com/woylie/doggo"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [99]
topics: ["phoenix", "phoenix-liveview", "component-library", "headless-ui"]
stars: 398
forks: 10
openIssues: 13
closedIssues: 93
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2022-09-27T14:06:59Z"
lastCommitAt: "2026-07-20T06:34:05Z"
lastReleaseAt: "2023-12-28T04:24:58Z"
status: "thriving"
tags: ["funded"]
healthScore: 94
undervaluedScore: 36
maintainers: ["woylie", "shunjilin", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/de4880b8532157c7eb9c0be086b18fcbea7830dcdce4f2542b02c617e81aa386/woylie/doggo"
fundingLinks: ["GITHUB:https://github.com/woylie", "LIBERAPAY:https://liberapay.com/woylie", "KO_FI:https://ko-fi.com/woylie"]
discussionCount: 0
---

# Doggo

Headless UI component collection for Phoenix, focused on semantics and
accessibility.

For a full list of available components, please refer to the
[documentation](https://hexdocs.pm/doggo/Doggo.html).

## Installation

The package can be installed by adding `doggo` to your list of dependencies in
`mix.exs`:

```elixir
def deps do
  [
    {:doggo, "~> 0.14.6"}
  ]
end
```

## Usage

Use `Doggo.Components` in your core components module or in a separate module.
`Doggo.Components` defines macros that generate Phoenix components.

```elixir
defmodule MyAppWeb.CoreComponents do
  use Doggo.Components
  use Phoenix.Component

  build_alert()
  build_alert_dialog()

  build_button(
    modifiers: [
      size: [values: ["normal", "small"], default: "normal"]
    ]
  )
end
```

Each modifier results in an additional attribute that is translated into a
data attribute. You can use the button defined above like this:

```html
<.button size="small">Edit</.button>
```

The resulting HTML code will look similar to:

```html
<button data-size="small">Edit</button>
```

If no `type` option is set, a `string` attribute is added, but you can use any
attribute type, as long as the value…
