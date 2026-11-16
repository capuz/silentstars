---
repo: "BootlegYouki/L.A.R.A"
name: "L.A.R.A"
description: "Offline LAN-Based Classroom with Hybrid Socratic SLM Tutor and Paperless Quizzes (DepEd Grades 1-12)"
readmeQualityOk: true
url: "https://github.com/BootlegYouki/L.A.R.A"
language: "Kotlin"
languages: ["Kotlin", "Rust", "CSS"]
languagePcts: [31, 24, 20]
topics: ["capstone-project", "deped", "edge-ai", "jetpack-compose", "local-area-network", "material-design-3", "offline-first", "philippines", "socratic-tutor", "tauri-v2"]
stars: 5
forks: 0
openIssues: 54
closedIssues: 69
watchers: 0
contributors: 8
recentReleases: 1
createdAt: "2026-09-20T09:28:04Z"
lastCommitAt: "2026-11-09T14:31:20Z"
lastReleaseAt: "2026-11-14T04:21:47Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 88
undervaluedScore: 51
maintainers: ["BootlegYouki", "meliodaff", "Osbornejmb"]
openGraphImageUrl: "https://opengraph.githubassets.com/c414caeb49380b2febd9fb602113ec2a2fcadb880dd4eaae0d4663933b8f68e8/BootlegYouki/L.A.R.A"
discussionCount: 11
---

# L.A.R.A.

**An offline Google Classroom for Philippine public schools (Grades 1 to 12), with paperless self-grading quizzes and a Socratic AI tutor.** It runs entirely on the classroom's own Wi-Fi with no internet. First deployment: the capstone defense plus one pilot class of about 40 learners.

| Program | Folder | Runs on |
| :--- | :--- | :--- |
| **Hub** | [`server/`](https://github.com/BootlegYouki/L.A.R.A/blob/HEAD/server/) | A dedicated always-on school PC (Linux for the pilot). Database, files, quizzes, AI queue, USB export. |
| **Mobile app** | [`mobile/`](https://github.com/BootlegYouki/L.A.R.A/blob/HEAD/mobile/) | Android phones (3 to 4 GB RAM budget phones are the target). Learners and teachers. |
| **Desktop app** | [`desktop/`](https://github.com/BootlegYouki/L.A.R.A/blob/HEAD/desktop/) | Student laptops, lab PCs, teacher PCs. Learners and teachers, the same features as the phone on a large screen. |

What the product is, in full: [`docs/PRD.md`](https://github.com/BootlegYouki/L.A.R.A/blob/HEAD/docs/PRD.md). The three things it must do well: **a classroom** (stream, handouts, videos, homework photos), **paperless timed quizzes** (auto-graded, gradebook exported…
