---
repo: "Sensirion/python-i2c-sen66"
name: "python-i2c-sen66"
description: "Python I2C sensor driver for Sensirion's SEN66 environmental sensor module"
readmeQualityOk: true
url: "https://github.com/Sensirion/python-i2c-sen66"
homepage: "https://sensirion.github.io/python-i2c-sen66/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["co2", "co2-sensor", "environmental", "environmental-monitoring", "humidity", "linux", "nox", "python", "sek-sen66", "sen66"]
stars: 11
forks: 3
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 5
recentReleases: 1
createdAt: "2024-10-30T08:14:23Z"
lastCommitAt: "2026-09-17T08:51:47Z"
lastReleaseAt: "2026-09-14T07:38:13Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 75
undervaluedScore: 48
maintainers: ["Rol-la", "psachs"]
openGraphImageUrl: "https://opengraph.githubassets.com/59e54d21c5fc67043d8885d9b31ad9930f5bf33c0c0264fccc288a0c1b09c36a/Sensirion/python-i2c-sen66"
---

# Python I2C Driver for Sensirion SEN66

This repository contains the Python driver to communicate with a Sensirion SEN66 sensor over I2C.

    width="300px" alt="SEN66 picture">

Click [here](https://sensirion.com/sen6x-air-quality-sensor-platform) to learn more about the Sensirion SEN66 sensor.

The default I²C address of [SEN66](https://www.sensirion.com/products/catalog/SEN66) is **0x6b**.

## Connect the sensor

You can connect your sensor over a [SEK-SensorBridge](https://developer.sensirion.com/product-support/sek-sensorbridge/).
For special setups you find the sensor pinout in the section below.

<details><summary>Sensor pinout</summary>
<p>
     width="300px" alt="sensor wiring picture">

| *Pin* | *Cable Color* | *Name* | *Description*  | *Comments* |
|-------|---------------|:------:|----------------|------------|
| 1 | red | VDD | Supply Voltage | 3.3V ±5%
| 2 | black | GND | Ground |
| 3 | green | SDA | I2C: Serial data input / output | TTL 5V compatible
| 4 | yellow | SCL | I2C: Serial clock input | TTL 5V compatible
| 5 |  | NC | Do not connect | Ground (Pins 2 and 5 are connected internally)
| 6 |  | NC | Do not connect | Supply voltage (Pins 1 and 6 are connected…
