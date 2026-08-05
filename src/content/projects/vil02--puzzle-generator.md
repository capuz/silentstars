---
repo: "vil02/puzzle_generator"
name: "puzzle_generator"
description: "Generates python code representing a puzzle"
readmeQualityOk: true
url: "https://github.com/vil02/puzzle_generator"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["code-generation", "puzzle-creator", "puzzle-generator", "quiz-generator", "treasure-hunt", "hacktoberfest"]
stars: 9
forks: 11
openIssues: 5
closedIssues: 13
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2024-07-21T19:12:13Z"
lastCommitAt: "2026-08-05T05:55:53Z"
lastReleaseAt: "2024-08-02T06:56:56Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 93
undervaluedScore: 84
maintainers: ["renovate[bot]", "vil02", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/96c51b56f70e727820389ad4e113e39d209028398e976546d67ac7117b05ae0c/vil02/puzzle_generator"
postedAt: "2026-07-24T06:15:55.032Z"
---

# About `puzzle_generator`

Basic functionality of [`puzzle_generator`](https://github.com/vil02/puzzle_generator/blob/HEAD/puzzle_generator) is to generate
a single python file representing a puzzle or quiz.
The upcoming questions are stored in an encrypted form,
so it is _difficult_ to read them before providing correct answers.
The generated file does not have any external dependencies.

## Getting started

This package is available at [PyPI](https://pypi.org/project/puzzle-generator/).
It can be installed using the command

```shell
pip install puzzle-generator
```

[`examples`](https://github.com/vil02/puzzle_generator/blob/HEAD/examples) show some basic usage.

## Information for developers

The project is setup using [poetry](https://python-poetry.org/).
In order to create a _development environment_,
after cloning this repository, run the command:

```shell
poetry install --with dev
```

If you just want to see the examples in action,
it is enough to clone this repository and run the command:

```shell
poetry install
```

Afterwards you can execute the commands like:

```shell
poetry run python3 examples/basic_usage.py
```
