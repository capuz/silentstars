---
repo: "synacktiv/dicozorus"
name: "dicozorus"
description: "A tool to generate and maintain wordlists for Web fuzzing."
readmeQualityOk: true
url: "https://github.com/synacktiv/dicozorus"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 18
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-08T12:31:07Z"
lastCommitAt: "2026-10-15T08:32:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 56
undervaluedScore: 6
maintainers: ["us3r777-s1n"]
openGraphImageUrl: "https://opengraph.githubassets.com/f0bf6b1b89dc51316ddf2407c61d56353e6e6dea45412dd06383d70081357e8d/synacktiv/dicozorus"
---

# Dicozorus

**Dicozorus** is a tool to generate and maintain web wordlists. 

It eliminates the overhead of managing multiple wordlists by storing paths enriched with metadata in a local SQLite database. 

**Just want a great wordlist without the tool?** Skip the setup and use [**lazy.txt**](https://github.com/synacktiv/dicozorus/blob/HEAD/lazy.txt).

## Why Dicozorus?
Standard wordlists often present problems such as missing entries, lack of relevant sorting, inappropriate size or junk entries. 

Dicozorus solves these issues by associating entries with enriched metadata. This allows:

* **Smart Sorting:** Places the most critical and highly probable entries at the top of your list so you find valuable endpoints faster.
* **Targeted Extension Filtering:** If a site runs PHP, you can skip ASP and JSP extensions entirely, saving time and network bandwidth.
* **Adaptive Sizing:** Easily scale your wordlist size depending on target stability, rate limits, or network connectivity.
* **Contextual Fuzzing:** Generate lists specifically tuned for directory fuzzing, file fuzzing, or both.

## Installation
```bash
$ pipx install git+https://github.com/synacktiv/dicozorus/
```
## Dicozorus…
