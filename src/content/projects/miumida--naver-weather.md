---
repo: "miumida/naver_weather"
name: "naver_weather"
description: "Naver Weather Sensor for Home Assistant #HA"
originalDescription: "Naver Weather Sensor for Home Assistant #HA"
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/miumida/naver_weather"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 45
forks: 35
openIssues: 5
closedIssues: 13
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2020-05-07T12:33:32Z"
lastCommitAt: "2026-07-11T05:58:30Z"
lastReleaseAt: "2020-05-25T13:55:21Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 39
maintainers: ["miumida"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac4fda854a61f0f5a3628463872f294d86e466399729ddd3a106fc2b650cd4b1/miumida/naver_weather"
---

# Naver Weather for HA

Naver Weather for Home Assistant. It adds a sensor by crawling the Naver Weather webpage. Since it is based on crawling, the part called by the sensor has been minimized.

It supports integration components, and when added through the integration component, one device and 25 components are added.
It supports Naver Weather for multiple regions. You can register more than one region, but please refrain from registering too many regions.
Naver Weather information is updated every 10 minutes. 10 minutes is sufficient, so please resist reducing the interval further!

- senseor
- weather

## Version history
| Version | Date        | Description              |
| :-----: | :---------: | --------------------------------------------------------------------------------------- |
| v1.0.0  | 2020.05.07  | First version  |
| v2.0.0  | 2021.04.12  | Renewal - Integration component applied |
| v2.1.0  | 2021.09.19  | API modification due to webpage redesign |
| v2.2.0 | 2022.07.07  | Current weather, current weather information organized + current weather information output format changed |
| v2.3.0 | 2023.10.12  | Response to WeatherEntity update |
| v2.3.3 | 2024.02.27…
