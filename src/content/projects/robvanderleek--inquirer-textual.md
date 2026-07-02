---
repo: "robvanderleek/inquirer-textual"
name: "inquirer-textual"
description: "Versatile library for user input in Python 🎙️"
url: "https://github.com/robvanderleek/inquirer-textual"
homepage: "https://robvanderleek.github.io/inquirer-textual/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["inquirer", "python", "textual", "user-input"]
stars: 9
forks: 0
openIssues: 3
closedIssues: 9
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2025-08-17T11:55:48Z"
lastCommitAt: "2026-07-02T06:35:57Z"
lastReleaseAt: "2026-06-08T13:10:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 87
undervaluedScore: 47
maintainers: ["robvanderleek", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/18c25a4dba1aedf8860f1e37a8dee4273d6b62d2dab74c1b2eef733bf4cdcdb7/robvanderleek/inquirer-textual"
fundingLinks: ["GITHUB:https://github.com/robvanderleek"]
---

# Inquirer-Textual

</div>

  *Versatile library for user input in Python 🎙️*

</div>

</div>

The goal of this Python library is to make user input simple, using a versatile
[set of
prompts](https://robvanderleek.github.io/inquirer-textual/prompts/autocomplete/).

Under the hood, this library uses the sophisticated
[Textual](https://textual.textualize.io/) TUI framework, which means you get:

- Rich prompts
- Inline or fullscreen prompts
- Mouse support
- Themes

</div>

Read the [documentation here](https://robvanderleek.github.io/inquirer-textual/)

## Installation

Create and activate a virtual environment (for example with
[uv](https://docs.astral.sh/uv/)), and then install this package:

```shell
pip install inquirer-textual
```

## Development

Add this library as an editable local dependency to another project using `uv`:

```shell
uv add --editable <path-to-inquirer-textual>
```

### Textual console

1. Open the Textual Development Console:

```shell
uv run textual console
```

2. Run application in development mode:

```shell
uv run textual run --dev examples/prompt_pattern.py
```

### Static documentation

Generating the static documentation:

```shell
uv run mkdocs…
