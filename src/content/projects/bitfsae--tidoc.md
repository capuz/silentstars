---
repo: "BITFSAE/tidoc"
name: "tidoc"
description: "报账发票、付款截图、查验单整理与打印导出的跨平台桌面工具"
readmeQualityOk: true
url: "https://github.com/BITFSAE/tidoc"
homepage: "https://img.bitfsae.com/tidoc/manifest.json"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [63, 25]
topics: ["desktop-app", "invoice", "pywebview", "reimbursement", "tidoc"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-05T12:07:09Z"
lastCommitAt: "2026-09-12T08:03:36Z"
lastReleaseAt: "2026-07-13T15:50:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 55
maintainers: ["totok22"]
openGraphImageUrl: "https://opengraph.githubassets.com/8686a9bddc4e51a3d47f447bcd8dfcd0d59e96c35a52557e4ceaa7b67bdf4336/BITFSAE/tidoc"
---

# tidoc

> 通用的报账凭证管理与整理工具。

tidoc 是一款跨平台桌面程序，以一张发票为工作单元，完成发票导入、材料补齐、识别提醒、筛选和批次整理，并导出可交换或打印的报账材料。适合个人、团队和社团使用。

- **界面**：PyWebView 原生窗口 + HTML/CSS/JS
- **核心**：Python，本地运行，不监听网络端口
- **数据**：SQLite + 本地附件仓库
- **交换**：带 HMAC 签名的 `.tidoc` 绑定包
- **打印**：可选独立组件，生成合并 PDF 与 Word
- **云识别**：可选阿里云 OCR 组件，用于补齐本地识别遗漏并比对结果（按量计费，自填密钥）

## 下载与安装

- [官网下载](https://www.bitfsae.com/)：首页底部「报账软件」入口，自动选择 Windows / macOS。
- [GitHub Releases](https://github.com/totok22/tidoc/releases/latest)

- macOS：下载 `tidoc-core-macos-v{version}.dmg`，拖入“应用程序”。
- Windows：下载 `tidoc-core-windows-v{version}.exe`，按用户安装，默认不需要管理员权限。

核心安装包不含打印导出组件和 OCR 识别组件；均可在「设置 → 组件与更新」中安装，也可在开发环境执行 `pip install -r requirements-print.txt` / `pip install -r requirements-ocr.txt`。云识别还需在「设置 → 阿里云 OCR」中填写自己的阿里云 AccessKey。生成报账说明或验收单 Word 前，还需在「收款信息」中维护姓名、学号、电话、开户行和卡号。

完整操作演示见 [Bilibili 使用说明视频](https://www.bilibili.com/video/BV1XN3q69EPi/)。

## 工作流

1. **导入发票**：PDF 是创建条目的必要材料，XML 用于提高识别准确度，不能单独创建条目。支持单条、文件夹、多选、拖拽和粘贴导入；单个 `.tidoc` 绑定包也可直接拖入或粘贴并进入导入预览。
2. **补齐材料**：在卡片或详情添加付款截图、实物图和查验单。实物图未设为必需且条目没有既有图片时不显示入口和空分组。付款截图可用系统本地 OCR 尝试识别实付金额，识别失败或无法唯一匹配时手动选择。卡片上的「查验」会打开国家税务总局平台并预填发票字段；完成验证码和官网打印后，保存到下载、桌面、文档或自定义目录的 PDF 会自动识别归档，已有查验单也可直接上传。
3.…
