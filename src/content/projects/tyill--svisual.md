---
repo: "Tyill/SVisual"
name: "SVisual"
description: "Real-time telemetry monitoring and data logging system for controllers (STM32/Arduino)"
readmeQualityOk: true
url: "https://github.com/Tyill/SVisual"
language: "C++"
languages: ["C++"]
languagePcts: [76]
topics: ["monitoring", "iot", "monitoring-automation", "telemetry", "embedded-systems"]
stars: 28
forks: 10
openIssues: 2
closedIssues: 25
watchers: 4
contributors: 3
recentReleases: 0
createdAt: "2018-06-01T16:30:39Z"
lastCommitAt: "2026-10-25T09:00:31Z"
lastReleaseAt: "2019-07-15T15:11:19Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 74
undervaluedScore: 44
maintainers: ["dependabot[bot]", "Tyill"]
openGraphImageUrl: "https://opengraph.githubassets.com/23e3f87ad2c1850a76a4932d3661279861059351d17c18fba6c61956f3598748/Tyill/SVisual"
---

| **`Docker`** | **`License`** |
|------------------|------------------|
|[](https://travis-ci.com/Tyill/SVisual)|[](https://opensource.org/licenses/MIT)|

The SVisual software is designed to monitor the operation of the MK devices, debug the program, alert the user to the events that have occurred.

 &emsp;

**Documentation:** [English](https://github.com/Tyill/SVisual/blob/HEAD/docs/en/README.md) · [Русский](https://github.com/Tyill/SVisual/blob/HEAD/docs/ru/README.md)

## Features

* connection to the MK via COM port (usb for arduino), over Ethernet or Wi-Fi protocol TCP;

* Interrogation of values of signals in real time with frequency before 1 MHz (default 10 Hz), the number of devices and signals is selected by the user;

* the permissible number of signals for recording 2048;

* output of the values of the selected signals to the monitor screen in real time;

* record the archive of signals to the PC hard disk;

* viewing the archive using additional SVViewer software;

* ability to set alerts for an event (triggers) that have occurred, start a custom process when the trigger is triggered;

* adding a signal for viewing / recording only by the client, no additional…
