---
repo: "MozillaFoundation/foundation.mozilla.org"
name: "foundation.mozilla.org"
description: "Mozilla Foundation website"
readmeQualityOk: true
url: "https://github.com/MozillaFoundation/foundation.mozilla.org"
homepage: "https://www.mozillafoundation.org"
language: "Python"
languages: ["Python"]
languagePcts: [89]
topics: ["moz"]
stars: 394
forks: 159
openIssues: 184
closedIssues: 7378
watchers: 49
contributors: 89
recentReleases: 0
createdAt: "2016-12-15T21:09:35Z"
lastCommitAt: "2026-08-26T04:15:31Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 99
undervaluedScore: 41
maintainers: ["dependabot[bot]", "OswaldoPinedaMozilla", "ramram-mf"]
openGraphImageUrl: "https://opengraph.githubassets.com/c695ac8563a0789e89542afe6965caa1ebc01bfc46aa9e268f613d85fb5517a0/MozillaFoundation/foundation.mozilla.org"
---

## Environment Variables

Environment variables are loaded from a `.env` file in the project root (gitignored) for local development, and must be set in [Heroku config vars](https://devcenter.heroku.com/articles/config-vars) for staging and production. See `foundation_cms/settings/base.py` for the full list with defaults.

### Required (no defaults — the app will error on startup without these)

| Variable | Description |
|---|---|
| `DJANGO_SECRET_KEY` | Django secret key |
| `CONTENT_TYPE_NO_SNIFF` | `bool` — sets `SECURE_CONTENT_TYPE_NOSNIFF` |
| `SET_HSTS` | `bool` — enables HSTS |
| `XSS_PROTECTION` | `bool` — sets `SECURE_BROWSER_XSS_FILTER` |
| `SSL_REDIRECT` | `bool` — redirects HTTP → HTTPS |
| `X_FRAME_OPTIONS` | e.g. `DENY` or `SAMEORIGIN` |

### Core

| Variable | Default | Description |
|---|---|---|
| `DEBUG` | `False` | Enables Django debug mode. See [DEBUG=True gotchas](#debugtrue) below |
| `DATABASE_URL` | `None` | Postgres connection string, e.g. `postgresql://user@host:5432/db` |
| `ALLOWED_HOSTS` | `[]` | Comma-separated list of allowed hostnames |
| `CSRF_TRUSTED_ORIGINS` | `[]` | Trusted origins for CSRF |
| `DJANGO_SECRET_KEY` | — | Secret key for Django |…
