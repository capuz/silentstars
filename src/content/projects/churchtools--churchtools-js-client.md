---
repo: "churchtools/churchtools-js-client"
name: "churchtools-js-client"
description: "JavaScript client to easily access the ChurchTools REST-API"
readmeQualityOk: true
url: "https://github.com/churchtools/churchtools-js-client"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [75, 25]
topics: ["javascript", "js", "churchtools", "api", "api-client"]
stars: 27
forks: 5
openIssues: 0
closedIssues: 8
watchers: 6
contributors: 8
recentReleases: 0
createdAt: "2020-09-23T11:36:25Z"
lastCommitAt: "2026-09-14T09:11:55Z"
lastReleaseAt: "2021-05-21T10:48:18Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 93
undervaluedScore: 40
maintainers: ["Copilot", "djschilling", "obstschale"]
openGraphImageUrl: "https://opengraph.githubassets.com/7f76d1c4a40035499aeae13ab95ae680c30f22744cfe921946c9a0089e6efb06/churchtools/churchtools-js-client"
---

# churchtools-js-client

churchtools-js-client is a client written in JavaScript to easily access the
[ChurchTools REST API](https://demo.church.tools/api). Its main benefits include:

- Easy to use abstraction of the login process which handles session cookies and automatically performs a re-login if
  the session expired (using the login token provided).
- Supports both, the old and the new version of the ChurchTools API.
- Automatically handles CSRF tokens for the old API and, when enabled, REST API write requests.
- Can be used in a web application running in a browser or on server-side in a Node.js application.

## Installation

Please use `npm` to install this package in your application:

```npm install @churchtools/churchtools-client```

If your target application is a Node.js application, you will also need to install the packages
`axios-cookiejar-support` and `tough-cookie`. They are not required when targeting a web browser.

### CORS Header Configuration

If you intend to connect to a ChurchTools system from an application running in a web browser,
any request to the ChurchTools system is effectively a cross origin request. As a security concept the browser will
block…
