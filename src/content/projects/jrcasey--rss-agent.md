---
repo: "jrcasey/RSS_Agent"
name: "RSS_Agent"
description: "Weekly digest of my RSS feeds ranked and filtered based on my interests"
readmeQualityOk: true
url: "https://github.com/jrcasey/RSS_Agent"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 15
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-11-23T16:10:31Z"
lastCommitAt: "2026-07-04T22:18:28Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 74
undervaluedScore: 35
maintainers: ["github-actions[bot]", "jrcasey"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1102526020/cc52060c-cec7-4cad-92d2-322090d3f98b"
---

# RSS_Agent

RSS_Agent is an automated weekly RSS reader and article ranking system that I put together for my own interests. I was tired to leafing through hundreds of articles daily from all of the journals I follow, and thought a LLM would do as good a job as my tired eyes. *I'm usually pretty anti-chatbot but man this is a clear use-case*. Probably others have done this as well but I couldn't find anything. My interests are in microbial oceanography, biogeochemistry, systems biology, and computational biology, but you can easily change the prompt to whatever float your boat. It fetches articles, ranks them using an LLM, filters top results, archives previous weeks, and emails you a curated list. I also have a local `launchctl` script to fetch results to my Obsidian Vault on Monday mornings for coffee reading. 

## Features

- Fetches articles from RSS/Atom feeds listed in `feeds.txt`
- Prevents re-processing by storing previously-seen article IDs in `cache/seen_ids.json`
- Combines title + abstract (`content`) for ranking. The agent comes up with a score for how related an article is to my various interests. Black Magic 🪄🎩
- Filters results by score threshold or top N…
