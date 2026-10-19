---
repo: "usamamuneerchaudhary/filament-notifier"
name: "filament-notifier"
description: "Manage Everything Related to Laravel Notifications "
readmeQualityOk: true
url: "https://github.com/usamamuneerchaudhary/filament-notifier"
language: "PHP"
languages: ["PHP"]
languagePcts: [99]
stars: 36
forks: 6
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2025-12-06T02:25:40Z"
lastCommitAt: "2026-10-19T09:14:39Z"
lastReleaseAt: "2026-10-11T01:26:31Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 85
undervaluedScore: 47
maintainers: ["usamamuneerchaudhary", "hoczeus"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2caec4a508c1c4b027c1cf527f1318f5fdcdf893b863f50bb75a843d4fafd98/usamamuneerchaudhary/filament-notifier"
fundingLinks: ["GITHUB:https://github.com/usamamuneerchaudhary"]
---

# Filament Notifier

A powerful notification system for FilamentPHP that handles multi-channel notifications with template management, scheduling, and real-time delivery. Built for developers who need enterprise-grade notifications without the complexity.

See [UPGRADE.md](https://github.com/usamamuneerchaudhary/filament-notifier/blob/HEAD/UPGRADE.md) when moving from 1.x, and [CHANGELOG.md](https://github.com/usamamuneerchaudhary/filament-notifier/blob/HEAD/CHANGELOG.md) for what shipped in 2.0.

## Support matrix

| Package | PHP | Laravel | Filament |
| --- | --- | --- | --- |
| 2.x | 8.3–8.5 | 11, 12, 13 | 4, 5 |
| 1.5 | 8.2+ | 11, 12, 13 | 4, 5 |
| 1.4 | 8.2+ | 11, 12 | 4, 5 |

## Features

- **Multi-channel**: Email, in-app (Filament bell), SMS (Twilio), Slack, Discord, and Push (FCM HTTP v1)
- **Template management**: `{{variable}}` substitution (HTML-escaped in emails; `{{{variable}}}` for trusted HTML)
- **Scheduled notifications**: Queue a send for a specific time (dispatched once)
- **Event-driven**: Trigger notifications from application events stored in the admin panel
- **User preferences**: Filament page, `<livewire:notifier-preferences />`, and an authenticated…
