---
repo: "marikbrest/pika-personal-whatsapp-bot"
name: "pika-personal-whatsapp-bot"
description: "Self-hosted WhatsApp assistant powered by Gemini: reminders (incl. nag-until-done for kids), Google Calendar/Gmail/Drive with approval, web search, package tracking, images, opt-in proactive alerts. Hebrew-first. Docker-ready."
readmeQualityOk: true
url: "https://github.com/marikbrest/pika-personal-whatsapp-bot"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["fastapi", "gemini", "gmail", "google-calendar", "personal-assistant", "python", "self-hosted", "whatsapp", "whatsapp-bot"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 10
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-10-02T19:37:54Z"
lastCommitAt: "2026-10-08T10:53:31Z"
lastReleaseAt: "2026-10-08T10:24:16Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 67
maintainers: ["marikbrest", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1402276490/8ee6a2e6-bb36-4e75-8cda-a38951b6d426"
discussionCount: 0
---

# Pika — a personal WhatsApp assistant

> **Looking for Telegram?** The Telegram edition lives in its own repository: [pika-telegram-bot](https://github.com/marikbrest/pika-telegram-bot).

Pika is a self-hosted assistant for you and your family that lives entirely inside
WhatsApp. Message it (text or voice; Hebrew-first, understands English) and it handles reminders, Google
Calendar, Gmail, weather and market prices — and, if you opt in, it watches your calendar
and inbox in the background and only interrupts you when something is genuinely worth it.

Everything runs on your own machine: one FastAPI process, one SQLite file, your own
Meta/Google/Gemini credentials. No SaaS in the middle, nothing to sign up for.

## What it can do

Just write to it in plain language (Hebrew or English, text or voice). Examples:

**Reminders & tasks**
- *"Remind me tomorrow at 9 to call the doctor"* — one-off, daily or weekly; snooze, move, edit, cancel.
- *"Remind Danny every evening to take out the trash"* — reminders for family members and contacts.
- *"Nag the kids every 5 minutes until they confirm homework is done"* — persistent reminders that escalate to a parent if ignored.
- *"Add milk to…
