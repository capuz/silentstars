---
repo: "openbmc/dbus-sensors"
name: "dbus-sensors"
description: "D-Bus configurable sensor scanning applications"
url: "https://github.com/openbmc/dbus-sensors"
language: "C++"
languages: ["C++"]
languagePcts: [97]
stars: 40
forks: 69
openIssues: 16
closedIssues: 21
watchers: 15
contributors: 125
recentReleases: 0
createdAt: "2018-11-26T18:15:22Z"
lastCommitAt: "2026-06-30T06:49:15Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 79
undervaluedScore: 59
maintainers: ["Ender-Hsieh", "liuer-sys", "harshit-aghera"]
openGraphImageUrl: "https://opengraph.githubassets.com/362c96a05d51066092774c052ee4286841156e24154864c98d1fdc88b6304b21/openbmc/dbus-sensors"
---

# dbus-sensors

dbus-sensors is a collection of sensor applications that provide the
xyz.openbmc_project.Sensor collection of interfaces. They read sensor values
from hwmon, d-bus, or direct driver access to provide readings. Some advance
non-sensor features such as fan presence, pwm control, and automatic cpu
detection (x86) are also supported.

## key features

- runtime re-configurable from d-bus (entity-manager or the like)

- isolated: each sensor type is isolated into its own daemon, so a bug in one
  sensor is unlikely to affect another, and single sensor modifications are
  possible

- async single-threaded: uses sdbusplus/asio bindings

- multiple data inputs: hwmon, d-bus, direct driver access

## dbus interfaces

A typical dbus-sensors object support the following dbus interfaces:

```text
Path        /xyz/openbmc_project/sensors/<type>/<sensor_name>

Interfaces  xyz.openbmc_project.Sensor.Value
            xyz.openbmc_project.Sensor.Threshold.Critical
            xyz.openbmc_project.Sensor.Threshold.Warning
            xyz.openbmc_project.State.Decorator.Availability
            xyz.openbmc_project.State.Decorator.OperationalStatus…
