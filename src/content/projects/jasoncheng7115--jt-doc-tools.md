---
repo: "jasoncheng7115/jt-doc-tools"
name: "jt-doc-tools"
description: "整合式 PDF / Office 文件處理平台，自架、開源、可控。"
url: "https://github.com/jasoncheng7115/jt-doc-tools"
homepage: "https://jasoncheng7115.github.io/jt-doc-tools/"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [63, 32]
stars: 193
forks: 47
openIssues: 1
closedIssues: 16
watchers: 1
contributors: 2
recentReleases: 3
createdAt: "2026-04-26T13:59:51Z"
lastCommitAt: "2026-06-27T00:36:21Z"
lastReleaseAt: "2026-06-26T06:03:17Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 36
maintainers: ["jasoncheng7115"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e7d0ff6e934d1f76ec7efc45486415bc72db0fcf425134ea6b673dd29a731fc/jasoncheng7115/jt-doc-tools"
---

# Jason Tools 文件工具箱 v1.12.28

> 整合式 PDF / Office 文件處理平台，39 個工具一站式解決：**填單用印**、**浮水印**、**多頁合併 / 拆分 / 旋轉 / 整理**、**轉檔**、**掃描拼合**、**去識別化**、**字數統計**、**註解整理**、**差異比對**、**逐句翻譯**、**清單處理**、**電子發票處理**、**統編查詢**、**頁面編輯器**、**加密 / 解密**等。
>
> 企業功能：**本機 / LDAP / AD 多領域認證**、**SSO 單一登入**(OIDC + SAML，可接 M365 / Google / Keycloak)、**RBAC 角色權限**、**稽核記錄**、**SIEM 轉送**(syslog / CEF / GELF)、**字型管理**、**使用者工作區**、**REST API**。
>
> **不上雲，資料留在自己手中。** Linux / macOS / Windows 三平台都可單機跑或內網架站給多人用。

完整介紹網站：<https://jasoncheng7115.github.io/jt-doc-tools/>

---

## 一行安裝

### 系統需求

| 項目 | 最低 | 建議 |
|---|---|---|
| 作業系統 | Ubuntu 20.04+ / Debian 11+ / macOS 12+ / Windows 10 1809+ | 任一最新版 |
| 磁碟空間 | **12 GB** 整機 / VM / LXC 容量（最低）| **20 GB+**（含資料目錄成長空間） |
| 記憶體 RAM | 2 GB 可用 | 4 GB+ |
| CPU | x86_64 / arm64（Apple Silicon、Win11 ARM 都可）| 4 核心+ |
| 網路 | 安裝時可連 GitHub / PyPI（之後純內網運作）| — |
| Python | 3.10+（安裝腳本會自動處理 uv-managed Python） | — |

> **磁碟用量大解析**（為什麼底線抓 12 GB 而非看似夠的 5-8 GB）：
> - **OS 基底**：Debian / Ubuntu 最小裝 ~1.5-2 GB；其他 distro / 含桌面更大。
> - **安裝期間峰值 ~6-8 GB**：apt 暫存 .deb 套件 ~1 GB（OxOffice / LibreOffice 相依）+ uv wheel cache ~1-2 GB（PyTorch 700 MB + 其他）+ 解壓中間檔。安裝腳本會自動 `apt-get clean` + `uv cache clean` 釋放，但**峰值期間**就是要這麼大。
>…
