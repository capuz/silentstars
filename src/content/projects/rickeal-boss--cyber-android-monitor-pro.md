---
repo: "Rickeal-Boss/Cyber-Android-Monitor-Pro"
name: "Cyber-Android-Monitor-Pro"
description: "全面字研手搓Android设备性能监控工具：基于 MVVM + Koin DI 架构，Jetpack Compose + Material3 构建的全功能完全本地运行的超小体积Android 设备信息监控应用"
url: "https://github.com/Rickeal-Boss/Cyber-Android-Monitor-Pro"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [97]
topics: ["android-app", "android-application", "android-monitor", "android-monitoring-tool", "android-ui", "cpu-monitoring", "device", "device-info", "monitoring-tool", "jetpack-compose"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-05-30T07:17:02Z"
lastCommitAt: "2026-07-01T07:07:50Z"
lastReleaseAt: "2026-06-11T10:50:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 52
maintainers: ["Rickeal-Boss"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1254131463/6308daf4-6bff-42a7-bf97-7a3cd4130a10"
discussionCount: 0
---

# Cyber-Android-Monitor-Pro 设备性能监控工具 System Monitor(deviceinfoviewer\Device Info Viewer)

> **⚠️ 重要声明 / License Notice**  
> 本项目采用 [PolyForm Noncommercial License 1.0.0](https://polyformproject.org/licenses/noncommercial/1.0.0/) 许可证。完整法律文本请查阅项目根目录下的 `LICENSE` 文件。  
> **源码公开，仅供个人学习、研究和非商业用途**。  
> 严禁将本软件打包出售，或作为付费服务、SaaS 托管服务的一部分。  
> 严禁在本软件的衍生作品中接入广告以获取直接或间接的商业收益。
> 
> *This project is source-available and free for **personal, educational, and non-commercial use only**. Commercial use is strictly prohibited without a separate license.*

---

## 🏛️ 项目

Cyber-Android-Monitor-Pro
 System Monitor(deviceinfoviewer) 提供实时、精准的硬件状态数据可视化。通过直观的深色界面，帮助开发者、硬件爱好者和普通用户全面掌握设备运行状态。支持Android 5+

## 🗼 核心功能
> 基于 **MVVM + Koin DI** 架构，**Jetpack Compose + Material3** 构建的全功能 Android 设备信息监控应用。
> 无 ROOT 权限下实现深度硬件检测，适配小米 HyperOS、OPPO ColorOS、Vivo OriginOS 等国产 ROM。

---

## 🛞 核心亮点

### 🔬 深度硬件检测（多级 Fallback 策略）

| 功能模块 | 检测深度 | Fallback 层级 |
|---------|---------|--------------|
| **CPU 温度** | HardwarePropertiesManager → sysfs thermal_zone → hwmon/平台专用 → SensorManager → 电池温度 | 5 级 |
| **GPU 频率/负载** | 50+ sysfs 路径 + 动态属性 + 负载估算 | 5 层 |
| **电池循环次数** | BatteryManager 隐藏 API → 50+ sysfs 路径 → dumpsys | 8 级 |
|…
