---
repo: "emory-libraries/dlp-curate"
name: "dlp-curate"
description: "Digital curation and preservation workbench for the Emory Preservation Repository."
readmeQualityOk: true
url: "https://github.com/emory-libraries/dlp-curate"
language: "JavaScript"
languages: ["JavaScript", "Fluent", "Ruby"]
languagePcts: [51, 24, 21]
topics: ["repository", "hyrax", "library", "education"]
stars: 15
forks: 4
openIssues: 115
closedIssues: 1493
watchers: 3
contributors: 18
recentReleases: 0
createdAt: "2018-11-20T21:50:05Z"
lastCommitAt: "2026-11-20T12:21:10Z"
lastReleaseAt: "2019-08-16T21:47:37Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 87
undervaluedScore: 47
maintainers: ["bwatson78", "dependabot[bot]", "alexBLR"]
openGraphImageUrl: "https://opengraph.githubassets.com/3e51b3a4dca1d186500eeb0ced9d7387464dcbaffd8a5d47091847535e22837f/emory-libraries/dlp-curate"
---

# DLP-Curate

A repository application for digital curators (preservation, rights and metadata management, collection management). Find more about the project on our

## Database Authentication

In a production environment, we will use Shibboleth for authentication. However, in a development environment we will be using a local database.

## Local Development Setup

Our new local development environment now utilizes a docker compose container system to run Fedora 4.7.5, Solr 8.11.1, and Redis 6.2 servers. However, the following applications must still be installed on the local machine: Mysql2 (or MariaDB), FITS 1.6.0, ImageMagick, VIPS, and LibreOffice (ffmpeg is still optional, but will most likely be incorporated in later versions). Also note that this version of Curate uses Ruby 3.3.14.

Do the following within the `dlp-curate` directory:
