---
repo: "flyfish-dev/file-viewer"
name: "file-viewer"
description: "Browser-native Office / PDF / CAD / archive viewer for internal web apps, with Vue, React, Svelte, jQuery, Web Components, and no server-side conversion."
url: "https://github.com/flyfish-dev/file-viewer"
homepage: "https://file-viewer.app"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [64, 24]
topics: ["file-viewer", "cad-viewer", "document-viewer", "docx", "office-viewer", "offline-first", "pdf-viewer", "pptx", "react", "typescript"]
stars: 363
forks: 74
openIssues: 2
closedIssues: 61
watchers: 5
contributors: 1
recentReleases: 10
createdAt: "2026-05-18T08:59:25Z"
lastCommitAt: "2026-06-29T07:21:54Z"
lastReleaseAt: "2026-06-22T03:07:00Z"
status: "newborn"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 99
undervaluedScore: 32
maintainers: ["wybaby168"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1242251592/191102c3-fead-4358-b76c-2fa663824794"
fundingLinks: ["CUSTOM:https://dev.flyfish.group/shop"]
---

</a>
</p>

<h1 align="center">File Viewer</h1>

  <strong>面向企业后台、内网和私有化系统的纯前端文件预览组件。</strong>
</p>

  无需服务端转码，在浏览器端预览 Office、PDF/OFD、CAD、压缩包、邮件、图片、音视频、代码等常见业务附件。支持 Vue、React、Svelte、jQuery 和 Web Components。
</p>

</p>

</p>

</p>

---

## 项目定位

File Viewer 是面向业务系统的浏览器原生文件预览组件。它的核心场景是企业后台、OA、知识库、工单系统、附件中心、工程资料库和私有化交付项目中的附件预览。

无需后端转码服务，也不要求把私有文件交给云端转换。一个组件、一套 API，覆盖 Office、PDF、OFD、Typst、CAD、XMind、压缩包、邮件、绘图、音视频、代码、PSD、字体和结构化数据。当前内置 206 个扩展名映射和 24 条预览链路。

新项目优先使用 `@file-viewer/*`；`@flyfish-group/*` 历史包继续同步维护。

## 亮点

- **接入快。** Vanilla JS、Vue、React、Svelte、jQuery 都有原生组件；full 包可一步拿到完整能力。
- **覆盖广。** 206 个扩展名，24 条预览链路，覆盖常见办公、工程、设计、数据和代码附件。
- **纯前端。** 浏览器内解析和渲染，支持离线、内网、Docker、私有 CDN 和严格资源自托管。
- **模块化。** 轻量组件、renderer、preset、full 包分层清晰，既能极简安装，也能一键全量。
- **按需加载。** PDF、Office、CAD、Typst、压缩包、图纸、PSD、Mermaid 等重型能力只在命中格式时加载。
- **操作完整。** 搜索、高亮、缩放、打印、导出 HTML、下载、水印、主题、生命周期钩子和按钮前置校验都走统一 API。
- **生态一致。** Core 聚焦底层能力，各框架组件只做原生封装，参数、事件和 controller 体验保持一致。

## 按场景选择入口

| 用户 | 他们关心什么 | 推荐入口 |
| --- | --- | --- |
| 企业后台 / OA 开发 | Word、Excel、PPT、PDF 附件预览 | [快速开始](#快速开始) / [Office preset](https://doc.file-viewer.app/guide/quickstart) |
| 工程资料系统 | DWG、DXF、DWF、图纸初筛 | [支持格式](#支持格式) /…
