---
repo: "Kane610/axis"
name: "axis"
description: "Python library enabling easy communication with Axis devices and its metadatastream"
readmeQualityOk: true
url: "https://github.com/Kane610/axis"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["hacktoberfest", "hacktoberfest2021", "homeassistant-integration"]
stars: 41
forks: 15
openIssues: 22
closedIssues: 23
watchers: 5
contributors: 7
recentReleases: 0
createdAt: "2017-04-10T20:33:37Z"
lastCommitAt: "2026-07-05T20:58:50Z"
lastReleaseAt: "2017-10-09T20:39:27Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 89
undervaluedScore: 53
maintainers: ["Kane610", "dependabot[bot]", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/939cf1c87ba362051d2242f2b411888eacfc01b60488241f0b13fee3aaff3842/Kane610/axis"
fundingLinks: ["GITHUB:https://github.com/Kane610"]
---

# axis

Python project to set up a connection towards Axis Communications devices and to subscribe to specific events on the metadatastream.

## Development setup

`uv` is required for development setup:

```bash
uv python install 3.14
uv sync --python 3.14 --all-extras
```

Or run the bootstrap script, which installs `uv` if needed and provisions Python 3.14 automatically:

```bash
./setup.sh
```

Dependencies are locked via `uv.lock`. Regenerate lock data when dependency inputs change:

```bash
uv lock
```

Run checks with `uv`:

```bash
uv run ruff check .
uv run ruff format --check .
uv run mypy axis
uv run pytest
```

Initial `ty` support is configured as an opt-in check and does not replace `mypy`:

```bash
uvx ty check
```

## CLI navigation contract

The interactive CLI in `axis/cli/` follows a menu-first model.
Router runtime is the only interactive execution path.

- Canonical route graph: `main -> devices -> device_operations -> {api|events|accounts}`.
- `device_operations` routes to feature submenus using router navigation, not direct feature command execution.
- Feature nodes (`api`, `events`, `accounts`) own their local menu layout and selected-device context…
