---
repo: "kfstorm/carnivore"
name: "carnivore"
description: "Web page archive tool"
readmeQualityOk: true
url: "https://github.com/kfstorm/carnivore"
language: "Python"
languages: ["Python"]
languagePcts: [85]
topics: ["cli", "clipper", "markdown", "telegram"]
stars: 26
forks: 0
openIssues: 13
closedIssues: 18
watchers: 3
contributors: 1
recentReleases: 1
createdAt: "2024-10-31T15:10:14Z"
lastCommitAt: "2026-08-10T04:59:34Z"
lastReleaseAt: "2026-08-09T09:57:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 88
undervaluedScore: 49
maintainers: ["kfstorm"]
openGraphImageUrl: "https://opengraph.githubassets.com/cab44ba8c5b99b42fa5704b9b31f4e5a831b76bf54572fe6212a1d1714dd7c43/kfstorm/carnivore"
---

# Carnivore

**NOTE: This project is still in early development. Contributions to this project are greatly welcome.**

Carnivore is a simple tool that listens to your web page article archiving needs, removes clutter in the web pages, converts to various file formats, and does whatever you like to deal with converted files. You can combine this tool with your favorite document reader to read, comment, and modify articles.

**Owning your data is important. Saving your data with open formats is also important.**

## Features

Main process:

1. Trigger web page archiving by various methods.
    - Paste a URL to the interactive CLI.
    - Send a URL to a Telegram bot or a Telegram channel with a Telegram bot involved.
    - (More triggering methods could be added as needed.)
2. Archive the web page with various formats.
    - A single HTML file with all CSS/JavaScript/image/... resources included. Looks exactly like the original web page.
    - A polished version of the above HTML file that removes clutter and only keeps the article content.
    - A Markdown version of the polished web page.
    - A PDF document of the original web page.
    - (More formats like whole page image could…
