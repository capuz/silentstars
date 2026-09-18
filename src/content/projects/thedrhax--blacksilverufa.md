---
repo: "TheDrHax/BlackSilverUfa"
name: "BlackSilverUfa"
description: "Хранилище стримов и чата Twitch-канала BlackUFA"
readmeQualityOk: true
url: "https://github.com/TheDrHax/BlackSilverUfa"
homepage: "https://bsu.drhx.ru"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [48, 45]
topics: ["static-site"]
stars: 35
forks: 5
openIssues: 6
closedIssues: 38
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2017-04-30T00:51:50Z"
lastCommitAt: "2026-09-18T08:26:08Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 78
undervaluedScore: 41
maintainers: ["TheDrHax"]
openGraphImageUrl: "https://opengraph.githubassets.com/47f78ab896de69e34fc7655f5bd94f113968e5f36597ca58993a76aee69fea2c/TheDrHax/BlackSilverUfa"
---

# Архив стримов BlackUFA [](https://ci.drhx.ru/TheDrHax/BlackSilverUfa)

Перейдите на [GitHub Pages](https://bsu.drhx.ru) для доступа ко всем функциям 

### Зависимости

* `bash` >= 4.0
* `python3-venv` (Ubuntu) или `python3` (Alpine)
* `git` (для работы с gh-pages и получения даты добавления стрима)
* `tzdata` — для установки правильного часового пояса
* `libc6` (Ubuntu) или `build-base` (Alpine) — для Node.js

### Сборка и тестирование

Основную часть работы выполняет shell-скрипт [bsu](https://github.com/TheDrHax/BlackSilverUfa/blob/HEAD/bsu) в корне репозитория. К сожалению, автоматическая сборка на Windows в данный момент не поддерживается, но проект можно собрать вручную при наличии Python.

При первом запуске скрипт создаст виртуальное окружение Python в директории `./_python` и установит туда все пакеты, неоходимые для сборки и запуска проекта (они перечислены в файле [requirements.txt](https://github.com/TheDrHax/BlackSilverUfa/blob/HEAD/requirements.txt)).

Ниже приведены примеры использования скрипта `./bsu`.

```bash
# Обновить виртуальное окружение Python
./bsu venv update

# Загрузить текущую версию ветки gh-pages в директорию ./_site
# (обязательно для сборки…
