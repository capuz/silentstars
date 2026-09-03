---
repo: "Reserve-Station/Reserve-Station"
name: "Reserve-Station"
description: "Goob Station, но на русском."
readmeQualityOk: true
url: "https://github.com/Reserve-Station/Reserve-Station"
language: "C#"
languages: ["C#", "Fluent"]
languagePcts: [73, 26]
stars: 22
forks: 60
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 676
recentReleases: 0
createdAt: "2025-05-17T09:16:11Z"
lastCommitAt: "2026-09-03T08:13:12Z"
status: "thriving"
tags: ["funded", "fork_magnet"]
healthScore: 90
undervaluedScore: 70
maintainers: ["Ceterai", "GoobAutomatedBot", "lermal"]
openGraphImageUrl: "https://opengraph.githubassets.com/173251a07ae9ebcff4efc4661b80483d739af6631cfef11c79d9077a6a3aeada/Reserve-Station/Reserve-Station"
fundingLinks: ["CUSTOM:https://boosty.to/reserve-station"]
---

</div>

---

**Резерв** - это русскоязычный форк [Goob Station](https://github.com/Goob-Station/Goob-Station), который, в свою очередь, является форком Space Station 14.

**Space Station 14** - это ремейк SS13, который работает на собственном движке [Robust Toolbox](https://github.com/space-wizards/RobustToolbox), написанном на C#.
Больше про текущую сборку Robust Toolbox, используемую Reserve Station, можно узнать в [Robust Toolbox README](https://github.com/Reserve-Station/Reserve-Station/blob/HEAD/RobustToolbox/README.md).

## Сборка

Следуйте [гайду от Space Wizards](https://docs.spacestation14.com/en/general-development/setup/setting-up-a-development-environment.html) по настройке рабочей среды, но учитывайте, что наши репозитории отличаются и некоторые вещи могут отличаться.
Мы предлагаем несколько скриптов, показанных ниже, чтобы облегчить работу.

### Необходимые зависимости

> - Git
> - .NET SDK 10.0.100

### Windows

> 1. Склонируйте данный репозиторий
> 2. Запустите `git submodule update --init --recursive` в командной строке, чтобы скачать движок игры
> 3. Запускайте `Scripts/bat/buildAllDebug.bat` после любых изменений в коде проекта
> 4. Запустите…
