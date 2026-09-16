---
repo: "Jcs2026-byte/Super_ADB"
name: "Super_ADB"
description: "adb 集成工具 win mac linux "
readmeQualityOk: true
url: "https://github.com/Jcs2026-byte/Super_ADB"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-09-01T03:33:09Z"
lastCommitAt: "2026-09-16T08:47:54Z"
lastReleaseAt: "2026-09-13T07:09:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 62
maintainers: ["Jcs2026-byte", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ed5febc10ddbd0f78aaf4847e10cb976681a4f6e570e3a57ec539fc7ee3814f5/Jcs2026-byte/Super_ADB"
---

# Super_ADB

> 一款跨平台的 ADB 集成调试工具，集设备连接、应用管理、文件传输、日志抓取、性能监控、网络抓包、ADB 命令速查等功能于一体。

- 这三个分页条都可以折叠界面，折叠后调整窗口大小隐藏不需要的功能，下次需要的时候再展开
- 主题样式丰富
- **最新版本：`2026.09.16`**（GitHub / Gitee / GitCode 均已同步）

## ✨ 功能特性

### 🔌 设备连接

- **自研 ADB（三平台默认）**：纯 Python 实现的 ADB 协议栈（`工具/android调试工具/自研adb/`），
  TCP 直连 + USB（pyusb）双通道，不依赖官方 adb server、不占用 5037 端口，
  传输速度最高可达官方 2.7 倍
- **智能设备列表**：默认只显示已连接设备（USB + 已认证连接），与官方 `adb devices` 行为一致，
  不会自动扫描局域网影响他人设备；需要扫描局域网可使用独立的「IP 扫描」功能
- **系统 ADB / Socket 直连**：可一键切换回官方 adb（优先 PATH，其次内置 platform-tools）

- **无线调试**：局域网扫描、配对码连接（adb pair）、二维码连接（mDNS）三种方式
- **历史连接设备**：自动记录连接过的设备（IP/端口/型号/系统版本），一键重连/删除，按型号自动识别单通道设备，不重复检测
- （会在本地起一个服务接受设备端广播发来的授权信息，首次PC端会要求授权，本软件不会连接互联网）
- 环境勾选自研adb，命令行工具会使用自研adbshell
- 非自研调用pc系统交互式输入框

### 📁 文件管理

- 连接设备后单击开启设备管理器，3秒动态刷新当前目录
- 设备文件树浏览器，支持上传/下载/删除/重命名/移动/新建目录/新建文件
- 拖拽上传、深度递归搜索、文本/图片/视频预览
- 双击文本文件直接在线编辑，保存后自动回传设备（缓存到桌面 Super_ADB/文件缓存/）
- 权限修改（右键授权 777），只读分区自动检测并附解锁引导
- 深度搜索结果支持右键"打开所在路径"，自动定位并展开到目标目录
- 切换模式时自动停止正在进行的文件管理/日志任务

### 📦 应用管理

- APK 拖拽安装、批量安装、实时进度显示
- APK 元信息解析（包名/版本/权限/四大组件）
- 解包查看资源，安装失败自动诊断原因
- **包信息获取**：一键查看指定包的安装路径、PID、版本号、版本名、SDK 版本、UID、数据目录、应用大小等详细信息，异步加载不卡界面
- **冻结 / 解冻应用**：输入包名一键冻结（`pm disable`）或解冻（`pm…
