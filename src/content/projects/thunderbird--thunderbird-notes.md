---
repo: "thunderbird/thunderbird-notes"
name: "thunderbird-notes"
description: "Release Notes for Thunderbird"
readmeQualityOk: true
url: "https://github.com/thunderbird/thunderbird-notes"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 44
forks: 16
openIssues: 5
closedIssues: 13
watchers: 12
contributors: 22
recentReleases: 0
createdAt: "2017-07-25T19:45:55Z"
lastCommitAt: "2026-09-18T14:03:53Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 93
undervaluedScore: 53
maintainers: ["coreycb", "dependabot[bot]", "stephenking314"]
openGraphImageUrl: "https://opengraph.githubassets.com/f9a12b62c8b4a0a5c8789fe14d2aa6274f86f99041d6a2fd39b07ba4aa2951fc/thunderbird/thunderbird-notes"
---

# Thunderbird Release Notes

This repo contains release notes for Thunderbird, as displayed on [thunderbird.net](https://stage.thunderbird.net/en-US/thunderbird/releases/).
Notes are in a [YAML format](https://learnxinyminutes.com/docs/yaml/), with esr versions in the 'esr' directory, monthly versions in the
'release' directory, and beta versions in the 'beta' directory.

To aid in editing these notes, you can preview changes to any of the .yml files with preview.py:

```
python3 -m virtualenv .venv
source .venv/bin/activate
pip install -r requirements.txt
python preview.py 52.0
```
Once you start `preview.py` for a particular version, it will load that file and produce a `preview.html` file that you can load locally.
Any time you modify one of the release notes files, `preview.html` will be automatically refreshed with the changes, so you can just refresh
it in your browser to see your changes.

# YAML format

The format is relatively simple. There are two primary data structures, the `release` dictionary and the `notes` list.

**All strings are parsed for [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for formatting.**

## Release Dictionary…
