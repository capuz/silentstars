---
repo: "Yehua-1145/phone-botagent"
name: "phone-botagent"
description: "Phone Botagent: turns an idle Android phone into an AI assistant that can use the phone itself. No computer or root required, runs entirely on the device, and can connect to QQ."
originalDescription: "手机 Botagent —— 把闲置安卓手机变成会用手机的 AI 助手。不用电脑、不用 root、全程本机；可接入 QQ。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Yehua-1145/phone-botagent"
homepage: "https://yehua-1145.github.io/-QQbot-/"
language: "Python"
languages: ["Python"]
languagePcts: [75]
topics: ["ai-agent", "android", "automation", "chatbot", "deepseek", "napcat", "no-root", "openai", "qqbot", "termux"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-11-04T14:56:22Z"
lastCommitAt: "2026-11-10T14:49:42Z"
lastReleaseAt: "2026-11-08T06:32:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 57
maintainers: ["Yehua-1145"]
openGraphImageUrl: "https://opengraph.githubassets.com/1c35d4993d5c5b7c66a404754a0d5b3736b30bccad5775beb8633f8232d12cfe/Yehua-1145/phone-botagent"
---

# Botagent

**Install a QQ AI bot on an ordinary Android phone.**

No root, no server, no cloud host. Connect the phone to a computer with a data cable and click once to finish the installation. Afterwards the phone has its own control console.

```
QQ message → NapCat (QQ protocol endpoint) → your LLM → reply
```

---

## 📥 Download

| Method | Link | Notes |
|---|---|---|
| **Lanzou Cloud** (recommended in China) | <https://wwbxc.lanzoub.com/b011mly7ud> | Password: **byc6** |
| **GitHub Release** | <https://github.com/Yehua-1145/-QQbot-/releases/latest> | Requires VPN access |

After downloading, extract the archive, open the `Windows一键部署` directory, and double-click `BotagentDeploy.exe`.

```text
Botagent-v1.1.zip          18.53 MB
SHA256  6B14CF1554B9AB77D875C18B292BA5E6BB7E3E02F7B821F1667DF555EA8DE411
```

---

## Two paths, pick one

| | **Stable v1.1** (main) | **Experimental (direct phone install) v2** (branch `v2-embedded-runtime`) |
|---|---|---|
| Install method | PC one-click deploy / direct phone install (Termux) | **Install a single APK** |
| Requires Termux | Yes | **No** (Python runtime is bundled into the APK) |
| Install steps | Four steps | Enter QQ number +…
