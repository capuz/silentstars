---
repo: "Zane-E/Armbian-Actions"
name: "Armbian-Actions"
description: "Linux for ARM development boards"
originalDescription: "Linux for ARM development boards"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Zane-E/Armbian-Actions"
language: "Shell"
languages: ["Shell"]
languagePcts: [97]
stars: 44
forks: 42
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2024-10-30T13:36:59Z"
lastCommitAt: "2026-11-05T00:21:35Z"
lastReleaseAt: "2026-11-01T00:59:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 78
undervaluedScore: 49
maintainers: ["Zane-E"]
openGraphImageUrl: "https://opengraph.githubassets.com/185098c3f7ae63e3ecce54c5459955cac4688385cc8b909b402bc8eb27b5f275/Zane-E/Armbian-Actions"
---

# Armbian Actions

Build official **Armbian** firmware and kernels via **GitHub Actions**

---

## 📦 Kernel Configuration
- Enables **eBPF** by default, compatible with **DAE proxy**
- Supported platforms: `meson64` `sunxi64` `rockchip64` `rk35xx`

---

## 🖥️ Supported Devices
- See the official **Armbian** [device list](https://github.com/armbian/build/tree/main/config/boards)

---

## ⚙️ Device Optimizations

### Nanopc-T4
- **CPU frequency**
  - Little cores: 1.5GHz
  - Big cores: 2.0GHz
- **Extended support**
  - PCIe 2.1 x4 enabled
- **Fan policy**
  - ≥ 45°C → fan starts
  - ≥ 65°C → fan at full speed

---

### Rock5C Lite
- **System optimizations**
  - Removes **U-Boot** detection of the **GPU**, enables the **GPU** node
  - Network interface: `end*` → `eth0`
- **Fan policy (BSP kernel)**
  - ≥ 45°C → 40%
  - ≥ 55°C → 55%
  - ≥ 65°C → 75%
  - ≥ 70°C → 88%
  - ≥ 75°C → 100%
- **Network support**
  - **WiFi** is not supported by default; install the [aic8800 driver](https://github.com/radxa-pkg/aic8800) yourself

---

### Panther-X2
- **CPU frequency**: 2.0GHz
- **Multimedia support**: **vendor** firmware supports **Jellyfin** hardware transcoding
- **Network interface**:…
