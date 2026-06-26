---
repo: "Nadav-Fux/claude-2x-statusline"
name: "claude-2x-statusline"
description: "A minimal Israel-timezone status line for Claude Code — know when the 2X doubled-usage promotion is active"
url: "https://github.com/Nadav-Fux/claude-2x-statusline"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [46, 22]
stars: 22
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-17T08:14:20Z"
lastCommitAt: "2026-06-26T23:41:20Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 76
undervaluedScore: 31
maintainers: ["Nadav-Fux"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4cac8bceb27f394c14b8af55535a052ac9dc2773345e565c40928feb3c841ac/Nadav-Fux/claude-2x-statusline"
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
