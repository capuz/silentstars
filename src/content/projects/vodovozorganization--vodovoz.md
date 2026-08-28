---
repo: "VodovozOrganization/Vodovoz"
name: "Vodovoz"
description: "ERP система для доставки воды"
readmeQualityOk: true
url: "https://github.com/VodovozOrganization/Vodovoz"
language: "C#"
languages: ["C#"]
languagePcts: [99]
stars: 7
forks: 21
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 34
recentReleases: 0
createdAt: "2014-08-13T08:32:26Z"
lastCommitAt: "2026-08-28T12:20:44Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 79
maintainers: ["ArthurProgger", "N-Sem", "SemenSvobodin"]
openGraphImageUrl: "https://opengraph.githubassets.com/16b43909a79af7981b4b544ff9190bbe8826744c61842b15ccfe4fb91eaf58aa/VodovozOrganization/Vodovoz"
---

# Linux
## Для работы оптимизации маршрута, рядом с приложением должны лежать файлы:
Google.OrTools.dll
Google.Protobuf.dll
libGoogle.OrTools.so

В системной /usr/lib64 папке должна быть установлена библиотека libortools.so
Или приложение должно запускаться так LD_LIBRARY_PATH=lib: mono Vodovoz.exe (где lib путь до папки с библиотекой)

## Для работы некоторых отчетов используется Visual Basic код
При открытии таких отчетов при работе под linux может возникать ошибка если не установлен пакет mono-vbnc
Установить: sudo apt-get install mono-vbnc

# Сервер
## Запустить службу рассчета расстояний (OSRM) на сервере можно следующим способом.
1. Заходим на сервер под пользователем admin
1. Убедимся что запущена служба докера 
  `sudo systemctl status docker.service`
2. Переходим в папку с файлами данных службы OSRM
  `cd osrm/`
3. Запускаем сам контейнер
`sudo docker run -t -i -p 5000:5000 -v $(pwd):/osrm osrm/osrm-backend osrm-routed /osrm/RU-LEN.osrm`
