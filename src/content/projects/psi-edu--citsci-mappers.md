---
repo: "PSI-edu/CitSci-Mappers"
name: "CitSci-Mappers"
description: "Software to support web-based image annotation."
readmeQualityOk: true
url: "https://github.com/PSI-edu/CitSci-Mappers"
language: "Vue"
languages: ["Vue"]
languagePcts: [67]
stars: 6
forks: 4
openIssues: 6
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-02-21T21:22:06Z"
lastCommitAt: "2026-08-20T04:10:01Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 65
undervaluedScore: 72
maintainers: ["starstryder", "PLGatPSI"]
openGraphImageUrl: "https://opengraph.githubassets.com/0ae6290a89753dd3b37e9808a7612c5997b8f263d5353609557f5c82ae178f04/PSI-edu/CitSci-Mappers"
---

# CitSci-Mappers
Software to support web-based image annotation.

# Reminder: Quickstart of existing dev systems
```
npm install
npm audit fix 
npm run dev
docker-compose build --no-cache; docker-compose up -d --no-build; docker-compose exec api composer install
```

# Before you get started
### Images
- A logo (150 x 150) for the login screen. (This will need to be publicly hosted)
- A Favicon (replace what's in the /src/assets/images directory. Details at end of readme on how to create)

### Production auth domain
You will need a domain name (we used a subdomain, auth.yourdomain.com) that you can edit the DNS record for, 
including adding a CNAME record. This is required for the Auth0 setup.

### Setup your server
You will need a LAMP server that also has NodeJS installed.

N.B. The software was developed and tested on OSX with Docker and
deployed on AWS using Ubuntu EC2 and MariaDB on an RDS.

We assume you have the software cloned from github and either on your server (option 1) or on a machine
running docker (option 2).

### Option 1: LAMP Stack
This software is designed to run on a standard LINUX server running an Apache with
MariaDB/MySQL, and PHP. You will also need a…
