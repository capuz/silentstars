---
repo: "Globussoft-Technologies/globussoft-crm"
name: "globussoft-crm"
description: "A modern, open-source Customer Relationship Management (CRM) system designed to streamline your business operations. Track leads, manage contacts, automate sales pipelines, and analyze customer interactions in one centralized dashboard. Built for scalability and performance, this CRM empowers teams to build stronger relationships and drive growth."
readmeQualityOk: true
url: "https://github.com/Globussoft-Technologies/globussoft-crm"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [95]
stars: 7
forks: 1
openIssues: 147
closedIssues: 880
watchers: 0
contributors: 16
recentReleases: 0
createdAt: "2026-03-23T16:31:43Z"
lastCommitAt: "2026-10-12T11:15:03Z"
lastReleaseAt: "2026-05-06T00:00:41Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 55
maintainers: ["akhil-glb", "shiksharoy-ai", "Kanchan-glb"]
openGraphImageUrl: "https://opengraph.githubassets.com/b09a145036d678de603b870604fbd0bcd1003969f30e030b7124c16508ce3de9/Globussoft-Technologies/globussoft-crm"
---

# Globussoft Enterprise CRM

> A full-stack enterprise CRM built by Globussoft Technologies. Multi-tenant
> with **vertical configurations** (generic B2B / **wellness**). Tenant-driven
> currency + locale. External partner API for sister products (Callified.ai,
> AdsGPT). Embeddable lead-capture widget. AI orchestration engine. Mobile-
> responsive UI. Email delivery via SendGrid. CAPTCHA via Cloudflare Turnstile.
> Canonical `{error, code}` envelope on every JSON failure.

**At a glance** *(counts auto-derived from the codebase; refresh on every release)*

| Surface | Count |
|---|---|
| API routes | 157 (`backend/routes/*.js`) |
| Data models | 211 (`prisma/schema.prisma`) |
| UI pages | 261 (`frontend/src/pages/`) |
| Automation engines | 38 (`backend/cron/`) |
| Playwright spec files | 282 (`e2e/tests/`) — per-push gate runs a subset, e2e-full runs all |
| Backend vitest files | 543 (`backend/test/`) |
| Frontend vitest files | 258 (`frontend/src/__tests__/`) |
| Reusable Claude Skills | 20 (`.claude/skills/`) |

**Deploy pipeline** *(GitHub Actions)*

- **Per-push gate** — 6 mandatory deploy gates on every `main` push: build / lint / api_tests / unit_tests /…
