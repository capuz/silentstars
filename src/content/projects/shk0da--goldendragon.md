---
repo: "Shk0da/GoldenDragon"
name: "GoldenDragon"
description: "Trading Bot for Tinkoff Investing API"
readmeQualityOk: true
url: "https://github.com/Shk0da/GoldenDragon"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 5
forks: 3
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2021-02-10T17:02:59Z"
lastCommitAt: "2026-09-18T08:19:10Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 90
undervaluedScore: 79
maintainers: ["Shk0da"]
openGraphImageUrl: "https://opengraph.githubassets.com/92d2893acd718fdc75ea9507749e40ed1cd5c996f596c775ad05c9de6a0dbdad/Shk0da/GoldenDragon"
---

# GoldenDragon

Алгоритмическая торговая система для **Тинькофф Инвестиции** (MOEX). Реализована на Java 11 и использует gRPC API.

## Возможности

- Многопоточный движок стратегий с пулом на каждый тикер
- Money management с адаптивным сайзингом, risk manager и kill switch
- Управляемые SL/TP алгоритмы (проценты, ATR, уровни поддержки/сопротивления)
- Cash parking: TMON@ (Tinkoff ETF)
- Сбор исторических данных с Tinkoff
- Бэктестинг с реалистичным моделированием исполнения ордеров

## Стратегии

| Стратегия | Описание |
|---|---|
| `UnifiedStrategy` | Основная стратегия с настраиваемым режим-фильтром и управляемыми SL/TP алгоритмами |

### Live-only стратегии (не участвуют в бэктесте)

| Стратегия | Описание |
|---|---|
| `TradeCouncilStrategy` | AI-стратегия с LLM-дебатами: 3 агента (Analyst, Trader, Risk Manager) обсуждают сделку, арбитр принимает финальное решение. Уровни поддержки/сопротивления на основе значимых разворотов цены (2+ касания). Работает только в реальном времени, не тестируется через бэктест |

## Архитектура

```
src/main/java/com/github/shk0da/goldendragon/
├── GoldenDragon.java          # точка входа, диспетчер стратегий
├── config/                   #…
