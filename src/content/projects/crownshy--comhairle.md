---
repo: "crownshy/comhairle"
name: "comhairle"
description: "A platform for building and running participatory democracy processes"
readmeQualityOk: true
url: "https://github.com/crownshy/comhairle"
homepage: "https://www.crown-shy.com/"
language: "Rust"
languages: ["Rust", "Svelte", "TypeScript"]
languagePcts: [48, 29, 21]
stars: 17
forks: 1
openIssues: 347
closedIssues: 610
watchers: 0
contributors: 10
recentReleases: 0
createdAt: "2026-02-23T14:43:45Z"
lastCommitAt: "2026-11-25T13:17:33Z"
lastReleaseAt: "2026-08-13T09:17:02Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 92
undervaluedScore: 54
maintainers: ["dtodorowa", "ADSmith-0", "shuyanglin"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f2c3a99a429122dd46b594e210daee09e03440f30b507736c2a419243c0f34b/crownshy/comhairle"
---

# Comhairle

Comhairle is a platform that allows for consulation and deliberation at scale.

## Repo Structure 

- API: The main api server for orchestrating the platfrom 
- Frontend: The frontend code, currently a sveltekit application 
- data_model: The unified data model that describes our grammar of participation  
- adaptors: Adaptors for each of the tools we are integrating. These allow for setting up the tool, data extraction and login etc   

## Systems Architecture
Comhairle consists of a number of services that work together to deliver the full platform. Some of these services are ones that are built by CrownShy while others are open source tools that we run on our infrastructure.

### Owned services
**The API Server** handles all coordination of the system, between users, databases and open source tools. The API Serverserver is written in Rust using SQLX and Sea-Query talking to a postgresql database and axum as the web framework. 

Interactions with the frontend are handled by typical rest responses (though we may explore using gRPC at some point).
