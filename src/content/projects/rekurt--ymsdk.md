---
repo: "rekurt/ymsdk"
name: "ymsdk"
description: "Lightweight Go SDK for Yandex Messenger Bot API — type-safe client with retry, rate-limit handling, and service-oriented architecture"
readmeQualityOk: true
url: "https://github.com/rekurt/ymsdk"
homepage: "https://pkg.go.dev/github.com/rekurt/ymsdk"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["api-client", "bot", "bot-api", "chatbot", "exponential-backoff", "go", "go-sdk", "golang", "messenger", "rate-limiting"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-12-08T12:53:48Z"
lastCommitAt: "2026-09-02T08:05:04Z"
lastReleaseAt: "2026-04-08T08:30:10Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 66
undervaluedScore: 25
maintainers: ["rekurt", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/aaf0ecaee8b3eb0ab6f157c089ec5894ce682cc8c1c2e82612d10f6105443da1/rekurt/ymsdk"
discussionCount: 0
---

# Yandex Messenger Go SDK (ymsdk)

[English](https://github.com/rekurt/ymsdk/blob/HEAD/README.en.md)

Легковесный Go-клиент для Yandex Messenger Bot API с типобезопасными моделями, встроенным retry и сервисами для всех 28 методов API. Документация: https://pkg.go.dev/github.com/rekurt/ymsdk

## Возможности

- **Типобезопасные модели** — `ChatID`, `UserLogin`, `MessageID` и другие типы предотвращают ошибки на этапе компиляции
- **Безопасные повторы** — экспоненциальный backoff с jitter и автоматический ключ идемпотентности `payload_id` для `sendText`, `sendSticker`, `sendSystemMessage` и `createPoll`, чтобы повторная попытка не отправила сообщение дважды. Остальные отправки — загрузки (`sendFile`, `sendImage`, `sendGallery`) и пересылки по `file_id` (`shareFile`, `shareImage`, `shareGallery`) — ключа идемпотентности в API не имеют, поэтому их повтор может создать дубль
- **Rate limit** — автоматическое соблюдение `Retry-After` заголовков API
- **Сервис-ориентированная архитектура** — отдельные пакеты для сообщений, чатов, опросов, обновлений и пользователей
- **Polling и Webhooks** — устойчивый цикл `Run` и webhook-обработчик, который отвечает мгновенно и дедуплицирует повторные…
