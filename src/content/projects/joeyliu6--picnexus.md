---
repo: "joeyliu6/PicNexus"
name: "PicNexus"
description: "跨平台多图床上传与管理工具，支持图片压缩、历史记录、链接生成、剪贴板监听与备份同步。"
readmeQualityOk: true
url: "https://github.com/joeyliu6/PicNexus"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [63]
topics: ["image-uploader"]
stars: 36
forks: 5
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2025-11-16T02:00:23Z"
lastCommitAt: "2026-08-13T05:15:38Z"
lastReleaseAt: "2026-07-14T07:08:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 42
maintainers: ["joeyliu6"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf3d3e1e5bb9774724dfb2cc1f6ab64fc48172e5e7b944718aabed256e241521/joeyliu6/PicNexus"
---

# PicNexus

**多图床上传工具** — 快捷上传，随处引用

</div>

## 这是什么？

PicNexus 是一个跨平台桌面端图片上传与图床管理工具。选择图床，拖入图片，拿到链接。它支持多图床并行上传、本地历史管理、图片压缩、链接格式输出、剪贴板监听、WebDAV/本地备份同步、编辑器集成等工作流。

## 核心功能

- **多图床并行上传** — 部分服务失败不阻断整体上传。
- **多类图床支持** — 覆盖公共图床、Cookie 登录、Token/API Key、私有对象存储和自定义 S3。
- **图片压缩** — 支持 JPEG、WebP、等比缩放等本地处理。
- **上传历史管理** — SQLite 本地存储，支持分页、搜索、收藏、时间轴浏览。
- **链接格式输出** — Markdown、HTML、BBCode、纯 URL、自定义模板。
- **剪贴板监听** — 截图后可自动上传。
- **配置加密存储** — 敏感配置加密保存，密钥存系统 Keyring。
- **备份与同步** — WebDAV / 本地备份同步。
- **图床健康检测** — 定期检查服务可用性。
- **深浅色主题** — CSS 变量驱动，一键切换。
- **CLI 模式** — 命令行上传。
- **编辑器集成** — 支持 Typora / Obsidian 工作流。

## Obsidian 插件

Obsidian 插件已提交到 [Obsidian Community](https://community.obsidian.md/plugins/picnexus)。官方客户端清单同步后可在 Obsidian 中搜索 `PicNexus`；同步完成前也可以通过 BRAT 从独立仓库安装，或使用 PicNexus Release 附带的 `picnexus-obsidian-*.zip` 手动安装。

插件需要 PicNexus 桌面端保持运行，并在「设置 → 外部编辑器」中启用 Obsidian 集成、选择图床。BRAT、官方目录、手动安装和端口配置步骤见 [Obsidian 插件安装与配置](https://github.com/joeyliu6/PicNexus/blob/HEAD/docs/reference/guides/obsidian-plugin-installation.md)。

## 支持的图床

> 注意：PicNexus 是个人非官方项目，不隶属于任何第三方平台。公共图床和第三方平台适配可能依赖非官方接口或平台行为，可能随时失效，也可能受平台规则限制。请仅在遵守相关平台条款、访问控制和合理使用边界的前提下使用，不要用于绕过限制、滥用公共资源或批量自动化滥用。

| 分类 | 图床 | 认证方式 | 说明 |…
