---
repo: "vaemc/wheat-esp-tools"
name: "wheat-esp-tools"
description: "面向 ESP 系列芯片的桌面开发工具，集成固件烧录、分区表编辑、NVS 读取与 BLE 扫描，内置 esptool，开箱即用。A desktop toolkit for ESP chips — firmware flashing, partition table editing, NVS reading, and BLE scanning, with esptool built in."
readmeQualityOk: true
url: "https://github.com/vaemc/wheat-esp-tools"
language: "Vue"
languages: ["Vue", "TypeScript"]
languagePcts: [42, 40]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 4
createdAt: "2023-07-06T10:53:50Z"
lastCommitAt: "2026-07-21T06:10:41Z"
lastReleaseAt: "2026-07-21T06:11:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 83
maintainers: ["vaemc", "wenwen19115"]
openGraphImageUrl: "https://opengraph.githubassets.com/6bc43bf812fb7094101fbd152d684ca1aecc63fca9f6a8e32619dd8170d5de95/vaemc/wheat-esp-tools"
---

# Wheat ESP Tools

面向 ESP 系列芯片的桌面工具。集成固件烧录与合并、分区表、OTA、NVS、蓝牙扫描、芯片引脚图、嵌入式图片与音频格式转换、mmap 资源打包等功能。基于 [Tauri](https://tauri.app/) 与 [Vue 3](https://vuejs.org/) 构建，内置 [esptool](https://github.com/espressif/esptool)，无需另行安装命令行工具。

简体中文 | [English](https://github.com/vaemc/wheat-esp-tools/blob/HEAD/README-EN.md)

---

## 目录

- [概述](#概述)
- [功能一览](#功能一览)
- [系统要求](#系统要求)
- [安装与运行](#安装与运行)
- [界面结构](#界面结构)
- [设备连接](#设备连接)
- [固件烧录](#固件烧录)
- [固件管理](#固件管理)
- [分区表](#分区表)
- [OTA 分区](#ota-分区)
- [NVS 分区](#nvs-分区)
- [蓝牙](#蓝牙)
- [芯片引脚](#芯片引脚)
- [图片处理](#图片处理)
- [音频处理](#音频处理)
- [文件处理](#文件处理)
- [终端输出](#终端输出)
- [数据目录](#数据目录)
- [功能状态](#功能状态)
- [许可证](#许可证)

---

## 概述

Wheat ESP Tools 将常见的 ESP 开发操作集中到同一桌面应用中，覆盖从串口烧录到分区维护、蓝牙侦测与资源转换的完整链路。串口相关操作通过内置 esptool 完成；蓝牙扫描与 NVS / GIF→EAF 等能力由 Tauri 原生端实现。

侧栏按用途分为三组：

| 分组 | 模块 |
|------|------|
| Flash 与分区 | 固件烧录、固件管理、分区表、OTA 分区、NVS 分区 |
| 蓝牙与引脚 | 蓝牙、芯片引脚 |
| 实用工具 | 图片处理、音频处理、文件处理 |

界面语言支持简体中文与 English，可在应用内切换。

---

## 功能一览

| 模块 | 说明 |
|------|------|
| 固件烧录 | 多固件列表管理、批量/单行烧录、合并为单一 `.bin`、导出副本、整片擦除与读取 |
| 固件管理 | ESP-IDF / PlatformIO 历史工程、本地固件库与快速烧录 |
| 分区表 | CSV 偏移对齐、从设备读取并可视化、单分区读/写/擦 |
| OTA 分区 | 解析 otadata、切换启动槽、OTA App 分区读/写/擦 |
| NVS 分区 | 设备或本地读取、键值编辑、写回设备、CSV…
