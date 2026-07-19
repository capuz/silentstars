---
repo: "zhikanyeye/Bilibili-Free-Quality"
name: "Bilibili-Free-Quality"
description: "Bilibili - Unrestricted Viewing for Unlogged Users | Unlimited Automatic Trigger for 1080P Trial + Automatic Quality Enhancement | Completely Block Login Pop-ups and Platform Auto-Pause | WBI Signature Self-Adjusting Comment API, Full Unlock for Video/Dynamic/Column Comments | Live Section Interface Fallback, No More Loading Stalls | Visual Panel to Switch Between 1080/720/480/360P | One-Click Installation for Tampermonkey/Violentmonkey, Zero Interference for Logged-in Users"
originalDescription: "🎬 B 站未登录解放脚本 | 无限次自动触发 1080P 试用+画质掉落自动拔高 · 彻底屏蔽登录弹窗与平台自动暂停 · WBI 签名自调评论 API，视频/动态/专栏评论完整解锁 · 直播分区接口兜底，下拉不再卡加载 · 可视化面板可切 1080/720/480/360P · Tampermonkey/Violentmonkey 一键安装，已登录零干扰"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/zhikanyeye/Bilibili-Free-Quality"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["bilibili", "tampermonkey", "userscript"]
stars: 21
forks: 3
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-07-17T07:55:12Z"
lastCommitAt: "2026-07-19T06:13:50Z"
status: "thriving"
tags: []
healthScore: 73
undervaluedScore: 47
maintainers: ["zhikanyeye", "MonkeyCode-AI"]
openGraphImageUrl: "https://opengraph.githubassets.com/d39fca30434c01e92b36f0d4a306bc1814ce6630301f06010a9d1dd92afe852f/zhikanyeye/Bilibili-Free-Quality"
---

# Bilibili - Unrestricted Viewing for Unlogged Users

## 📌 Introduction

**"Bilibili - Unrestricted Viewing for Unlogged Users"** allows unlogged users to easily watch high-quality Bilibili videos and addresses common restrictions on comments, dynamics, columns, and live sections in an unlogged state.

**Starting from v4.0**, it adopts a **protocol-level + client compatibility** dual-mode architecture, defaulting to protocol-level unlocking while retaining the old client architecture as a one-click fallback:

| Mode | Implementation | Side Effects |
|---|---|---|
| **Protocol-Level Unlock** (default v4) | Fake `DedeUserID` cookie + Clear `__playinfo__` SSR + Re-sign WBI `playurl` (`try_look=1` + `qn=80`), **server directly outputs 1080P full stream** | No top bar/search bar disappearance, no 30-second truncation |
| **Client Compatibility** (one-click fallback) | Extend trial countdown + Automatically click trial button + Quality fallback enhancement + Narrow `Object.defineProperty` hijacking | Retains v3.5.6 fixes, only serves as a fallback |

Have you encountered these troubles?
- Can only watch 360P when unlogged?
- Only one 30-second high-quality trial per day?
- Video…
