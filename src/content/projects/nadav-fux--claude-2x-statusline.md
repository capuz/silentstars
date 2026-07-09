---
repo: "Nadav-Fux/claude-2x-statusline"
name: "claude-2x-statusline"
description: "A minimal Israel-timezone status line for Claude Code — know when the 2X doubled-usage promotion is active"
readmeQualityOk: true
url: "https://github.com/Nadav-Fux/claude-2x-statusline"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [52, 24]
stars: 22
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-17T08:14:20Z"
lastCommitAt: "2026-07-09T20:44:58Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 44
maintainers: ["Nadav-Fux"]
openGraphImageUrl: "https://opengraph.githubassets.com/72cca25d44228e7eda8c407e3defbc2b2628179bd41c070d940e368eb01ef1cd/Nadav-Fux/claude-2x-statusline"
---

# claude-2x-statusline

### v2.2 &mdash; Modular Statusline for Claude Code

Peak hours &bull; Rate limits &bull; Burn rate &bull; Context &bull; Git &mdash; all live, all auto-updating.

**[Live Preview & Tier Picker](https://statusline.nvision.me)** &nbsp;&bull;&nbsp; by [Nadav Fux](https://github.com/Nadav-Fux)

<br>

</div>

---

## עברית

**ניווט מהיר:**
[מה זה?](#מה-זה) &bull;
[3 רמות תצוגה](#3-רמות-תצוגה) &bull;
[התקנה](#התקנה--30-שניות) &bull;
[מדדים ו-Rolling Window](#מדדים-ו-rolling-window) &bull;
[Narrator Hook](#narrator-hook--הודעה-מעל-הפרומפט) &bull;
[פקודת /explain](#פקודת-explain) &bull;
[עדכון אוטומטי](#עדכון-אוטומטי-מרחוק) &bull;
[Telemetry](#telemetry--שקיפות-מלאה) &bull;
[Windows](#תמיכה-ב-windows) &bull;
[בדיקות](#בדיקות)

---

### מה זה?

תוסף ל-Claude Code שמציג **שורת סטטוס חיה** בתחתית הטרמינל.
רואים במבט אחד: האם עכשיו שעות עומס, כמה context נשאר, מה ה-rate limit, כמה עולה הסשן, ומה מצב ה-git.

**הקילר-פיצ'ר:** שעות העומס מתעדכנות אוטומטית מ-GitHub &mdash; אם Anthropic ישנו את המדיניות, אתה מקבל את העדכון בלי לגעת בתוסף.

### 3 רמות תצוגה

**Minimal** &mdash; שורה אחת, מינימלי ונקי:

פיק/לא-פיק, מודל, אחוז context, אחוז מכסה 5 שעות, סביבה, git.…
