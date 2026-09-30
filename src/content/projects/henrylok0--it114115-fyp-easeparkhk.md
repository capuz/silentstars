---
repo: "HenryLok0/IT114115-FYP-EaseParkHK"
name: "IT114115-FYP-EaseParkHK"
description: "Flask-based system for real-time car park vacancy in Hong Kong. Intuitive interface for finding parking, traffic info, road conditions, and AI assistant for parking queries."
originalDescription: "Flask-based system for real-time car park vacancy in Hong Kong. Intuitive interface for finding parking, traffic info, road conditions, and AI assistant for parking queries."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/HenryLok0/IT114115-FYP-EaseParkHK"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["flask", "python", "carpark", "carparking", "hk", "hongkong", "api", "parking", "web-scraper"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-05-25T11:55:23Z"
lastCommitAt: "2026-09-30T09:56:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 66
maintainers: ["github-actions[bot]", "HenryLok0"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb811fab6fe90bfe7a90386dd4b6a60fb08591964380f49a3d61e7c10fe6ee97/HenryLok0/IT114115-FYP-EaseParkHK"
discussionCount: 1
---

# EaseParkHK (EasePark Hong Kong)

Collection of Hong Kong car park open data, quality analysis and short-term vacancy prediction. Results are publicly displayed using **GitHub Pages**. No backend, no login, no Gemini.

## Research Question

Using Transport Department open data, can we predict private car parking vacancies for the next 30 minutes? How much lower is the error compared to the 'assume same as now' (persistence baseline)?

The website is only a demonstration layer of the methodology. Contributions are in the dataset, missing value rules, baseline and MAE/RMSE, not account systems.

## Refactored Features

| Old Flask web app | Current Pages |
| --- | --- |
| On-the-fly `requests` / `pandas.read_excel` | GitHub Actions writes JSON every 15 minutes, webpage reads files |
| Login, email reset, Flask-Login, session | Abandoned |
| Favorites using server session | `localStorage` (limited to same browser only) |
| Gemini chatbox | Abandoned (API key cannot be placed in frontend) |
| follow / Post / Product / Brand tutorial code | Deleted |
| "True real-time backend" | "Latest snapshot" + if CORS allows, browser calls government API again |

## Local Preview of Static Site…
