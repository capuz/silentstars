---
repo: "Cyborg2017/midea_smart_home"
name: "midea_smart_home"
description: "Local-network integration of Midea smart appliances into Home Assistant, supporting air conditioners, range hoods, water heaters, refrigerators, dishwashers, washing machines, air purifiers, fans, robot vacuums, and 37 device categories in total"
originalDescription: "美的智能设备局域网集成接入home assistant，支持: 空调、油烟机、热水器、冰箱、洗碗机、洗衣机、空气净化器、风扇、扫地机器人等37种品类设备"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Cyborg2017/midea_smart_home"
language: "Python"
languages: ["Python", "Lua"]
languagePcts: [69, 31]
topics: ["home-assistant", "homeassistant", "midea", "custom-integration", "hacs-integration"]
stars: 129
forks: 34
openIssues: 0
closedIssues: 36
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2026-02-20T13:05:18Z"
lastCommitAt: "2026-10-25T02:48:04Z"
lastReleaseAt: "2026-04-21T05:58:58Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 37
maintainers: ["Cyborg2017", "codex", "zqh19861020"]
openGraphImageUrl: "https://opengraph.githubassets.com/f453ec19fddd34c7c52d92963976ff00f67e1989e2667bc80eca5becb4a70389/Cyborg2017/midea_smart_home"
---

# Midea Smart Home

Home Assistant integration for local control of Midea devices. You can control your smart devices without a cloud connection.

## Getting Help

- Welcome to join the QQ group for discussion, the latest updates, and help:

## Features

- **Local control**: Devices are controlled directly over the local network and do not depend on a cloud connection
- **Automatic protocol download**: Automatically downloads each device's Lua protocol script from the cloud (first-time setup)
- **Flexible configuration**: Supports customizing entity attributes through device mapping files, making it easy to adapt new devices
- **Multilingual support**: Supports Chinese and English interfaces
- **Rich entity platforms**: Supports binary_sensor, button, climate, cover, fan, humidifier, light, lock, number, select, sensor, switch, text, time, update, vacuum, and water_heater

## Workflow

**Setup stage**

1. The user enters their Midea account username and password
2. Log in to the Midea cloud API

**Discovery stage**

1. Fetch detailed device information from the cloud (device ID, model, SN8, etc.)
2. Automatically download the Lua protocol file for the device
3. Scan the local…
