---
repo: "malaohu/GitHubHosts"
name: "GitHubHosts"
description: "Easily solve the awkward situation of being unable to access Github from within China"
originalDescription: "轻松解决国内无法访问Github的囧境"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/malaohu/GitHubHosts"
language: "HTML"
languages: ["HTML"]
languagePcts: [80]
stars: 185
forks: 42
openIssues: 1
closedIssues: 4
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2021-12-12T07:09:44Z"
lastCommitAt: "2026-10-31T19:01:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 42
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/e77ef0204660e2b58e5dc0af8fc65409d39cc58a249958510413ed1ee260e85a/malaohu/GitHubHosts"
---

# Purpose
Automatically obtains the IP addresses that the domains under Github.com resolve to, to solve the problem of users in China being unable to access Github normally.

# Approach
Reference article: https://51.ruyo.net/17580.html

# Source Code
Written in Golang. This is my first time writing something small with Go. If anything is wrong, please point it out, experts!

# Running
```
# Requires a local Golang environment to be installed
go run .\\doit.go
```

On Windows, you can run github_hosts.exe directly.

On Linux, you can run github_hosts directly.

# HOSTS

```bash

####################Github Start####################
			alive.github.com
			live.github.com
			github.githubassets.com
			central.github.com
			desktop.githubusercontent.com
			assets-cdn.github.com
			camo.githubusercontent.com
			github.map.fastly.net
			github.global.ssl.fastly.net
			gist.github.com
			github.io
			github.com
			github.blog
			api.github.com
			raw.githubusercontent.com
			user-images.githubusercontent.com
			favicons.githubusercontent.com
			avatars5.githubusercontent.com
			avatars4.githubusercontent.com
			avatars3.githubusercontent.com
			avatars2.githubusercontent.com…
