---
repo: "zichengalexzhao/job-app-tracker"
name: "job-app-tracker"
description: "Automate job application tracking with Gmail API, OpenAI, and GitHub Actions. Generates visualizations and updates hourly."
readmeQualityOk: true
url: "https://github.com/zichengalexzhao/job-app-tracker"
homepage: "https://github.com/zichengalexzhao/job-app-tracker"
language: "HTML"
languages: ["HTML"]
languagePcts: [99]
topics: ["automation", "data-visualization", "github-actions", "gmail-api", "jobseeker", "nlp", "openai", "plotly", "python"]
stars: 6
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-02-23T22:21:09Z"
lastCommitAt: "2026-07-05T21:00:25Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 90
undervaluedScore: 87
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/937790286/007ab510-b57b-4d0e-b1ef-3e67d619e424"
---

# Job Application Tracker

This project automates job application tracking by fetching relevant emails, extracting job details using LLM, and visualizing the data. It runs locally or via GitHub Actions.

## Privacy Notice

**Your job application data is personal and should remain private.**

This tool is designed for **individual use** - each user should:
1. Fork this repository to their own GitHub account
2. Keep their fork **private** (or be aware that public forks expose your job search data)
3. Never commit personal data (`data/job_applications.json`) to a public repository

The data files are excluded from git by default via `.gitignore`. Example templates are provided in `data/*.example.json` to help you get started.

## Features

- **Automated Email Processing**: Fetches job-related emails from Gmail.
- **AI-Powered Classification**: Uses OpenAI to extract job details.
- **Data Cleaning**: Removes duplicate entries.
- **Visualizations**: Generates a [Markdown table](https://github.com/zichengalexzhao/job-app-tracker/blob/HEAD/TABLE.md) and a [Sankey chart](https://github.com/zichengalexzhao/job-app-tracker/blob/HEAD/visualizations/sankey.html) of job statuses.
- **Automated…
