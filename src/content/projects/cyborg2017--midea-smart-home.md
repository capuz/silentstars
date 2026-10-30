---
repo: "Cyborg2017/midea_smart_home"
name: "midea_smart_home"
description: "Integrates Midea smart appliances into Home Assistant over the local LAN. Supports air conditioners, range hoods, water heaters, refrigerators, dishwashers, washing machines, air purifiers, fans, robot vacuums, and 37 device categories in total."
originalDescription: "美的智能设备局域网集成接入home assistant，支持: 空调、油烟机、热水器、冰箱、洗碗机、洗衣机、空气净化器、风扇、扫地机器人等37种品类设备"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Cyborg2017/midea_smart_home"
language: "Python"
languages: ["Python", "Lua"]
languagePcts: [69, 31]
topics: ["home-assistant", "homeassistant", "midea", "custom-integration", "hacs-integration"]
stars: 131
forks: 34
openIssues: 0
closedIssues: 36
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2026-02-20T13:05:18Z"
lastCommitAt: "2026-10-30T11:02:37Z"
lastReleaseAt: "2026-04-21T05:58:58Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 37
maintainers: ["Cyborg2017", "codex", "zqh19861020"]
openGraphImageUrl: "https://opengraph.githubassets.com/39609f963d27159ba33923264e235ea7aa87e59220fac261fda48b518f5dfdc1/Cyborg2017/midea_smart_home"
---

# Midea Smart Home

Home Assistant local control integration for Midea devices. Control your smart devices without a cloud connection.

## Getting Help

- Join our QQ group for discussion, the latest updates, and help:

## Features

- **Local control**: Devices are controlled directly over the local network and do not depend on a cloud connection
- **Automatic protocol download**: Automatically downloads each device's Lua protocol script from the cloud (first-time setup)
- **Flexible configuration**: Supports customizing entity attributes through device mapping files, making it easy to adapt new devices
- **Multilingual support**: Supports Chinese and English interfaces
- **Rich entity platforms**: Supports binary_sensor, button, climate, cover, fan, humidifier, light, lock, number, select, sensor, switch, text, time, update, vacuum, water_heater

## Workflow

**Configuration stage**

1. User enters Midea account credentials
2. Logs in to the Midea cloud API

**Discovery stage**

1. Fetches device details from the cloud (device ID, model, SN8, etc.)
2. Automatically downloads the Lua protocol file for each device
3. Scans the local LAN for device IP addresses
4. Obtains the device…
