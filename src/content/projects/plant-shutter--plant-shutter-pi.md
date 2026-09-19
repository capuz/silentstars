---
repo: "plant-shutter/plant-shutter-pi"
name: "plant-shutter-pi"
description: "A simple and easy-to-use time-lapse (TimeLapse) program."
originalDescription: "一个简单易用的延时摄影（TimeLapse）程序。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/plant-shutter/plant-shutter-pi"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [66, 22]
topics: ["golang", "plant", "raspberry-pi", "timelapse"]
stars: 5
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-05-03T06:56:53Z"
lastCommitAt: "2026-09-19T01:37:37Z"
lastReleaseAt: "2023-07-02T13:58:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 53
maintainers: ["vincent-vinf"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b482014c543c149126a7ae0994ef162703ad0da1eb9df453d1c78184d316d61/plant-shutter/plant-shutter-pi"
---

# plant-shutter for raspberry pi

A Raspberry Pi camera program that uses native H.264 preview and JPEG photography.

> Finished video on Bilibili
> https://www.bilibili.com/video/BV1wZ42127U3/?spm_id_from=333.999.0.0

***

## Features

* **Real-time preview** parameter adjustment
* Support sharing captured images using **WebDAV**
* Uses `Video for Linux 2` (**v4l2**) API
* Preview transmits native H.264 via WebSocket
* **All-In-One**, out of the box

## QuickStart

```sh
chmod +x plant-shutter
./plant-shutter
```

Open the [admin interface](https://github.com/plant-shutter/plant-shutter-pi/blob/HEAD/raspberry:9999) in your browser

## Systemd

The ARM64 package includes a `run.sh` launcher. To install it as a system
service and start it immediately, run this on the Raspberry Pi from the
extracted package directory:

```sh
sudo ./run.sh install
```

This creates `plant-shutter.service`, enables it for future boots, and writes
the service output to `plant-shutter.log`. To run it only for the current
session, use `./run.sh` instead.

## Storage

```
.
└── root/
    ├── <project-name>/
    │   ├── images/
    │   │   ├── <image>.jpg
    │   │   ├── ...
    │   │   └── info.json…
