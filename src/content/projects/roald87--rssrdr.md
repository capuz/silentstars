---
repo: "Roald87/rssrdr"
name: "rssrdr"
description: "The simplest RSS reader on the planet."
readmeQualityOk: true
url: "https://github.com/Roald87/rssrdr"
homepage: "https://rssrdr.com"
language: "F#"
languages: ["F#"]
languagePcts: [97]
topics: ["atom", "feeds-reader", "rss", "rss-reader"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-02-08T13:25:45Z"
lastCommitAt: "2026-08-30T09:24:50Z"
lastReleaseAt: "2025-06-28T12:36:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 69
maintainers: ["Roald87"]
openGraphImageUrl: "https://opengraph.githubassets.com/b614640b4f2076ac2629404bf874bb574272ac86a22951e68e700eda4e0b388b/Roald87/rssrdr"
---

# rssrdr

_The simplest RSS reader on the planet._

## Feed inspiration

For inspiration of RSS feeds, see the [most popular links posted on Hackernews](https://github.com/Roald87/rssrdr/blob/HEAD/inspiration/hn-links.tsv) or the [most popular blogs posted on Hackernews](https://github.com/Roald87/rssrdr/blob/HEAD/inspiration/hn-blogs.tsv), between 26 August 2023 - 26 August 2024.

## Developers

To install the project
- `dotnet restore`

To run the unit test
- `cd SimpleRssServer.Tests`
- `dotnet test`

Starting the server. You can watch it at 127.0.0.1:5000
- `cd SimpleRssServer`
- `dotnet watch`

### Initial setup on Linux server

1. Install the .NET 10.0 SDK.
    - `sudo apt-get update && sudo apt-get install dotnet-sdk-10.0`

1. Copy the service configuration for the webserver from `./server-config/`, assuming you're in this top folder of this repo.
    - `sudo cp -i ./server-conf/rssrdr-server.service /etc/systemd/system/rssrdr-server.service`

1. Create the logging folders
    - `sudo mkdir -p /var/log/rssrdr-server`
    - `sudo chown rss:1000 /var/log/rssrdr-server`

1. Create the folder for the binaries. This is where the executable for the server is going to be.
    -…
