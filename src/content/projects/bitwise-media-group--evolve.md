---
repo: "bitwise-media-group/evolve"
name: "evolve"
description: "A cli tool for evaluating coding agent plugins with a multi-tier approach."
url: "https://github.com/bitwise-media-group/evolve"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["claude-code", "cursor", "gemini", "agent-evals"]
stars: 5
forks: 4
openIssues: 3
closedIssues: 6
watchers: 0
contributors: 5
recentReleases: 8
createdAt: "2026-06-12T11:12:55Z"
lastCommitAt: "2026-07-04T19:20:07Z"
lastReleaseAt: "2026-07-03T22:24:44Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 72
maintainers: ["dmccaffery", "dependabot[bot]", "deanhigh"]
openGraphImageUrl: "https://opengraph.githubassets.com/65abc38c64ceb0fabe78fab3f1eef1c0ad5c2a25140f8b24eb3d7179ca543f4c/bitwise-media-group/evolve"
---

# evolve

`evolve` is a Go CLI for evaluating coding-agent plugins and plugin repositories. It validates plugin structure, checks
whether skills trigger for the right prompts, runs behavioral eval suites in throwaway workspaces, and writes committed
Markdown/JSON rollups for review and CI.

The pipeline is split into three tiers:

- Tier 0 `checks`: static validation of manifests, schemas, skill metadata, and repository shape.
- Tier 1 `triggers`: prompt-level checks that verify the expected skill activates.
- Tier 2 `evals`: behavioral cases that run real agent CLIs and grade the result.

> [!TIP]
> **New to evolve?** Read the full docs at **[oss.bitwisemedia.uk/evolve](https://oss.bitwisemedia.uk/evolve/)** —
> getting started, authoring evaluations (triggers, behavioral evals, fixtures, and how they run), the configuration
> reference, and the TUI guide.

## Supported repositories

`evolve` auto-detects these layouts, or you can force one with `--layout`:

| Layout        | Marker                                    | Skill paths                        | Eval paths                        |
| ------------- | ----------------------------------------- |…
