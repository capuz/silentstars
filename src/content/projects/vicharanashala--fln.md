---
repo: "vicharanashala/fln"
name: "fln"
description: "An AI-powered product that helps young children learn foundational numeracy through gradual, fun activities — taking concepts to students effectively."
readmeQualityOk: true
url: "https://github.com/vicharanashala/fln"
language: "HTML"
languages: ["HTML", "TypeScript"]
languagePcts: [50, 46]
stars: 10
forks: 77
openIssues: 148
closedIssues: 169
watchers: 0
contributors: 38
recentReleases: 0
createdAt: "2026-06-17T17:13:01Z"
lastCommitAt: "2026-10-10T10:03:53Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 87
undervaluedScore: 58
maintainers: ["jgupta05072003-code", "lucky-pluton", "harsh-aggarwal-7"]
openGraphImageUrl: "https://opengraph.githubassets.com/e23637a6b6e0ea02afa0c18d62d65f351a783a686dedf372ecece8f23547b8ea/vicharanashala/fln"
---

# FLN — Foundational Literacy & Numeracy Assessment Platform

A large-scale, personalized assessment system that helps teachers measure, track, and improve every student's Foundational Literacy and Numeracy (FLN) outcomes — from automatic question paper generation to scanning answer sheets and instant, profile-driven evaluation.

> **Current build scope: Mathematics only.** "FLN" names the policy problem this project is built to eventually address in full (see [SRS.md](https://github.com/vicharanashala/fln/blob/HEAD/SRS.md)), but nothing here evaluates literacy today — every level, question, and evaluation path in this repo is numeracy. Don't read the sections below as literacy features that already exist.
>
> **Build order pivoted 2026-09-17 to stage-by-stage, not all-classes-at-once:** Balvatika (the year before Class 1) → Class 1 → Class 2 → Class 3, each stage frozen before the next starts. Class 4/5 are explicitly deferred to Tenali, not built here. Balvatika's 29 curriculum levels and their question-content (`generationIntent`) rows are already authored and seeded in the database, but **nothing in the codebase renders them into an actual worksheet yet** — see [issue…
