---
repo: "BG7ZDQ/ASRTU_Series_Receiver"
name: "ASRTU_Series_Receiver"
description: "A Software to Decode ASRTU Series Satellites (BPSK 9600)"
readmeQualityOk: true
url: "https://github.com/BG7ZDQ/ASRTU_Series_Receiver"
language: "C++"
languages: ["C++"]
languagePcts: [70]
stars: 8
forks: 3
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 5
createdAt: "2026-08-26T15:55:08Z"
lastCommitAt: "2026-08-28T14:27:01Z"
lastReleaseAt: "2026-08-27T23:28:32Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 55
maintainers: ["BG7ZDQ", "doublehan07", "IzumiChino"]
openGraphImageUrl: "https://opengraph.githubassets.com/3385131d68e14514996536898848d2577733d9063105c171f3db232b190fb425/BG7ZDQ/ASRTU_Series_Receiver"
---

# ASRTU Series Satellite Receiver

ASRTU 系列卫星接收、解调、遥测转发与自动多普勒工具。项目包含 C++/Qt 接收解码器、桌面启动器、遥测代理启动包装器，以及 SDR# 本地 RAW I/Q 桥接插件。

Author: **BG7ZDQ**

Languages: **中文** · [English](https://github.com/BG7ZDQ/ASRTU_Series_Receiver/blob/HEAD/README_EN.md) · [日本語](https://github.com/BG7ZDQ/ASRTU_Series_Receiver/blob/HEAD/README_JA.md)

## 主要功能

- 本地共享内存 RAW I/Q、立体声零中频 I/Q、单声道 12 kHz 实数中频和录音文件输入
- BPSK 解调、卷积码/Viterbi 与 FEC 帧输出
- 实时瀑布图、频谱、星座图、SNR、RSSI、环路频偏及同步状态
- 可选 WAV 自动录制，完整帧、SVR 和运行日志按会话保存
- 多 TLE 源下载、卫星选择、频率预设、SGP4 跟踪和 SDR# 自动多普勒控制
- 遥测上传代理及地面站呼号、经纬度配置
- 可选将实时解码的 FEC 帧直接上传至 SatNOGS（录音回放不会上传）

## 使用教程

### 1. 安装与首次设置

1. 运行 `ASRTU_Series_Receiver_Setup.exe`，按需求选择是否安装随包提供的 SDR# 遥测预设。
2. 从桌面打开 **ASRTU 系列卫星启动器**。
3. 填写呼号、经度、纬度和海拔。坐标用于卫星跟踪与多普勒计算；启动器会在本机保存设置。
4. 根据接收链路选择“输入”。只有声卡输入模式会显示“声卡”下拉框。

### 2. 选择接收输入

| 输入模式 | 适用场景 | 信号要求 |
| --- | --- | --- |
| 本地内存共享 RAW 模式 I/Q 桥接 | 使用安装包内的 SDR# 和 ASRTU 插件 | SDR# 输出的零中频复数 RAW I/Q |
| 立体声零中频 RAW 模式 I/Q 输入 | SDR 软件通过虚拟声卡输出 I/Q | 左右声道分别为 I、Q，中心频率为 0 Hz |
| 单声道实数域 12 kHz 电台 IF 输入 | 电台、接收机或录音设备输出实数中频 | 目标信号以 +12 kHz 为中心 |

选择声卡模式时，在“声卡”中选择实际输入设备。运行中更换声卡，应先停止当前接收，再选择设备并重新启动。

### 3. 使用 SDR# RAW I/Q 桥接

1. 点击 **打开 SDR# 遥测预设**。
2. 在 SDR#…
