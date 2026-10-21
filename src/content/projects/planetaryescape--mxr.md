---
repo: "planetaryescape/mxr"
name: "mxr"
description: "Local-first, keyboard-native terminal email client"
readmeQualityOk: true
url: "https://github.com/planetaryescape/mxr"
homepage: "https://mxr-mail.vercel.app"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [76, 21]
stars: 73
forks: 8
openIssues: 6
closedIssues: 10
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-03-20T10:50:00Z"
lastCommitAt: "2026-10-21T17:31:45Z"
lastReleaseAt: "2026-03-21T15:09:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 36
maintainers: ["bhekanik", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8775e7c776ee4c0befdc6961b5c28d2b518374f11cd334c57e260e94bdd75701/planetaryescape/mxr"
---

# mxr

**Your email, on your computer, usable from the terminal or your agent.**

mxr syncs Gmail, Outlook, Microsoft 365, and IMAP accounts into one local
mailbox. It keeps your message history in SQLite, builds a local search index,
and exposes the same mail controls through a TUI, a pipeable CLI, a web app,
MCP, and an agent skill. Attachment names, types, and sizes are local; mxr
downloads attachment contents when you open them, except the PDFs of the
receipts, orders and bills it files as records, which it fetches ahead of
time within a 512 MB budget (`records.pdf_prefetch`). Send through Gmail,
Outlook, or any SMTP server.

Start on Now for people waiting on you and tasks due soon. Open Messages to
reply, To do to act on a deadline, Updates to check what changed, Reading for
newsletters, or Archive to find a receipt or booking reference. Each mode has
its own view and actions; Inbox keeps the arrival-order list.

[Work through your day](https://mxr.sh/guides/your-day/) or
[compare the five modes](https://mxr.sh/guides/email-modes/).
[Personal categories](https://mxr.sh/guides/personal-categories/) let you group
mail your own way without changing those modes or provider…
