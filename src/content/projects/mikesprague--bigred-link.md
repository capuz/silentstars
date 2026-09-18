---
repo: "mikesprague/bigred-link"
name: "bigred-link"
description: "A big red URL shortener"
readmeQualityOk: true
url: "https://github.com/mikesprague/bigred-link"
homepage: "https://bigred.link"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["javascript", "link-shortener", "url-shortener", "serverless", "progressive-web-app", "pwa", "reactjs", "tailwindcss", "vercel", "vite"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2020-01-24T20:05:30Z"
lastCommitAt: "2026-09-18T14:03:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 82
maintainers: ["dependabot[bot]", "mikesprague"]
openGraphImageUrl: "https://opengraph.githubassets.com/71774f69cbfafdc73d9bdde1ce28974b8d24c353c0100675d89be5398c1c7cd1/mikesprague/bigred-link"
---

# bigred.link

A big red link shortener

## Requirements

You will need a free [TursoDB](https://turso.tech/) account to use for the database and a free API key from [ipgeolocation](https://ipgeolocation.io) for their IP Geolocation API.

This project uses [Bugsnag](https://bugsnag.com) for error reporting. You will need to create a free account and set up a project to get a Bugsnag key.

You will also need a Google Developer account with a free [Safe Browsing](https://developers.google.com/safe-browsing) API key.

### Uses (incomplete list)

- React
- Tailwind CSS
- Vite
- Font Awesome
- Bugsnag
- Vercel
- TursoDB
- Google Safe Browsing API
- ipgeolocation

## Running locally

1. Clone this repo and go into the directory
1. Rename `sample.env` to `.env` and edit the file to set the required values for:
    - `TURSO_DB_TABLE`
    - `TURSO_AUTH_TOKEN`
    - `TURSO_DATABASE_URL`
    - `BUGSNAG_KEY`
    - `VITE_BUGSNAG_KEY` (same as `BUGSNAG_KEY`)
    - `GOOGLE_SAFE_BROWSING_API_KEY`
    - `VITE_IP_GEOLOCATION_API_KEY`
1. Install dependencies by running: `npm install`
1. Start the project: `npm start`
1. Get localhost URL provided in terminal and visit in your browser

---

###…
