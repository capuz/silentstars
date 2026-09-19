---
repo: "banbo/ys-gin"
name: "ys-gin"
description: "Gin Framework Enhancement"
originalDescription: "Gin框架改良"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/banbo/ys-gin"
language: "Go"
languages: ["Go"]
languagePcts: [98]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2019-01-04T07:31:32Z"
lastCommitAt: "2026-09-19T02:46:55Z"
lastReleaseAt: "2026-09-08T07:46:24Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 79
undervaluedScore: 48
maintainers: ["banbo"]
openGraphImageUrl: "https://opengraph.githubassets.com/778fa9bb05a0f1ac981660201be69c31fdb260f1358ac44a73a69310eb5bbe11/banbo/ys-gin"
---

Since the Gin framework is very lightweight and does not provide components commonly used in daily web development, I created an additional wrapper layer to facilitate development of web applications based on Gin. The main components wrapped include conf, log, orm, redis, grpc, error, controller, websocket, and others.
For conf, log, orm, and redis, we directly use very mature and well-tested components, with only initialization wrapping done, without reinventing the wheel.

### Directory Structure
```
github.com
  - banbo
    - ys-gin
      - cache                         Wrapped cache-related classes, with redis based on go-redis
      - conf                          Based on beego/conf
      - constant                      Mainly defines some public constants
      - controller
        - controller.go               Wrapped methods for getting HTTP parameters (different from Gin's approach), methods for returning HTTP data (JSON)
        - wsController.go             Wrapped methods for returning WebSocket data
      - errors                        Wrapped custom error interface, used for error classification, distinguishing business errors from system errors
      - id…
