---
repo: "gshaw/sarduty"
name: "sarduty"
description: "Helpful tools for search and rescue managers."
readmeQualityOk: true
url: "https://github.com/gshaw/sarduty"
homepage: "https://sarduty.com"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [92]
stars: 6
forks: 0
openIssues: 35
closedIssues: 213
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2023-12-03T01:10:20Z"
lastCommitAt: "2026-11-03T19:05:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 97
undervaluedScore: 77
maintainers: ["gshaw"]
openGraphImageUrl: "https://opengraph.githubassets.com/e097ebc97b32b1f8fc5160c61d189c43c42b6043f55c2621d654224a38b3f618/gshaw/sarduty"
fundingLinks: ["GITHUB:https://github.com/gshaw", "BUY_ME_A_COFFEE:https://buymeacoffee.com/gshaw"]
---

# SAR Duty

Helpful tools for search and rescue managers, on top of D4H.

## Setup

```sh
brew install mise flyctl puma-dev
puma-dev -install
cp .mise.example.toml .mise.local.toml
# Add MAPBOX_ACCESS_TOKEN; the rest are optional in dev
mise trust
mise install
mix setup
git config core.hooksPath bin/git-hooks
echo 4025 > ~/.puma-dev/sarduty
```

Then `mise run server` and open <https://sarduty.test>.

## Tasks

- `mise run server` starts the dev server; `iex -S mix phx.server` starts it inside IEx.
- `mise run check` formats, compiles, lints, and spell-checks.
- `mise run test` runs the tests; `mise run ci` runs checks and tests. Run it before
  pushing.
- `git push` first runs CI's static checks, all but the compile, through
  `bin/git-hooks/pre-push`, once `core.hooksPath` is set as in Setup.
  `git push --no-verify` skips them.
- `fly deploy` deploys `main` — see [docs/deployment.md](https://github.com/gshaw/sarduty/blob/HEAD/docs/deployment.md).

How the app is built: [docs/README.md](https://github.com/gshaw/sarduty/blob/HEAD/docs/README.md). Working in this repo as an agent:
[AGENTS.md](https://github.com/gshaw/sarduty/blob/HEAD/AGENTS.md).

## Troubleshooting

Restarting…
