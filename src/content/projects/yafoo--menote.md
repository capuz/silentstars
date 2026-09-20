---
repo: "yafoo/menote"
name: "menote"
description: "MeNote is a lightweight personal note-taking knowledge base system that supports Markdown notes, category management, bidirectional links, and knowledge graphs. It has built-in P2P tunneling, allowing mobile apps to connect directly to the note service on your NAS without requiring a public IP. Data is stored locally with privacy fully under your control."
originalDescription: "MeNote，一个轻量级个人笔记知识库系统，支持 Markdown 笔记、分类管理、双向链接、知识图谱。内置 P2P 隧道，手机 App 无需公网 IP 即可直连 NAS 上的笔记服务。数据本地存储，隐私自主可控。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/yafoo/menote"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [62]
topics: ["note", "notebook", "notes-app"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-09-04T05:31:35Z"
lastCommitAt: "2026-09-20T08:45:22Z"
lastReleaseAt: "2026-09-20T07:23:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 53
maintainers: ["yafoo"]
openGraphImageUrl: "https://opengraph.githubassets.com/31b80b34033777dc9c46cf3a00a6c29761c328423495e5d22545d8a31949aec1/yafoo/menote"
---

# MeNote

MeNote is a lightweight personal note-taking knowledge base system that supports Markdown notes, category management, bidirectional links, and knowledge graphs. It has built-in P2P tunneling, allowing mobile apps to connect directly to the note service on your NAS without requiring a public IP. Data is stored locally with privacy fully under your control.

## Features

- **Markdown Editor**: Based on Vditor, supports real-time preview, syntax highlighting, tables, task lists, and more
- **Category Management**: Tree-structured category system with drag-and-drop sorting
- **Knowledge Graph**: Note association visualization based on vis-network
- **P2P Remote Access**: Direct access to your knowledge base on your home computer from mobile/external networks via iroh QUIC tunneling
- **RESTful API**: Complete category/note CRUD interface with Token authentication support
- **Mobile Adaptation**: Responsive design for management dashboard, single-column stack view for mobile

## Tech Stack

- **Backend**: Node.js v20 + [jj.js](https://github.com/yafoo/jj.js) framework (Koa 3 subclass) + SQLite
- **Frontend**: Vue 3 + Element Plus + Vditor + vis-network
- **P2P**:…
