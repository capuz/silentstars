---
repo: "Lekuruu/go-puush"
name: "go-puush"
description: "A replacement server for puush, written in go"
readmeQualityOk: true
url: "https://github.com/Lekuruu/go-puush"
language: "Go"
languages: ["Go"]
languagePcts: [63]
topics: ["golang", "preservation", "puush"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-07-13T22:02:45Z"
lastCommitAt: "2026-10-12T11:09:11Z"
lastReleaseAt: "2026-04-12T10:14:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 57
maintainers: ["Lekuruu"]
openGraphImageUrl: "https://opengraph.githubassets.com/0dfcdbeaadf1269922f4a18f75a063d0fdfa4d27f2823e60e5bffdc65f588836/Lekuruu/go-puush"
---

---

**go-puush** is a go implementation of the [puush](https://puush.me) file sharing service, providing file upload, sharing, and management capabilities.  
The service consists of three main components:

- **API** - Handles communication with the puush client  
- **CDN** - Serves uploaded files and thumbnails  
- **Web Interface** - Provides a web-based user interface, closely matching [the original](https://puush.me)

A key advantage is the ease of use, as this project uses only Go and SQLite. No external dependencies are required!

## Progress

The following features have been implemented or are planned for the future:

- [x] API
    - [x] Authentication
    - [x] Upload
    - [x] History
    - [x] Delete
    - [x] Thumbnail

- [x] CDN
    - [x] Serving uploaded files
    - [x] Serving thumbnails
- [x] Web
    - [x] Public pages (Home, Login, Register, About, ...)
    - [x] Account page(s)
    - [x] Gallery page
    - [ ] Changelog page
    - [x] Login functionality
    - [x] Logout functionality
    - [x] Registration functionality
        - [x] Registration
        - [x] Email activation
        - [x] Invite codes
    - [x] Password reset functionality
    - [x] Account…
