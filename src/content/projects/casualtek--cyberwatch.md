---
repo: "Casualtek/Cyberwatch"
name: "Cyberwatch"
description: "Building a consolidated RSS feed for articles about cyberattacks"
url: "https://github.com/Casualtek/Cyberwatch"
language: "HTML"
languages: ["HTML"]
languagePcts: [87]
topics: ["feed", "rss", "cyberattacks", "cybersecurity"]
stars: 74
forks: 19
openIssues: 6
closedIssues: 1
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2023-04-25T10:14:22Z"
lastCommitAt: "2026-06-28T01:36:04Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 73
undervaluedScore: 43
maintainers: ["Casualtek", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c3a6e4619f8484bde32be354be04f856f8af6352ac80bdd0d40af8505957d74/Casualtek/Cyberwatch"
---

# Cyberwatch
Keeping track of cyberattacks

This project consists in a few Python scripts that help monitor news to discover mentions of cyberattacks in the media around the globe. 

*rss.py* collects news feeds on the topic from Google, removes duplicates, and translates news headlines into English, using Azure Translation service's API. ChatGPT is also involved to assess whether the title suggests that the article refers to a cyberattack of not.
The resulting RSS feed is ready to consume with your favorite RSS reader. It's frequently updated using GitHub Actions. 
*TODO*: add results from Bing News Search's API. Extend detection of duplicates.

*review-week.py* uses data from *cyberattacks.json* to produce a weekly cyberattacks digest. It's run by GitHub Actions. 

*review-monthly.py* uses data from *cyberattacks.json* to produce a weekly cyberattacks digest. It's run by GitHub Actions.

Now, what's in *cyberattacks.json*?
A set of cyberattacks mentionned in the media and spotted thanks to the meta cyberattacks RSS feed. 
You'll find there the name of the victim, the country, the date, a short description of the situation, and a link to the original news story. 
That data is…
