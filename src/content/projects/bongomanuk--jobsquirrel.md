---
repo: "bongomanuk/jobsquirrel"
name: "jobsquirrel"
description: "Agent-driven, self-hosted job-application pipeline: discovers roles, tailors and gates a CV (resume) + cover letter per role, applies through the employer's own ATS with a real Camoufox browser, and tracks replies — all from one local dashboard."
readmeQualityOk: true
url: "https://github.com/bongomanuk/jobsquirrel"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [66, 21]
topics: ["ai-agents", "ats", "automation", "cover-letter", "cv", "graphrag", "job-search", "opencode", "resume"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-15T09:05:04Z"
lastCommitAt: "2026-11-05T11:23:53Z"
lastReleaseAt: "2026-10-18T14:33:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 59
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/a29ee3ba52d8b671a07f0fb79b3e74f30f529119918ef090966351ed113d2121/bongomanuk/jobsquirrel"
---

# 🐿️ Jobsquirrel

**An open, self-hosted job-application agent: hand it your CV (resume) and it finds, tailors, gates and applies to jobs for you.**

*A diligent squirrel for your job hunt. It gathers the roles, tailors each one,
and never stashes a nut it can't actually crack.* 🐿️

An agentic pipeline that takes **your CV** (your **resume**, in US English) and
applies to jobs for you, end to end, in a way that is honest, targeted, and
auditable. You give it your CV and a few rules (where you can work, what you will
accept, what you must never overstate). It then discovers roles, tailors a
CV/resume and cover letter per role, gates them for accuracy and quality, submits
applications through a real browser, reads your inbox to track replies, and keeps
a single source of truth for every application and the exact files sent.

It is **person-agnostic and country-agnostic**: nothing here is tied to a
particular person, employer, language or country. You configure everything in
`config/`.

**CV or resume?** The same document. This project, its files and its tools say
*CV*; if you are in the US, read every mention as *resume*. Nothing else changes.

**First run, one prompt. No cloning,…
