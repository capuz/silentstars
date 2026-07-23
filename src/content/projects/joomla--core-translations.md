---
repo: "joomla/core-translations"
name: "core-translations"
description: "The repository to store the Source and Translations for the Joomla Core (CMS). Connected to the Crowdin Translation Platform and other repositories if needed."
readmeQualityOk: true
url: "https://github.com/joomla/core-translations"
homepage: "https://joomla.crowdin.com/u/signin"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["joomla", "translation"]
stars: 21
forks: 39
openIssues: 0
closedIssues: 64
watchers: 8
contributors: 16
recentReleases: 0
createdAt: "2021-06-18T18:18:09Z"
lastCommitAt: "2026-07-23T06:16:01Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 75
maintainers: ["joomla-translation-bot", "crowdin-bot", "tecpromotion"]
openGraphImageUrl: "https://opengraph.githubassets.com/1488ed122b5a0d486278f433579275910bca5d607c219aa4d31783de823990b6/joomla/core-translations"
---

# Core-Translations

The repository to store the Source and Translations for the Joomla Core (CMS).
Connected to the [Crowdin](https://joomla.crowdin.com/cms) Translation Platform and other repositories if needed.

## Found typos or problems with a language pack? Or just want to help?

There are dedicated community members for many translations. They can be found on the Volunteers Portal in the working group [Joomla! CMS (Core) Language Team](https://volunteers.joomla.org/teams/joomla-cms-language-team). Do not hesitate to contact someone or help directly on [Crowdin](https://joomla.crowdin.com/cms) to make Joomla available in as many languages as possible.

## Installer files

The installer files (Installer\language\en-GB // joomla.ini and langmetadata.xml) are managed in Crowdin.
This is required to keep the Core installation process intact.
In the Crowdin platform things are locked and automated to keep everything aligned.
These three files can't be processed manually, because of the amount of work and risks.
This only applies to languages that are managed in Crowdin.

## Github Actions - Cron Schedule

### Blocked time windows
* UTC 20:00-20:10 -> Get J5 Core Source and Upload…
