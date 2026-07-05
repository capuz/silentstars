---
repo: "ela-compil/BACnet"
name: "BACnet"
description: ".NET library for BACnet :satellite:"
readmeQualityOk: true
url: "https://github.com/ela-compil/BACnet"
homepage: "https://www.nuget.org/packages/bacnet/"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["bacnet", "bacnet-library", "automation", "ashrae", "nuget"]
stars: 247
forks: 106
openIssues: 9
closedIssues: 90
watchers: 22
contributors: 23
recentReleases: 2
createdAt: "2016-05-12T12:26:39Z"
lastCommitAt: "2026-07-05T06:31:38Z"
lastReleaseAt: "2026-07-04T21:09:38Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 79
undervaluedScore: 46
maintainers: ["gralin", "remye06", "imurasawa"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/58639344/4311ce00-6c4e-11e9-891a-37a56addc091"
fundingLinks: ["GITHUB:https://github.com/gralin"]
---

# .NET library for BACnet

[BACnet](http://www.bacnet.org/) (ASHRAE 135) is the standard communication protocol for
building-automation systems — HVAC, lighting, access control, and metering. This library is a
standalone BACnet stack for .NET: add a NuGet package and talk to BACnet devices from your own code,
or expose your application as a BACnet device.

## Features

- **Transports** — BACnet/IP (UDP, IPv4 & IPv6) with BBMD and foreign-device registration; BACnet/Ethernet (pcap); MS/TP and PTP over a serial port
- **Client and device (server) roles** — send requests and/or answer them from your own object model
- **Discovery** — Who-Is / I-Am and Who-Has / I-Have, including across routers
- **Data access** — ReadProperty, WriteProperty, ReadPropertyMultiple, WritePropertyMultiple, ReadRange
- **Change of Value** — SubscribeCOV / SubscribeProperty and COV notifications
- **Alarms & events** — event/alarm notifications, alarm summary, and acknowledgement
- **More services** — object create/delete, atomic file read/write, device-communication-control, reinitialize, time synchronization
- **Segmentation** of large requests and responses
- Complete **ASN.1 encode/decode** of the…
