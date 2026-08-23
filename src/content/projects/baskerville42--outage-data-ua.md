---
repo: "Baskerville42/outage-data-ua"
name: "outage-data-ua"
description: "Публічне сховище даних про планові відключення електроенергії в Україні."
readmeQualityOk: true
url: "https://github.com/Baskerville42/outage-data-ua"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [82]
stars: 55
forks: 7
openIssues: 0
closedIssues: 8
watchers: 5
contributors: 1
recentReleases: 0
createdAt: "2025-11-06T07:20:46Z"
lastCommitAt: "2026-08-23T04:08:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 45
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c00e761f2260889b6fca4f64b5b90f3ba7546f47051fbbe1693c700fc4be7644/Baskerville42/outage-data-ua"
---

# outage-data-ua

Публічне сховище та інструменти для автоматичного збирання, парсингу, візуалізації (HTML) і автоматичної генерації PNG‑зображень графіків планових/аварійних відключень електроенергії в Україні.

Проєкт отримує дані з відкритих вебсторінок постачальників та зберігає їх у JSON «як є» у директорії `data/`. Далі ці дані відображаються у фіксованому шаблоні HTML і конвертуються у PNG‑зображення, які зберігаються у `images/<region>/gpv-x-x.png`.

---

## Формат даних
Кожен регіон зберігається у файлі `data/<region>.json`. Базова структура (скорочено):

```json
{
  "regionId": "kyiv",
  "regionAffiliation": "м. Київ",
  "lastUpdated": "2025-11-06T11:41:56.430Z",
  "fact": { "updateFact": "06.11.2025 09:09" },
  "preset": { "updateFact": "04.11.2025 18:00" },
  "lastUpdateStatus": { "status": "parsed", "ok": true, "code": 200, "message": null, "at": "2025-11-06T11:41:56.430Z", "attempt": 5 },
  "meta": { "schemaVersion": "1.0.0", "contentHash": "..." }
}
```

- `preset` — планові відключення на тиждень для кожної групи (тижневий шаблон). Зберігається «як є», без нормалізації структури.
- `fact` — фактичні/аварійні відключення на сьогодні та завтра для кожної групи. Також…
