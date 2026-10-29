---
repo: "OasisLMF/OasisPlatform"
name: "OasisPlatform"
description: "Loss modelling platform."
readmeQualityOk: true
url: "https://github.com/OasisLMF/OasisPlatform"
language: "Python"
languages: ["Python"]
languagePcts: [94]
stars: 47
forks: 24
openIssues: 35
closedIssues: 519
watchers: 15
contributors: 29
recentReleases: 0
createdAt: "2016-04-27T18:13:16Z"
lastCommitAt: "2026-10-29T14:06:48Z"
lastReleaseAt: "2020-01-20T11:38:12Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 95
undervaluedScore: 56
maintainers: ["sambles", "awsbuild", "SkylordA"]
openGraphImageUrl: "https://opengraph.githubassets.com/e23feb5e5208c941a9dea2d4323c4fb98d8ea3872ee0e2c245dd624c41657974/OasisLMF/OasisPlatform"
---

# Oasis Platform 2
Provides core components of the Oasis platform, specifically:
* DJango application that provides the Oasis REST API
* Celery worker for running a model

## First Steps

### Simple environment

A simple environment for the testing the API and worker can be created using Docker compose.

First make sure that you have Docker running. Then build the images for the API server and model execution worker:

    docker build -f Dockerfile.oasis_api_server.base  -t coreoasis/oasis_api_base .
    docker build -f Dockerfile.oasis_api_server.mysql -t coreoasis/oasis_api_server .
    docker build -f Dockerfile.model_execution_worker -t coreoasis/model_execution_worker .

The docker images for the server are structured to all inherit from `oasis_api_server:base`.
Then each child image will be setup for a specific database backend (for example 
`oasis_api_server:mysql` uses mysql as the database backend). 

Start the docker network:

    docker-compose up -d

Check that the server is running:

    curl localhost:8000/healthcheck

(For the Rabbit management application browse to http://localhost:15672, for Flower, the Celery management application, browse to…
