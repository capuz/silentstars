---
repo: "cppHusky/notice-waiting-for-notice"
name: "notice-waiting-for-notice"
description: "Notice: Waiting for notice"
originalDescription: "通知：等通知"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/cppHusky/notice-waiting-for-notice"
language: "Typst"
languages: ["Typst", "Makefile"]
languagePcts: [70, 23]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-07-19T10:43:23Z"
lastCommitAt: "2026-07-30T06:07:39Z"
lastReleaseAt: "2025-09-05T21:59:58Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 29
maintainers: ["cppHusky"]
openGraphImageUrl: "https://opengraph.githubassets.com/78e7ff238fc00e7861a3ff8818f59b07d58ce5de7eeb09a9ce8ac2ff056c90d2/cppHusky/notice-waiting-for-notice"
---

# Notice: Waiting for notice

- [BUPT Version](https://github.com/cppHusky/notice-waiting-for-notice/releases/tag/BUPT)
- [BNU Version](https://github.com/cppHusky/notice-waiting-for-notice/releases/tag/BNU)

## How to Edit

This project uses the Typst language to generate target images. For syntax, see the [documentation](https://typst.app/docs/).

Except for the `fonts` directory which contains the necessary fonts, each subdirectory in the root directory represents a school.

You need to do the following:

+ Prepare a suitably sized letterhead, named `background.png` (or another supported extension);
+ Create several typst files to generate the target images you expect;
+ Write a makefile so that others can compile, run, and modify it.

## How to Compile

Compilation requires the following dependencies:

- [GNU Make](https://www.gnu.org/software/make/)
- [Typst CLI](https://typst.app/)

Open the directory of a specific school and run the following command:

```sh
make
```

This will produce several png files, such as `classic.png`.

## How to Auto-Update

This project uses GitHub Actions for automatic updates, updating the date daily so that everyone can use the latest notice in…
