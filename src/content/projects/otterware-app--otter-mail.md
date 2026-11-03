---
repo: "otterware-app/otter-mail"
name: "otter-mail"
description: "Gmail, calm and fast. A desktop mail app for macOS."
readmeQualityOk: true
url: "https://github.com/otterware-app/otter-mail"
homepage: "https://mail.otterware.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
stars: 6
forks: 4
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-07-09T11:38:46Z"
lastCommitAt: "2026-11-03T10:52:08Z"
lastReleaseAt: "2026-09-29T10:50:26Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 66
maintainers: ["ckafrouni", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2a0e7f21bb03de925af6a53792ae579fc08cb8bf74cb8971815338fd8c8d20b/otterware-app/otter-mail"
---

# Otter Mail

Gmail, calm and fast. An app for macOS and Linux, and the same app in your browser at
[mail.otterware.app](https://mail.otterware.app).

- Several mailboxes side by side: Gmail, Outlook and any IMAP server
- Gmail labels, plus saved views that filter across accounts
- A local SQLite cache with full-text search, so mail opens instantly and works offline
- New-mail notifications, and a Dock unread badge
- iPhone alerts for verified Gmail, Outlook and IMAP arrivals, with previews fetched on the phone
- On-device translation of mail in other languages (Apple Translation on the Mac, Chrome's
  built-in translator on the web; nothing leaves your device)
- Calendar invitations you can answer in place, and one-click unsubscribe
- An agent that works on your mail through OpenRouter, Claude Code, Codex, Hermes or OpenClaw
- Keyboard shortcuts for everything, editable in Settings

## Mac app and web app

Both run the same app and the same mail backend (`packages/core`); what a browser can't do is
switched off in the web app.
Mac releases support Apple Silicon Macs (arm64).

| Feature                                                       | Mac app…
