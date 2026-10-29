---
repo: "yt314/Talmidon"
name: "Talmidon"
description: "Secure multi-tenant tutoring platform built with Angular, ASP.NET Core, PostgreSQL, and JWT authentication."
readmeQualityOk: true
url: "https://github.com/yt314/Talmidon"
homepage: "https://talmidon.vercel.app"
language: "C#"
languages: ["C#", "JavaScript", "TypeScript"]
languagePcts: [39, 24, 24]
topics: ["angular", "asp-net-core", "csharp", "dotnet", "education-technology", "entity-framework-core", "jwt-authentication", "lesson-scheduling-for-schools", "multi-tenancy", "payment-management"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-25T12:42:32Z"
lastCommitAt: "2026-10-29T10:21:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 54
maintainers: ["yt314", "claude", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/01c2b65c66173693b2674a0cd02d1fc0249c9bbca7d347d87faaddcc819462b5/yt314/Talmidon"
---

# Talmidon 🎓

**Talmidon** is a multi-tenant SaaS platform for private tutors — each tutor independently
manages her own students, lesson schedule, pedagogical notes, and payments, with a public,
login-free directory sitting on top so prospective students can discover tutors and reach out.

---

## Overview

A tutor signs up on her own, adds her students and their parents, and gets full,
tenant-isolated control over her practice: scheduling, per-lesson billing, and
pedagogical tracking. Parents and students each get a scoped, read-mostly view of
exactly what concerns them — nothing more.

| Role | Access |
|---|---|
| **Visitor** (no login) | Public tutor library — browse tutors, filter by subject and city, view a profile, send a contact request |
| **Teacher** | Full control of her own students, calendar, notes, payments, reports, messages, and public profile |
| **Parent** | Their children's schedule (with lesson request / reschedule / cancel), visible notes, study materials, full payment status, and a message thread with the tutor |
| **Student** | Their own schedule, the notes explicitly shared with them, study materials, practice games, and a message thread — no payment…
