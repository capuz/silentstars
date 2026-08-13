---
repo: "tugnmik/read-mail"
name: "read-mail"
description: "Concurrently read multiple Outlook/Hotmail mailboxes via Microsoft Graph API and OAuth2."
readmeQualityOk: true
url: "https://github.com/tugnmik/read-mail"
homepage: "https://web-mail-reader.vercel.app/"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [48, 28]
topics: ["flask", "hotmail", "microsoft-graph-api", "oauth2", "outlook", "python"]
stars: 11
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-06T17:08:52Z"
lastCommitAt: "2026-08-13T05:18:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 71
undervaluedScore: 31
maintainers: ["tugnmik"]
openGraphImageUrl: "https://opengraph.githubassets.com/c870429aabbc60de96014ba47128da65e891899b4134f2898332d023960ccbaa/tugnmik/read-mail"
---

# Outlook & Hotmail Multi-Account Mail Reader

A lightweight web application for fetching and reading inboxes of multiple Outlook/Hotmail accounts concurrently. It utilizes Microsoft Graph API and Outlook Rest API via OAuth2 Refresh Tokens.

This project is optimized for performance, featuring parallel execution, real-time streaming, and resilient fallback mechanisms.

---

## Language / Ngôn ngữ
* [Vietnamese Version (Tiếng Việt)](#tiếng-việt-vietnamese-version)

---

## Features

- **Fast Path Queries:** Directly requests mail lists using cached refresh/access tokens, averaging 0.3s to 0.5s per account.
- **Automatic API Routing:** Automatically detects the token family (Personal, Organizational, or Live) and routes queries to Microsoft Graph API or Outlook API v2.0.
- **Parallel Processing & Streaming:** 
  - Backend handles accounts concurrently using a thread pool.
  - Frontend renders results in real-time using NDJSON (Newline Delimited JSON) streaming as soon as each individual account is processed.
- **Resilient Fallbacks:**
  - Strict cookie policy implementation to prevent Microsoft `BlockAllCookies` / `rfc2965` exceptions.
  - Supports browser-side Graph API queries if…
