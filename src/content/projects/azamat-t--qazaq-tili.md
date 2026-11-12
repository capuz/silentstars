---
repo: "azamat-t/qazaq-tili"
name: "qazaq-tili"
description: "Kazakh language rules: declension of Kazakh words"
originalDescription: "Qazaq tili erezheleri Склонение казахских слов"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/azamat-t/qazaq-tili"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-06-09T18:22:59Z"
lastCommitAt: "2026-11-12T11:37:31Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 35
maintainers: ["azamat-t"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e7767a8daf2427247cc640d19047f35e3c1841bacb35e762a82109f1829ed2f/azamat-t/qazaq-tili"
---

# qazaq-tili

Declension of Kazakh words by case (септіктер) and determining the case from the ending. No dependencies.

[Instructions in Kazakh](https://github.com/azamat-t/qazaq-tili/blob/HEAD/docs/kz.md)

[Instructions in English](https://github.com/azamat-t/qazaq-tili/blob/HEAD/docs/en.md)

```js
jalgau('Алмас', 'b') // 'Алмасқа'
jalgau('кітап', 'sh', true) // 'кітаптардан'
getJalgau('Серіктің') // { septik: 'Ілік', latin: 'Ilik', key: 'i', code: 1 }
```

## Installation

```bash
npm install qazaq-tili
```

## Import

```js
const { jalgau, getJalgau } = require('qazaq-tili')
// or
import { jalgau, getJalgau } from 'qazaq-tili'
```

## Cases

A case can be specified by number or by string key:

| Code |  Key  | Name | Latin | Russian equivalent | Questions | Endings |
| :-: | :----: | -------- | -------- | ------------------------- | ---------------------- | -------------------------------- |
| `0` | `'a'` | Атау | Atau | Nominative | кім? не? | — |
| `1` | `'i'` | Ілік | Ilik | Genitive | кімнің? ненің? | -ның/-нің, -дың/-дің,…
