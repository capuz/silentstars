---
repo: "CriticalPathSecurity/Zeek-Intelligence-Feeds"
name: "Zeek-Intelligence-Feeds"
description: "Zeek-Formatted Threat Intelligence Feeds"
readmeQualityOk: true
url: "https://github.com/CriticalPathSecurity/Zeek-Intelligence-Feeds"
language: "Zeek"
languages: ["Zeek"]
languagePcts: [100]
topics: ["threat-intelligence", "threatintel", "zeek", "zeek-ids", "malware", "phishing"]
stars: 406
forks: 50
openIssues: 1
closedIssues: 34
watchers: 14
contributors: 3
recentReleases: 0
createdAt: "2020-08-20T13:13:32Z"
lastCommitAt: "2026-10-30T11:02:30Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 37
maintainers: ["CPS-Erin"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec13771191255a7854be28788f125afdda6c7aa0daecca42b04a2d4a8fdf9c05/CriticalPathSecurity/Zeek-Intelligence-Feeds"
---

# Zeek Intel Threat Feed w/ Combined Indicators

This is a public feed based on Public Threat Feeds and CRITICAL PATH SECURITY gathered data.
This feed will be updated as often as possible.

## Getting Started

These instructions will get you a copy of the project up and running.

### Dependencies

* ZEEK 3.0 or greater

### Installing

Install Zeek Dependencies

```

sudo apt-get install cmake make gcc g++ flex bison libpcap-dev libssl-dev python-dev swig zlib1g-dev

```

Clone the repository into `/opt`

```
cd /opt
git clone --recursive https://github.com/zeek/zeek
./configure && make && sudo make install
```

Install Zeek
```

./configure && make && sudo make install

```

## Install the Threat Intelligence Feeds

Clone the repository into `/usr/local/zeek/share/zeek/site/Zeek-Intelligence-Feeds`

```
cd /opt
git clone https://github.com/CriticalPathSecurity/Zeek-Intelligence-Feeds.git /usr/local/zeek/share/zeek/site/Zeek-Intelligence-Feeds
echo "@load Zeek-Intelligence-Feeds" >> /usr/local/zeek/share/zeek/site/local.zeek
```

## Usage

Navigate to `/usr/local/zeek/bin/`

```
./zeekctl deploy
```

### Scheduling Updates

A simple bash script can be used for updates.  An…
