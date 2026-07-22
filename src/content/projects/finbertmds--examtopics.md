---
repo: "finbertmds/examtopics"
name: "examtopics"
description: "CLI tool to scrape exam questions from ExamTopics, supporting multiple providers and exporting to Markdown, HTML, PDF, and TXT. Built with Go and runnable via Docker or from source. A full-stack exam practice platform featuring a backend API for user and progress management and a responsive web app for interactive certification training."
readmeQualityOk: true
url: "https://github.com/finbertmds/examtopics"
homepage: "https://examtopics.onrender.com/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [60, 22]
stars: 6
forks: 1
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-08-10T13:04:03Z"
lastCommitAt: "2026-07-22T06:09:52Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 73
undervaluedScore: 62
maintainers: ["finbertmds", "hoaivo964-bit"]
openGraphImageUrl: "https://opengraph.githubassets.com/2dbddfe1f6fac928b734e15b37fa52df4e0183add28a66d93a85d8aa23fedf67/finbertmds/examtopics"
---

# ExamTopics - Comprehensive Exam Practice Platform

Hệ thống toàn diện để tải xuống, quản lý và luyện thi các chứng chỉ AWS và các chứng chỉ IT khác từ ExamTopics. Repository này bao gồm 5 dự án chính hoạt động cùng nhau để tạo ra một nền tảng luyện thi hoàn chỉnh.

## 🏗️ Tổng quan kiến trúc

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Batch Script  │───▶│  Data Storage   │───▶│  Practice App   │
│   (Downloader)  │    │   (JSON/MD)     │    │   (React)       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ Image Downloader│    │   Backend API   │    │   User Progress │
│   (Python)      │    │   (Node.js)     │    │   (MongoDB)     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

---

## 📦 Các dự án chính

### 1. 🔄 Batch - Quản lý dữ liệu hàng loạt
**Vị trí**: `/batch/`  
**Mục đích**: Tự động hóa việc tải xuống và quản lý dữ liệu exam từ ExamTopics

#### Tính năng chính:
- **Script tải xuống hàng loạt**: Tự động tải…
