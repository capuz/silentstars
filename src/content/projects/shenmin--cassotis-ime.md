---
repo: "shenmin/cassotis-ime"
name: "cassotis-ime"
description: "Cassotis IME - a native Delphi/TSF Chinese Pinyin IME for Windows 10/11. 言泉输入法 —— 基于 Delphi/TSF 的 Windows 10/11 原生开源中文拼音输入法，支持全拼、简拼、四种双拼，并通过语料训练的本地语言模型与神经重排提升输入质量。"
readmeQualityOk: true
url: "https://github.com/shenmin/cassotis-ime"
homepage: "https://www.cassotis.org"
language: "Pascal"
languages: ["Pascal"]
languagePcts: [99]
topics: ["chinese", "delphi", "ime", "lexicon", "pinyin", "double-pinyin", "input-method", "full-pinyin"]
stars: 227
forks: 11
openIssues: 1
closedIssues: 10
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-02-16T07:09:08Z"
lastCommitAt: "2026-07-25T06:00:03Z"
lastReleaseAt: "2026-06-11T03:45:40Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 87
undervaluedScore: 33
maintainers: ["shenmin"]
openGraphImageUrl: "https://opengraph.githubassets.com/51ce0941006f1b1998b98b792aadb5ee3325593605349a2cbed900e0c033ce13/shenmin/cassotis-ime"
---

# Cassotis IME

</p>

</p>
</p>

English | [简体中文](https://github.com/shenmin/cassotis-ime/blob/HEAD/README.CN.md)

Cassotis IME (言泉输入法) is an experimental Chinese Pinyin input method for Windows 10/11, built primarily with Delphi on top of TSF (Text Services Framework).

## Name Origin
The English name **Cassotis** comes from the sacred spring inside the Temple of Delphi. Before delivering oracles, the priestess Pythia was said to drink from this spring to enter a prophetic state. The spring was regarded as the true source of prophecy and inspiration, where oracles were born, which resonates with the path from Delphi to human language.

The Chinese name **言泉** (Yanquan, "Spring of Words") matches Cassotis as a prophetic spring, while also carrying the meaning of **言如泉涌** ("words flowing like a spring"), reflecting our expectation of a fluent and intelligent input experience.

The project focus is:
- build a stable TSF-based IME foundation,
- keep the architecture modular (TSF DLL + host process + tools),
- improve corpus-trained local ranking for long sentences and context-aware short-word selection.

## Current Status
- TSF text service pipeline is available (registration,…
