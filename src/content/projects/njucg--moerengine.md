---
repo: "NJUCG/MoerEngine"
name: "MoerEngine"
description: "High-Performance Real-Time Rendering Engine"
readmeQualityOk: true
url: "https://github.com/NJUCG/MoerEngine"
homepage: "https://njucg.github.io/MoerEngine/"
language: "C++"
languages: ["C++"]
languagePcts: [87]
topics: ["computer-graphics", "real-time-rendering", "renderer", "vulkan"]
stars: 53
forks: 10
openIssues: 23
closedIssues: 36
watchers: 2
contributors: 33
recentReleases: 1
createdAt: "2023-09-06T11:04:20Z"
lastCommitAt: "2026-07-31T06:29:15Z"
lastReleaseAt: "2026-06-20T05:49:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 55
maintainers: ["Irk2wd"]
openGraphImageUrl: "https://opengraph.githubassets.com/96b3e1e27f9cde4ef8c6aa2c9a5f3228227e218ba1dcce4cc58f633d31d1ebe1/NJUCG/MoerEngine"
---

# MoerEngine

实时渲染引擎

**| 简体中文 | [English](https://github.com/NJUCG/MoerEngine/blob/HEAD/docs/README.en.md) |**

> 注：MoerEngine目前仍处于早期开发阶段，功能和性能均不完善，并正在进行小范围重构。

## 目录

- [1. 如何构建](#1-如何构建)
- [2. 如何使用](#2-如何使用)
  - [2.1 特性](#21-特性)
  - [2.2 如何渲染场景](#22-如何渲染场景)
  - [2.3 如何移动摄像机](#23-如何移动摄像机)
- [3. 效果图](#3-效果图)
  - [3.1 光追渲染器](#31-光追渲染器)
  - [3.2 光栅化渲染器](#32-光栅化渲染器)
- [4. 如何贡献](#4-如何贡献)
- [开源协议](#开源协议)

## 1. 如何构建

* 详细的 *构建步骤*、*依赖项*、*CUDA等AI插件*、*NRD插件* 请参考【[构建手册](https://github.com/NJUCG/MoerEngine/blob/HEAD/docs/BUILD.md)】

* 通过命令行构建与运行MoerEngine

    ```bash
    # Clone仓库
    git clone --recurse-submodules --shallow-submodules git@github.com:NJUCG/MoerEngine.git
    cd MoerEngine
    
    # 根据模板创建一份MoerEngine的配置文件
    cp template.MoerEngine.toml MoerEngine.toml
    
    # 构建
    # Clang + ninja
    cmake -B build -G Ninja -DCMAKE_C_COMPILER=clang -DCMAKE_CXX_COMPILER=clang++
    # # MSVC
    # cmake -B build
    cmake --build build -j16 # change 16 to your cpu core count
    
    # 运行
    ./target/bin/Debug/MoerEditor.exe
    ```

## 2. 如何使用

### 2.1 特性

* 光栅化渲染器
  * 光照：延迟渲染、PBR着色、级联阴影
  * 后处理：屏幕空间AO、光线追踪AO、屏幕空间反射、泛光、自动曝光
  * 抗锯齿与降噪：FXAA、SMAA、TAA、双边滤波
  * GPU Driven：顶点拉取 Vertex…
