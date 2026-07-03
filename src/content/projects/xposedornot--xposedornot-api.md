---
repo: "XposedOrNot/XposedOrNot-API"
name: "XposedOrNot-API"
description: "XposedOrNot: Open-source API for real-time alerts on domain data breaches. Protects your online identity with user-friendly monitoring and immediate notifications. Ideal for personal and professional use."
url: "https://github.com/XposedOrNot/XposedOrNot-API"
homepage: "https://api.xposedornot.com"
language: "Python"
languages: ["Python"]
languagePcts: [87]
topics: ["api", "databreach", "password", "xposedornot", "breach-compilation", "osint"]
stars: 83
forks: 8
openIssues: 0
closedIssues: 7
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2023-12-04T03:18:05Z"
lastCommitAt: "2026-07-03T06:23:46Z"
lastReleaseAt: "2025-11-08T08:00:10Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 51
maintainers: ["DevaOnBreaches", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e8693b25431d7cca1c4fef96c15d3248c539ca8ac5a8a4ebcfaf1bfcb92be5b7/XposedOrNot/XposedOrNot-API"
discussionCount: 3
---

<h1 align="center">XposedOrNot API</h1>
 
🎉 Your free API for real-time data breach monitoring and analytics. <br>

</p> <br>  
</p>  
</p>

## What is XposedOrNot API?

Data breaches happen constantly, and most people only find out long after their email and passwords are already circulating. I built XposedOrNot so you don't have to wonder. Check an email or domain and know right away whether it's turned up in a known breach.

This repo is the API that powers it all: the breach lookups, the analytics, and the alerts. It's free to use, and it's open-source, so you can read exactly how every check works rather than taking my word for it.

Give it a try below, and if you find it useful, I'd love for you to build something with it.

Devanand Premkumar, creator of XposedOrNot

## Quick Example

Check if an email has been exposed in data breaches:

```bash
curl https://api.xposedornot.com/v1/check-email/test@example.com
```

Response:
```json
{
  "breaches": [["Adobe", "LinkedIn"]],
  "email": "test@example.com",
  "status": "success"
}
```

Get detailed breach analytics:
```bash
curl "https://api.xposedornot.com/v1/breach-analytics?email=test@example.com"
```

## Rate Limits & API…
