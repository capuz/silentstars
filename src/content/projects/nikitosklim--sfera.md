---
repo: "nikitosklim/Sfera"
name: "Sfera"
description: "A compiled programming language with fully Russian syntax. Compiler written in Rust and LLVM, Windows/Linux/macOS."
originalDescription: "Компилируемый язык программирования с полностью русским синтаксисом. Компилятор на Rust и LLVM, Windows/Linux/macOS."
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/nikitosklim/Sfera"
language: "Rust"
languages: ["Rust"]
languagePcts: [81]
topics: ["compiler", "cyrillic", "llvm", "programming-language", "russian", "rust"]
stars: 15
forks: 5
openIssues: 3
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 5
createdAt: "2026-09-11T20:04:18Z"
lastCommitAt: "2026-11-15T11:17:50Z"
lastReleaseAt: "2026-10-24T15:35:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 43
maintainers: ["nikitosklim", "GigaPulse"]
openGraphImageUrl: "https://opengraph.githubassets.com/d738ad64bacc679dfa6c094161ebb30f8d865eb8e34ee4619ddf2dc53caeba41/nikitosklim/Sfera"
---

# Sfera

**A programming language where everything is in Russian**: keywords, types, standard library, and even the website address. The compiler is written in Rust and produces real machine code via LLVM 18.

🌐 Website, lessons and downloads: **[языксфера.рф](https://языксфера.рф)**

```
функция главная(): целое
    Список из целых числа = Список из целых();
    числа.добавить(10);
    числа.добавить(20);
    если (числа.размер() больше 1 и не (числа.получить(0) == 0))
        вывести("Сумма: %(числа.получить(0) + числа.получить(1))%");
    конец
    вернуть 0;
конец
```

All code is typed on a regular Russian keyboard layout — without `{}`, `->`, `&&`,
`<>`, `[]`, `$`. Blocks are closed with the word `конец`. The old bracket syntax still works, and `запустить --в-русский файл.код` converts old code to the new one.

## Installation

Ready-made builds are available on the page **[языксфера.рф/загрузки](https://языксфера.рф/загрузки)**
and in [releases](https://github.com/nikitosklim/Sfera/releases):

| Platform | What's included |
|---|---|
| Windows | developer panel and compiler, installed from a single archive |
| macOS (Intel and Apple Silicon) | developer panel and compiler…
