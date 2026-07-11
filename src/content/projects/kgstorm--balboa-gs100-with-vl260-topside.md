---
repo: "kgstorm/Balboa-GS100-with-VL260-topside"
name: "Balboa-GS100-with-VL260-topside"
description: "An ESPHome project to add an ESP32 to a Balboahot tub with a VLXXX topside controller to send and receive data via Home Assistant."
readmeQualityOk: true
url: "https://github.com/kgstorm/Balboa-GS100-with-VL260-topside"
language: "C++"
languages: ["C++"]
languagePcts: [93]
stars: 7
forks: 2
openIssues: 0
closedIssues: 7
watchers: 3
contributors: 1
recentReleases: 2
createdAt: "2026-01-17T11:12:06Z"
lastCommitAt: "2026-07-11T05:56:35Z"
lastReleaseAt: "2026-07-11T06:00:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 71
undervaluedScore: 47
maintainers: ["kgstorm", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b4117fec98933d1ceb242ea2453e20505e708340494ded98f804819be83b1d9/kgstorm/Balboa-GS100-with-VL260-topside"
discussionCount: 4
---

# Balboa-GS100-with-VL260-topside

</p>

## Description

This project adds an Wifi module to a Balboa Hot Tub. This project has been tested with a few Balboa control boards and seems to work with any VL200 series or VL400 series topside controllers. I imagine any 3 or 4-button Balboa topside controllers with RJ45 connectors would have a very similar setup. 

---

## Purchase Option

Everything you need to know to build a module is contained in this repository. However, I do have some modules available for purchase as well.

---

## Software Installation

1. Copy the `esp32-spa.yaml` file and the entire `esp32-spa` folder into your Home Assistant config folder under the `esphome/` subfolder. The folder layout should look like:

```
config/
└── esphome/
    ├── esp32-spa.yaml
    └── esp32-spa/
        ├── __init__.py
        ├── binary_sensor.py
        ├── esp32-spa.h
        └── sensor.py
```

2. Edit the UNITS key in the esp32-spa.yaml file to set the temperature units. 

3. In Home Assistant go to **ESPHome**, click **New Device** → **Import From File**, and select `esp32-spa.yaml`.

4. `esp32-spa.yaml` will also look for a `secrets.yaml` file inside the **esphome/** folder for…
