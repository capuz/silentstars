---
repo: "Lomuss33/GermanCro"
name: "GermanCro"
description: "Inspired by Elon.io, a simple HTML website with integrated database to learn German through Croatian and English."
readmeQualityOk: true
url: "https://github.com/Lomuss33/GermanCro"
language: "JavaScript"
languages: ["JavaScript", "CSS"]
languagePcts: [49, 48]
stars: 59
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-02-25T20:45:38Z"
lastCommitAt: "2026-09-11T08:15:37Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 74
undervaluedScore: 24
maintainers: ["Lomuss33"]
openGraphImageUrl: "https://opengraph.githubassets.com/f03b23d433d6aaecaaf8ab402a53035e9343b3c0203c627b3e96e99d247d41e8/Lomuss33/GermanCro"
---

# GermanCro

GermanCro is a browser-based German trainer with Croatian and English support. The learner sees two prompt languages, types the German answer, and gets live character-by-character feedback.

## Current card model

The vocabulary deck now uses a structured card schema:

```json
{
  "de": "das Auto",
  "hr": "auto",
  "en": "car",
  "topic": "vehicles",
  "subcategory": "Nomen",
  "scope": "all"
}
```

Field meanings:

- `de`: German answer the learner types
- `hr`: Croatian prompt
- `en`: English support gloss
- `topic`: top-level content group used for session filtering
- `subcategory`: grammar or content type shown on the card badge
- `scope`: card availability mode

Current built-in topics:

- `basics`
- `vehicles`
- `nature`
- `food`
- `travel`
- `work`
- `health`
- `people`
- `shopping`
- `developertech`
- `itnetwork`
- `agile_stakeholder`
- `it_ops`
- `personal_lms`
- `db_workplace`

Current subcategories:

- `Nomen`
- `Verb`
- `Adjektiv`
- `Adverb`
- `Präposition`
- `Konjunktion`
- `Ausdruck`
- `Satz`

Current scopes:

- `all`: shared card for all three learning modes
- `de`: DE-mode specific
- `hr`: HR-mode specific
- `gb`: GB-mode specific

The shipped deck…
