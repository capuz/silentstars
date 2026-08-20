---
repo: "Desko77/ai-edt"
name: "ai-edt"
description: "MCP-сервер внутри 1C:EDT: дает AI-агентам семантический доступ к проекту - код BSL, метаданные, валидация и живая отладка"
readmeQualityOk: true
url: "https://github.com/Desko77/ai-edt"
homepage: "https://desko77.github.io/ai-edt/"
language: "Java"
languages: ["Java"]
languagePcts: [98]
topics: ["1c", "1c-edt", "1c-enterprise", "ai-agent", "bsl", "eclipse-plugin", "mcp", "mcp-server", "ai-assistant", "claude-code"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-04T16:04:55Z"
lastCommitAt: "2026-08-20T04:07:58Z"
lastReleaseAt: "2026-08-14T05:31:50Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 66
maintainers: ["Desko77"]
openGraphImageUrl: "https://opengraph.githubassets.com/0303cf2b8fcbc0d1e3569b8afb9dfcd9cbf55f8b3dad1e097ce70502e93c83e3/Desko77/ai-edt"
discussionCount: 1
---

[Русский](https://github.com/Desko77/ai-edt/blob/HEAD/README.md) · [English](https://github.com/Desko77/ai-edt/blob/HEAD/README.en.md)

**Дайте AI-ассистенту структурированный доступ к проекту 1С через службы запущенного экземпляра EDT.**

[Быстрый старт](#-быстрый-старт) · [Возможности](#-что-можно-делать) · [Архитектура](#-как-это-работает) · [Участие в разработке](#-участие-в-разработке)

</div>

---

AI-EDT - MCP-сервер в виде плагина, работающего **внутри запущенного экземпляра 1C:EDT**. Он позволяет Claude, Cursor, GitHub Copilot и другим MCP-клиентам исследовать и изменять метаданные и BSL, переходить по семантическим ссылкам, управлять отладчиком, проверять проекты и работать с подключенной информационной базой.

Вместо того чтобы воспринимать рабочее пространство EDT как каталог XML- и BSL-файлов, ассистент использует семантическую модель, индексы, валидаторы и службы отладки самой EDT.

> [!IMPORTANT]
> Текущая версия работает на **1C:EDT 2026.2** и **2026.1**. Сборка идет против 2026.1, поэтому один артефакт ставится на обе. Плагин работает везде, где работает EDT; на Windows рассчитаны только описанные ниже скрипты сборки и установки.

## 🎯 Зачем нужен AI-EDT…
