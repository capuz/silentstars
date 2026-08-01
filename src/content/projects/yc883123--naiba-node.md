---
repo: "yc883123/naiba-node"
name: "naiba-node"
description: "comfyui custom node"
readmeQualityOk: true
url: "https://github.com/yc883123/naiba-node"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [55, 45]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-14T05:04:06Z"
lastCommitAt: "2026-08-01T06:13:18Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 41
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/e836f188316f9378e93e9a41f5321f3b8d55b01e3b40b79e2596e0a7d3029e1a/yc883123/naiba-node"
---

# Naiba Test Custom Nodes for ComfyUI

自定义ComfyUI节点集合，包含WAN模型优化、Multi LoRA Loader、Multi LoRA Loader (only model)、Visual LoRA Loader、List LoRA Loader、Lora Testing Converter、Save Text File、Lora Data Preview、Civitai Info Reader、Custom Data Reader、Power LoRA Config Reader、**Naiba Tag Picker（Danbooru 标签画廊/扭蛋）**和**Naiba Gelbooru Tag Picker（Gelbooru 标签画廊/扭蛋）**功能。

## v3.7.0 更新亮点（2026-07-31）

本次更新将 Danbooru / Gelbooru 的网络请求统一收口到独立网络层，并补齐依赖与测试。

### 统一网络层（naiba_network.py）
- 新增独立模块 `naiba_network.py`：集中处理搜索 / 预览 / 扭蛋 / 预加载 / 状态检测的全部 HTTP 请求，Danbooru 与 Gelbooru 两端共用，避免重复实现。
- 代理模式：画廊设置页支持 `自动 / 手动 / 直连` 三种模式；手动地址支持 HTTP(S) 与 SOCKS5/SOCKS5H，裸 `127.0.0.1:7890` 按 HTTP 代理处理。
- 自动代理探测：优先 `NAIBA_PROXY_URL`，其次标准代理环境变量，再回退 Windows 静态系统代理；PAC/WPAD 需改用手动地址或 TUN 模式。
- 联网诊断：`status` 接口返回实际延迟与代理来源；代理 / DNS / TLS / 超时 / HTTP 错误均返回可见原因，不再伪装成空搜索结果。认证代理建议通过 `NAIBA_PROXY_URL` 提供，避免凭据随工作流保存。

### 依赖与测试
- 新增 `requirements.txt`：`requests>=2.31.0`、`PySocks>=1.7.1`（SOCKS 代理支持）。
- 新增 `tests/test_naiba_network.py`：覆盖代理解析、URL 安全过滤、错误码映射等核心逻辑。
- 两个 Tag Picker 节点（`naiba_tag_picker.py` / `naiba_gelbooru_tag_picker.py`）及对应前端（`js/naiba_tag_picker.js` / `js/naiba_gelbooru_tag_picker.js`）接入统一网络层与诊断。

---

## v3.7.1…
