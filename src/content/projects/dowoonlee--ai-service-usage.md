---
repo: "dowoonlee/ai-service-usage"
name: "ai-service-usage"
description: "macOS floating widget showing Claude (Pro/Max) and Cursor (Pro/Ultra) subscription usage"
originalDescription: "macOS floating widget showing Claude (Pro/Max) and Cursor (Pro/Ultra) subscription usage"
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/dowoonlee/ai-service-usage"
language: "Swift"
languages: ["Swift"]
languagePcts: [85]
stars: 6
forks: 3
openIssues: 0
closedIssues: 29
watchers: 0
contributors: 7
recentReleases: 10
createdAt: "2026-04-24T08:10:36Z"
lastCommitAt: "2026-07-07T06:40:02Z"
lastReleaseAt: "2026-04-27T11:13:39Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 100
undervaluedScore: 71
maintainers: ["dowoonlee", "github-actions[bot]", "Joripje"]
openGraphImageUrl: "https://opengraph.githubassets.com/6628dcb7fe41ea803f65c78da79de61cd5448ab51d07afcf53cd0e5c68e7c3a7/dowoonlee/ai-service-usage"
---

# AI Usage

Claude.ai(Max/Pro), Cursor(Ultra/Pro), Codex(ChatGPT Plus/Pro) subscription usage is displayed in a **always floating small window** macOS app.


Remaining quota, countdown to the next reset, and current usage prediction at a glance. As you use it, pet gacha coins are accumulated, and 84 types of pets walk on the chart.

## Features

**Usage Dashboard**
- Claude: 5-hour window %, weekly %, reset countdown, own sparkline
- Cursor: Monthly cumulative $ (Ultra) / number of requests (Pro), reset countdown, event-based cumulative graph for this month
- Codex: 5-hour window / weekly / monthly usage rate — automatically linked if `codex login` is successful (section displayed if collected successfully at least once)
- Automatic plan detection (e.g., `Max 20x`, `Ultra`, `Pro`) to display header badge
- Usage pace prediction: how many % will be reached before reset at the current speed / remaining time until the limit
- Threshold notifications: macOS notifications when reaching 80% / 95% (once per cycle)
- Menu bar widget: usage rate % + mini chart + walking pets (select source from Claude/Cursor/Codex)
- Terminal dashboard (TUI): run in htop style with the `--tui` flag
- Main…
