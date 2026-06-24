---
repo: "mehatab/fettle"
name: "fettle"
description: "Free GitHub-powered beautiful status page utilizing GitHub Pages, Actions, and Issues for real-time updates and incident management. Make sure to share love by giving it a star.🌟"
url: "https://github.com/mehatab/fettle"
homepage: "https://fettle.mehatab.info"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["nextjs", "status", "status-page", "monitoring"]
stars: 276
forks: 97
openIssues: 5
closedIssues: 4
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2022-08-05T12:38:15Z"
lastCommitAt: "2026-06-24T00:20:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 39
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/54776d38272f09819a75b673313e5d25d50cb5c149739d6cba96a979ffa4f1f2/mehatab/fettle"
discussionCount: 2
---

# Fettle 💟 

**Fettle** is the open-source status page, powered entirely by GitHub Actions, Issues, and Pages.

# Usage
First of all, you need to fork this repository.

## Update URL's
Update the urls and name in `urls.cfg` file present in `public > urls.cfg` file.

```text
Google=https://google.com
Facebook=https://facebook.com
```

## Incidents URL update
Go to `src > incidents > hooks > useIncidents.tsx` file and update the url with your repository url.

Replace **mehatab/fettle** with your **username/repo-name**
```
https://api.github.com/repos/mehatab/fettle/issues?per_page=20&state=all&labels=incident
```

## Service status URL update
Go to `src > services > hooks > useServices.tsx` file and update the url with your repository url.

Replace **mehatab/fettle** with your **username/repo-name**
```
https://raw.githubusercontent.com/mehatab/fettle/main/public/status/${key}_report.log
```

Go to `src > services > hooks > useSystemStatus.tsx` file and update the url with your repository url.

Replace **mehatab/fettle** with your **username/repo-name**
```
https://raw.githubusercontent.com/mehatab/fettle/main/public/status/${key}_report.log
```

## Deployment setup

Then, you need…
