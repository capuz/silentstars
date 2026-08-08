---
repo: "suifei/shownet"
name: "shownet"
description: "抓包 · HTTPS 证书 · 协议逆向 · AI 分析· JA3。 AI-native desktop traffic capture, protocol analysis, AI evidence reports, request replay, and code generation."
readmeQualityOk: true
url: "https://github.com/suifei/shownet"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [58, 28]
topics: ["ai", "api-reverse-engineering", "ja3", "mitm-proxy", "packet-capture", "tauri", "tls-fingerprint"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-08-02T15:57:24Z"
lastCommitAt: "2026-08-08T04:34:29Z"
lastReleaseAt: "2026-08-07T23:36:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 66
maintainers: ["suifei"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1320337958/c8f4d0d7-46d8-442d-8b6d-2f94d34f89f6"
---

</p>

<h1 align="center">ShowNet</h1>

ShowNet 面向需要还原接口、签名与加密链路的开发者与安全研究人员。它把多来源流量收进同一个本地会话，用 **内置 AI Agent + Skill 编排** 自动分析证据，并导出 **算法重放包** 与 **多语言调用代码**。HTTPS 解密所需的 **Root CA 生成、本机一键安装、手机扫码装证与代理** 也集成在产品内。

**产品原则：开箱即用、能自动化就自动化、既简单又强大。** 完整功能盘点与前后关系见 [功能全景与工作流](https://github.com/suifei/shownet/blob/HEAD/docs/feature-map.md)。

> 只想看浏览器流量时：打开内嵌浏览器点「开始抓包」即可，不必先装证书。  
> 要抓手机 / 桌面 App 的 HTTPS：用「一键安装 CA」或设备扫码页完成信任与代理。  
> 需要 TLS 预置 / PX / 指纹与 AI 取证串联：打开 **MITM 高级控制台**（抓包→证据→分析→导出）。

## 核心能力（重点）

### 1. AI 能力：可审计的自动逆向，不是黑箱聊天

| 能力 | 说明 |
|------|------|
| **分析模式** | 自动 / API 逆向 / 安全 / 性能 / **JS 加密逆向** 等，按场景选择 |
| **证据驱动** | Agent **只读当前会话** 的请求、响应、Hook、加密片段与 MCP 工具结果 |
| **Skill 编排** | 动态签名、风控标记、证据过滤等内置 Skill 自动入选，带权限与工具列表 |
| **Graph 阶段** | 范围确认 → 调用链关联 → 证据核验 → 报告；进度可回看 |
| **可回查结论** | 报告中的发现可链回原始请求；Skill 运行有审计（工具调用、时长、状态） |
| **内置 Agent** | 正式包携带官方 `xai-org/grok-build` 无头运行时（sidecar），也可接 OpenAI 兼容 API |
| **MCP** | 本地 ShowNet MCP + 可选外部 Streamable HTTP MCP，工具按需取证 |

适合：看不懂协议字段、要还原签名 / 加密顺序、需要可复查的分析流水线，而不是一次性聊天总结。

### 2. 自动部署数字证书：本机与设备一条链路

| 步骤 | 产品行为 |
|------|----------|
| **生成** | 每安装一份独立 Root CA；私钥 AES-GCM 加密落在本地 SQLite |
| **本机一键安装** | 设置页「安装 CA」写入系统信任库（macOS /…
