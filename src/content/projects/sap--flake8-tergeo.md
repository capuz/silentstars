---
repo: "SAP/flake8-tergeo"
name: "flake8-tergeo"
description: "flake8-tergeo is a flake8 plugin which adds many new rules to improve your code quality. Out of the box it also brings a curated list of other plugins without additional efforts needed."
readmeQualityOk: true
url: "https://github.com/SAP/flake8-tergeo"
homepage: "https://sap.github.io/flake8-tergeo/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["flake8", "plugin", "quality"]
stars: 7
forks: 1
openIssues: 2
closedIssues: 16
watchers: 2
contributors: 664
recentReleases: 0
createdAt: "2025-01-28T13:36:30Z"
lastCommitAt: "2026-10-03T22:03:47Z"
lastReleaseAt: "2025-12-19T08:46:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 79
maintainers: ["renovate[bot]", "kasium", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/13a8c802a9b03485296b9f553adb0524627acf061eee6aab9e9c24f0a294a836/SAP/flake8-tergeo"
discussionCount: 0
---

# flake8-tergeo

## About this project

flake8-tergeo is a flake8 plugin which adds many new rules to improve your code quality.
Out of the box it also brings a curated lists of other plugins without additional efforts needed.
In difference to other projects, the list of included plugins is rather small and actively maintained.

The included plugins and checks are opinionated, meaning that e.g. f-strings are preferred.
Therefore, checks to find other formatting methods are included but none, to find f-strings.

Also, code formatters like ``black`` and ``isort`` are recommended; therefore no code
formatting rules are included.

## Documentation

You can find the documentation [here](https://sap.github.io/flake8-tergeo/).

## Development
This project uses [`uv`](https://docs.astral.sh/uv/).
To install uv, and setup a venv for development, use:
```
python3.14 -m venv venv && \
    source venv/bin/activate && \
    pip install uv && uv sync --all-groups && \
    deactivate  && \
    rm -rf venv/
```
This will create a temporary `venv`, install uv to bootstrap the project
`.venv`, and remove the temporary `venv` again.
Then use `source .venv/bin/activate` to activate your venv.

##…
