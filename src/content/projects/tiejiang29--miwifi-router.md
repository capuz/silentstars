---
repo: "tiejiang29/miwifi_router"
name: "miwifi_router"
description: "Xiaomi MiWiFi Router integration for Home Assistant - Local API with device tracker and per-device speed monitoring"
url: "https://github.com/tiejiang29/miwifi_router"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["hacs", "home-assistant", "home-assistant-custom-component", "miwifi", "router", "xiaomi"]
stars: 6
forks: 3
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-04T05:01:26Z"
lastCommitAt: "2026-06-28T03:09:15Z"
lastReleaseAt: "2026-06-04T10:35:10Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 62
maintainers: ["tiejiang29"]
openGraphImageUrl: "https://opengraph.githubassets.com/bfd66dbae629b86ca2158ecc7058464f60706c59ad14295505819f235db6324a/tiejiang29/miwifi_router"
---

# MiWiFi Router - Home Assistant Custom Integration

小米 MiWiFi 路由器 Home Assistant 自定义集成，通过路由器本地 Web API 获取实时数据，无需云端。

## ✨ 功能特性

### 📊 路由器传感器 (Sensor)

| 传感器 | 说明 | 默认单位 | 可选单位 |
|--------|------|---------|---------|
| Download Speed | WAN 下载速率 | B/s | B/s, kB/s, MB/s, GB/s, KiB/s, MiB/s, GiB/s |
| Upload Speed | WAN 上传速率 | B/s | 同上 |
| Download Total | 累计下载量 | B | B, kB, MB, GB, TB, KiB, MiB, GiB, TiB |
| Upload Total | 累计上传量 | B | 同上 |
| Online Devices | 在线设备数 | devices | (固定) |
| CPU Load | CPU 负载 | % | (固定) |
| Memory Usage | 内存使用率 | % | (固定) |

**单位说明**：
- 默认 `Auto` = 用 B/s 和 B（不换算，最大兼容性，能量面板/长期统计完全不受影响）
- 选其他单位（如 MB/s、GB）后，传感器状态值会按所选单位自动换算
- 单位同时支持 1000 进制（SI：kB/MB/GB）和 1024 进制（IEC：KiB/MiB/GiB）
- `raw_b` 属性始终保留原始字节数值，方便模板/自动化使用
- `human_readable` 属性提供友好字符串（如 "2.45 MB/s"）

### 📱 设备追踪 (Device Tracker)

- 每个连接设备自动创建 `device_tracker` 实体
- 在线/离线状态实时检测（`home` / `not_home`）
- **单设备速率数据**：
  - `upload_speed` / `download_speed`：实时上传/下载速率
  - `upload_total` / `download_total`：累计流量
  - `max_upload_speed` / `max_download_speed`：峰值速率
- 信号强度、频道、OUI 等额外信息

### 📶 设备传感器 (Per-Device Sensor)

在集成配置中手动选择需要监控的设备，为每个选中设备自动创建 **4 个独立传感器**：

| 传感器 | 说明 | 默认单位 | 可选单位 |…
