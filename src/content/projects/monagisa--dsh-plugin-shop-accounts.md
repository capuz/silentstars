---
repo: "monagisa/dsh-plugin-shop-accounts"
name: "dsh-plugin-shop-accounts"
description: "DSH plugin: e-commerce store account management (Pinduoduo/Taobao/Tmall/Douyin/JD/1688 merchant side). One Chrome profile per store; log in once and reuse long-term. Silent and scheduled login-state checks, keep-alive renewal, one-click self-update."
originalDescription: "DSH 插件：电商平台店铺账号管理（拼多多/淘宝/天猫/抖音/京东/1688 商家端）—— 一店一份 Chrome 档案，登录一次长期复用；静默/定时检测登录态、保活续期、一键自更新"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/monagisa/dsh-plugin-shop-accounts"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["account-manager", "cdp", "chrome", "dsh", "dsh-plugin", "ecommerce", "pinduoduo", "taobao"]
stars: 15
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 8
createdAt: "2026-10-17T03:25:30Z"
lastCommitAt: "2026-11-12T05:35:47Z"
lastReleaseAt: "2026-11-12T05:38:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 48
maintainers: ["monagisa"]
openGraphImageUrl: "https://opengraph.githubassets.com/b06806341f8199249a11cd0427fbd229cbe4a23accc722429007cf3ea09d0db3/monagisa/dsh-plugin-shop-accounts"
---

# dsh-plugin-shop-accounts

**Centrally manage login sessions for six e-commerce back offices: log in once, reuse long-term, check on a schedule, and auto-fill when signed out.**

Account management plugin for DSH Desktop. Each store maps to its own independent login profile, and listing and scraping scripts reuse the same login session directly, so no repeated logins are needed.

[功能特性](#功能特性) · [支持平台](#支持的平台) · [安装](#安装) · [快速开始](#快速开始) · [数据存放](#数据存放位置) · [安全机制](#安全机制) · [支持与交流](#支持与交流) · [更新日志](https://github.com/monagisa/dsh-plugin-shop-accounts/blob/HEAD/CHANGELOG.md)

---

## Why it's needed

Login sessions on e-commerce back offices are the most fragile link in automated workflows:

- One machine must manage multiple stores at once. Cookies from different platforms overwrite each other, and browser windows compete for focus.
- Taobao-family `cookie2` / `_tb_token_` cookies are session-level: they are discarded when the window closes, so the next visit lands on the login page again.
- Once a session expires, a manual QR scan or CAPTCHA is required, and listing, scraping, and reporting tasks all stall at login.
- Listing and scraping scripts each maintain their own login…
