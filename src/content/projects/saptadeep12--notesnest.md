---
repo: "saptadeep12/NotesNest"
name: "NotesNest"
description: "A one-stop hub for previous-year question papers, notes, faculty details, and real advice from seniors and juniors for people perusing BSc Data Science in VIT AP university"
readmeQualityOk: true
url: "https://github.com/saptadeep12/NotesNest"
homepage: "https://notes-nest-frontend-nu.vercel.app/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [54, 41]
stars: 8
forks: 2
openIssues: 4
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-10-06T12:58:28Z"
lastCommitAt: "2026-10-31T15:58:39Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 88
undervaluedScore: 51
maintainers: ["saptadeep12", "SushantKhatriDev", "codzitie"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb682e81d82225fbbded14236734949f90bd61df979a719582f7512524980a8a/saptadeep12/NotesNest"
---

# NotesNest

NotesNest is a read-only study companion for BSc students: browse semesters
and subjects, view or download PYQs and notes, find faculty contact details,
and read practical advice articles.

Live Demo: https://notes-nest-frontend-nu.vercel.app/

## Features

- Semester and subject browsing
- Client-side subject filtering by code or name
- Search papers directly by subject code or name, with year filtering
- PYQ and notes tabs with View and Download actions
- Searchable, expandable faculty directory
- Markdown advice articles with category filters
- Owner-managed content files and idempotent sync commands

## Tech stack

- **Frontend:** Next.js 14, React, TypeScript, Tailwind CSS
- **Backend:** FastAPI, SQLAlchemy 2.0, Alembic, Pydantic
- **Database:** SQLite locally; models remain portable to PostgreSQL
- **Tooling:** Ruff, pytest, ESLint, TypeScript

## Quick start

The supported local workflow does not use Docker. Docker files exist for
future experimentation, but local non-Docker setup is the supported path.

### Backend

```powershell
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements-dev.txt
alembic upgrade head
python -m app.manage…
