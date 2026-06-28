---
repo: "luxxuria/harvester"
name: "harvester"
description: "Агрегатор и валидатор VLESS-конфигураций на Rust. Автоматическая проверка Ping/Speed, фильтрация по ASN и создание оптимизированных списков прокси."
url: "https://github.com/luxxuria/harvester"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["free-vpn", "free-vpn-key", "free-vpn-keys", "free-vpn-russia", "russia-vpn", "v2ray", "v2rayng", "vless", "vless-reality", "vpn"]
stars: 34
forks: 1
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-03-22T06:15:50Z"
lastCommitAt: "2026-06-28T03:11:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 39
maintainers: ["luxxuria"]
openGraphImageUrl: "https://opengraph.githubassets.com/0a6fe3a02173a7ddf5775989658d80ab89a1f7d15cbcfe5b085ef91fc13286cc/luxxuria/harvester"
---

## CDN Mirrors

If `github` is unreachable or blocked in your country, you can access any file by replacing the domain in the URL using the templates below:

* **jsDelivr:** `https://cdn.jsdelivr.net/gh/luxxuria/harvester@main/FILENAME.txt`
* **GitHack:** `https://raw.githack.com/luxxuria/harvester/main/FILENAME.txt`

*Replace `FILENAME.txt` with: `ping_tested.txt`, `speed_tested.txt`, `top_600.txt`, or `non_ru.txt`.*

<br>

# VLESS Configuration Lists

Данный репозиторий содержит списки верифицированных конфигураций VLESS, прошедших многоэтапную фильтрацию. Обновление данных происходит в автоматическом режиме.

## Состав данных

В репозитории представлены три основных файла, различающихся по степени и методу валидации:

### 1. ping_tested.txt
* **Статус**: Базовая проверка.
* **Метод**: Узлы, прошедшие валидацию структуры URI и первичный тест на доступность порта (TCP Check) и сетевой отклик.
* **Назначение**: Максимально широкий выбор доступных узлов.

### 2. speed_tested.txt
* **Статус**: Расширенная проверка.
* **Метод**: Узлы, прошедшие успешную сессию передачи данных. Валидация включает установку соединения и проверку скорости загрузки тестового файла.
* **Назначение**:…
