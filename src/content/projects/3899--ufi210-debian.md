---
repo: "3899/ufi210-debian"
name: "ufi210-debian"
description: "Clean Debian firmware for Qualcomm MSM8909 (210) portable WiFi devices, supporting USB, WiFi, ModemManager, and cellular management."
originalDescription: "面向高通MSM8909(210)随身WiFi设备的纯净Debian固件，支持USB、WiFi、ModemManager和蜂窝管理。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/3899/ufi210-debian"
language: "PowerShell"
languages: ["PowerShell", "Shell", "Python"]
languagePcts: [47, 32, 20]
stars: 11
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-09-04T10:41:39Z"
lastCommitAt: "2026-11-19T05:04:12Z"
lastReleaseAt: "2026-11-19T05:08:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 45
maintainers: ["3899"]
openGraphImageUrl: "https://opengraph.githubassets.com/f2451095fe846bc15b7806744fd334c2bc0c088d5f629cb89fe6c8f3fd74397f/3899/ufi210-debian"
---

# Debian for UFI210(msm8909)

This project builds a Debian 12 Bookworm `armhf` headless firmware for Qualcomm MSM8909 / Snapdragon 210 portable WiFi devices. The GitHub repository name is `3899/ufi210-debian`.

The hardware target currently verified on real devices is:

```text
platform: msm8909
target: zu02-dw01
product: DW01
pcb: ZU02_main_v1.1
soc_id: 245
architecture: armhf
```

Other MSM8909 portable WiFi devices cannot be flashed directly just because they share the same chip. You must first verify the PCB, PMIC, QCDT, partition layout, RAM, power, USB, WCNSS, and MPSS, and then create a separate target for the corresponding hardware.

## Default configuration

| Item              | Default value         |
| ----------------- | --------------------- |
| Hostname          | `ufi210`            |
| USB management address | `192.168.68.1/24`   |
| SSH user          | `root`              |
| Initial root password | `simadmin`       |
| TCP ADB address   | `192.168.68.1:5555` |
| Wi-Fi AP SSID     | `SimAdmin`          |
| Initial Wi-Fi AP password | `simadmin`  |
| Wi-Fi AP address  | `192.168.69.1/24`   |
