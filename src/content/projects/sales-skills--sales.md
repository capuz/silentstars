---
repo: "sales-skills/sales"
name: "sales"
description: "Claude Code skills for sales, marketing, and GTM — CRM, outbound, note-takers, enrichment, email marketing, influencer marketing, social   listening, directories, and more. Install: npx skills add sales-skills/sales"
readmeQualityOk: true
url: "https://github.com/sales-skills/sales"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-skills", "claude", "claude-code", "cold-email", "crm", "email-marketing", "lead-generation", "outbound", "prospecting", "sales"]
stars: 84
forks: 9
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-03-23T16:01:44Z"
lastCommitAt: "2026-07-22T06:11:31Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 76
undervaluedScore: 29
maintainers: ["ggarcia196x"]
openGraphImageUrl: "https://opengraph.githubassets.com/113607c875aadda929d69e6fdbf1e16866d77c8b48d83d30276329d2819f983f/sales-skills/sales"
---

# Sales Skills

**AI-powered sales copilot — hundreds of skills for prospecting, outbound, deals, proposals, and GTM. One install, one router.**

</p>

## Contents

- [Quick Start](#quick-start)
- [Why?](#why)
- [What is sales-do?](#what-is-sales-do)
- [Skills Catalog](#skills-catalog)
- [Usage Examples](#usage-examples)

## Quick Start and Best Practice for 99% of users

```bash
npx skills add sales-skills/sales --skill sales-do -a claude-code
```
Restart the session after install to pick up the new skill.

Not sure which skill you need? Just run `/sales-do` and describe what you're trying to accomplish — it routes you to the right sales, GTM, or marketing skill.

## Installing several skills at once

If you want specific platform skills directly (rather than just the router), pass them all to **one** `--skill` flag — a single command downloads them together:

```bash
npx skills add sales-skills/sales --skill sales-fathom sales-fireflies sales-otter -a claude-code
```

Avoid running `npx skills add` once per skill — each separate run re-downloads the whole repository, so batching into a single command is much faster.

## Use without coding

Download skills as files and use them…
