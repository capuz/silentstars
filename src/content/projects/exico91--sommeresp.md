---
repo: "exico91/SommerESP"
name: "SommerESP"
description: "A plug and play ESP32-C3 board to control Sommer garage doors"
readmeQualityOk: true
url: "https://github.com/exico91/SommerESP"
language: "HTML"
languages: ["HTML"]
languagePcts: [100]
stars: 28
forks: 1
openIssues: 6
closedIssues: 11
watchers: 5
contributors: 1
recentReleases: 0
createdAt: "2023-10-09T14:12:58Z"
lastCommitAt: "2026-10-14T08:59:10Z"
lastReleaseAt: "2026-06-11T08:01:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 33
maintainers: ["exico91"]
openGraphImageUrl: "https://opengraph.githubassets.com/fcd0b625782fd9179f197a7ac1cc12a594a46c191c812685a35a7fc1a641544e/exico91/SommerESP"
---

# 🏠 SommerESP

A plug and play ESP32-C3 board to control Sommer garage doors based on ESPHOME

This combo is designed to replace the Sommer Conex Module and the Sommer Output OC Module. 

## ⚙️ How it works
The Sommer Conex Module is designed to replicate the press of the buttons on the controller of the garage door and the Sommer Output OC just provide the signal for the status and 24 Volts DC.  

This project takes the 24V and converts it to 3.3V for the ESP32-C3 module, the DC regulator on the power board can take from 4.5V to 40V and cleanly output 3.3V then transfer it to the Control board along with the status signal.  

The ESP controller simulate the press of the buttons using a pair of optocouplers, simple enough. You can also attach other things to this board, I left a couple of GPIOs on exposed pins along with the serial connection required to flash the module.

## 📋 Instructions
You can buy [here](https://www.tindie.com/products/exico91/sommeresp/) the kit that includes the two boards and a cable or you can build one yourself. You can find the BOM (bill of materials)…
