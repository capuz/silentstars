---
repo: "jniltinho/go-cubemail"
name: "go-cubemail"
description: "Self-hosted webmail client inspired by Roundcube's Larry theme. Built with Go + Vue 3 as a single binary. Includes `init` command for quick setup and supports IMAP/SMTP."
readmeQualityOk: true
url: "https://github.com/jniltinho/go-cubemail"
language: "JavaScript"
languages: ["JavaScript", "Go"]
languagePcts: [50, 21]
topics: ["email-client", "fullstack", "golang", "imap", "isp", "roundcube", "self-hosted", "single-binary", "smtp", "typescript"]
stars: 5
forks: 2
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-22T14:30:55Z"
lastCommitAt: "2026-11-24T14:05:36Z"
lastReleaseAt: "2026-07-24T21:02:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 52
undervaluedScore: 15
maintainers: ["jniltinho"]
openGraphImageUrl: "https://opengraph.githubassets.com/640b2799ad21b11f31dbc00ae7aea424438e06326fff0d912c435e2b084bc6f1/jniltinho/go-cubemail"
---

# Go CubeMail

**Modern self-hosted webmail with calendar and contacts — works with your existing mail server.**

A single Go binary with the entire Vue 3 frontend embedded. Connects directly to your IMAP/SMTP server and exposes full CalDAV, CardDAV and Exchange ActiveSync (EAS) servers so calendars and contacts sync natively with Apple Calendar, Outlook, Thunderbird, iOS, Android and more.

No email migration. No data duplication. Your messages stay on your IMAP server.

Built with a modern Vue 3 + Go stack, inspired by the classic Roundcube "Larry" theme.

## Quick Start

### Pre-built release (recommended)

1. Download the latest Linux (amd64) binary from the [Releases page](https://github.com/jniltinho/go-cubemail/releases)
2. Extract and generate a config file:

   ```bash
   tar -xzf go-cubemail_*.tar.gz
   ./go-cubemail init -o config.toml
   ```

3. Edit `config.toml` with your IMAP/SMTP server details — without it the server
   starts against the built-in defaults and will not reach your mail server.
4. Create the database schema and start:

   ```bash
   ./go-cubemail migrate
   ./go-cubemail serve
   ```

5. Open http://localhost:8080
