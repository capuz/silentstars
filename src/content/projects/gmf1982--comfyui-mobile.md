---
repo: "gmf1982/comfyui-mobile"
name: "comfyui-mobile"
description: "在手机上使用ComfyUI,Use your PC ComfyUI from your phone - zero-install mobile web UI"
readmeQualityOk: true
url: "https://github.com/gmf1982/comfyui-mobile"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [96]
topics: ["comfyui", "image-generation", "mobile", "stable-diffusion", "web-ui"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-10-06T07:15:37Z"
lastCommitAt: "2026-10-18T08:15:46Z"
lastReleaseAt: "2026-10-18T08:04:37Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 30
maintainers: ["gmf1982"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a87915e03cb301ae938a15718fe429d8e187c7a07af74d2cedce6a50a8b6aca/gmf1982/comfyui-mobile"
---

# ComfyUI Mobile

**中文** | [English](#english)

在手机上轻松使用**电脑里的 ComfyUI**：电脑上运行一个轻量**安全网关**，手机打开网页即可操作，手机上什么都不用装。无论是窝在沙发上还是出门在外，都能随时出图：工作流自动推导成大按钮参数表单，**抛开桌面端眼花缭乱的节点连线**，改改提示词、点一下「生成」就好；工作流管理、实时进度、图库、队列、节点图一应俱全，还能「添加到主屏幕」当 App 使用（PWA）。

## ✨ 功能特色

- **📱 为竖屏而生**：不是把桌面页面缩小，而是重排成大按钮、单手可操作的移动布局；支持同时打开多个工作流，下拉切换
- **⚡ 快速运行表单**：自动把工作流推导成手机友好的参数表单（提示词 / 图片 / 比例分辨率 / 步数·CFG / 种子·去噪 / 采样器 / 模型），参数行可拖动排序、移入「高级」区并自动记忆；校验报错可一键修复
- **🗂️ 工作流管理**：列表、新建、重命名、下载、删除；自动把 ComfyUI 导出的 UI 格式（含子图、旁路、动态组合等新特性）转换为可执行的 API 格式
- **📚 模板库**：内置 ComfyUI 官方模板和 23 个常见节点包的示例工作流，一键另存即可使用；官方模板带「本地 / 云端 API」标识，可按类型筛选，打开云端模板会提醒消耗积分
- **🖼️ 图库**：历史结果瀑布流，图片 / 视频 / 音频分类浏览，视频首帧缩略图；保存到手机、分享、**用原参数一键重跑**；缩略图由网关本地生成 + 浏览器缓存，二次打开几乎不耗流量
- **📊 队列**：实时进度、生成速度（步/秒）、显存占用、中途预览图；删除 / 清空 / 中断
- **🧩 节点图**：在手机上直接编辑节点图——添加 / 连线 / 删除 / 重命名节点、点按修改参数
- **🔌 一键隧道**：内置 Tailscale 支持，一条命令获得外网可访问的永久地址（见「手机连接」）
- **🖥️ 远程唤醒**：ComfyUI 没开也能在手机上远程启动 / 重启电脑端的 ComfyUI
- **🔐 开箱即用的安全**：访问令牌、防爆破封禁、写操作限流、路径穿越校验，详见「安全设计」
- **🌍 双语界面**：中文 / English 随时切换

## 📱 界面一览

## 📦 下载即用（Windows 免安装）

不想折腾命令行和环境？到 [Releases](https://github.com/gmf1982/comfyui-mobile/releases/latest) 下载 `*-win-x64-portable.zip`：解压后双击 `ComfyUI-Mobile.exe` 即启动网关（包内已自带 Node.js…
