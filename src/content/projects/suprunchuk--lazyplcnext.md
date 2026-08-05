---
repo: "suprunchuk/LazyPLCNext"
name: "LazyPLCNext"
description: "TUI , который автоматически открывает проекты PLCnext Engineer с учётом их версии и структуры. "
readmeQualityOk: true
url: "https://github.com/suprunchuk/LazyPLCNext"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 8
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-13T08:07:38Z"
lastCommitAt: "2026-08-05T06:07:05Z"
lastReleaseAt: "2026-01-14T06:01:35Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 65
undervaluedScore: 22
maintainers: ["suprunchuk"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c3e80c44e3fe5b7c61f87e098f437ee5e673d69a36e7735f178a245cf5c33fa/suprunchuk/LazyPLCNext"
---

## 🚀 LazyPLCNext

### **LazyPLCNext** — это умный CLI-лаунчер для проектов Phoenix Contact PLCnext Engineer.

Больше не нужно вручную искать, какой версией `IDE` открывать старый проект. Лаунчер автоматически сканирует проекты, определяет их версию (даже внутри архивов) и запускает соответствующую установленную версию PLCnext Engineer.

## ✨ Возможности

### 🕵️ Умное сканирование:

- Распознает проекты в архивах (.pcwex).
- Распознает распакованные проекты (папки с Solution.xml).
- Поддерживает файлы-ссылки (.pcwef).

### 🧠 Автоопределение версии: 

Парсит XML-файлы проекта, чтобы узнать точную версию ProductVersion, в которой он был создан.

### ⚡ Автозапуск: 

Находит нужную версию IDE в `C:\Program Files\PHOENIX CONTACT` и запускает проект без лишних кликов.

### 🛡️ Контроль процессов: 

Если запущена неверная версия IDE, лаунчер предложит автоматически закрыть её перед запуском новой, чтобы избежать конфликтов.

### 🖥️ TUI Интерфейс: 

Удобный и быстрый консольный интерфейс (на базе Bubble Tea) с фильтрацией и навигацией клавиатурой.

### 🔄 Автообновление: 

Лаунчер сам проверяет наличие новых версий на GitHub, скачивает их и перезапускается одной кнопкой.

## 📸…
