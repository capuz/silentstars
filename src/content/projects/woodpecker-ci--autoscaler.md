---
repo: "woodpecker-ci/autoscaler"
name: "autoscaler"
description: "Scale your woodpecker agents automatically to the moon and back based on the current load."
readmeQualityOk: true
url: "https://github.com/woodpecker-ci/autoscaler"
language: "Go"
languages: ["Go"]
languagePcts: [97]
stars: 55
forks: 44
openIssues: 18
closedIssues: 35
watchers: 1
contributors: 30
recentReleases: 0
createdAt: "2023-03-21T07:46:12Z"
lastCommitAt: "2026-10-03T22:05:08Z"
lastReleaseAt: "2025-07-13T19:35:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "fork_magnet"]
healthScore: 91
undervaluedScore: 57
maintainers: ["renovate[bot]", "6543", "AJ0070"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e467939e6fc04d3c598d98410ff6167be12a0263660c7c52e2de208de93c736/woodpecker-ci/autoscaler"
fundingLinks: ["GITHUB:https://github.com/woodpecker-ci", "OPEN_COLLECTIVE:https://opencollective.com/woodpecker-ci"]
---

# Autoscaler

Scale your woodpecker agents automatically to the moon and back based on the current load.

## Usage

If you are using docker-compose you can add the following to your `docker-compose.yml` file:

```yml
# docker-compose.yml
version: '3'

services:
  woodpecker-server:
    image: woodpeckerci/woodpecker-server:next
    [...]

  woodpecker-autoscaler:
    image: woodpeckerci/autoscaler:next
    restart: always
    depends_on:
      - woodpecker-server
    environment:
      - WOODPECKER_SERVER=https://your-woodpecker-server.tld # the url of your woodpecker server / could also be a public url
      - WOODPECKER_TOKEN=${WOODPECKER_TOKEN} # the Personal Access Token you can get from the UI https://your-woodpecker-server.tld/user/cli-and-api
      - WOODPECKER_MIN_AGENTS=0
      - WOODPECKER_MAX_AGENTS=3
      - WOODPECKER_WORKFLOWS_PER_AGENT=2 # the number of workflows each agent can run at the same time
      - WOODPECKER_GRPC_ADDR=https://grpc.your-woodpecker-server.tld # the grpc address of your woodpecker server, publicly accessible from the agents
      - WOODPECKER_GRPC_SECURE=true
      - WOODPECKER_AGENT_ENV= # optional environment variables to pass to the agents…
