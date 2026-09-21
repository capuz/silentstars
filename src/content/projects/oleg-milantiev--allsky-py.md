---
repo: "oleg-milantiev/allsky.py"
name: "allsky.py"
description: "Python+PHP scripts for AllSky camera from Raspberry + ZWO / QHY / Starlight / .... any INDI"
originalDescription: "Питон+PHP скрипты для AllSky камеры из Raspberry + ZWO / QHY / Starlight / .... любой INDI"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/oleg-milantiev/allsky.py"
language: "Python"
languages: ["Python", "C"]
languagePcts: [44, 22]
stars: 8
forks: 3
openIssues: 42
closedIssues: 93
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2019-02-24T17:39:13Z"
lastCommitAt: "2026-09-21T09:13:23Z"
status: "thriving"
tags: ["legacy_hero", "under_pressure"]
healthScore: 94
undervaluedScore: 41
maintainers: ["oleg-milantiev"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e6de1f2bc73c27c04b40c4cc0ac023d07f2bfb82ff5512ed805250db104f823/oleg-milantiev/allsky.py"
---

English version below.

# allsky.py

Python+PHP scripts for AllSky camera from Raspberry/Orange Pi + ZWO / QHY / Starlight / .... any INDI.

Tested on hardware:
* Raspberry Pi 3 + Datyson t7c / t7m (ZWO ASI 120 driver)
* Raspberry Pi 3 + ZWO ASI 178c
* Orange Pi PC + Starlight Oculus / QHY5 old b/w cam (via fxload and INDI qhy)
* Tinkerboard / S + QHY5-II
* i7 x64 + Starlight Oculus

# Capabilities

## Currently

Currently the project can:
* support any INDI cameras found through list.py;
* adjust exposure from minimum to maximum set, trying to keep the average over the middle part of the frame within a specified range (for example, 55...150 ADU);
* record files once a minute to a local web server folder, naming them by date / time;
* publish image and / or sensor data to the public project website;
* provide frames with timestamp, i.e., date and time notation (configurable) and other annotations;
* keep up-to-date a file (symlink) of the last captured frame;
* delete old files (exceeding the number of days specified in the config);
* save data on exposure / average, sensor data (temperature, humidity, pressure, ...) every minute;
* create video and…
