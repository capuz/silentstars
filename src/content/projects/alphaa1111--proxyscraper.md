---
repo: "alphaa1111/proxyscraper"
name: "proxyscraper"
description: "Proxy Scraper (HTTP & SOCKS) "
readmeQualityOk: true
url: "https://github.com/alphaa1111/proxyscraper"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["proxy-list", "proxy-scraper"]
stars: 76
forks: 10
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2023-09-15T13:43:33Z"
lastCommitAt: "2026-07-06T07:03:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 45
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd64adb3ecd39ce67cbdc242b6ef8eb27ee1a2af43deec03ded085593e534ca3/alphaa1111/proxyscraper"
---

# Proxy Scraper (HTTP & SOCKS)

Golang script designed to scrape both HTTP and SOCKS proxy information from publicly available sources and saves them for your own use.

## Features
- Retrieves a list of HTTP proxies from [free-proxy-list.net](http://free-proxy-list.net/) and saves them to "http.txt".
- Retrieves a list of SOCKS proxies from [socks-proxy.net](https://www.socks-proxy.net) and saves them to "socks.txt".
- User-friendly format for easy integration into your projects.
- Lightweight and easy to use.

## Usage
1. Clone this repository:
```sh
git clone https://github.com/variableninja/proxyscraper.git
cd proxyscraper
```
2. Build the Go programs
```sh
go build http.go
go build socks.go
```
3. Run them and have fun!
```sh
./http
./socks
```

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/alphaa1111/proxyscraper/blob/HEAD/LICENSE) file for details.

## Disclaimer
This program is intended for educational and research purposes only, use it responsibly and in compliance with the terms of service of the websites you scrape.
