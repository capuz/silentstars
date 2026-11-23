---
repo: "sakazuki-org/sakazuki"
name: "sakazuki"
description: "An application for managing alcohol at home"
originalDescription: "自宅の酒を管理するアプリケーション"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/sakazuki-org/sakazuki"
homepage: "https://sakazuki.fly.dev/"
language: "Ruby"
languages: ["Ruby", "HTML"]
languagePcts: [63, 26]
topics: ["rails", "ruby", "hacktoberfest", "hacktoberfest2023"]
stars: 17
forks: 4
openIssues: 24
closedIssues: 361
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2020-05-06T07:18:04Z"
lastCommitAt: "2026-11-23T10:17:53Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 71
maintainers: ["yonta", "momocus", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/96ec5a53eaef3a23c4c6e80de0fb9d4b1833149336b0759174e6dedbf5c83ff7/sakazuki-org/sakazuki"
---

# SAKAZUKI

An application for managing alcohol at home

## What is SAKAZUKI?

- Register, open, and track empty bottles of sake in inventory
- Store specs and flavor profiles as quantitative and qualitative values
- Full-text search across current inventory and previously consumed sake
- Display of inventory quantity and total consumption
- Share inventory among multiple users
- Responsive design for PC and smartphone
- Images are compressed to AVIF format and uploaded to [Cloudinary](https://cloudinary.com/)

## Watch a demo

- [SAKAZUKI](https://sakazuki.fly.dev/)

## Requirements

- Ruby = (See .ruby-version file)
- Bundler
- Node.js >= 22
- Yarn 🐈 = 1.22.22
- PostgreSQL >= 18
- libvips (development only)

## Setup

- Install dependencies
  - `bundle install`
  - `yarn install`
  - `yarn run playwright install chromium` (if running tests)
- Create a .env file
  - PostgreSQL settings
  - Google AdSense client ID setting (if using Google AdSense)

```console
cp dotenv.example .env
```

```shell
# .env
POSTGRES_USERNAME=[YOUR POSTGRESQL NAME]
POSTGRES_PASSWORD=[YOUR POSTGRESQL PASSWORD]
```

- Admin user setup (optional)
