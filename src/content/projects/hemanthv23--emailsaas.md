---
repo: "hemanthv23/EmailSaas"
name: "EmailSaas"
description: "A modern SaaS platform for email campaign creation, automation, and analytics."
readmeQualityOk: true
url: "https://github.com/hemanthv23/EmailSaas"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-07-14T04:37:18Z"
lastCommitAt: "2026-07-17T05:58:43Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 24
maintainers: ["hemanthv23"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f893bf20fa2a01039e2713b8c6ddc5783e965ac0d8fa16bfd2f6d90d25aa538/hemanthv23/EmailSaas"
---

# EmailSaaS

**A multi-tenant Email Notification SaaS platform built with .NET 8**

EmailSaaS is a centrally hosted email service that allows multiple applications (tenants) to store their own email templates, connect their own email-sending accounts, and send tracked, dynamic emails through a single unified API — similar in concept to commercial transactional email platforms, but built entirely in-house with full control.

---

## 🚀 What is EmailSaaS?

EmailSaaS is **not an email provider itself** — it doesn't own or operate mail servers. It's an **orchestration and tracking platform**. Each client connects their own email-sending account (Gmail, Zoho, Office 365, or any SMTP/API-based provider) and manages their own templates. EmailSaaS provides the infrastructure to store, render, send, track, and webhook-notify those emails reliably — all behind a single unified API.

---

## ✨ Key Features

- **Multi-tenant architecture** — Applications → Clients hierarchy, with complete data isolation between tenants
- **API Key authentication** — every tenant gets a unique key; one key can never access another tenant's data
- **Dynamic email templates** — HTML templates with…
