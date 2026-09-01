---
repo: "benfoxall/scrape"
name: "scrape"
description: "Git Scraping Hacker News"
readmeQualityOk: true
url: "https://github.com/benfoxall/scrape"
homepage: "http://benjaminbenben.com/scrape/"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [57, 40]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-04-30T14:43:42Z"
lastCommitAt: "2026-09-01T08:47:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 72
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/acc3f2e484296db6b0cb416a09cdf98dcdad1c63e6af9c2b0f712af338d52dba/benfoxall/scrape"
---

# Recent News

This pulls the [HN](https://news.ycombinator.com/) front page to [hacker-news.html](https://github.com/benfoxall/scrape/blob/HEAD/hacker-news.html) and uses git log/show to access a history of changes.

See [git scraping](https://simonwillison.net/2020/Oct/9/git-scraping/) & [Flat Data](https://githubnext.com/projects/flat-data) for more info about the approach.

### Updating the data

```bash
export TARGET="hacker-news.html"

curl https://news.ycombinator.com > $TARGET
git add $TARGET
git commit -m ":robot: scraped to $TARGET"
```

This is run automatically by [.github/workflows/scrape.yml](https://github.com/benfoxall/scrape/blob/HEAD/.github/workflows/scrape.yml)

### Extracting file history

```bash
git log --pretty=format:"%H %at" -- "$TARGET" | while read commit timestr
do
    git show "$commit:$TARGET" > tmp_${timestr}_${commit}.html
done
```
