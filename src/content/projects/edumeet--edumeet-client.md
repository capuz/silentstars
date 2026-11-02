---
repo: "edumeet/edumeet-client"
name: "edumeet-client"
description: "This is the client service for the Edumeet project"
readmeQualityOk: true
url: "https://github.com/edumeet/edumeet-client"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
stars: 18
forks: 40
openIssues: 8
closedIssues: 107
watchers: 11
contributors: 17
recentReleases: 0
createdAt: "2022-03-03T22:07:00Z"
lastCommitAt: "2026-11-02T17:57:03Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 96
undervaluedScore: 71
maintainers: ["Astagor", "N7Remus", "balazskreith"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3fc431caef03a327040016497081f1bb46b2c7ce12546d7f160e6627396b597/edumeet/edumeet-client"
discussionCount: 9
---

#  Edumeet client

This is the client service for the Edumeet project.

## Usage
### Running the service in development

This will start the service using https with a self-signed certificate. It's exposed on port `4443`.
Https is needed for things such as `navigator.mediaService.getUserMedia()`. 

```bash
$ corepack enable
$ yarn install --immutable
$ yarn start
```

To run the service you need to have Node.js version 24 or higher installed. This project uses Yarn 4 via Corepack.

### Running the service in production

Build the service:
```bash
$ yarn build
```
This will produce a `./build` directory, ready to be deployed. Https is needed for things such as `navigator.mediaService.getUserMedia()`. 

You would in most cases want to replace the `config/` and `images/` directories with your own content.

https://github.com/edumeet/edumeet-docker/tree/4.x has guidelines for running the next generation Edumeet as docker containers.

## Configuration
The app configuration file should be a valid javascript file defining a single
`config` object containing the properties that you need to modify. Below we have configured the ports of our room-server service in development and production.…
