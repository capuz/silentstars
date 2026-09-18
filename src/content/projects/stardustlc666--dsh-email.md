---
repo: "STARDUSTLC666/dsh-email"
name: "dsh-email"
description: "DeepSeek Harness 邮件插件：IMAP/SMTP 收发、搜索、回复转发、邮件整理与增量收件，Outlook OAuth2 设备码登录，多邮箱预设与自定义服务器预设，卡片式多账号设置页（中英双语），发信审批门与 Web 新邮件通知。"
readmeQualityOk: true
url: "https://github.com/STARDUSTLC666/dsh-email"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [72, 28]
topics: ["deepseek-harness", "dsh-plugin", "email", "imap", "email-tools", "smtp"]
stars: 14
forks: 6
openIssues: 2
closedIssues: 6
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-08-13T20:27:30Z"
lastCommitAt: "2026-09-18T14:02:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 50
maintainers: ["STARDUSTLC666", "GUODnuli"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1333512933/df41b127-f773-4c09-a23a-8f14c1efa21d"
---

[English](https://github.com/STARDUSTLC666/dsh-email/blob/HEAD/README.en.md)

# dsh-email

> **让 agent 协助处理邮件**：收发、搜索、回复转发、附件、邮件整理与新邮件提醒，支持八种常见邮箱服务预设。

   

DeepSeek Harness 邮件插件：通过标准 IMAP/SMTP 提供 **10 个工具**，覆盖邮件查收与搜索、发送与回复转发、附件处理、标记与移动、增量收件和健康检查。支持多个账号、发信审批、Web 设置页与新邮件弹窗；配置邮箱账号后即可使用。

IMAP/SMTP email tools for DeepSeek Harness, with replies, forwarding, mailbox organization and new-mail notifications. Presets: QQ / 163 / 126 / Sina / Aliyun / Gmail / Outlook / iCloud.

纯 Node 实现，**全平台通用**（Windows / macOS / Linux 同一份代码），不依赖 shell、无原生二进制。

## 工具一览

| 工具 | 作用 |
|---|---|
| `email_list` | 列出文件夹里最新的邮件（未读过滤、分页、只看摘要不带正文） |
| `email_read` | 按 uid 读取一封邮件的全文（HTML 邮件自动转纯文本，超长截断） |
| `email_search` | 按关键词搜索主题/发件人/收件人/抄送（服务器端 subject/from/to/cc；命中会先用信封复核，QQ 这种"什么都匹配"的响应会被判无效）；复核或服务器都没给出可信结果时，默认回退到最近 30 封的正文扫描（含 to/cc） |
| `email_send` | 代发邮件（支持带附件）。**默认发信前会弹确认**，显示收件人、主题和附件数，由你批准后才发出 |
| `email_folders` | 列出邮箱的文件夹（INBOX/已发送/垃圾邮件/自定义…），拿 path 喂给其他工具 |
| `email_attachment` | 按序号下载邮件附件（默认存到会话工作区，模型可直接读取；大小受 maxAttachmentBytes 限制） |
| `email_health` | 离线检查账号配置及 IMAP/SMTP 主机信息；不建立网络连接，实际 IMAP 连通性使用设置页的“测试连接” |
| `email_watch` | 增量检查新邮件：首次调用建立基线，之后每次只报告比上次多出来的未读邮件，适合定时任务做新邮件提醒 |
| `email_mark` |…
