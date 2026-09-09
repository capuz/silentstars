---
repo: "rine77/homeassistantedupage"
name: "homeassistantedupage"
description: "A Home Assistant integration of the EduPage Schooling System."
readmeQualityOk: true
url: "https://github.com/rine77/homeassistantedupage"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["api", "edupage", "homeassistant", "grades", "school", "students", "entities", "sensors", "service"]
stars: 22
forks: 4
openIssues: 2
closedIssues: 50
watchers: 5
contributors: 6
recentReleases: 0
createdAt: "2024-03-18T18:16:29Z"
lastCommitAt: "2026-09-09T08:20:55Z"
lastReleaseAt: "2024-11-25T09:37:11Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 98
undervaluedScore: 52
maintainers: ["rine77", "Koky05"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d3a44e21830c4641447598315277ae6122d8abff08052766e99d8085ed11c1b/rine77/homeassistantedupage"
discussionCount: 15
---

# EduPage for Home Assistant

EduPage for Home Assistant is an unofficial custom integration for the [EduPage](https://www.edupage.org/) school information system. It imports school data into Home Assistant so it can be displayed in calendars and dashboards or used in templates, scripts, and automations.

The integration is based on the [edupage-api](https://github.com/EdupageAPI/edupage-api) Python library.

> [!IMPORTANT]
> This project is not affiliated with or supported by EduPage. The information available to Home Assistant depends on the features enabled by the school and the permissions of the EduPage account.

## Features

- Lesson calendar with upcoming and cancelled lessons
- Canteen calendar for snacks, lunches, and afternoon snacks
- Configurable per-subject grade sensors
- Notification sensor covering all available EduPage event types
- Structured, bounded notification data for dashboards and automations
- Sensors for timetable changes and missing teachers
- Sensor showing the next school-bell time
- First- and second-term grade-average sensors
- Services for choosing, cancelling, and rating meals
- Service for sending EduPage messages
- Multiple students and EduPage…
