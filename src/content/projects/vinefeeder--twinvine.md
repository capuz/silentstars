---
repo: "vinefeeder/TwinVine"
name: "TwinVine"
description: "A single uv install of two packages. Use the VineFeeder GUI for searching and batch downloading; use Envied - with a little bit extra - for command line downloading."
url: "https://github.com/vinefeeder/TwinVine"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 102
forks: 15
openIssues: 1
closedIssues: 8
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2025-08-24T12:33:46Z"
lastCommitAt: "2026-07-01T07:04:51Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 83
undervaluedScore: 35
maintainers: ["vinefeeder"]
openGraphImageUrl: "https://opengraph.githubassets.com/5517957fcc3f4aa40f72f7ce2805c117925cefef027c1f1b2893086af335b903/vinefeeder/TwinVine"
---

# TwinVine

TwinVine combines two Python packages:

- [Vinefeeder](https://github.com/vinefeeder/TwinVine/blob/main/packages/vinefeeder/src/vinefeeder/README.md)
- [Envied](https://github.com/vinefeeder/TwinVine/blob/main/packages/envied/README.md)

TwinVine helps you find, select, and download media. Use the graphical front end when you want search and selection assistance, and use the command-line downloader for exact URLs.

Envied is forked from unshackle github.com/unshackle-dl/unshackle and I thank the developers for thier effort.

## Key workflows

- Use `envied` when you already have an exact program URL.
- Use `vinefeeder` search when you only know a program name.
- Use the browse feature when you want to explore categories like Film, Drama, or Sport.
- Use Batch Mode to select and download multiple items from several services.

## Usage

TwinVine runs through the Python package manager `uv`.

### Run the main tools

```bash
uv run vinefeeder
uv run envied dl --select-titles <service> <url>
```

### Access envied from the GUI

- On Linux: choose **run envied** after clicking the GUI `envied` button.
- On Windows: close the GUI or press `Ctrl+C` to return to the terminal.…
