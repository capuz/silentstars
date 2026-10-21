---
repo: "ktechhub/doctoc"
name: "doctoc"
description: "Markdown TOC Generator"
readmeQualityOk: true
url: "https://github.com/ktechhub/doctoc"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 1
openIssues: 12
closedIssues: 11
watchers: 1
contributors: 2
recentReleases: 4
createdAt: "2024-06-22T12:14:43Z"
lastCommitAt: "2026-10-21T17:31:39Z"
lastReleaseAt: "2026-10-14T18:02:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 74
undervaluedScore: 78
maintainers: ["Kalkulus1", "claude", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ade0e14d867abebdbdf9d6a91732fac6cba3925e7b0d71a3d3f9b36a97d4f483/ktechhub/doctoc"
discussionCount: 1
---

**Table of Contents**  *generated with [DocToc](https://github.com/ktechhub/doctoc)*

* [DocToc](#doctoc)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Options](#options)
  * [Examples](#examples)
  * [Features](#features)
  * [GitHub](#github)
  * [License](#license)
  * [Contribution](#contribution)

# DocToc

DocToc is a command-line tool that automatically generates and updates a table of contents (TOC) for Markdown files. It scans your Markdown, identifies headers, and inserts a TOC with clickable links — skipping headers inside fenced code blocks.

## Prerequisites

- Python 3.8+
- pip

## Installation

```sh
pip install doctoc
```

Or from source:

```sh
git clone https://github.com/ktechhub/doctoc.git
cd doctoc
pip install .
```

## Usage

```sh
doctoc [OPTIONS] MARKDOWN_FILES...
```

`MARKDOWN_FILES` accepts one or more file paths or glob patterns:

```sh
doctoc README.md
doctoc docs/README.md CHANGELOG.md
doctoc '**/*.md'
```

On the first run, DocToc inserts the TOC at the top of the file. On subsequent runs it updates the existing TOC in place.

## Options

| Option | Short | Description |
|---|---|---|
| `--outfile…
