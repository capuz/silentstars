---
repo: "gabrielhhaber/WinZapp_Python"
name: "WinZapp_Python"
description: "An open source native WhatsApp client writen in WXPython."
readmeQualityOk: true
url: "https://github.com/gabrielhhaber/WinZapp_Python"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 21
forks: 15
openIssues: 18
closedIssues: 44
watchers: 5
contributors: 10
recentReleases: 10
createdAt: "2025-12-01T18:02:21Z"
lastCommitAt: "2026-08-28T14:19:00Z"
lastReleaseAt: "2026-06-28T18:22:22Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 90
undervaluedScore: 62
maintainers: ["gustavo-barrios2006", "igorAlves321", "gabrielhhaber"]
openGraphImageUrl: "https://opengraph.githubassets.com/a3754dce2ea344991691d7923ce6fb7167430d70f6be05bb711dee71678e275d/gabrielhhaber/WinZapp_Python"
---

# WinZapp

WinZapp is a **free, self-hosted, open-source desktop WhatsApp client for Windows**, built primarily for **accessibility for blind and low-vision users**.
It is designed from the ground up to work with screen readers (NVDA, JAWS, Narrator) through [accessible-output2](https://github.com/accessibleapps/accessible_output2), with a fully keyboard-navigable interface built on plain wxPython controls rather than custom-drawn UI.

The application is split into two processes that run together locally:
1. **Client (Python 3.13 + wxPython):** all UI, business logic, local storage, notifications, and sounds.
2. **WPPConnect Server (Node.js):** a locally-run WhatsApp Web automation gateway, built from the upstream [wppconnect-team/wppconnect-server](https://github.com/wppconnect-team/wppconnect-server) project with a small set of patches WinZapp maintains on top. The client talks to it over local HTTP (`http://127.0.0.1:6300/api/...`) and Socket.IO.

---

## Key Features

### Accessibility
* Built entirely from standard wx controls (`wx.ListCtrl`, `wx.TextCtrl`, standard dialogs/menus) so screen readers read them reliably, instead of custom-drawn or owner-drawn UI.
* List updates…
