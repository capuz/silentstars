---
repo: "DouglasdeMoura/chroncal"
name: "chroncal"
description: "Terminal-first calendar, todo, and journal manager with iCalendar (RFC 5545) support and CalDAV sync — CLI + TUI, local SQLite storage"
url: "https://github.com/DouglasdeMoura/chroncal"
homepage: "https://pkg.go.dev/github.com/douglasdemoura/chroncal"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["caldav", "calendar", "cli", "golang", "icalendar", "journal", "rfc5545", "sqlite", "todo", "tui"]
stars: 7
forks: 0
openIssues: 12
closedIssues: 203
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-03-31T20:37:25Z"
lastCommitAt: "2026-06-27T00:49:19Z"
lastReleaseAt: "2026-06-13T16:09:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 98
undervaluedScore: 64
maintainers: ["DouglasdeMoura"]
openGraphImageUrl: "https://opengraph.githubassets.com/c493331eb1e158dc20cc7bd16bfe1ee328fb8e0acb5bdf0b59714abf41457c54/DouglasdeMoura/chroncal"
---

</p>

# chroncal

A terminal calendar backed by SQLite with full iCal import/export and CalDAV sync. Launch the TUI for an interactive calendar, or use the CLI for scriptable access to events, todos, journals, alarms, free/busy queries, and calendars.

Built for people who live in the terminal and want their calendar data local, portable, and standards-compliant.

## Features

- **Interactive TUI** with month, week, day, and agenda views
- **Full CLI** for scripting and automation
- **iCal import/export** with broad RFC 5545 coverage (VEVENT, VTODO, VJOURNAL, VALARM, VTIMEZONE)
- **CalDAV sync** with per-calendar remote connections, conflict handling, at-a-glance sync health, and in-app Google re-authentication
- **Free/busy queries** from local data or remote CalDAV `VFREEBUSY` reports
- **Recurring events and todos** via RRULE, RDATE, and EXDATE
- **Recurring journals** via RRULE, RDATE, and EXDATE
- **Alarm notifications** with desktop alerts, sound, and email
- **Multiple calendars** with color coding
- **Full-text search** across events, todos, and journals
- **Attendees, attachments, comments, contacts, resources, and relations**
- **SQLite storage** with automatic…
