---
repo: "Animenosekai/japanterebi-xmltv"
name: "japanterebi-xmltv"
description: "Easily create XMLTV files"
url: "https://github.com/Animenosekai/japanterebi-xmltv"
homepage: "https://animenosekai.github.io/japanterebi-xmltv/guide.xml"
language: "HTML"
languages: ["HTML"]
languagePcts: [81]
topics: ["epg", "tv", "xmltv", "japanterebi"]
stars: 65
forks: 3
openIssues: 8
closedIssues: 9
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2024-03-21T21:55:46Z"
lastCommitAt: "2026-06-28T06:55:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 49
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/37e26873765363e5f10e13910897f9755cd126249d7d12f2a610965253731a12/Animenosekai/japanterebi-xmltv"
---

# japanterebi-xmltv

Easily create XMLTV files.

***Plan your watching journey!***

<br>
<br>

## Usage

### API

You can use the [https://animenosekai.github.io/japanterebi-xmltv/guide.xml](https://animenosekai.github.io/japanterebi-xmltv/guide.xml) URL as an XMLTV source in any compatible software.

This pre-built XMLTV file contains EPG data for channels from Japan or with Japanese audio.

<https://github.com/Animenosekai/japanterebi-xmltv/blob/d08f5c4a2ac664068aa8f7507f63cab7d1c0c75a/.github/workflows/update.yaml#L27>

This file is updated every hour using [GitHub Actions](https://github.com/Animenosekai/japanterebi-xmltv/actions/workflows/update.yaml).

But you can also build your own XMLTV file using the different scripts provided in this repository.

### Pre-requisites

The different programs located in the [`scripts`](./scripts/) directory require Python 3.7 to run correctly.

The dependencies are listed in the `requirements.txt` file. You can install them by running:

```bash
python -m pip install -r requirements.txt --upgrade
```

It is recommended to use `git` to have the most up-to-date data from the upstream `iptv-org` database.

If you are cloning the repository…
