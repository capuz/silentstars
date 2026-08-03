---
repo: "tschinz/tschinz.github.io"
name: "tschinz.github.io"
description: "personal knowledge database"
readmeQualityOk: true
url: "https://github.com/tschinz/tschinz.github.io"
homepage: "https://tschinz.github.io"
language: "Just"
languages: ["Just"]
languagePcts: [100]
topics: ["mkdocs", "notes", "wiki"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-01-23T06:41:29Z"
lastCommitAt: "2026-08-03T06:42:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 72
undervaluedScore: 42
maintainers: ["tschinz"]
openGraphImageUrl: "https://opengraph.githubassets.com/93e866ee9ad17e5e364a67a32245dbdd34b75a157537ac857c3138cd568256d6/tschinz/tschinz.github.io"
---

<h1 align="center">
  <br>
  <br>
  Zentauri Knowledge Database
  <br>
</h1>

This is the static mkdocs documentation for myself

# How to use the MKDocs Materials Documentation Platform
## Requirements

- [just](https://just.systems/man/en/packages.html)
    ``` bash
    cargo install just
    brew install just
    ```
- Python toolchain [uv](https://docs.astral.sh/uv/)
    ```bash
    curl -LsSf https://astral.sh/uv/install.sh | sh
    ```
- Create venv with `uv` and `just`
  ``` bash
  just venv-create
  ```

## Just file recipes

```bash
just --list
Available recipes:
    build                                  # Build HTML static site
    changelog                              # create the changelog of the project
    changelog-release version=git-tag      # create a release version of the project
    clean
    clean-build                            # Delete build folder
    clean-venv                             # Delete venv
    deploy                                 # Deploy on gh-pages
    info                                   # Information about the environment
    serve                                  # Build HTML static site and serve it locally
    uv-create…
