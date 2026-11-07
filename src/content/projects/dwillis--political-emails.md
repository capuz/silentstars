---
repo: "dwillis/political-emails"
name: "political-emails"
description: "Processed collection of fundraising emails from political campaigns"
readmeQualityOk: true
url: "https://github.com/dwillis/political-emails"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-13T10:44:13Z"
lastCommitAt: "2026-11-07T16:11:25Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 45
maintainers: ["github-actions[bot]", "dwillis"]
openGraphImageUrl: "https://opengraph.githubassets.com/08696c0b66e1ccc7c8f533ebeceff9ba1ce8ae400790bbecf1051bf1087ce1c3/dwillis/political-emails"
---

# Political Email Archive

An archive of political fundraising emails, with daily updates via IMAP.

Data is stored as daily JSONL files organized by date: `data/YYYY/MM/YYYY-MM-DD.jsonl`

## Setup

### Prerequisites

- Python 3.12+
- [uv](https://docs.astral.sh/uv/) for dependency management
- Gmail account with [App Password](https://support.google.com/accounts/answer/185833) enabled

### Install

```bash
uv sync
```

### Environment Variables

```bash
export GMAIL_USER="your-email@gmail.com"
export GMAIL_APP_PASSWORD="your-app-password"
```

## Scripts

### Initial Migration

Convert an existing MBOX file into daily JSONL files:

```bash
cd scripts
uv run python migrate_mbox.py --mbox-path /path/to/your.mbox
```

### Daily Collection

Fetch new emails via IMAP since the last watermark:

```bash
cd scripts
uv run python collect_emails.py
```

Options:
- `--since YYYY-MM-DD` — override the start date
- `--dry-run` — count messages without processing
- `--folder "INBOX"` — specify IMAP folder (default: `"[Gmail]/All Mail"`)

### Build Site

Generate the static index page and download archives:

```bash
cd scripts
uv run python build_site.py
```

The dashboard includes a per-day…
