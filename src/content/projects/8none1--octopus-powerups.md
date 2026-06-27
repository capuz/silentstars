---
repo: "8none1/octopus_powerups"
name: "octopus_powerups"
description: "Programmatic access to Power Up time data"
url: "https://github.com/8none1/octopus_powerups"
homepage: "http://www.whizzy.org/octopus_powerups/"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [54, 46]
topics: ["octopus", "octopus-energy", "powerups"]
stars: 9
forks: 4
openIssues: 1
closedIssues: 9
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2024-01-26T17:28:51Z"
lastCommitAt: "2026-06-27T00:36:23Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 81
maintainers: ["github-actions[bot]", "8none1"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e4d3d85b57b4b137f0052bc321660c22af6945cbc89a31ae0624486d722c717/8none1/octopus_powerups"
---

# octopus_powerups
Programmatic access to Octopus Energy Power Up and Free Electricity Session time data.

**📡 Now using the official Octopus Energy GraphQL API for Free Electricity Sessions!**

This project provides JSON feeds for both **Free Electricity Sessions** and **Power Ups** using two parallel data collection methods:

- **Free Electricity Sessions**: 
  - GraphQL API ✅ **Recommended** - reliable, structured data directly from Octopus Energy
  - Email parsing (legacy) - still runs alongside for backward compatibility
  
- **Power Ups**: 
  - Email parsing ✅ **Recommended** - most reliable for Power Ups
  - GraphQL API (experimental) ⚠️ - currently returns placeholder data, runs alongside but not recommended

The graphql system runs every 6 hours via GitHub Actions, providing multiple JSON files so you can choose the data source that works best for you. The keys are `start` and `end` with timestamps in ISO 8601 format (UTC). Using the template filter `as_timestamp` or `as_datetime` in Home Assistant will enable you to convert from UTC to local time easily.

*NB: You MUST still sign up for the Power Up from the email you received.*

The sign up URL in the email includes a…
