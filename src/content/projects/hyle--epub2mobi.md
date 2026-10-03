---
repo: "hyle/epub2mobi"
name: "epub2mobi"
description: "A zero-dependency Python tool that converts EPUB books into legacy MOBI6 files for older Kindle devices."
readmeQualityOk: true
url: "https://github.com/hyle/epub2mobi"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["epub", "mobi", "kindle-tools", "ebook-convert", "ebook-converter", "mobi-reader", "epub-format", "mobi-format"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-12-17T12:12:13Z"
lastCommitAt: "2026-10-03T22:03:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 60
maintainers: ["hyle"]
openGraphImageUrl: "https://opengraph.githubassets.com/9c6833405c6a30535394b02add1bd2d3209766db42507958b840a327d039f68b/hyle/epub2mobi"
---

# epub2mobi.py

`epub2mobi.py` converts EPUB books to MOBI6 for your Kindle using a single Python script, with no external dependencies and no internet connection required.

Download the script, run it, and bring your books to your Kindle.

## Install and use

Requires **Python 3.9+**. No Python packages or external converters to install.

Download the script:

```bash
curl -fL https://raw.githubusercontent.com/hyle/epub2mobi/main/epub2mobi.py -o epub2mobi.py
```

Convert an EPUB to a `.mobi` beside the input file:

```bash
python3 epub2mobi.py my_book.epub
```

Choose an output path:

```bash
python3 epub2mobi.py my_book.epub -o converted.mobi
```

Copy the result to a connected Kindle over USB:

```bash
python3 epub2mobi.py my_book.epub --deploy
```

Automatic deployment copies only when exactly one Kindle matches. Multiple matches produce an error before copying; the local MOBI remains available for manual transfer. Duplicate paths and symlink aliases count as one match.

List omitted media and the reasons:

```bash
python3 epub2mobi.py my_book.epub --report-omissions
```

Options can be combined. Use `--help` for the CLI reference.

## Why MOBI6?

For Kindles that support MOBI…
