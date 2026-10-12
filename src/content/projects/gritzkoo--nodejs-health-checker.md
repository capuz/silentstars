---
repo: "gritzkoo/nodejs-health-checker"
name: "nodejs-health-checker"
description: "This is a Node package that allows you to track the health of your application providing readiness and liveness functionalities."
readmeQualityOk: true
url: "https://github.com/gritzkoo/nodejs-health-checker"
homepage: "https://www.npmjs.com/package/nodejs-health-checker"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["nodejs", "nodemodule", "npm-package", "health-check", "healthcheck", "typescript", "node-typescript", "hacktoberfest", "hacktoberfest2020", "liveness-probe"]
stars: 45
forks: 12
openIssues: 1
closedIssues: 14
watchers: 3
contributors: 6
recentReleases: 0
createdAt: "2020-09-16T10:10:50Z"
lastCommitAt: "2026-10-12T11:15:29Z"
lastReleaseAt: "2022-04-04T20:23:58Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 72
undervaluedScore: 35
maintainers: ["dependabot[bot]", "gritzkoo"]
openGraphImageUrl: "https://opengraph.githubassets.com/79087dfc55d25cf2b51292b618db79e97ae93b41382b1ae86fddae01a5ddb2ee/gritzkoo/nodejs-health-checker"
---

# nodejs-health-checker

<br>

---

## Contributors

> Made with [contributors-img](https://contrib.rocks).

---

### Table of Contents

- [nodejs-health-checker](#nodejs-health-checker)
  - [Contributors](#contributors)
    - [Table of Contents](#table-of-contents)
  - [How to install](#how-to-install)
  - [Available integrations](#available-integrations)
    - [Redis](#redis)
    - [Web integration (HTTPS)](#web-integration-https)
    - [AWS DynamoDB](#aws-dynamodb)
    - [Databases](#databases)
    - [Custom Integration Support](#custom-integration-support)
  - [How to use (Express Example)](#how-to-use-express-example)
    - [Kubernetes Integration](#kubernetes-integration)

[CHANGELOG](https://github.com/gritzkoo/nodejs-health-checker/blob/HEAD/CHANGELOG.md)

---

This Node.js package allows you to monitor the health of your application. It provides two levels of health checking:

**1. Simple Check (Liveness):**
Confirms the application is online and responding. It does not check external integrations.
**Response Example:**

```json
{
  "status": "fully functional"
}
```

**2. Detailed Check (Readiness):**
Verifies if the application and all configured integrations…
