---
repo: "bertel2020/HA-Device-Proxy"
name: "HA-Device-Proxy"
description: "Home Assistant app (add-on) that shares one serial/USB, Modbus TCP/RTU, EnOcean or 1-Wire device with several programs at once: ser2net 4, Modbus proxy for inverters and RS485, EnOcean proxy for Eltako FAM14/USB300, owserver proxy for OWFS. Set up in a web UI, no YAML."
readmeQualityOk: true
url: "https://github.com/bertel2020/HA-Device-Proxy"
homepage: "https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Fbertel2020%2FHA-Device-Proxy"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [72, 27]
topics: ["eltako", "enocean", "home-assistant", "home-assistant-addon", "home-assistant-app", "modbus", "modbus-proxy", "modbus-rtu", "modbus-tcp", "rs485"]
stars: 13
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 8
createdAt: "2026-10-21T19:16:15Z"
lastCommitAt: "2026-11-23T12:20:23Z"
lastReleaseAt: "2026-11-23T12:24:01Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 61
maintainers: ["bertel2020"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1428826539/34c03fbe-a0b8-4503-b644-191bad31609a"
discussionCount: 0
---

Share serial, USB, Modbus, EnOcean and 1-Wire devices with several programs: ser2net, a Modbus proxy, an EnOcean proxy and an owserver proxy as a Home Assistant app.

Device Proxy is a Home Assistant app (formerly add-on) that makes a device usable by several programs at once. Serial and USB devices (smart meter reading heads, Z-Wave or Zigbee sticks, RS232 devices) are shared over TCP with [ser2net 4](https://github.com/cminyard/ser2net). Modbus devices (Modbus TCP, Modbus RTU on RS485, RTU over TCP) are shared with several Modbus TCP clients through the app's own Modbus proxy. EnOcean gateways (FAM-USB, FAM14, FGW14-USB, USB300, MGW-ETH, Symcon LAN …) are shared through its own EnOcean proxy, with replay for Home Assistant restarts. A 1-Wire bus is shared through an owserver (OWFS): one in the network, or the app's own on a USB adapter of this host, with the devices on the bus and who asks what.

Everything is set up in a web interface in the sidebar: no YAML, no command line. The app's **Configuration** tab in the Supervisor stays empty on purpose; everything is in the sidebar entry **Device Proxy**. Status, live data, traces and events show what is happening on the line.
