---
repo: "chihsuan/reservoir-visual"
name: "reservoir-visual"
description: "Taiwan reservoir data visualization"
originalDescription: "台灣水庫資料視覺化"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/chihsuan/reservoir-visual"
homepage: "http://water.taiwanstat.com/"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [40, 39]
stars: 100
forks: 25
openIssues: 2
closedIssues: 6
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2015-03-20T18:50:20Z"
lastCommitAt: "2026-07-09T20:44:26Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 95
undervaluedScore: 49
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/74c354132c90bcd49477e0fa9d0898bf007875a075b582b43e635fd107051156/chihsuan/reservoir-visual"
---

# reservoir-visual

Taiwan reservoir water level visualization.

## Data Update

Reservoir data is updated daily via a GitHub Actions workflow that scrapes the latest data from the government website using [TaiwanReservoirAPI](https://github.com/chihsuan/TaiwanReservoirAPI).

To update manually:

1. Start the API server:
   ```
   cd TaiwanReservoirAPI && node app.js
   ```
2. Run the update script:
   ```
   python3 update_data.py
   ```

## Thanks

Thanks to washwashsleep members for [TaiwanReservoirAPI](https://github.com/washwashsleep/TaiwanReservoirAPI).

## License

MIT
