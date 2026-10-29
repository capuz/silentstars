---
repo: "juniorguru/junior.guru"
name: "junior.guru"
description: "The junior.guru website, Discord bot, and synchronization scripts"
readmeQualityOk: true
url: "https://github.com/juniorguru/junior.guru"
homepage: "https://junior.guru"
language: "Python"
languages: ["Python"]
languagePcts: [80]
topics: ["juniors", "junior", "junior-developer", "junior-developers", "junior-engineer", "junior-software-engineer", "tutorial", "guide", "introduction", "introduction-to-programming"]
stars: 45
forks: 29
openIssues: 45
closedIssues: 153
watchers: 1
contributors: 25
recentReleases: 0
createdAt: "2019-07-01T08:09:09Z"
lastCommitAt: "2026-10-29T12:25:14Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 95
undervaluedScore: 62
maintainers: ["claude", "honzajavorek", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/615adfc224ae6d856a92a05cd5861ccda3e5fed62f525ff12ff66786ee7c71af/juniorguru/junior.guru"
fundingLinks: ["GITHUB:https://github.com/honzajavorek", "CUSTOM:https://junior.guru/love/"]
---

# junior.guru (aka coop) 🐣

The junior.guru website, Discord bot, and synchronization scripts.

## Status of the README

This README is missing a lot of information. Honza didn't have time yet to add a proper, nice README. The file currently only includes documentation of the hard parts of the development process, which would be easy to forget and difficult to learn again.

## Contributions

Contributions are welcome, but Honza didn't have much time yet to make the repo very friendly to contributors.

## Installation on macOS M1

This is needed for decrypting backups:

```
$ brew install gpg
```

## Screenshotting

```
$ playwright install
```

## Setting up email address

1.  Add the following to the DNS:

    ```
    junior.guru '@' MX mx1.improvmx.com 10
    junior.guru '@' MX mx2.improvmx.com 20
    junior.guru '@' TXT 'v=spf1 include:spf.improvmx.com include:_spf.google.com ~all'
    ```

1.  Fill the form at [ImprovMX](https://improvmx.com/)

## Setting up Google Drive credentials

1.  Follow the steps in the [gspread guide](https://gspread.readthedocs.io/en/latest/oauth2.html). Instead of Google Drive API, enable Google Sheets API.
1.  Save the obtained JSON file to the…
