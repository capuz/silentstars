---
repo: "penpot/penpotqa"
name: "penpotqa"
description: "QA Test for Penpot"
readmeQualityOk: true
url: "https://github.com/penpot/penpotqa"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [77, 21]
stars: 15
forks: 6
openIssues: 0
closedIssues: 0
watchers: 9
contributors: 15
recentReleases: 0
createdAt: "2022-11-15T11:57:55Z"
lastCommitAt: "2026-09-24T08:41:58Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 61
maintainers: ["lugarbos", "tdelatorre", "estefafdez"]
openGraphImageUrl: "https://opengraph.githubassets.com/a05e9f222129534a9cf74078ccd58e2d46e127cfc87813babc848927f7c44016/penpot/penpotqa"
---

# penpotqa

QA Test for Penpot

Based on Playwright framework.

**1. Initial requirements and configuration.**

Prerequisites for local run:

- Ubuntu 24.04 OS
- Screen resolution 1920x1080
- Installed Node.js v25.2.1
- “Clear” Penpot account (without added files, projects, etc., but with a completed onboarding flow, and the account name must be 'QA Engineer').
- The _.env_ file added to the root of the project with the following env variables:
  - `LOGIN_EMAIL` (email from your Penpot account)
  - `SECOND_EMAIL` (email from your Penpot account for tests that use a secondary email to login, needs same password than LOGIN_EMAIL)
  - `LOGIN_PWD` (password from your Penpot account)
  - `SSO_LOGIN_EMAIL` (SSO test email)
  - `SSO_LOGIN_PWD` (SSO test password)
  - `BASE_URL` (Penpot url - e.g. http://localhost:9001/ if deployed locally)
  - `GMAIL_NAME` (Gmail account name for Gmail API integration)
  - `GMAIL_DOMAIN` (Domain for the account to access Gmail API Integration)
  - `REFRESH_TOKEN` (Token for email access)
  - `CLIENT_ID` (for email access)
  - `CLIENT_SECRET` (for email access)
  - `STRIPE_SK` (for Stripe API access)

**2. Gmail Integration.**

Gmail API integrations…
