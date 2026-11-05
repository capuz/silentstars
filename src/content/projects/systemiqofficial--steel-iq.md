---
repo: "systemiqofficial/steel-iq"
name: "steel-iq"
description: "A comprehensive simulation system for modeling the global steel industry."
readmeQualityOk: true
url: "https://github.com/systemiqofficial/steel-iq"
language: "Python"
languages: ["Python"]
languagePcts: [87]
stars: 17
forks: 3
openIssues: 16
closedIssues: 46
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2025-10-23T07:20:59Z"
lastCommitAt: "2026-11-05T11:24:20Z"
lastReleaseAt: "2026-05-07T09:02:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 64
maintainers: ["nikitajes-systems", "ioanaSystemiq"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d40f04c607ec2e929c26598b08bf25228a337187b23de93aef3ccfb2ce9d919/systemiqofficial/steel-iq"
---

# Steel Model

A comprehensive simulation system for modeling the global steel industry.

## Documentation

- **[Public site](https://systemiqofficial.github.io/steel-iq/)** – Full documentation

## Development Quick Reference

Install [uv](https://docs.astral.sh/uv/getting-started/installation/) and [just](https://github.com/casey/just), then bootstrap dependencies:

```bash
uv sync
uvx pre-commit install
```

### Core Checks

- `just test` – Run the full pytest suite
- `just typecheck` – Run mypy over `src/`
- `just lint` – Ruff lint

### Documentation

- `just docs` – Incremental Sphinx build
- `just docs-check` – Clean public build (used in CI)
- `just docs-serve` / `just docs-serve-headless` – Live preview
- `just docs-clean-build` – Force a full rebuild
- `just docs-clean` – Remove build artifacts

Run `just` to list every command. See the public docs for detailed guides.
