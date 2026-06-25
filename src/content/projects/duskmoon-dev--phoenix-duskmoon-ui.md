---
repo: "duskmoon-dev/phoenix-duskmoon-ui"
name: "phoenix-duskmoon-ui"
description: "Duskmoon UI for Phoenix Framework"
url: "https://github.com/duskmoon-dev/phoenix-duskmoon-ui"
homepage: "https://duskmoon-storybook.gsmlg.org/hook"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [86]
topics: ["elixir", "phoenix", "web-components", "phoenix-livecomponents", "duskmoon"]
stars: 65
forks: 0
openIssues: 3
closedIssues: 18
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2022-04-16T12:49:33Z"
lastCommitAt: "2026-06-25T01:39:05Z"
lastReleaseAt: "2022-04-27T00:47:09Z"
status: "thriving"
tags: []
healthScore: 93
undervaluedScore: 52
maintainers: ["GSMLG-BOT", "gsmlg", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/482252754/19b08438-550c-416d-8232-3477b3edb139"
---

# PhoenixDuskmoon

Duskmoon UI component library for Phoenix LiveView applications.

**v9**: Uses `@duskmoon-dev/core` CSS design system, HTML Custom Elements (`@duskmoon-dev/elements`), and Art Custom Elements (`@duskmoon-dev/art-elements`).

Requires `tailwindcss >= 4.0`

See the [docs](https://hexdocs.pm/phoenix_duskmoon/) for more information.

## Install

Add to `mix.exs`:

```elixir
{:phoenix_duskmoon, "~> 9.0"},
```

Install frontend packages:

```bash
bun add @duskmoon-dev/core @duskmoon-dev/elements
```

Optionally, add CSS Art and Art Custom Elements support:

```bash
bun add @duskmoon-dev/css-art @duskmoon-dev/art-elements
```

### View Helpers

Add to your Phoenix view helpers (e.g. `lib/my_app_web.ex`):

```elixir
defp html_helpers do
  quote do
    # Standard UI components (buttons, cards, forms, navigation, etc.)
    use PhoenixDuskmoon.Component
    # CSS Art decorative components (snow, plasma ball, eclipse, etc.)
    use PhoenixDuskmoon.ArtComponent
  end
end
```

### CSS Setup

In your CSS entry file (e.g. `assets/css/app.css`):

```css
@import "tailwindcss";
@plugin "@duskmoon-dev/core/plugin";
@import "phoenix_duskmoon/components";
```

### JavaScript Setup…
