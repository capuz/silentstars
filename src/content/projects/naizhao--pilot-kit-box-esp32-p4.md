---
repo: "naizhao/Pilot-Kit-Box-ESP32-P4"
name: "Pilot-Kit-Box-ESP32-P4"
description: "Pilot Kit Box (ESP32-P4 Edition)"
readmeQualityOk: true
url: "https://github.com/naizhao/Pilot-Kit-Box-ESP32-P4"
language: "C"
languages: ["C"]
languagePcts: [82]
stars: 9
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2026-05-11T05:09:07Z"
lastCommitAt: "2026-08-30T09:26:00Z"
lastReleaseAt: "2026-06-10T20:29:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 54
maintainers: ["naizhao"]
openGraphImageUrl: "https://opengraph.githubassets.com/5dae5aeea994b918e704daa60270a13dd7c3351210323d19112b7ce3fe5926f5/naizhao/Pilot-Kit-Box-ESP32-P4"
---

# Pilot Kit Box (ESP32-P4 Edition)

  <strong>开源低成本飞行数据盒子与态势感知设备 | Open-source low-cost flight data box and situational-awareness device</strong><br>
  官方网站 / Official website: <a href="https://air.club">air.club</a><br>
  网页刷机 / Web flasher: <a href="https://updater.pilotkit.app">updater.pilotkit.app</a>
</p>

> **分支 `v4`。** 主机是 **Waveshare ESP32-P4-WIFI6-Touch-LCD-4.3** 一体板：
> ST7701 480×800 MIPI-DSI 面板以 PPA 旋转成 800×480 横屏，GT911 触摸，
> P4NRW32 + ESP32-C6。硬件目标是
> [`hardware/expansion-board-v4/`](https://github.com/naizhao/Pilot-Kit-Box-ESP32-P4/blob/HEAD/hardware/expansion-board-v4/) 的 6 层集成
> 扩展板——以 HAT 方式直插载板 2×20 排母，把 1090/978 接收链、GNSS、IMU、
> 气压计和电源整合到一块板上，**自带 1090 接收链，不再需要 RTL-SDR dongle**。
> 每个硬件版本一个分支；`docs/jlc/lcd-2.4in-8pin/` 与下文 2.4 寸载板内容
> 保留为 v0.8.0 历史 PCB 参考，不代表本分支的当前接线。
>
> **Branch `v4`.** Host board: **Waveshare ESP32-P4-WIFI6-Touch-LCD-4.3**.
> The hardware target is the 6-layer integrated expansion board in
> [`hardware/expansion-board-v4/`](https://github.com/naizhao/Pilot-Kit-Box-ESP32-P4/blob/HEAD/hardware/expansion-board-v4/), which stacks
> onto the carrier's 2×20 header and folds the 1090/978 receive chains, GNSS,
> IMU, barometer, and power onto one board…
