---
repo: "engiadina/enet-bridge"
name: "enet-bridge"
description: "Gira/Jung eNet radio devices in Home Assistant without the eNet Server – ESP32 + CC1101 USB bridge that emulates the server, imports your existing installation (.iex) and keeps all devices paired."
readmeQualityOk: true
url: "https://github.com/engiadina/enet-bridge"
language: "Python"
languages: ["Python"]
languagePcts: [80]
topics: ["cc1101", "enet", "esp32", "gira", "hacs", "hacs-integration", "home-assistant", "home-automation", "jung", "knx-rf"]
stars: 8
forks: 3
openIssues: 1
closedIssues: 0
watchers: 3
contributors: 4
recentReleases: 10
createdAt: "2026-11-07T20:11:15Z"
lastCommitAt: "2026-11-23T10:18:38Z"
lastReleaseAt: "2026-11-16T13:21:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 47
maintainers: ["engiadina", "mnordseth", "mrpharderwijk"]
openGraphImageUrl: "https://opengraph.githubassets.com/543ba0aba0d3357fd10d4d60dd239b821d0558b7535f426c5ac28d4d32572dc7/engiadina/enet-bridge"
discussionCount: 1
---

# eNet Bridge for Home Assistant

Use your **Gira / Jung eNet** radio devices directly in Home Assistant – **without the eNet Server**.

A small USB radio modem (ESP32-C6 + CC1101, about 20–30 € in parts) takes over the job of the eNet Server: it speaks
the eNet radio protocol (KNX RF 1.1, 868 MHz), answers the transmitters’ server buttons, runs scenes and reports
every button press and every state change to Home Assistant. The integration imports your existing installation
from the eNet Server’s export file – **no device has to be paired again**.

**Never had an eNet Server?** You can also start from scratch: set up a new installation, pair eNet actuators
and wall or hand-held transmitters with “+” in Home Assistant and configure everything there – no eNet Server
needed at any time.

*Deutsch: [README.de.md](https://github.com/engiadina/enet-bridge/blob/HEAD/README.de.md)*

> **Work in progress – first public release.** The integration runs two real installations every
> day, but documentation is still being completed, and only the device types listed below are tested. Feedback
> and issues are welcome.
