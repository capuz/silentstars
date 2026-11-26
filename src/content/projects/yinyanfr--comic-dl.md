---
repo: "yinyanfr/comic-dl"
name: "comic-dl"
description: "Yet another manga / comic downloader"
originalDescription: "Yet another manga / comic downloader"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/yinyanfr/comic-dl"
homepage: "https://yinyanfr.github.io/comic-dl/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [62, 38]
topics: ["manga", "scraper", "comic", "comic-downloader", "downloader", "copymanga", "manga-downloader", "zerobyw", "ganma"]
stars: 23
forks: 0
openIssues: 3
closedIssues: 5
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-03-12T16:48:06Z"
lastCommitAt: "2026-11-26T15:24:10Z"
lastReleaseAt: "2023-03-18T16:08:37Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 92
undervaluedScore: 35
maintainers: ["yinyanfr"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e0ba4238d99791c146f723b2ae473e3a661daab79e1cd4b3364ed05fda217f4/yinyanfr/comic-dl"
---

# comic-dl

[English](https://github.com/yinyanfr/comic-dl/blob/HEAD/README.en.md) · [更新日志（英文）](https://github.com/yinyanfr/comic-dl/blob/HEAD/CHANGELOG.md)

comic-dl is a command-line tool and TypeScript library that adds comic sources through extensions, saving each chapter as a CBZ.

```sh
comic-dl d "https://www.copy20.com/comic/xiangkanbaitiantongxuederuanruobiaoqing"
```

After installing the CopyManga extension described below, paste a series link and it will automatically select a source and download the entire comic to the current directory. `d` is shorthand for `download`.

```sh
comic-dl d xiangkanbaitiantongxuederuanruobiaoqing --source copymanga -o ~/manga -c 2-4
```

You can also use the series' short ID directly. `-o` specifies the download directory, and `-c 2-4` downloads chapters 2 through 4 in reading order (inclusive). If the range exceeds the chapter list, the command reports an error and does not start downloading.

CBZ files are written directly to the output directory. When downloading multiple series for a reader, specify a separate directory for each series, for example `-o ~/manga/作品名`.
