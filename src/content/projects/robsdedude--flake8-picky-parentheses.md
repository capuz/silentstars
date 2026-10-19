---
repo: "robsdedude/flake8-picky-parentheses"
name: "flake8-picky-parentheses"
description: "flake8 plugin to check for redundant parentheses"
readmeQualityOk: true
url: "https://github.com/robsdedude/flake8-picky-parentheses"
homepage: "https://pypi.org/project/flake8-picky-parentheses/"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["flake8", "flake8-plugin", "lint", "linter", "linting", "opinionated", "python", "hacktoberfest"]
stars: 9
forks: 4
openIssues: 4
closedIssues: 7
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2022-08-09T10:37:12Z"
lastCommitAt: "2026-10-19T09:13:55Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 58
maintainers: ["robsdedude", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b598c73be0d87047fed771d9b189df0a91d92ef98ae5cbe602e261fbe4868cb3/robsdedude/flake8-picky-parentheses"
---

Picky Parentheses
=================

Picky Parentheses is a [flake8](https://github.com/pycqa/flake8) plugin that
nitpicks all things parentheses, brackets and braces.
The plugin has two components:
 1. A checker that warns about redundant parentheses (with some exceptions).
 2. A checker for parentheses, brackets, and braces alignment.
    This component is very opinionated but has its own error codes so you can
    easily disable it.

## Table of Contents

 * [Installation and Usage](#installation-and-usage)
 * [Error Codes](#error-codes)
 * [Details and Exceptions](#details-and-exceptions)
 * [Additional Notes](#additional-notes)

## Installation and Usage
This is a plugin for `flake8`. It supports Python 3.7 - 3.14.  
Refer to the documentation of `flake8` on how to run it on your code:
https://flake8.pycqa.org/en/latest/

Two common options are to either install the plugin and then run `flake8`:
```bash
pip install flake8-picky-parentheses

flake8 '<path/to/your/code>'
```

Or to let `flake8` fetch the plugin for you (requires `flake8 >= 5.0.0`):
```bash
flake8 --require-plugins flake8-picky-parentheses '<path/to/your/code>'
```

If you only want to run this plugin and bypass…
