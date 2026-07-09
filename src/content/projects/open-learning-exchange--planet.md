---
repo: "open-learning-exchange/planet"
name: "planet"
description: "🌍 Planet Learning - Angular application"
readmeQualityOk: true
url: "https://github.com/open-learning-exchange/planet"
homepage: "https://hub.docker.com/r/treehouses/planet"
language: "TypeScript"
languages: ["TypeScript", "HTML"]
languagePcts: [70, 22]
topics: ["planet", "learning-management-system", "open-learning-exchange", "angular", "typescript", "couchdb", "raspberrypi", "docker", "vagrant", "hacktoberfest"]
stars: 70
forks: 42
openIssues: 845
closedIssues: 4406
watchers: 28
contributors: 91
recentReleases: 0
createdAt: "2017-07-18T06:55:53Z"
lastCommitAt: "2026-07-09T20:45:31Z"
lastReleaseAt: "2018-03-09T15:24:49Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 95
undervaluedScore: 53
maintainers: ["Mutugiii", "RyanS4", "Saby-Bishops"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ca10e5377f21946d2c87e726bb829748127eb6338b35865f7125c52e4490edc/open-learning-exchange/planet"
---

# **Planet Learning**

Planet Learning is a generic learning system built in Angular & CouchDB.

Link to [Angular Doc](https://angular.io/docs) and [Material Design](https://material.angular.io/).

## Planet Development Notes

For development, the following additional tools are required:

* Docker
* Git
* NPM v10
* Node.js v22
* Angular CLI v20

The only other prerequisite is Docker Desktop. After cloning the repository, follow the steps below to set up the development environment using Docker:

Create a directory for planet development data:
```
mkdir -p ~/srv/planetdev && cd ~/srv/planetdev
```

Download the Docker Compose file:
For Linux:
```
wget https://raw.githubusercontent.com/ole-vi/planet-prod-configs/main/planet-dev.yml
```

For macOS/Windows:
```
curl https://gist.githubusercontent.com/xyb994/0d14dfe302df0df0d4e8d8df0d1d5feb/raw/planet-dev-mac.yml -o planet-dev.yml
```

Start the containers:
```
docker compose -f planet-dev.yml -p planet-dev up -d
```

Verify container status:
Run ```docker ps -a``` after a minute. You should see two containers running: chatapi and couchdb. The db-init container should have exited.

Configure CORS for CouchDB:
```
git clone…
