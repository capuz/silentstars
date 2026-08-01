---
repo: "FanyinLiu/Nexus"
name: "Nexus"
description: "Cross-platform desktop AI companion — Live2D character, always-on wake word, continuous voice chat, dreaming long-term memory, autonomous behavior, and built-in tools (web search / weather / reminders). Electron + React + TypeScript."
readmeQualityOk: true
url: "https://github.com/FanyinLiu/Nexus"
homepage: "https://github.com/FanyinLiu/Nexus/releases/latest"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [70, 22]
topics: ["ai-companion", "cross-platform", "desktop-pet", "electron", "live2d", "llm", "privacy-focused", "react", "stt", "tts"]
stars: 16
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-03-28T15:59:08Z"
lastCommitAt: "2026-08-01T06:16:03Z"
lastReleaseAt: "2026-04-24T16:25:31Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 43
maintainers: ["FanyinLiu"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1194627326/c61e0f85-0063-484d-93a7-9dcaa5c0da57?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260801%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260801T061706Z&X-Amz-Expires=300&X-Amz-Signature=1d30ea774f14c86c461faf8106da38ea27c7a69defa94cb09a113e27545f4729&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTU2NTMyNiwibmJmIjoxNzg1NTY1MDI2LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.IijV641VGhs-7actUlfCYcyVr9C_eC1qbxg1_lV20xc"
discussionCount: 11
---

# Nexus

Nexus 是一个 **本地优先的 AI 桌面伙伴**。

它不是普通聊天软件，也不是把聊天框套进 Electron 的多模型面板。Nexus 的目标是让 AI 以一个可见、可听、能记住你、能在你明确授权时提供轻量帮助的形象常驻在电脑里。

一句话：**Nexus 是一个住在电脑里的 AI 伙伴。**

> **当前稳定版：** v0.4.4，与 `package.json` 保持一致；发行说明见 [RELEASE-NOTES-v0.4.4.md](https://github.com/FanyinLiu/Nexus/blob/HEAD/docs/RELEASE-NOTES-v0.4.4.md)。正式安装包只由受保护的 tag 工作流发布到 GitHub Releases；更早历史统一放在 Releases。

## 这个项目是什么

Nexus 想做的是一种“陪伴式桌面 AI”：

- **桌宠形象**：AI 不只存在于聊天记录里，而是以一个小角色常驻桌面。
- **自然对话**：文字、语音输入和语音输出已经接入；当前默认仍以文字和轻量语音入口为主。
- **长期记忆**：未来它应该记住偏好、习惯、项目、关系和重要事件。
- **本地优先，可接 API**：基础对话优先连接 Ollama 等本地模型；也可以使用 DeepSeek API 先跑通文本体验。
- **授权辅助能力**：在用户明确授权后，它可以整理信息、提醒事项，并以可确认、可停止、可审计的方式提供轻量帮助。

Nexus 的重点不是堆功能，而是把“陪伴”和“辅助”合成一个统一体验：它一直在电脑旁边，安静地存在，需要时能对话，授权后能帮忙，但不会变成默认替你工作的智能体。

## 它不是什么

| 不是 | 因为 Nexus 更关注 |
|---|---|
| 普通 AI 聊天软件 | 常驻感、角色存在感、长期关系和桌面上下文 |
| 多模型 API 面板 | 本地优先的伙伴体验，而不是 provider 列表 |
| 单纯桌宠动画 | 角色只是入口，核心是对话、记忆和任务帮助 |
| 工作型智能体平台 | 辅助能力要服务于陪伴体验，并且必须可控、可授权、可停止 |
| 外部角色复刻 | Nexus 有自己的形象、边界和产品体验 |

## Nexus 的形象方向

Nexus 的形象应该服务于三个感觉：

1. **陪伴式**：它像一个在旁边待着的伙伴，而不是一个只在输入框里出现的工具。
2. **常驻式**：它可以长期留在桌面角落，轻量存在，不抢注意力。
3. **可托付但克制**：它不是只会卖萌，也能在明确授权后帮用户处理轻量事务，但不会抢走用户的控制权。

> 一个住在电脑里的 AI 伙伴。…
