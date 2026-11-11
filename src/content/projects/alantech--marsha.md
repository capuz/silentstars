---
repo: "alantech/marsha"
name: "marsha"
description: "Marsha is a functional, higher-level, English-based programming language that gets compiled into tested Python software by an LLM"
readmeQualityOk: true
url: "https://github.com/alantech/marsha"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 466
forks: 16
openIssues: 20
closedIssues: 69
watchers: 9
contributors: 5
recentReleases: 0
createdAt: "2023-04-20T19:33:29Z"
lastCommitAt: "2026-11-11T19:49:35Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 26
maintainers: ["dfellis"]
openGraphImageUrl: "https://opengraph.githubassets.com/111d6a5a6c946a7482ade1ea8a91f68005ac0d1e15800012ad658db5b1990a6f/alantech/marsha"
---

# Marsha AI Language

Marsha is an LLM-based programming language. Describe what you want done with a simple syntax, provide examples of usage, and the Marsha compiler will guide an LLM to produce tested Python software.

## Usage

The Marsha compiler can be used to compile the syntax using a `uv`-installed package via a terminal or Jupyter Notebook:

```bash
uv pip install git+https://github.com/alantech/marsha
python -m marsha compile data_mangling.mrsh
```

From a source checkout you can instead install a `marsha` command directly:

```bash
make install    # Linux / macOS
install.bat     # Windows
```

This builds a virtualenv with Marsha in it and drops a small launcher script at `~/.local/bin/marsha` (`~/.local/bin/marsha.bat` on Windows; override the location with `make install PREFIX=/usr/local` or `install.bat C:\tools`) that simply runs `python -m marsha` from that virtualenv, passing your arguments through. The venv location can be overridden per-invocation with the `MARSHA_VENV` environment variable, and `make uninstall` / `uninstall.bat` remove the launcher.

## Syntax

The Marsha syntax looks a lot like markdown and is a mixture of English and mathematical notation.…
