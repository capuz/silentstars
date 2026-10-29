---
repo: "Haluska77/regulus-ha"
name: "regulus-ha"
description: "Regulus integration to Home Assistant"
readmeQualityOk: true
url: "https://github.com/Haluska77/regulus-ha"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["homeassistant", "integration", "python", "hacs"]
stars: 6
forks: 7
openIssues: 2
closedIssues: 5
watchers: 5
contributors: 6
recentReleases: 0
createdAt: "2025-05-25T13:15:14Z"
lastCommitAt: "2026-10-29T12:25:57Z"
lastReleaseAt: "2026-07-12T20:23:59Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 87
undervaluedScore: 83
maintainers: ["Haluska77", "jkremlacek", "radkul"]
openGraphImageUrl: "https://opengraph.githubassets.com/eab69e5eddd95d18268658f7d8b660c67b9ec979a778180eb2869e3fbf857d40/Haluska77/regulus-ha"
discussionCount: 2
---

# Regulus Heat Pump Integration
This repository makes integration of Regulus Heat Pumps into Homeassistant. Requires running heat pump connected to local network (obtaining local IP address) and basic login credentials for Regulus app provided by your seller.
Integration provides sensors (sensor and binary_sensor) and controls (number and switch) for controlling heat pump over the Homeassistant. 

## Supported versions
### IR12 
- 04.10 (thanks to [@ondrey1000](https://github.com/ondrey1000))
### IR14 
- 1.0.5.0 (thanks to [@grecoit](https://github.com/grecoit))
- 1.0.6.0 (thanks to [@radkul](https://github.com/radkul))
- 1.0.7.0 (thanks to [@petrrybar111](https://github.com/petrrybar111))
- 1.0.10.0
- 1.0.10.107 (thanks to [@honzito](https://github.com/honzito))
- 1.0.11.0 (thanks to [@petrmac](https://github.com/petrmac))
- 1.0.11.4 (thanks to [@cwm77](https://github.com/cwm77))
- 1.0.11.16 (thanks to [@grecoit](https://github.com/grecoit), [@jkremlacek](https://github.com/jkremlacek))

Any other versions are welcome by PR.

## Installation
### HACS (Recommended)
1. Ensure that HACS is installed
2. Open HACS
3. Search for "Regulus" and download the repository
4. Restart Home…
