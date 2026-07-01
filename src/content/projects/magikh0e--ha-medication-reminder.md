---
repo: "magikh0e/ha-medication-reminder"
name: "ha-medication-reminder"
description: "Home Assistant custom integration: UI-managed medication dose tracking for pets and people, with companion reminder automations."
url: "https://github.com/magikh0e/ha-medication-reminder"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["custom-component", "custom-integration", "hacs", "home-assistant", "homeassistant", "medication", "medication-reminder", "pets", "python"]
stars: 14
forks: 2
openIssues: 1
closedIssues: 10
watchers: 2
contributors: 3
recentReleases: 10
createdAt: "2026-05-29T09:38:09Z"
lastCommitAt: "2026-07-01T07:05:00Z"
lastReleaseAt: "2026-06-01T08:25:14Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 54
maintainers: ["magikh0e", "RookieIVG", "VGrol"]
openGraphImageUrl: "https://opengraph.githubassets.com/e1f1058cf53141df91d44b8a9c4ba7c3f884386d471120c9e0cc283746e77b52/magikh0e/ha-medication-reminder"
---

</p>

# Medication Reminder (Home Assistant integration)

A Home Assistant custom integration for tracking medication doses, for pets *and*
people. Add patients and their dose schedule **in the UI**; the integration
auto-creates a switch per dose (on = given today) and resets them daily. Pair it
with the included companion automations for actionable, nagging, missed-dose
reminders synced across every Companion app.

This is the full-featured, actively developed version. A lighter
[ha-medication-reminder-yaml](https://github.com/magikh0e/ha-medication-reminder-yaml)
package covers the core reminder, nag, and missed-dose flow in pure YAML, but
without the newer features here (UI-managed schedules, supply tracking, the
as-needed/PRN tools, and the extra sensors and calendar). Prefer a YAML-only
setup with no custom integration? Use that one; otherwise use this.

> ⚠️ **Important.** This is a reminder aid, **not** a medical device. Validate it
> on your own Home Assistant and keep a backup reminder method until you trust it,
> and confirm dosing schedules with your doctor or vet.

**Jump to:** [Highlights](#highlights) · [Installation](#installation) · [Dashboard](#dashboard) ·…
