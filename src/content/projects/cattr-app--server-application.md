---
repo: "cattr-app/server-application"
name: "server-application"
description: "Cattr server application - self-hosted time tracking with project management, reports, screenshots, activity tracking and public API"
readmeQualityOk: true
url: "https://github.com/cattr-app/server-application"
homepage: "https://cattr.app"
language: "PHP"
languages: ["PHP", "Vue"]
languagePcts: [48, 35]
topics: ["time-tracker", "cattr", "activity-tracking", "productivity", "project-management", "screenshots", "self-hosted", "time-tracking", "timesheet"]
stars: 101
forks: 55
openIssues: 14
closedIssues: 42
watchers: 5
contributors: 5
recentReleases: 1
createdAt: "2023-03-21T07:54:34Z"
lastCommitAt: "2026-09-18T14:02:42Z"
lastReleaseAt: "2026-09-18T14:03:22Z"
status: "thriving"
tags: ["community_hub", "fork_magnet"]
healthScore: 92
undervaluedScore: 33
maintainers: ["vermorag"]
openGraphImageUrl: "https://opengraph.githubassets.com/1556275de0611c81583e69e39f3e5b92e47e6e0dca898d8df6f03d743bf411cc/cattr-app/server-application"
discussionCount: 33
---

## About Cattr
Cattr is an open-source time tracking solution, designed to be flawlessly integrated with your infrastructure. 
Superpowered with features like built-in screenshot capture and activity detection, it's a great instrument to boost 
your team's performance straight to the top.

#### We have our own [Container Registry](https://git.amazingcat.net/cattr/core/app/container_registry/9?orderBy=NAME&sort=desc), the images are hosted on GitLab

### Screenshots
|           Dashboard           |           Project report           |
|:-----------------------------:|:----------------------------------:|
|  |  |

### Demo
The demo app is available here: [demo.cattr.app](https://demo.cattr.app) 

## Install Cattr
[Installation manual](https://docs.cattr.app/#/en/getting-started/?id=requirements) on the documentation website.

```
composer install
php artisan key:generate
yarn
```

After should be edited `.env` file (e.g. for DB connection), look at `.env.example` for examples

```
php artisan migrate --seed --seeder=InitialSeeder
```

App will not start without seeding of InitialSeeder

After seeding it, run `php artisan cattr:make:admin` and you will be able to login with…
