---
repo: "radislabus-star/lay-public"
name: "lay-public"
description: "Double Shift RU/EN layout rescue for GNOME, KDE, Wayland and X11"
url: "https://github.com/radislabus-star/lay-public"
language: "Rust"
languages: ["Rust"]
languagePcts: [81]
topics: ["gnome", "keyboard-layout", "linux", "russian", "rust", "wayland", "kde", "keyboard", "linux-desktop", "plasma"]
stars: 79
forks: 4
openIssues: 1
closedIssues: 27
watchers: 3
contributors: 1
recentReleases: 10
createdAt: "2026-05-06T22:55:15Z"
lastCommitAt: "2026-06-27T00:32:23Z"
lastReleaseAt: "2026-06-22T20:13:15Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 38
maintainers: ["radislabus-star"]
openGraphImageUrl: "https://opengraph.githubassets.com/9790f06b70f9b63eea1b5e946061ffb2f3aefd8d6a9f02978131edfd5c85d40e/radislabus-star/lay-public"
---

# lay

**Double Shift RU/EN layout rescue для Linux**

`lay` чинит слово, набранное не в той раскладке: нажал **Shift два раза** и
продолжил писать.

**Статус: alpha.** Основной сценарий уже рабочий. Главная зона активной
доводки — автопомощь после пробела и редкие desktop edge cases.

```bash
curl -fsSL https://raw.githubusercontent.com/radislabus-star/lay-public/main/scripts/install-remote.sh | bash
```

</div>

## Что это

`lay` — локальный клавиатурный помощник для Linux-пользователей, которые пишут
на русском и английском вперемешку.

Главный сценарий:

```text
Набрал:  ghbdtn
Нажал:   Shift Shift
Стало:   привет
```

`lay` не использует буфер обмена для основного сценария и не требует облачной
модели. Он слушает физические клавиши локально, помнит короткий хвост набора и
при команде перепечатывает его в другой раскладке.

По умолчанию double Shift исправляет **1 последнее слово**. Области `2 слова`
и `3 слова` можно включить отдельно в трее.

## Что нового в 0.2.0

- заложен первый системный слой `Typing Correction Core`: входной текст теперь
  получает единый паспорт ошибки, класс ошибки, доску кандидатов и gate-решение;
- deterministic typing-assist и NANDA-кандидаты…
