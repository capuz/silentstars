---
repo: "TimOrme/sds011lib"
name: "sds011lib"
description: "Python library for the SDS011 Air Quality Sensor"
readmeQualityOk: true
url: "https://github.com/TimOrme/sds011lib"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 14
forks: 0
openIssues: 2
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2023-05-04T04:14:31Z"
lastCommitAt: "2026-10-21T23:36:20Z"
lastReleaseAt: "2023-05-16T05:28:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 27
maintainers: ["TimOrme"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa531c205508e77acc63396cf4f458c88bd41a63cc3e4a1d09ff7297fccd90f1/TimOrme/sds011lib"
---

# sds011lib

`sds011lib` is a fully-typed, nearly-complete, python 3.8+ library for interacting with the SDS011 Air Quality Sensor.

The SDS011 is a small, low-cost sensor created by www.inovafitness.com, used to measure particulate matter in the air.  It 
can measure both PM 2.5 and PM10 values simultaneously, and connects to devices over a serial port, or via USB with an
included adaptor.

The full documentation is available at https://timorme.github.io/sds011lib/

## Installation

```commandline
pip install sds011lib
```

## Quickstart

```python
from sds011lib import SDS011QueryReader
from serial import Serial

# Setup a query-mode reader on /dev/ttyUSB0 
sensor = SDS011QueryReader('/dev/ttyUSB0')

# Read some data!
aqi = sensor.query()
print(aqi.pm25)
print(aqi.pm10)

# Put the device to sleep
sensor.sleep()

# Wake it back up
sensor.wake()
```
