---
repo: "python/python-docs-ja"
name: "python-docs-ja"
description: "Japanese Translation of the Python Documentation"
originalDescription: "Japanese Translation of the Python Documentation"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/python/python-docs-ja"
language: "Python"
languages: ["Python"]
languagePcts: [85]
topics: ["python", "document", "japanese"]
stars: 75
forks: 38
openIssues: 1
closedIssues: 20
watchers: 14
contributors: 15
recentReleases: 0
createdAt: "2017-06-11T13:33:21Z"
lastCommitAt: "2026-10-20T08:48:41Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded", "fork_magnet"]
healthScore: 99
undervaluedScore: 52
maintainers: ["methane"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c6474b89dc84c5304e240ffec14812cd7356d50d0913a2ff34576a4f0ef4cf4/python/python-docs-ja"
fundingLinks: ["GITHUB:https://github.com/python", "CUSTOM:https://www.python.org/psf/donations/python-dev/"]
---

Repository to store PO Files

https://www.python.org/dev/peps/pep-0545/#repository-for-po-files

Please see [CONTRIBUTING.md](https://github.com/python/python-docs-ja/blob/HEAD/.github/CONTRIBUTING.md)

## Translation work using an AI Agent

An AI Agent translates PO files and creates diffs, and a human reviews them as Markdown.
When repeated revisions finalize the translations, they are submitted to Transifex.
For example, start the work by asking like this:

> Pick one file from tutorial, improve the existing translations, and translate the untranslated parts.
> Also check related translations to choose style and terminology, and show the diff as Markdown.

1. **Check the target and related translation examples.**
   Read the entire target PO, [AGENTS.md](https://github.com/python/python-docs-ja/blob/HEAD/AGENTS.md), and the [glossary](https://github.com/python/python-docs-ja/blob/HEAD/scripts/python_global_japanese-ja.csv).
   The glossary uses `translation_ja` as the standard, and checks `pos` and `notes` to confirm the context in which each term applies.
   Also read related tutorial and library descriptions to choose style and terminology.
   Find translation examples in the…
