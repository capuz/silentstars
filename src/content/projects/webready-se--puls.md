---
repo: "webready-se/puls"
name: "puls"
description: "Cookieless, lightweight analytics. One PHP file + SQLite. No frameworks, no dependencies."
readmeQualityOk: true
url: "https://github.com/webready-se/puls"
homepage: "https://demo.puls.webready.se"
language: "PHP"
languages: ["PHP", "JavaScript"]
languagePcts: [62, 29]
topics: ["analytics", "cookieless", "gdpr", "google-analytics-alternative", "php", "privacy", "self-hosted", "single-file", "sqlite", "web-analytics"]
stars: 10
forks: 2
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-03-15T23:24:07Z"
lastCommitAt: "2026-11-14T22:01:32Z"
lastReleaseAt: "2026-04-16T12:23:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 63
maintainers: ["jarnesjo", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1182756127/d00047ed-e9aa-4216-a6a7-cd0dc8c211c7"
---

# Puls

**One file. No cookies. Full picture.**

Self-hosted web analytics in a single PHP file and SQLite.<br>
Upload it to any PHP host and see your traffic in minutes, without a cookie banner.

**[Try the live demo](https://demo.puls.webready.se)** - no account, made-up data

## Get started in two minutes

On any host with PHP 8.3 or newer, download the [latest release](https://github.com/webready-se/puls/releases/latest), then:

```bash
unzip puls-*.zip && cd puls-*/
php puls user:add admin            # create your login
php -S localhost:8080 -t public    # try it, or point your web server at public/
```

Add one line to every site you want to track:

```html
<script src="https://stats.example.com/?js" data-site="example.com" defer></script>
```

That's it. Docker, Nginx, Laravel Forge and shared hosting without SSH are covered in [Install and run](https://github.com/webready-se/puls/blob/HEAD/docs/install.md).

## Why Puls

- **One file, no infrastructure.** A PHP file, a dashboard page and SQLite. No Node, no Docker, no database server, no build step. It runs on ordinary PHP web hosting.
- **Private by design.** No cookies and no stored IP addresses. A visitor is a hash with…
