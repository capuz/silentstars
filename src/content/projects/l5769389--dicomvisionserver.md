---
repo: "l5769389/DicomVisionServer"
name: "DicomVisionServer"
description: "DicomVision 是一套面向 DICOM 影像浏览、重建、测量、质量分析、元数据检查、对比阅片与脱敏导出的 C/S 阅片工具，支持 Stack 切片阅览、Stack 双序列对比、MPR/斜切 MPR、4D 时相播放、服务端 3D 体渲染、DICOM 标签检查与修改、DICOM 脱敏导出、ROI 测量、MTF/FWHM 分析、水模 QA、图像导出、深浅主题切换，并可分别部署为浏览器 Web 应用或包含内置后端的 Windows 桌面应用。"
readmeQualityOk: true
url: "https://github.com/l5769389/DicomVisionServer"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["dicom-viewer", "python"]
stars: 9
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-20T07:52:28Z"
lastCommitAt: "2026-08-28T08:27:28Z"
lastReleaseAt: "2026-05-31T14:40:03Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 76
undervaluedScore: 41
maintainers: ["l5769389"]
openGraphImageUrl: "https://opengraph.githubassets.com/1abcf20db7748e943a8c66dced25e14848c23feedd8e2e98060ce89821f7de10/l5769389/DicomVisionServer"
---

# DicomVision Server

[English](https://github.com/l5769389/DicomVisionServer/blob/HEAD/README.en.md)

DicomVision Server 是 DicomVision 的 FastAPI + Socket.IO 后端，负责 DICOM 发现、PACS 查询与下载、2D/MPR/4D/3D 渲染、PET/CT 融合、分割、测量、QA、导出和桌面端内置后端 bundle。

## 架构

Server 是 DICOM 发现、渲染、视图状态、导出和计算密集型分析的权威执行层。它通过稳定的 REST + Socket.IO 接口服务桌面端、Web 端和移动端，既可独立部署，也可随桌面安装包内置运行。

- **渲染链路**：基于 VTK 的 2D/MPR/4D/3D 渲染，可选独立 GPU 进程，支持 WebRTC 交互预览和无损 WebP 最终帧。
- **安全导入**：接受 DICOM 文件、目录、ZIP、7z 与 RAR；在扫描前限制压缩包成员路径、条目数、解压体积和压缩比。
- **部署方式**：适用于本地、局域网、云服务、Docker 与桌面端内置后端。

## 仓库

- Server: [https://github.com/l5769389/DicomVisionServer](https://github.com/l5769389/DicomVisionServer)
- Client: [https://github.com/l5769389/DicomVisionClient](https://github.com/l5769389/DicomVisionClient)

## 主要能力

- DICOM 文件夹、单文件、Web 上传、ZIP/7z/RAR 压缩包和示例数据加载。
- 缩略图、角标、DICOM Tag、序列、实例、4D phase 和视图 metadata 服务。
- PACS DICOMweb QIDO/WADO 与 DIMSE C-ECHO/C-FIND/C-GET。
- 2D、Compare、Layout、MPR、斜切 MPR、MIP、3D VR、3D Surface、4D phase 和 PET/CT Fusion。
- 3D 自适应模板、Surface 参数、去床板、自由裁剪、相机重置和移动端视口适配。
- 测量 ROI 指标、MTF/FWHM、水模 QA 和实时 hover/draft 交互。
- MPR 阈值分割、VOI、分割 overlay metadata 和导入/导出数据流。
- DICOM Tag 修改、批量任务、脱敏任务、DICOM SR/GSPS 和图像导出。
- Socket.IO…
