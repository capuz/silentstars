---
repo: "benfoxall/scrape"
name: "scrape"
description: "Git Scraping Hacker News"
readmeQualityOk: true
url: "https://github.com/benfoxall/scrape"
homepage: "http://benjaminbenben.com/scrape/"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [58, 40]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-04-30T14:43:42Z"
lastCommitAt: "2026-07-04T22:20:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 72
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/e0cf97c19b9d933c03fdff5f9a6942fd424d43133c4d51d5b6acc14845b8a0b2/benfoxall/scrape"
---

# Recent News

This pulls the [HN](https://news.ycombinator.com/) front page to [hacker-news.html](hacker-news.html) and uses git log/show to access a history of changes.

See [git scraping](https://simonwillison.net/2020/Oct/9/git-scraping/) & [Flat Data](https://githubnext.com/projects/flat-data) for more info about the approach.

### Updating the data

```bash
export TARGET="hacker-news.html"

curl https://news.ycombinator.com > $TARGET
git add $TARGET
git commit -m ":robot: scraped to $TARGET"
```

This is run automatically by [.github/workflows/scrape.yml](.github/workflows/scrape.yml)

### Extracting file history

```bash
git log --pretty=format:"%H %at" -- "$TARGET" | while read commit timestr
do
    git show "$commit:$TARGET" > tmp_${timestr}_${commit}.html
done
```
