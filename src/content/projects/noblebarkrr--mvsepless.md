---
repo: "noblebarkrr/mvsepless"
name: "mvsepless"
description: "CLI wrapper for MSST and UVR in Google Colab"
url: "https://github.com/noblebarkrr/mvsepless"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2024-09-14T02:12:27Z"
lastCommitAt: "2026-06-28T01:35:51Z"
lastReleaseAt: "2025-03-08T09:05:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 64
maintainers: ["noblebarkrr"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf330930786098fb9d70d91bcebb961316f1fbd5a607b10ada69eb0f31dc3b4b/noblebarkrr/mvsepless"
---

# MVSepless



</div>

<h2> */непростая обёртка*/ для <s>audio-separator</s> и Music-Source-Separation-Training </h2>

## Фишки

- Извлечение инструментала (инверсии выбранных стемов)
- Встроенный авто-ансамбль, с возможностью выбрать основной стем для добавления в ансамбль
- Базовый итеративный ансамбль
- Дополнительные параметры разделения, как в UVR
- История обработок (Только в Web-UI)
- Пакетная обработка по умолчанию (кроме авто-ансамбля и вычитания)
- Поддержка метаданных (при установленном пакете `pytaglib`)
- Язык интерфейса изменяется через переменную окружения `MVSEPLESS_LANGUAGE`

---

<details> <summary align="center"><b>Содержание</b></summary>

- [Установка](#️установка)
  - [Совместимость](#совместимость-кода)
  - [Подготовка среды выполнения](#подготовка-среды-выполнения-для-начала)
    - [Windows](#установка-windows)
    - [Linux](#установка-linux)
  - [Установка зависимостей](#установка-зависимостей-для-работы)
    - [Через uv](#установка-зависимостей-через-uv)
    - [Через pip](#установка-зависимостей-через-pip)
- [VBach - Форк PolGen](#vbach)
- [Специфичные атрибуты конфигов Roformer моделей](#specific_keys)
- [Шаблоны имен…
