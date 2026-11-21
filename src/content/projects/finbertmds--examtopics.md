---
repo: "finbertmds/examtopics"
name: "examtopics"
description: "CLI tool to scrape exam questions from ExamTopics, supporting multiple providers and exporting to Markdown, HTML, PDF, and TXT. Built with Go and runnable via Docker or from source. A full-stack exam practice platform featuring a backend API for user and progress management and a responsive web app for interactive certification training."
readmeQualityOk: true
url: "https://github.com/finbertmds/examtopics"
homepage: "https://examtopics.onrender.com/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [44, 27]
stars: 12
forks: 4
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2025-08-10T13:04:03Z"
lastCommitAt: "2026-11-21T13:31:18Z"
lastReleaseAt: "2026-11-01T03:52:41Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 74
maintainers: ["finbertmds"]
openGraphImageUrl: "https://opengraph.githubassets.com/195b017a18cd4da46b9f8c7dd8a8b2b0d7b79f4da96c5e11bd3ae114edb2841a/finbertmds/examtopics"
---

# ExamTopics

Repository gồm ứng dụng luyện thi chứng chỉ IT, API quản lý đề và tiến độ, các công cụ thu thập/xử lý dữ liệu, cùng các AI skill hỗ trợ giải thích và bổ sung đáp án.

## Các thành phần

| Thư mục | Vai trò | Công nghệ |
| --- | --- | --- |
| [`examtopics-practice/`](https://github.com/finbertmds/examtopics/blob/HEAD/examtopics-practice/) | Giao diện luyện thi và quản lý đề | React 19, TypeScript 7, Vite 8, Tailwind CSS 4 |
| [`examtopics-backend/`](https://github.com/finbertmds/examtopics/blob/HEAD/examtopics-backend/) | API đề thi, xác thực, tiến độ và báo cáo | Node.js, Express 5, Mongoose 9, MongoDB |
| [`examtopics-downloader/`](https://github.com/finbertmds/examtopics/blob/HEAD/examtopics-downloader/) | CLI tải câu hỏi, xuất JSON/Markdown | Go |
| [`batch/`](https://github.com/finbertmds/examtopics/blob/HEAD/batch/) | Kho dữ liệu và script chuyển đổi, sửa liên kết, tải ảnh | Python, Shell |
| [`examtopics-img-downloader/`](https://github.com/finbertmds/examtopics/blob/HEAD/examtopics-img-downloader/) | Tải ảnh hàng loạt từ JSON vào kho batch | Python |
