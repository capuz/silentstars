---
repo: "instantcms-dev/instantcms-mcp"
name: "instantcms-mcp"
description: "MCP Server - AI помощник для разработки под InstantCMS"
readmeQualityOk: true
url: "https://github.com/instantcms-dev/instantcms-mcp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 10
forks: 4
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 5
createdAt: "2026-03-05T06:24:33Z"
lastCommitAt: "2026-08-30T09:23:47Z"
lastReleaseAt: "2026-08-30T09:24:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 73
undervaluedScore: 39
maintainers: ["maxisoft-git"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd06d6f383302659af8513768840318418c89743bf3f76d975a6fe00ebfaa7c7/instantcms-dev/instantcms-mcp"
---

# InstantCMS MCP Server

MCP-сервер и набор переносимых AI-workflows для разработки дополнений, виджетов, шаблонов и layout-схем InstantCMS 2.

Сервер предоставляет структурированную базу API InstantCMS, безопасные генераторы, валидатор пакетов, диагностические инструменты и MCP resources. Runtime-данные синхронизированы с официальным репозиторием [`instantsoft/icms2`](https://github.com/instantsoft/icms2), последняя проверенная стабильная версия — **InstantCMS 2.18.2**.

Текущий релиз: [`v1.2.4`](https://github.com/instantcms-dev/instantcms-mcp/releases/tag/v1.2.4). MCP работает автономно: доступ к GitHub нужен только сопровождающим проекта для обновления базы знаний.

### Установка

```bash
npm install @maxisoft/instantcms-mcp
```

Это **первый релиз, опубликованный на центральном npm-реестре** через Trusted Publishing (GitHub Actions OpenID Connect). Пакет `instantcms-mcp` был `npm unpublish`ed в июне 2026, поэтому имя скопировано под scope `@maxisoft`. Для пользователей без доверия к npm также доступен GitHub Release ZIP:

```bash
curl -L -O https://github.com/instantcms-dev/instantcms-mcp/releases/download/v1.2.4/instantcms-mcp-v1.2.4.zip
unzip instantcms-mcp-v1.2.4.zip && cd…
