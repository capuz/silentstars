---
repo: "Veselkin/yandex-disk-downloader"
name: "yandex-disk-downloader"
description: "Download folders from Yandex Disk via public link — no authorization, no paid subscription, no third-party libraries."
originalDescription: "Скачивание папок с Яндекс Диска по публичной ссылке — без авторизации, без платной подписки, без сторонних библиотек."
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/Veselkin/yandex-disk-downloader"
language: "Dart"
languages: ["Dart", "Python"]
languagePcts: [41, 33]
topics: ["cli", "downloader", "no-dependencies", "python", "yandex", "yandex-disk"]
stars: 19
forks: 2
openIssues: 5
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 3
createdAt: "2026-06-08T04:14:05Z"
lastCommitAt: "2026-11-15T11:23:51Z"
lastReleaseAt: "2026-11-15T10:29:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 27
maintainers: ["Veselkin", "IgorA100"]
openGraphImageUrl: "https://opengraph.githubassets.com/33c82e98959236d1c8d16f27c392c31b7a56c478261fc847c9e93b5834085365/Veselkin/yandex-disk-downloader"
---

# Yandex Disk downloader

Up to date after Yandex [disabled free sync in the desktop app](https://habr.com/ru/news/1042970/) starting June 3, 2026.

The project includes two independent implementations:

- **Console downloader (Python)** — for automated downloading of large folders and archives.
- **Graphical application (Flutter)** — for Windows and Android, with progress display and the ability to resume downloads.

## Console Python script

A console Python script for reliably downloading large public folders and single files from Yandex Disk without needing authorization or OAuth tokens. The project is optimized for working with archives of many thousands of items and is resilient to network failures, speed limits, and API limits.

### Key features

- **No authorization.** Works with standard public links (`disk.yandex.ru/d/...`) without creating apps or obtaining tokens.

- **Folders and single files.** The resource type is determined automatically from the link's metadata.

- **Handling rate limits (429 Too Many Requests).** If the server sent a `Retry-After` header, the script waits the specified time plus a random 5–10 s. Without the header, the pause grows from…
