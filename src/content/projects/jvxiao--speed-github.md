---
repo: "jvxiao/speed-github"
name: "speed-github"
description: "One-click solution to slow loading and download speeds for GitHub web pages in China."
originalDescription: "一键解决github在国内网页加载和下载速度慢的问题"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/jvxiao/speed-github"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 357
forks: 46
openIssues: 3
closedIssues: 3
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2020-03-20T13:56:34Z"
lastCommitAt: "2026-11-14T22:02:27Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 34
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e1d10484c5fe50015ec4e320afd84bd65fa77e42a59d8158971529eef503aaa3/jvxiao/speed-github"
---

[Chinese](https://github.com/jvxiao/speed-github/blob/HEAD/README-Cn.md) &emsp; [English](https://github.com/jvxiao/speed-github/blob/HEAD/README.md)

# speed-github

A tool to solve the problem of slow loading and downloading speed of GitHub in the country.

## Reason for slow speed

CDN, Content Distribute Network, can be literally translated into content distribution network. CDN solves the problem of how to quickly and reliably deliver data from the source site to users.

When users obtain data, they do not need to obtain it directly from the source site. Through CDN's distribution of data, users can obtain data from a better server, thereby achieving fast access and reducing the load pressure on the source site.

For some reasons, Github is restricted in China. The main method is`DNS pollution`, which is to inject the wrong IP address of Github into the DNS server, thereby affecting user access.

## Solution

Resolve the GitHub-related domain name into the correct IP address, and then fill it into the local host file. When users visit GitHub, they will no longer resolve the IP address to the DNS server, but use the correct local IP address, which will not be affected by DNS…
