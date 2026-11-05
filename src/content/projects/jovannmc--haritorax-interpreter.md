---
repo: "JovannMC/haritorax-interpreter"
name: "haritorax-interpreter"
description: "A node.js package that allows you to communicate with the HaritoraX FBT trackers"
readmeQualityOk: true
url: "https://github.com/JovannMC/haritorax-interpreter"
homepage: "https://www.npmjs.com/package/haritorax-interpreter"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["fbt", "full-body-tracking", "node", "nodejs", "npm", "haritora", "haritorax", "shiftall", "virtual-reality", "vr"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2024-03-04T13:40:13Z"
lastCommitAt: "2026-11-04T08:41:01Z"
lastReleaseAt: "2024-03-27T16:44:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 74
maintainers: ["JovannMC"]
openGraphImageUrl: "https://opengraph.githubassets.com/38e0026b98526319c2724047fd1113888bf6b0717401e3883cc0c86aff26bfc6/JovannMC/haritorax-interpreter"
---

# HaritoraX Interpreter

A node.js package that enables communication with the HaritoraX FBT trackers to read & write data to them. No HaritoraConfigurator / Shiftall VR Manager software needed!

Check out the Haritora-GX(6/2) POC if you want some more info, at least for the dongles: <https://github.com/JovannMC/haritora-gx-poc>

## Installation

Node.js 24 or newer is required. Install the package and the optional peers for the transports you use:

```bash
npm install haritorax-interpreter

# Serial ports (and HaritoraX Wired via SPP)
npm install @serialport/bindings-cpp @serialport/stream

# Bluetooth LE
npm install @stoprocent/noble

# Linux BLE using BlueZ D-Bus binding
npm install dbus-next
```

## Quick start

The package is split so you can import only what you need and most dependencies are optional:

```ts
import { createHaritoraX } from "haritorax-interpreter";
import { createSerialConnection } from "haritorax-interpreter/connections/serial";

const app = createHaritoraX({
    connections: [createSerialConnection({ includeWired: true })],
    logLevel: "info",
});

const stopListening = app.on("imu", (sample) => {
    console.log(`IMU sample from ${sample.deviceId} -…
