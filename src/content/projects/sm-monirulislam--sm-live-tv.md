---
repo: "sm-monirulislam/SM-Live-TV"
name: "SM-Live-TV"
description: "Automatically updated list of  (SM LIVE TV)  Live Matches Links (provided as json-file or PlayList)"
readmeQualityOk: true
url: "https://github.com/sm-monirulislam/SM-Live-TV"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["api", "automation", "live", "m3u-playlist", "m3u8", "workflow"]
stars: 32
forks: 15
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-10-26T10:59:49Z"
lastCommitAt: "2026-07-10T07:01:47Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 46
maintainers: ["actions-user", "github-actions[bot]", "sm-monirulislam"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0e1181f312f070ee0b6ebfef543cac710ffc53ca8bc321694e3066265a16112/sm-monirulislam/SM-Live-TV"
---

📺 Live TV Playlist Generator

Automatically generates M3U playlists for Live TV channels using GitHub Actions.
This project helps you host your M3U playlist on GitHub — always updated, clean, এবং offline links filtered.

---

🚀 Features

✔️ Auto-generate playlist.m3u

✔️ Offline/Dead link detection

🧪 Run Locally

python combine_playlist.py

---

🔄 GitHub Actions Workflow Example

name: 🔁 Auto Generate Live TV Playlist

on:
  schedule:
    - cron: "0 * * * *"   # Run every hour
  workflow_dispatch:

jobs:
  update:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-python@v5
        with:
          python-version: "3.x"

      - name: Install Dependencies
        run: pip install -r requirements.txt

      - name: Run Script
        run: python combine_playlist.py

      - name: Commit & Push
        run: |
          git config user.name "github-actions"
          git config user.email "github-actions@github.com"
          git add .
          git commit -m "Auto update playlist"
          git push

---

📡 Playlist URL

You can use your playlist link like:…
