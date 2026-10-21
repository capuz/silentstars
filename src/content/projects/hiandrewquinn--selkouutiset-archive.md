---
repo: "hiAndrewQuinn/selkouutiset-archive"
name: "selkouutiset-archive"
description: "Daily archive of YLE Selkouutiset. Updates every day around midnight."
readmeQualityOk: true
url: "https://github.com/hiAndrewQuinn/selkouutiset-archive"
homepage: "https://hiandrewquinn.github.io/selkouutiset-archive/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [75]
topics: ["finnish", "hugo", "selkouutiset"]
stars: 14
forks: 0
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-11-21T18:50:23Z"
lastCommitAt: "2026-10-21T23:35:01Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 72
maintainers: ["hiAndrewQuinn"]
openGraphImageUrl: "https://opengraph.githubassets.com/279556baf751556a31e31cef6ac0a2183275b92d00bf59e6ed406a3c232bf65a/hiAndrewQuinn/selkouutiset-archive"
---

# Andrew's Selkouutiset Archive

Now you, too, can have your own Selkouutiset Archive. 🌟

## Quickstart

You will need [Hugo](https://gohugo.io/) installed, at at least version...
```bash
$ hugo version

# hugo v0.123.3-a75a659f6fc0cb3a52b2b2ba666a81f79a459376+extended linux/amd64 BuildDate=2024-02-23T17:09:20Z VendorInfo=snap:0.123.3
```

... Yeah, that one. No other dependencies needed!

Get your website up to date and locally running:

```bash
rm -rf selkouutiset-archive/ && git clone https://github.com/hiAndrewQuinn/selkouutiset-archive.git
pushd selkouutiset-archive/

git submodule update --init --remote
hugo server
popd
```

That's all you need! Go to `http://localhost:1313` to see your website.

## Features

### 🎴 Anki Flashcard Generation

The archive now includes built-in Anki flashcard generation! Create bilingual flashcards directly from any article to enhance your Finnish language learning.

**Three granularity levels:**
- **[sentence]** - One flashcard per sentence (best for beginners)
- **[paragraph]** - One flashcard per paragraph (best for intermediate learners)
- **[section]** - One flashcard per section (best for advanced learners)

Simply click on any of these…
