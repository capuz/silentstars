---
repo: "AXERA-TECH/ax_asr_api"
name: "ax_asr_api"
description: "C++ ASR API on Axera platforms"
readmeQualityOk: true
url: "https://github.com/AXERA-TECH/ax_asr_api"
language: "C++"
languages: ["C++"]
languagePcts: [83]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2026-01-18T18:38:33Z"
lastCommitAt: "2026-07-07T06:42:29Z"
lastReleaseAt: "2026-07-07T06:43:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 32
maintainers: ["ml-inory", "ZHEQIUSHUI"]
openGraphImageUrl: "https://opengraph.githubassets.com/7b014306ef854542203285d40a538477604ff18401ebcd38ce7ce9aa86cd8476/AXERA-TECH/ax_asr_api"
---

# ax_asr_api
C++ ASR API on Axera platforms

支持平台:  
 - AX650
 - AX630C
 - AX620Q
 - AX8850

支持模型:
 - Whisper-Tiny
 - Whisper-Base
 - Whisper-Small
 - Whisper-Turbo
 - Sensevoice

## 文档目录  
- [快速开始](#快速开始)  
- [下载模型](#下载模型)  
- [编译](#编译)  
- [HTTP API](#http-api)
- [OpenAPI 描述](#openapi-描述)
- [Python Binding](#python-binding)
- [C-SDK](#c-sdk)
- [测试](#测试)  
- [性能表现](#性能表现)  
- [集成](#集成)  
- [讨论](#讨论)  

## 更新

## 快速开始

可从Release页面下载预编译库  

使用示例:  
```cpp
#include "ax_asr_api.h"

AX_ASR_HANDLE handle = AX_ASR_Init(AX_WHISPER_TINY, "./models-ax650");
if (!handle) {
    return -1;
}

char* result = NULL;
int ret = AX_ASR_RunFile(handle, "demo.wav", "zh", &result);
if (ret != AX_ASR_SUCCESS) {
    AX_ASR_Uninit(handle);
    return -1;
}

AX_ASR_Free(result);
AX_ASR_Uninit(handle);
```

说明:

- `model_path` 传模型根目录，例如 `./models-ax650`
- `AX_ASR_RunFile` 支持 `wav` 和 `mp3`
- 返回字符串必须使用 `AX_ASR_Free` 释放
- 同一个 `AX_ASR_HANDLE` 不建议被多个线程并发调用

## 下载模型

安装huggingface_hub
```bash
pip3 install -U huggingface_hub
```

运行下载脚本:
```bash
bash download_models.sh
```

## 编译

### 依赖

#### 系统要求

目前在Ubuntu 22.04上编译成功,  
需要安装CMake >= 3.13  

```bash
sudo apt install cmake build-essential
```

#### 获取交叉编译器

 -…
