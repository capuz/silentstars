---
repo: "jmhenrique/adblock"
name: "adblock"
description: "optimized adblock lists to openwrt. Light and more powerfull."
readmeQualityOk: true
url: "https://github.com/jmhenrique/adblock"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 6
forks: 7
openIssues: 2
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2016-06-04T14:41:46Z"
lastCommitAt: "2026-10-15T08:31:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 70
undervaluedScore: 76
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/00ad686e33d97d0d9ff62788d528b5cec905181dfd225a6cb4724556314c1e88/jmhenrique/adblock"
---

#Adblock by Jm
I created this project as a way to optimize adware protection of my router TPLINK 1043 with Openwrt. 

Update** 08/12/2021

After the attacks on the CEO of the human rights organization SaferNet Brazil, Thiago Tavares, which involved the software of the NSO company (Pegasus), I decided to merge here the domain lists kindly provided by Amnesty International https://github.com/AmnestyTech/

He is an excellent router, but has very little available memory (8MB) and a median processor (400mhz).
I noticed that the articles and tutorials on ad-blocking does not take into account the optimization of hosts and domains.
There are some tutorials that explore only the grouping and unification of lists of hosts. But these lists are variations of websites that create random subdomains, interfering with the blocking efficiency. Only one domain, 302br.net has +17,000 registered subdomains in lists.
So I first tried to treat domains and subdomains within the own router, but ended up being a very time consuming task, something a few hours to do the job, and impacted the performance of the navigation here at home, my wife hated me for it .
So I used a different approach: Using SQL and…
