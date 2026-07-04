---
repo: "Vann-Dev/proxy-list"
name: "proxy-list"
description: "List of public proxies, and checked to some domain like Google, Facebook, Twitter"
url: "https://github.com/Vann-Dev/proxy-list"
language: "Python"
languages: ["Python"]
languagePcts: [91]
topics: ["proxies", "proxy", "proxy-checker", "proxy-list", "proxy-scraper", "proxy-server", "proxy-servers", "socks", "socks-proxy", "socks4"]
stars: 135
forks: 14
openIssues: 0
closedIssues: 2
watchers: 5
contributors: 2
recentReleases: 0
createdAt: "2024-03-19T05:07:50Z"
lastCommitAt: "2026-07-04T19:21:44Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 45
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/4358f2ca87d9f716fb6fb46742c876ad6952918bf1993aa61388c610a3e92814/Vann-Dev/proxy-list"
---

# List of Public Proxies Scraper

This repository originally created by [iw4p](https://github.com/iw4p/proxy-scraper) and I just added some features to it.

Please check the original repository too.

> [!WARNING]  
> Please remember, this proxy is for learning purposes, any issues with proxy use are at the expense of the proxy user

___

# Directory

## [Raw HTTP proxies](https://github.com/Vann-Dev/proxy-list/blob/main/proxies/http.txt)
## [Tested HTTP proxies](https://github.com/Vann-Dev/proxy-list/blob/main/proxies/http-tested/)

## [Raw HTTPS proxies](https://github.com/Vann-Dev/proxy-list/blob/main/proxies/https.txt)
## [Tested HTTPS proxies](https://github.com/Vann-Dev/proxy-list/blob/main/proxies/https-tested/)

___

## Installation

Use this command to install dependencies.

```bash
pip3 install -r requirements.txt
```

## Usage

For scraping:

```bash
python3 proxyScraper.py -p http
```
* With `-p` or `--proxy`, You can choose your proxy type. Supported proxy types are: **HTTP - HTTPS - Socks (Both 4 and 5) - Socks4 - Socks5** 
* With `-o` or `--output`, create and write to a .txt file. (Default is **output.txt**)
* With `-v` or `--verbose`, more details.
* With `-h` or…
