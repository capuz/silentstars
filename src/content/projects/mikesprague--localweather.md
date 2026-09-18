---
repo: "mikesprague/localweather"
name: "localweather"
description: ":sun_behind_small_cloud: Minimalist local weather app powered by Visual Crossing"
readmeQualityOk: true
url: "https://github.com/mikesprague/localweather"
homepage: "https://localweather.dev"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [76]
topics: ["weather", "weather-app", "weather-forecast", "html-css-javascript", "single-page-app", "pwa", "progressive-web-app", "cloudflare-pages", "cloudflare-pages-functions", "visual-crossing"]
stars: 17
forks: 12
openIssues: 0
closedIssues: 9
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2018-04-29T20:04:25Z"
lastCommitAt: "2026-09-18T14:03:04Z"
lastReleaseAt: "2019-02-13T19:19:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 78
maintainers: ["dependabot[bot]", "mikesprague", "anupamme"]
openGraphImageUrl: "https://opengraph.githubassets.com/a745038ab35623040fede28896e7e769fa95242ac12612c8690118b41444a281/mikesprague/localweather"
---

# LocalWeather.dev

Minimalist local weather app powered by Visual Crossing

## Features

- Progressive Web App
  - ServiceWorker used for caching assets
  - localStorage used to cache API requests in 10 minute intervals
  - App is available when offline or with intermittent connections
    - Automatically checks for new data when back online (or connection stabilizes)
  - Responsive design that scales for all device types
  - App and all assets served over HTTPS
  - Can add app to homescreen on mobile devices that support PWAs
  - Latest [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/) scores (updates every 6 hours): <https://mikesprague.github.io/localweather/lighthouse-report.html>
- Geolocation from browser used for location (latitude/longitude)
  - Uses the [ask permission responsibly](https://developers.google.com/web/fundamentals/native-hardware/user-location/#ask_permission_responsibly) philosophy
    - Lets users know their location info will be used
    - Asks user to initiate process to approve access to location
    - PLANNED: Fall back to IP address geolocation service
- [Google Maps Reverse Geocoding…
