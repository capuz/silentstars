---
repo: "forrest-herman/notion-automation"
name: "notion-automation"
description: "A set of scripts for the Notion API to automate my life"
readmeQualityOk: true
url: "https://github.com/forrest-herman/notion-automation"
language: "HTML"
languages: ["HTML"]
languagePcts: [99]
topics: ["notion-api"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-07-04T05:51:26Z"
lastCommitAt: "2026-10-21T20:00:34Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 44
maintainers: ["forrest-herman"]
openGraphImageUrl: "https://opengraph.githubassets.com/a86a63a687e7556b4126c8eef4a959b141777769b5856ada36cb771695d2fdd4/forrest-herman/notion-automation"
---

# notion-automation
 
### This repository contains
- A set of methods for interacting with Notion's API
  - get databases, pages, and blocks
  - create new pages in a database
  - append blocks to pages
  - update the properties on a page
- A main function that when run:
  - Creates a new journal entry in my Journal Database
    - ensures the correct template is used
    - only 1 page is created per day
    - calendar events from all my Google Calendars are automatically added
  - Pulls data from Goodreads and compares with my Notion Reading List
    - Updates existing entires with dates and ratings
    - Adds nonexistant books to the database
- A set of functions for interacting with Google Firestore
- Github Actions configuration file to run this automation on a cron schedule, including webdriver and Google Auth tasks

### Requirements
- This code requires some configuration files and variables to work:
  - a `.env` file containing:
    -  a Notion Integration `secret_key` in the form:
       - `NOTION_TOKEN = 'secret_key'`
 - Github Secret `TIMEZONE` key with your local timezone string of the form `America/New_York`
  - a `gcal_client_secret.json` file that contains the Google…
