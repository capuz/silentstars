---
repo: "sokcuri/hdTrans"
name: "hdTrans"
description: "Another Japanese-Korean Rule Based Translator"
originalDescription: "Another Japanese-Korean Rule Based Translator"
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/sokcuri/hdTrans"
homepage: "https://trans.kuri.kr"
language: "C++"
languages: ["C++"]
languagePcts: [86]
stars: 88
forks: 4
openIssues: 0
closedIssues: 15
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-18T21:14:02Z"
lastCommitAt: "2026-10-31T16:00:10Z"
lastReleaseAt: "2026-10-22T02:46:05Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 41
maintainers: ["sokcuri", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c54cb10196bb9d4924a615a8cf58d49441b839d48d4200f6fa820293d79e44a6/sokcuri/hdTrans"
---

# 하드트랜스 (hdTrans)

An offline program that translates Japanese into Korean.
It includes a built-in dictionary and translation engine, so it can be used right after extracting the archive.
It provides a Windows translation window, a command-line program, and a connection tool for EasyTrans.

Creator: 소쿠릿 ([Homepage](https://sokcuri.neko.kr/), [X](https://x.com/sokcuri))

## Try it on the web

Before installing, you can try translating sentences at the [web translator](https://trans.kuri.kr).

## Translation improvement examples

The original ezTrans column is quoted from a [public comparison post](https://x.com/sokcuri/status/2111443062698451143/photo/1). The hdTrans column shows direct results from the fixed C++ engine used in the benchmark below.

| Japanese | Original ezTrans | hdTrans |
|---|---|---|
| 肉がジュージューと焼ける | The meat is burned along with Jewish Jewish (mistranslated) | The meat sizzles as it grills |
| バイトに行く | Goes to a byte | Goes to a part-time job |
| おっと、すまんね | Husband, sorry | Oops, sorry about that |
| 夢みたい | Wants to see a dream | Like a dream |
| くそっ！ | Poop! | Damn! |
| やったー！ | Did it-! | I did it! |

## Benchmark

On a public regression benchmark of 66…
