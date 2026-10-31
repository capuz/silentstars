---
repo: "borbiuk/band-spider"
name: "band-spider"
description: "Bandcamp sraper: extracd data from bandcamp website"
readmeQualityOk: true
url: "https://github.com/borbiuk/band-spider"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["bandcamp", "nodets", "puppeteer", "scraper", "scraping", "scraping-websites", "scrapper", "scrapper-script", "scrapping", "sqlite"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-06-10T10:45:19Z"
lastCommitAt: "2026-10-31T19:01:14Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 35
maintainers: ["borbiuk"]
openGraphImageUrl: "https://opengraph.githubassets.com/96feb5cb6f3c956d5bf4f7dac73c2a9fb25eb6aef88f619f4f4206ceaae61fe9/borbiuk/band-spider"
---

**band-spider** is a web scraper for [bandcamp](https://github.com/borbiuk/band-spider/blob/HEAD/bandcamp.com). It stores information about albums, tracks, their tags,
labels, and accounts that purchased them.

## 🛠️ Installation

Clone the repository and install dependencies:

```shell
  git clone https://github.com/borbiuk/band-spider.git \
  && cd band-spider \
  && npm i
```

## 🚀 Run

### 📁 Run the app using the **file** as the initial data source

**NOTE:** *DB will be created automatically*

Fill the file `accounts.txt` with links to accounts of bandcamp and run:

```shell
node run file:accounts
```

**Or** fill the file `items.txt` with links to albums/tracks of bandcamp and run:

```shell
node run file:items
```

### 💾 Run the app using the DB as the data source

To start process saved accounts:

```shell
node run db:accounts
```

To start process saved albums/tracks:

```shell
node run db:items
```

## 🕵️ Debug Mode

By default browser will be running in `headless` mode, to run a browser with GUI use the `debug:` prefix in the command:

- `node run debug:file:accounts`
- `node run debug:file:items`
- `node run debug:db:accounts`
- `node run debug:db:items`

## 📀…
