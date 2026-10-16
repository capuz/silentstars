---
repo: "zaproxy/zaproxy-website"
name: "zaproxy-website"
description: "The source of ZAP website"
readmeQualityOk: true
url: "https://github.com/zaproxy/zaproxy-website"
homepage: "https://www.zaproxy.org"
language: "HTML"
languages: ["HTML"]
languagePcts: [73]
topics: ["appsec", "dast", "hacktoberfest", "webappsec", "website", "zaproxy", "opensource", "security", "security-scanner"]
stars: 83
forks: 135
openIssues: 17
closedIssues: 46
watchers: 12
contributors: 99
recentReleases: 0
createdAt: "2020-01-27T10:06:19Z"
lastCommitAt: "2026-10-16T08:27:16Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 94
undervaluedScore: 57
maintainers: ["zapbot", "psiinon", "thc202"]
openGraphImageUrl: "https://opengraph.githubassets.com/d202ae573c1bfed1e7dcca63847c90067094debb801ad035e3cc0f23201b5075/zaproxy/zaproxy-website"
fundingLinks: ["CUSTOM:https://www.zaproxy.org/sponsor/"]
---

# ZAP Website

## Development
To work on the website you'll need to have either node.js or Docker installed. In your development environment  `npm run preview` will start up a webpack-dev-server on port 3000 for development which will hot-reload the site as file changes are detected.

### Docker
The recommended setup for development is using Docker.

```sh
# Build image
docker build -t zaproxy-website .

# Start container with image of zaproxy-website
docker run -it -v "$(pwd)/site:/app/site" \
    -v "$(pwd)/src:/app/src" -p 3000:3000 zaproxy-website npm run preview
```

### Dependencies
For development, the site heavily depends on node.js for utilities that build the front-end CSS & JavaScript. The entrypoint for modifying the site JavaScript is `src/index.js` which gets transpiled using babel & packed up with webpack packages.

```sh
# Check for associated vulns
npm audit

# Check for packages
npm outdated

# Update a package
npm update @babel/core
```

### Building

```
./bin/build.sh
cp -r ./dist/ ../zaproxy-website-builds
cd ../zaproxy-website-builds
git push origin staging
```

## Hugo
*Generically speaking, the term post & page can be used interchangeably, the exception is…
