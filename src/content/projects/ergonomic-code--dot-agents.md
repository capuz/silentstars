---
repo: "ergonomic-code/dot-agents"
name: "dot-agents"
description: "Эргономичный подход для ИИ агентов"
readmeQualityOk: true
url: "https://github.com/ergonomic-code/dot-agents"
homepage: "https://ergowiki.azhidkov.pro/docs/about-ea/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["ai", "kotlin", "spring-boot", "tdd", "ergonomic-code"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-03-22T04:55:09Z"
lastCommitAt: "2026-09-08T08:16:22Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 50
maintainers: ["d-r-q"]
openGraphImageUrl: "https://opengraph.githubassets.com/57431f3bc8b715958a2f426b9ac93c14bc9dbf66addfad1c5474a7ec447c1f9a/ergonomic-code/dot-agents"
---

# ErgocodeAI Agent Framework

ErgocodeAI учит ваших ИИ-агентов работать по [Эргономичному подходу](https://ergowiki.azhidkov.pro/):

1. вести разработку через тесты (TDD);
2. писать быстрые, надёжные и устойчивые к рефакторингу тесты;
3. разделять сложную логику (бизнес-логику, вычисления, трансформации) и ввод-вывод (действия, эффекты);
4. декомпозировать систему на небольшие сфокусированные модули с низкой сцепленностью;

> [!WARNING]
> Фреймворк находится в активной разработке.
> Структура, контракты скиллов и процесс установки могут изменяться без обратной совместимости.

> [!NOTE]
> На данный момент соглашения, примеры и готовые процессы в первую очередь ориентированы на Kotlin и Spring Boot.
> Общие архитектурные и процессные идеи не зависят от стека, но их применение с другими технологиями потребует адаптации контекста.

> [!NOTE]
> На данный момент фреймворк ориентирован в первую очередь на Codex и модели OpenAI.

## Варианты использования фреймворка

Фреймворк предусматривает два способа использования:

1. Prompt-driven — вы ставите задачи как привыкли, агент автоматичски применяет релевантные соглашения фреймворка.
2. Skill-driven — вы явно выбираете скилл для решения…
