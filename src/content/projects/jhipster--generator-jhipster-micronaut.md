---
repo: "jhipster/generator-jhipster-micronaut"
name: "generator-jhipster-micronaut"
description: "Micronaut blueprint for JHipster"
readmeQualityOk: true
url: "https://github.com/jhipster/generator-jhipster-micronaut"
language: "EJS"
languages: ["EJS"]
languagePcts: [80]
topics: ["jhipster", "micronaut"]
stars: 104
forks: 35
openIssues: 25
closedIssues: 114
watchers: 10
contributors: 57
recentReleases: 0
createdAt: "2019-08-02T06:05:34Z"
lastCommitAt: "2026-09-03T08:13:40Z"
lastReleaseAt: "2020-08-12T14:35:37Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 93
undervaluedScore: 47
maintainers: ["dependabot[bot]", "github-actions[bot]", "mshima"]
openGraphImageUrl: "https://opengraph.githubassets.com/f89de618bcfcf97cfa291127127cb08f33350c0778606f597de2e356d7680bc1/jhipster/generator-jhipster-micronaut"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/generator-jhipster", "CUSTOM:https://www.jhipster.tech/sponsors/"]
discussionCount: 2
---

# Greetings, Micronaut Hipster!

width=200
style="max-width:50%;">

This project generates a Micronaut-based JHipster application 😎.
It is based on JHipster Blueprint 🔵, and intends to replace the Spring Boot portions of the server with [Micronaut](https://micronaut.io) equivalents.

## Installation and Usage

1. Install MHipster

   ```
   npm install -g generator-jhipster-micronaut
   ```

2. Create a new folder for your application
3. Start MHipster

   ```
   mhipster
   ```

Alternatively, if you already have JHipster installed, you can use this blueprint with:

```
jhipster --blueprints micronaut
```

## Using Docker

Download the Dockerfile:

```bash
mkdir docker
cd docker
wget https://github.com/jhipster/generator-jhipster-micronaut/raw/main/docker/Dockerfile
```

Build the Docker images:

```bash
docker build -t jhipster-generator-micronaut:latest .
```

Make a folder where you want to generate the Service:

```bash
mkdir service
cd service
```

Run the generator from image to generate service:

```bash
docker run -it --rm -v $PWD:/home/jhipster/app jhipster-generator-micronaut
```

Run and attach interactive shell to the generator docker container to work from inside…
