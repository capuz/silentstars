---
repo: "xqy2006/jsc2js"
name: "jsc2js"
description: "Reverse V8‑generated JSC bytecode into readable (approximate) JavaScript."
readmeQualityOk: true
url: "https://github.com/xqy2006/jsc2js"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 86
forks: 30
openIssues: 8
closedIssues: 13
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-08-22T09:26:29Z"
lastCommitAt: "2026-08-18T04:09:35Z"
lastReleaseAt: "2025-08-24T03:20:11Z"
status: "thriving"
tags: []
healthScore: 92
undervaluedScore: 45
maintainers: ["xqy2006", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cdc84aef473ef742b04b46d4af351a11e74e89e363fb634bccb274910d5d2646/xqy2006/jsc2js"
---

# jsc2js

[简体中文](#jsc2js) | [English](#english)

---

## 项目简介

`jsc2js` 用于将v8生成的 **JSC 字节码**逆向为可读的 JavaScript。  
本仓库主要包含两部分：

1. **修补后的 d8**：针对多个 V8 版本（见 Releases），为其内置一个用于加载与打印 `.jsc` 字节码的扩展（新增/修改的内建入口：`loadjsc()`）。
2. **集成的 View8 工具 (基于 [suleram/View8](https://github.com/suleram/View8) 并作定制修改)**：用于把 d8 打印出的字节码文本再还原/重建为 JavaScript 近似源码。

---

## 快速开始

### 1. 获取对应版本 d8

前往 Releases 页面，选择与你的目标 `.jsc` 生成环境 **相同的 V8 版本号**。 （如果没有找到，请发起 Issue ） 

每个版本下提供：
- `d8-linux`：Linux 64-bit 可执行文件
- `d8-windows.exe`：Windows 64-bit 可执行文件

### 2. 将 `.jsc` 转成字节码文本

```bash
./d8 -e "loadjsc('path/to/xxx.jsc')" > xxx.txt
```

说明：
- `loadjsc()` 为修补后 d8 注入的辅助函数。
- 输出的 `xxx.txt` 为人类可读（但仍较底层）的 V8 Ignition Bytecode 反汇编格式。

### 3. 使用修改后的 View8 转成 JavaScript

仓库结构中已包含定制的 `View8/` 目录：

```bash
cd View8
python view8.py --disassembled ../xxx.txt ../xxx.js
```

执行后：
- `xxx.js` 为基于字节码分析还原的近似 JavaScript。  
  （变量名 / 控制流结构可能与原始源码不同，属于“语义近似重建”）

### 4. 依赖环境

View8 需要：
- Python 3.9+（建议）
- 依赖
  ```bash
  pip install -r requirements.txt
  ```

---

## 说明

- 当前补丁覆盖 V8 5.1 及之后版本。V8 5.1–11.9 与 14.7.84+ 使用按源码
  API 自动适配的安全补丁；V8 12.0–14.7.83 继续使用内容未改动的稳定补丁。
- V8 5.1 是当前 `.jsc` 路径的兼容下界：截至 V8 5.0 的版本缺少本工具所需的…
