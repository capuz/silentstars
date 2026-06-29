---
repo: "mentat-is/gulpui-web"
name: "gulpui-web"
description: "The web UI for g(ULP)"
url: "https://github.com/mentat-is/gulpui-web"
homepage: "https://gulp.sh"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["cybersecurity", "dfir", "gulp", "log-analysis", "threat-hunting", "incident-response"]
stars: 7
forks: 2
openIssues: 4
closedIssues: 127
watchers: 1
contributors: 6
recentReleases: 1
createdAt: "2024-09-13T22:05:10Z"
lastCommitAt: "2026-06-29T07:20:59Z"
lastReleaseAt: "2026-05-29T08:01:47Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 86
maintainers: ["Inzerd", "valerino"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ccbe0ff14171c6cc961928852bc1a67c69c608b2ba45929c3392064a07e68e6/mentat-is/gulpui-web"
---

# Introduction

**Gulp UI Web** is a browser-based application designed for analyzing and interacting with the backend of Gulp. It is built using React and the Shadcn/UI libraries.

**Documentation**:
1. [Setup Instructions](./docs/SETUP.md)
2. [Minimum Requirements](./docs/SETUP.md)
3. [Authentication](#authentication)
4. [UX Documentation](./docs/ux_docs/UX_WORKSPACE.md)

---

## Authentication

The **authentication screen** is the entry point to Gulp Web Client. It allows users to connect to a server and manage sessions.

</div>

---

## Registration and Login

The start page provides three input fields:
- **Server URL** — the address of the Gulp backend server.
- **Username** — user login.
- **Password** — user password.

#### Example
```
Server address: http://localhost:8080 
Username: admin  
Password: admin  
```

> **Note**  
> If your backend is served under `/api`, make sure to include `/api` in the **Server URL**.  

---

## Login Button

Once the **Server address**, **Username**, and **Password** fields are filled in, press **Login**:
1. The client attempts to connect to the backend.
2. If the connection or authentication fails, an error message is displayed.
3. If the…
