---
repo: "zyocum/reader"
name: "reader"
description: "Extract clean(er), readable text from web pages via trafilatura."
readmeQualityOk: true
url: "https://github.com/zyocum/reader"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["cleaner", "web-scraping", "reader", "extract", "readability", "markdown", "python", "text-extraction", "trafilatura"]
stars: 122
forks: 16
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2017-08-07T23:32:33Z"
lastCommitAt: "2026-08-20T04:09:34Z"
lastReleaseAt: "2026-08-20T03:39:24Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 100
undervaluedScore: 33
maintainers: ["zyocum"]
openGraphImageUrl: "https://opengraph.githubassets.com/9666afca87b16816cd26e52053941efa1225344342f88df15a6f925076a8392f/zyocum/reader"
---

# reader
Extract clean(er), readable text from web pages via [trafilatura](https://trafilatura.readthedocs.io/).

## A note on the parser
Earlier versions of this project used the [Postlight Parser](https://github.com/postlight/parser), which required Node.js and shelling out to its command-line driver, plus [html2text](https://github.com/Alir3z4/html2text) for the Markdown/plain-text conversions. Both have been replaced by [trafilatura](https://trafilatura.readthedocs.io/), a well-maintained Python library that consistently tops content-extraction benchmarks and emits HTML, Markdown, and plain-text natively. Everything now runs in a single Python process with a single dependency.

## Install

Clone this repository and install the dependencies with [uv](https://docs.astral.sh/uv/):

```
$ uv sync
```

Or with a classic virtual environment:

```
$ python3 -m venv .venv
$ source .venv/bin/activate
(reader) $ pip install -r requirements.txt
```

## Usage

```
(reader) $ ./reader.py -h
usage: reader.py [-h] [-f {json,html,md,txt}] [-w BODY_WIDTH] [-t FORMAT] source

Get a cleaner version of a web page for reading purposes. This script fetches a URL (or reads
local HTML) and extracts…
