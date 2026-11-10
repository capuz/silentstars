---
repo: "STMicroelectronics/lsm6dsv16x-pid"
name: "lsm6dsv16x-pid"
description: "lsm6dsv16x platform independent driver based on Standard C language and compliant with MISRA C"
readmeQualityOk: true
url: "https://github.com/STMicroelectronics/lsm6dsv16x-pid"
language: "C"
languages: ["C"]
languagePcts: [88]
topics: ["mems-sensors", "stmicroelectronics", "sensor-drivers", "stdc-drivers"]
stars: 17
forks: 9
openIssues: 1
closedIssues: 5
watchers: 7
contributors: 4
recentReleases: 0
createdAt: "2022-08-02T20:00:55Z"
lastCommitAt: "2026-11-10T14:47:01Z"
lastReleaseAt: "2026-02-20T10:50:57Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 77
undervaluedScore: 40
maintainers: ["avisconti", "ndreys"]
openGraphImageUrl: "https://opengraph.githubassets.com/48c0e66295963077b2bbe90432554da18b835142ae4bccad9e122822a4e5623e/STMicroelectronics/lsm6dsv16x-pid"
---

# 1 - Introduction

Sensor driver for LSM6DSV16X sensor written in C programming language. This repository contains the sensor driver files (.h and .c) to be included, or linked directly as a git submodule, in your project. The driver is MISRA compliant and the documentation can be generated using the [Doxygen](http://www.doxygen.org/) tool.

In order to `clone` the complete content of the repository folder, use the command:

```
git clone https://github.com/STMicroelectronics/lsm6dsv16x-pid/
```

Some examples of driver usage can be found [here](https://github.com/STMicroelectronics/STMems_Standard_C_drivers).

------

# 2 - Integration details

The driver is platform-independent, you only need to define two functions for read and write transactions from the sensor hardware bus (ie. SPI or I²C) and an optional one to implement a delay of millisecond granularity. **A few devices integrate an extra bit in the communication protocol in order to enable multi read/write access, this bit must be managed in the read and write functions defined by the user.** Please refer to the read and write implementation in the [reference…
