---
repo: "RockJesus/ha-fordpass-cn"
name: "ha-fordpass-cn"
description: "FordPass / Lincoln Way China Home Assistant integration for the Chinese market. Ford: Escape/Edge L/Explorer/Equator/Equator Sport/Mondeo/Zhisheng/Bronco/Ranger/F-150 Raptor/Tourneo/Transit/EVOS/Mustang Mach-E/Focus/Fiesta/Escort/Taurus/Kuga/EcoSport/Territory/Everest; Lincoln: Corsair/Nautilus/Aviator/Navigator/Lincoln Z/Continental/MKZ/MKX."
originalDescription: "福特派 FordPass / 林肯之道 Lincoln Way 中国区 Home Assistant 集成。福特：锐际Escape/锐界Edge L/探险者Explorer/领裕Equator/领睿Equator Sport/蒙迪欧Mondeo/致胜/烈马Bronco/游骑侠Ranger/F-150猛禽/途睿欧Tourneo/全顺Transit/EVOS/电马Mach-E/福克斯Focus/嘉年华Fiesta/福睿斯Escort/金牛座Taurus/翼虎Kuga/翼搏EcoSport/领界Territory/撼路者Everest；林肯：冒险家Corsair/航海家Nautilus/飞行家Aviator/领航员Navigator/林肯Z/大陆Continental/MKZ/MKX。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/RockJesus/ha-fordpass-cn"
homepage: "https://rockjesus.cn"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["home-assistant", "homeassistant", "ford", "fordpass", "lincoln", "lincoln-way", "corsair", "escape", "mondeo", "aviator"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-08-23T05:53:34Z"
lastCommitAt: "2026-11-26T12:56:07Z"
lastReleaseAt: "2026-10-23T18:49:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 49
maintainers: ["RockJesus"]
openGraphImageUrl: "https://opengraph.githubassets.com/43eece0cd1a0230cb2753a64c23c1f1ae79dbed6d3b3fcffec6829baf56611ba/RockJesus/ha-fordpass-cn"
---

# FordPass / Lincoln Way China

**Connect your car to Home Assistant** — remote vehicle control · vehicle status monitoring · location tracking · scheduled charging · EVCC integration

[Supported models](#-支持的车型) · [Features](#-功能特性) · [Installation](#-安装) · [Configuration](#-配置) · [Supported entities](#-支持的实体) · [Data statistics](#-数据统计与云端健康) · [Services](#-服务) · [Automation examples](#-自动化示例) · [Dashboard card examples](#-仪表盘卡片示例) · [EVCC integration](#-与-evcc-联动) · [Troubleshooting](#-故障排查) · [Privacy and security](#-隐私与安全) · [Removing the integration](#-移除集成) · [Versions and updates](#-版本与更新)

---

Home Assistant custom integration that connects to **FordPass China (Changan Ford)** and **Lincoln Way** cloud services: remote vehicle control, vehicle status monitoring, location tracking, scheduled departure and charging, home charger management, and remote imaging. Entities are created automatically based on each vehicle's cloud capabilities, and each VIN on a multi-vehicle account has its own independent entity group.
