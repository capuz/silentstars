---
repo: "idlesign/sponsrdump"
name: "sponsrdump"
description: "Downloader for sponsr.ru / Downloader for sponsr.ru"
originalDescription: "Downloader for sponsr.ru / Скачиватель для sponsr.ru"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/idlesign/sponsrdump"
homepage: "https://github.com/idlesign/sponsrdump"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["downloader", "sponsor", "dump", "sponsr"]
stars: 35
forks: 11
openIssues: 2
closedIssues: 15
watchers: 4
contributors: 7
recentReleases: 0
createdAt: "2023-09-08T14:08:55Z"
lastCommitAt: "2026-11-14T10:47:11Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 84
undervaluedScore: 44
maintainers: ["idlesign", "viklover", "seliverstov"]
openGraphImageUrl: "https://opengraph.githubassets.com/00603dd2f0c201f2f978e79288a7a8c9b3d0d947fd2901f9a1d6d88a63d74658/idlesign/sponsrdump"
---

# sponsrdump

<https://github.com/idlesign/sponsrdump>

## Description

*The application lets you get local copies of materials you already have a subscription to on the sponsr.ru website.*

It can download texts (articles), audio (podcasts), and video.

## Dependencies

* Unix
* Python 3.11+
* ffmpeg (``sudo apt install ffmpeg``)
* uv (for installing and updating the application)

## Installation and update

Done with the [uv](https://docs.astral.sh/uv/getting-started/installation/) application:

```shell
$ uv tool install sponsrdump
```

After that, you can run the application with the command

```shell
$ sponsrdump
```

To update, run

```shell
$ uv tool upgrade sponsrdump
```

## Getting started

1. Open the page of the desired project in your browser.
   For example, we use the project "Уроки истории" (History Lessons) - <https://sponsr.ru/uzhukoffa_lessons/>
2. If you haven't logged in to the site yet, do so.
3. Make sure the materials of this project are available to you. If not, subscribe to the desired project.
4. Now we need to get the value of the ``SESS`` cookie for the sponsr.ru site so the application can collect the needed materials.
   One way to get the cookie…
