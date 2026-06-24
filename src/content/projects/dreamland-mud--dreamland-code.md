---
repo: "dreamland-mud/dreamland_code"
name: "dreamland_code"
description: "DreamLand MUD: server code"
url: "https://github.com/dreamland-mud/dreamland_code"
language: "C++"
languages: ["C++"]
languagePcts: [96]
topics: ["mud", "mud-server", "plugin-system", "xml", "websockets", "dreamland-mud", "mud-engine"]
stars: 43
forks: 16
openIssues: 10
closedIssues: 16
watchers: 5
contributors: 15
recentReleases: 0
createdAt: "2018-08-02T08:42:43Z"
lastCommitAt: "2026-06-24T23:37:04Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 87
undervaluedScore: 54
maintainers: ["fiorine", "ruffinakoza", "AleksandrSherehkov"]
openGraphImageUrl: "https://opengraph.githubassets.com/511f103d30c7e29acd304dd2e250b59b24c3ad69ee6dc8d0b136b24b236f9b95/dreamland-mud/dreamland_code"
---

# DreamLand MUD, руководство разработчика

</p>

---
![DreamLand MUD version](https://img.shields.io/badge/DreamLand%20MUD-v4.0-brightgreen.svg)

Как собирать и запускать:
* Из-под Ubuntu 18.04, 20.04 (реальная или виртуальная машина): пользуйтесь инструкцией ниже.
* Из-под Windows 10: следуя [этой инструкции](https://github.com/dreamland-mud/dreamland_code/wiki/WSL-and-VS-Code) для Windows Subsystem for Linux и редактора VS Code
* Из-под окружения Docker: собрать готовый к использованию Docker контейнер, как описано в Readme к проекту [dreamland_docker](https://github.com/dreamland-mud/dreamland_docker).
* Из-под онлайн сред разработки в браузере: [Goorm Online IDE](https://github.com/dreamland-mud/dreamland_code/wiki/Goorm-IDE) или же https://gitpod.io.

**Содержание**
* [Запуск локальной версии](#local)
   * [Подготовка окружения](#env)
   * [Сборка из исходников](#build)
   * [Установка dreamland_world](#areas)
   * [Запуск сервера](#run)
   * [Просмотр логов](#logs)
   * [Вход в мир](#telnet)
* [Работа с репозиторием](#git)
   * [Fork репозитория](#fork)
   * [Внесение изменений](#push)
   * [Pull requests](#pull)
   * [Синхронизация с родительским репозиторием](#uptodate)
*…
