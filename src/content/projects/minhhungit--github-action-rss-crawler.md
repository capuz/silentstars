---
repo: "minhhungit/github-action-rss-crawler"
name: "github-action-rss-crawler"
description: "Auto crawl RSS feeds using Github Action"
url: "https://github.com/minhhungit/github-action-rss-crawler"
homepage: "https://minhhungit.github.io/github-action-rss-crawler/"
language: "HTML"
languages: ["HTML"]
languagePcts: [93]
topics: ["rss", "crawler", "github-actions", "csharp", "netcore", "litedb", "rss-items", "rss-crawler"]
stars: 36
forks: 15
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2020-08-09T17:24:45Z"
lastCommitAt: "2026-06-24T00:20:30Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 65
maintainers: ["minhhungit"]
openGraphImageUrl: "https://opengraph.githubassets.com/69d708bcbadaf6c89f8c3be80b7235d9ec6458e82443a5e4f54f33ea92c4148e/minhhungit/github-action-rss-crawler"
---

## Rss auto crawling using Github Action

**Github Action does all these steps automatically, it run rss crawler every 4 hours**

Steps:
  - Github will pull repository, build and run crawler code (crawling code is C# (.net core), github will run it directly)
  - Read channel urls from LiteDB
  - Fetch rss feed items
  - Insert feed items into LiteDB after checking blacklist and existing
  - Generate all rss items to static page (index.html - https://minhhungit.github.io/github-action-rss-crawler/ )
  - Commit change (litedb database & index.html page) and push to this repo

  
### Workflow
```yml
on:
  schedule:
    # Runs every 4h
    - cron: '0 */4 * * *'
  workflow_dispatch:
  
jobs:
  update-readme-with-blog:
    name: Crawl rss and generate static page
    runs-on: windows-2019
    steps:
      - uses: actions/checkout@main
        with:
          repository: minhhungit/github-action-rss-crawler
          token: ${{ secrets.GITHUB_TOKEN }}
      - uses: actions/setup-dotnet@v1
        with:
          dotnet-version: 3.1.x
      #- run: dotnet build DemoApp\DemoApp.sln      
      - run: dotnet run --project RssCrawler\RssCrawler.csproj
      - run: git config --local…
