---
repo: "SylvacDev/BluetoothDevTools"
name: "BluetoothDevTools"
description: "Developement Tools For Instruments Communication"
readmeQualityOk: true
url: "https://github.com/SylvacDev/BluetoothDevTools"
language: "C"
languages: ["C", "HTML"]
languagePcts: [51, 32]
stars: 18
forks: 3
openIssues: 7
closedIssues: 1
watchers: 5
contributors: 6
recentReleases: 0
createdAt: "2022-08-19T12:31:31Z"
lastCommitAt: "2026-11-06T13:19:44Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 55
undervaluedScore: 28
maintainers: ["ABJ-Sylvac", "sylvac-agr"]
openGraphImageUrl: "https://opengraph.githubassets.com/b27356217330003daed6444758e1d54261ff2c10cc4e2722e4e99dbc39bd98de/SylvacDev/BluetoothDevTools"
---

# Sylvac Bluetooth Developer Tools

Everything you need to connect Sylvac Bluetooth® instruments (calipers, indicators, micrometers, height gauges and more) to your own software.

With these tools your application can:

- discover Sylvac instruments around it and connect one or many of them,
- read the live measured value, the unit and the measuring mode,
- receive the value sent when the operator presses the instrument button,
- send commands to the instrument (for example `ID?`) and read its answer.

## Choose your path

| You want to... | Use | Platform |
|---|---|---|
| Build a Windows application in C# / .NET (recommended) | [SylvacBleLib](https://github.com/SylvacDev/BluetoothDevTools/blob/HEAD/csharp) with a Sylvac USB dongle | Windows |
| Talk to the instruments with the native Bluetooth stack of any platform (Android, iOS, macOS, Linux, Windows, embedded) | [Sylvac custom Bluetooth GATT profiles](https://github.com/SylvacDev/BluetoothDevTools/blob/HEAD/gatt-profiles) and the [list of native APIs and libraries](https://github.com/SylvacDev/BluetoothDevTools/blob/HEAD/docs/MAN-DeveloperResources_OS.pdf) | Any |
| Drive the dongle at a low level with the BGAPI serial…
