---
repo: "xsrazy/Download-All-Tiktok-Videos"
name: "Download-All-Tiktok-Videos"
description: "Download all tiktok videos including description from username without watermark."
readmeQualityOk: true
url: "https://github.com/xsrazy/Download-All-Tiktok-Videos"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 59
forks: 11
openIssues: 4
closedIssues: 0
watchers: 6
contributors: 1
recentReleases: 0
createdAt: "2023-03-02T10:15:15Z"
lastCommitAt: "2026-07-13T06:38:34Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 42
maintainers: ["xsrazy"]
openGraphImageUrl: "https://opengraph.githubassets.com/8fd7ef5a28c52a52fb1eb9ec2c030a3a00b9d2bc60ba4a533a3246039c03c14d/xsrazy/Download-All-Tiktok-Videos"
---

# Download All Tiktok Videos
Download all tiktok videos, with or without a watermark.

## Features
* Concurrent downloading
* Watermark free videos
* Watermarked videos
* Supports all TikTok URL formats
* No proxy needed

## Requirements
* Python 3.6 or higher: https://www.python.org/downloads/

## Installation
Step 1. Clone the repo.
`git clone https://github.com/xsrazy/Download-All-Tiktok-Videos`

Step 2. Enter the directory
`cd Download-All-Tiktok-Videos`

Step 3. Create and activate your virtual environment.

Create: `python -m venv venv` or `python3 -m venv venv`

Activate: Windows `.\venv\Scripts\activate` | Linux `. venv/bin/activate`

Step 4. Install requirements
`pip install -r requirements.txt` or `pip3 install -r requirements.txt`

## Available Options
```
usage: run.py [-h] [--links LINKS] [--no-watermark | --watermark] [--workers WORKERS]

options:
-h, --help show this help message and exit
--links LINKS The path to the .txt file that contains the TikTok links. (Default: links.txt)
--no-watermark Download videos without watermarks. (Default)
--watermark Download videos with watermarks.
--workers WORKERS Number of concurrent…
