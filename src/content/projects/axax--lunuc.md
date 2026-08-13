---
repo: "axax/lunuc"
name: "lunuc"
description: "A full-stack web framework"
readmeQualityOk: true
url: "https://github.com/axax/lunuc"
homepage: "https://www.lunuc.com/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [98]
topics: ["react", "redux", "boilerplate", "starter-kit", "framework"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2017-04-04T20:13:45Z"
lastCommitAt: "2026-08-12T21:26:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 75
maintainers: ["axax"]
openGraphImageUrl: "https://opengraph.githubassets.com/76075c2fec7e4a62b00c2b7b11fc93e895c352d55cdf162f254a985001703156/axax/lunuc"
postedAt: "2026-07-13T06:46:08.589Z"
---

# Lunuc Framework

__A full-stack setup to build progressive web apps.__

*Here is a list with the main features:*
* React for UI
* Declarative routing
* Babel for ECMAScript 2016 / 2017
* Webpack bundler
* Jest for testing
* Eslint for code quality
* Mongodb
* Database-as-a-Service by mlap.com
* GraphQL API
* Express Server
* GraphQL Client
* Optimistic UI
* Persist and Rehydrate / Cache Data
* Authentication 
* Use of sockets (subscriptions-transport-ws)
* Travis yml
* Depolymet to heroku
* Use of Service worker
* Template / Page builder
* Docker integration
* Push notification
* Use of AWS lambda

## Installation & Usage

### Environment
Setup your environment. 

Url to access the mongo database:

* `export MONGO_URL mongodb://user:password@ds145780.mlab.com:45780/app`

### Install
* `npm install`

#### Troubleshooting
`sudo npm install puppeteer --unsafe-perm=true`
`npm dedupe --force`

### Development
* `npm run dev`
* visit `http://localhost:8080`

### Production
* `npm start`
* visit `http://localhost:8080`

### Run as docker container
#### Building docker image
`docker build -t axax06/lunuc .`

#### Running docker image
You need to pass the environment variable MONGO_URL…
