---
repo: "nicholaswilde/cyd-weather-station"
name: "cyd-weather-station"
description: "⛅ A beautiful Catppuccin-themed weather station and desk clock for the ESP32 Cheap Yellow Device (CYD) using LVGL v8 and Open-Meteo/OWM. 📟"
readmeQualityOk: true
url: "https://github.com/nicholaswilde/cyd-weather-station"
language: "C++"
languages: ["C++", "C"]
languagePcts: [52, 41]
topics: ["cyd", "esp32", "esp32-2432s028", "weather-station", "cheap-yellow-display"]
stars: 22
forks: 3
openIssues: 8
closedIssues: 41
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-07T19:30:32Z"
lastCommitAt: "2026-11-09T03:30:20Z"
lastReleaseAt: "2026-07-27T14:03:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 89
undervaluedScore: 43
maintainers: ["nicholaswilde"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ebfc5ba89634997308737b28f15d58b5d8ef8978c7216cd7b947efeebed20ae/nicholaswilde/cyd-weather-station"
fundingLinks: ["GITHUB:https://github.com/nicholaswilde"]
---

# :partly_sunny: CYD Weather Station :pager:

A beautiful, configurable real-time weather station and desk clock built for the **ESP32 Cheap Yellow Device (CYD)** family (such as the 2.8" Resistive **ESP32-2432S028R**, 2.8" Capacitive **ESP32-2432W328C**, and 3.5" Capacitive **ESP32-3248S035C**) utilizing the **LVGL v8** graphics library, **Open-Meteo / OpenWeatherMap APIs**, and the **Catppuccin Color Theme**.

> [!WARNING]
> This project is currently in a `v0.X.X` development stage. Features and configurations are subject to change, and breaking changes may be introduced at any time.

## :star: Features

- **Dual API Integration**: 
  - **Open-Meteo API**: Out-of-the-box fallback — no API key required. Automatically fetches 24-hour rolling hourly forecasts and 3-day daily forecasts in the user's local timezone.
  - **OpenWeatherMap API**: Automatically used if an API key is configured.
- **Location Resolution & City Name Footer**:
  - Displays `Last Update: <time> | <city name>` centered at the bottom of the screen.
  - **Zip Code Geocoding**: Enter a US Zip Code (e.g. `90210`); coordinates are resolved on boot.
  - **IP Geolocation Fallback**: Automatically falls back to…
