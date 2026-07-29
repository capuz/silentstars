---
repo: "surkaa/surkaa-pad"
name: "surkaa-pad"
description: "一个端到端加密的日记软件"
readmeQualityOk: true
url: "https://github.com/surkaa/surkaa-pad"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [49, 30]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-11-22T16:26:52Z"
lastCommitAt: "2026-07-29T06:11:39Z"
lastReleaseAt: "2026-03-20T12:29:38Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 50
maintainers: ["surkaa"]
openGraphImageUrl: "https://opengraph.githubassets.com/9c94eb9a1c288e512047c79bf5625e26324a3991876b8491eecc50cff2de7029/surkaa/surkaa-pad"
---

</p>

<h1 align="center">SurKaa Pad</h1>

  <strong>端到端加密的跨平台私人日记应用</strong>
</p>

</p>

  如果 SurKaa Pad 对你有帮助，欢迎点一个 ⭐ Star，你的支持是我继续改进它的动力。
</p>

---

## 简介

SurKaa Pad 是一款基于 [Tauri 2](https://tauri.app/) 的本地优先、端到端加密日记应用，支持 Windows 桌面端与 Android 移动端。

无需配置云存储即可完整使用；启用阿里云 OSS 后，日记正文始终在**本地完成加密**再上传，图片和普通文件默认加密，音视频可按附件状态选择是否加密。主密码不会离开设备，存储服务无法读取加密内容。

## 核心特性

- **端到端加密能力** — 日记正文使用 AES-256-GCM，附件可使用 AES-256-CTR 流式加密，主密码通过 Argon2id 派生密钥
- **本地优先** — 无云存储配置时，日记和附件完整保存在应用本地目录
- **可选云同步** — 支持将本地密文迁移到阿里云 OSS，并在本地/远程模式间切换
- **结构化编辑** — 基于 Tiptap，支持图片、图集、视频、音频和文件附件内联展示
- **日记搜索** — 支持关键词以及图片、录音、视频、其他附件类型筛选
- **生物识别解锁**（Android） — 指纹/面容快速解锁，免去重复输入密码
- **主题切换** — 深色 / 浅色 / 跟随系统
- **附件管理** — 图片旋转、附件单独加解密切换、拍照/录音/文件上传
- **数据导出** — 支持导出日志，一键重置配置

## 技术栈

| 层级 | 技术 |
|------|------|
| 前端框架 | Vue 3 + TypeScript |
| UI 组件库 | Quasar Framework |
| 富文本编辑器 | Tiptap |
| 桌面/移动壳 | Tauri 2 (Rust) |
| 加密 | AES-256-GCM / AES-256-CTR / Argon2id |
| 云存储 | 阿里云 OSS（基于定制 rust-s3 客户端） |
| 构建工具 | Vite + pnpm |

## 架构

```mermaid
flowchart TB
    Vue["Vue 3 / Quasar / Tiptap"] -->|Tauri IPC| Commands["Rust Commands"]
    Commands --> Domain["日记 / 附件 / 搜索 / 迁移 / 同步"]
    Domain --> Store["DiaryStore"]
    Store -->…
