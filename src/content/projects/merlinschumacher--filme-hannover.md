---
repo: "merlinschumacher/filme-hannover"
name: "filme-hannover"
description: "This is the application code that generates the content for https://filme-hannover.de/"
readmeQualityOk: true
url: "https://github.com/merlinschumacher/filme-hannover"
homepage: "https://filme-hannover.de/"
language: "C#"
languages: ["C#", "TypeScript"]
languagePcts: [63, 28]
topics: ["cinema", "dotnet", "webscraping"]
stars: 13
forks: 1
openIssues: 3
closedIssues: 3
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2024-05-02T23:24:53Z"
lastCommitAt: "2026-09-14T09:13:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 65
maintainers: ["dependabot[bot]", "merlinschumacher"]
openGraphImageUrl: "https://opengraph.githubassets.com/6abff8a42aa3772f18daba9954360d00aa2ceb3357c1d33abd177a34e95bf7e3/merlinschumacher/filme-hannover"
discussionCount: 0
---

# filme-hannover.de

**[filme-hannover.de](https://filme-hannover.de/)** is a non-commercial, free, and open-source application that consolidates cinema programs in Hanover, Germany. This project makes it easier for users to find showtimes, especially for smaller cinemas that aren't listed on commercial websites.

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [How to Contribute](#how-to-contribute)
- [Data Sources](#data-sources)
- [Technologies Used](#technologies-used)
- [Legal Disclaimer](#legal-disclaimer)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- **Comprehensive Listings:** Aggregates cinema programs from all theaters in Hanover.
- **Daily Updates:** GitHub Actions automatically update the page daily.
- **Static Deployment:** The site is static and hosted on GitHub Pages.
- **Open Source and Privacy-Focused:** No ads, no cookies, no tracking.

## Architecture

The project is divided into two main components: the **Backend** and the **Frontend**.

### Backend

- **.NET (C#)** for scraping and data processing.
- **SQLite** for temporary data storage and normalization.
- **Scraping:** HTML, ICS files, public…
