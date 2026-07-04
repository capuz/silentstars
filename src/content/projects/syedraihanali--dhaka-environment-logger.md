---
repo: "syedraihanali/dhaka-environment-logger"
name: "dhaka-environment-logger"
description: "🌤️ Automated hourly logger for Dhaka’s weather, air quality, and UV index — powered by Python, OpenWeatherMap, OpenUV, and GitHub Actions. Saves data monthly in JSON and CSV formats for open environmental analysis."
readmeQualityOk: true
url: "https://github.com/syedraihanali/dhaka-environment-logger"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 19
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-10-12T11:25:51Z"
lastCommitAt: "2026-07-04T22:53:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 46
maintainers: ["syedraihanali"]
openGraphImageUrl: "https://opengraph.githubassets.com/f04a2b753aa59c3e1e11a2a492036f5927949ff53d3d15d33aed835f93f92775/syedraihanali/dhaka-environment-logger"
---

# 🌤️ Dhaka Environmental Data Logger

An automated, open-source system that records **hourly environmental data** for **Dhaka, Bangladesh**, including:

- ☁️ Weather (temperature, humidity, pressure, wind speed)
- 🌫️ Air quality (PM2.5, PM10, CO, NO₂, O₃, AQI)
- 🌞 UV index (ultraviolet radiation level)

The logger runs automatically using **GitHub Actions** and collects data from the **[OpenWeatherMap](https://openweathermap.org/api)** and **[OpenUV](https://www.openuv.io/)** APIs.  
All data is saved in both **JSON** and **CSV** formats, rotated monthly, and publicly available for analysis.

---

## 🧠 Features

✅ Automated hourly updates via GitHub Actions  
✅ Rotates files monthly (e.g. `environment_2025_10.json`)  
✅ Dual format output — JSON & CSV  
✅ Separate folders for clean organization  
✅ 100% free and serverless (no VPS needed)  
✅ Data suitable for analytics, visualization, or research  

---

## 🗂️ Project Structure

```
dhaka-environment-logger/
├── environment_logger.py
├── README.md
├── data/
│   ├── json/
│   │   └── environment_2025_10.json
│   └── csv/
│       └── environment_2025_10.csv
└── .github/
    └── workflows/
        └── environment.yml
```

---…
