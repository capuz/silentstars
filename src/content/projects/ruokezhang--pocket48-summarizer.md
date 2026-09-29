---
repo: "RuokeZhang/pocket48-summarizer"
name: "pocket48-summarizer"
description: "Local web app for transcribing and summarizing public Pocket48 replays"
originalDescription: "Local web app for transcribing and summarizing public Pocket48 replays"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/RuokeZhang/pocket48-summarizer"
language: "Python"
languages: ["Python"]
languagePcts: [76]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-08-23T15:47:51Z"
lastCommitAt: "2026-09-29T08:10:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 45
maintainers: ["RuokeZhang"]
openGraphImageUrl: "https://opengraph.githubassets.com/e631caf5443fe86911835c8716cdc130f34e29fa5ec60af0ee051b0b6e6cef30/RuokeZhang/pocket48-summarizer"
---

# Pocket48 Replay Summarizer

A web app that can run on your local machine or self-hosted server: paste a link to a public Pocket48 member live share, automatically extract replay audio, generate timestamped subtitles, parse bullet comments, and output a Chinese-language structured summary with subtitle evidence.

Example input:

```text
https://h5.48.cn/2019appshare/memberLiveShare/index.html?id=1297967327104274432
```

## Feature Boundaries

- The main site currently only handles publicly available completed replays that do not require login to access.
- Room members speaking is still an experimental POC with default disabled: the repository provides explicit confirmation for one-time manual SMS login, private account queries, optional 60-second local recording probe, and an independently running capture-first local monitoring process. Monitoring status and safely completed MP3 rolling segments are publicly played and downloaded via `/room-voice`. After recording ends, the existing SQLite Worker automatically discovers sessions, temporarily merges audio, calls DashScope ASR and LLM, and publicly provides read-only subtitles and summaries; simultaneously captures public room text…
