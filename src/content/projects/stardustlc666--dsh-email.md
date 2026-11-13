---
repo: "STARDUSTLC666/dsh-email"
name: "dsh-email"
description: "DeepSeek Harness email workspace: multiple accounts, HTML replies and drafts, confirmed scheduled sending, Google/Outlook OAuth, and optional email tasks. Issues and PRs welcome."
originalDescription: "DeepSeek Harness 邮件工作台：多账号、HTML 回复与草稿、确认定时发送、Google/Outlook OAuth 和可选邮件任务。欢迎提交 issues 和 PR。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/STARDUSTLC666/dsh-email"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [74, 26]
topics: ["deepseek-harness", "dsh-plugin", "email", "imap", "email-tools", "smtp"]
stars: 45
forks: 15
openIssues: 5
closedIssues: 30
watchers: 0
contributors: 8
recentReleases: 1
createdAt: "2026-08-13T20:27:30Z"
lastCommitAt: "2026-11-13T18:33:25Z"
lastReleaseAt: "2026-11-10T13:28:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 41
maintainers: ["STARDUSTLC666", "s17765152890-gif", "Blueteemo"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1333512933/df41b127-f773-4c09-a23a-8f14c1efa21d"
---

**Simplified Chinese** · [English](https://github.com/STARDUSTLC666/dsh-email/blob/HEAD/README.en.md)

# Email

**Handle email in DSH, and send replies only after you confirm them.**

**[Installation](#安装) · [Usage flow](#开始使用) · [Full reference](https://github.com/STARDUSTLC666/dsh-email/blob/main/docs/REFERENCE.zh.md)**

## Features

- Supports IMAP / POP3 / SMTP, Google / Outlook OAuth, or AgentMail accounts, with a Tencent Enterprise Mail preset.
- Browse mail in the workspace, search, and download attachments.
- Manage self-created IMAP folders: create and rename them, preview and separately confirm emptying them. Only empty folders can be deleted; system folders are protected.
- The UI follows the DSH language: Simplified Chinese, English, Spanish, French, German, Japanese, Brazilian Portuguese, and Russian.
- Other plugins can subscribe to new-mail arrival in-process via `emailTasks`, without reading message bodies or creating sessions.
- Edit HTML or plain-text replies and drafts. Verify the sending account, To/Cc, body, and attachments, then send immediately or schedule sending.
- Optional "Email tasks": from an authorized mailbox, start DSH tasks in allowed workspaces…
