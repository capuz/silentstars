---
repo: "cdwiegand/go-curling"
name: "go-curling"
description: "My recreation of curl in golang, mostly for use in Docker images due to Microsoft removing curl from their dotnet images."
readmeQualityOk: true
url: "https://github.com/cdwiegand/go-curling"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 7
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 2
createdAt: "2023-05-07T02:31:26Z"
lastCommitAt: "2026-08-30T00:43:32Z"
lastReleaseAt: "2026-07-06T17:01:22Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 91
undervaluedScore: 68
maintainers: ["cdwiegand", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/379c8dc4bf9e6815eee9067d1934b4bb50b31ea4a4066e7e9e6c5e8589bd5735/cdwiegand/go-curling"
---

# Purpose
This program was designed to replace the curl that is no longer shipped with Microsoft's dotnet core docker containers. Removing that kept breaking all of my upgraded containers, and I really wanted curl back for healthchecks without having to `apt install` and `apt clean` and cleaning out the cache. So I built a simple curl that handled the healthcheck calls I was doing. I have since started expanding it to meet more needs of the [original curl](https://curl.se/), while remaining golang based.

# Examples

```
curl -D - -o - https://google.com
curl -D /dev/null -o /dev/null https://google.not.valid.haha
curl https://google.com
curl https://my.local.test:443 -k
```

# Install

## Binary Release

You can manually download a binary release for Linux, MacOS, Windows or FreeBSD
from the [releases](https://github.com/cdwiegand/go-curling/releases) page.

## Go

Please notice `latest` will install the dev version:

```sh
go install -ldflags="-s -w" -v github.com/cdwiegand/go-curling@latest
```

# Using in a Dockerfile
```
COPY --from=cdwiegand/go-curling:latest /bin/curl /usr/bin/curl
# OR COPY --from=ghcr.io/cdwiegand/go-curling:latest /bin/curl /usr/bin/curl
HEALTHCHECK CMD…
