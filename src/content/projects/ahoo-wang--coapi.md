---
repo: "Ahoo-Wang/CoApi"
name: "CoApi"
description: "Streamlining HTTP client definition in Spring 6, CoApi provides zero boilerplate code auto-configuration for more convenient and efficient interface calls | 简化 Spring 6 中 HTTP 客户端定义，提供零样板代码自动配置，让接口调用更便捷高效"
readmeQualityOk: true
url: "https://github.com/Ahoo-Wang/CoApi"
homepage: "https://coapi.ahoo.me/"
language: "Kotlin"
languages: ["Kotlin", "HTML"]
languagePcts: [57, 37]
topics: ["http-client", "httpinterface", "openfeign", "reactive", "spring-boot", "spring-cloud", "webclient", "webflux"]
stars: 7
forks: 0
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-01-17T02:28:50Z"
lastCommitAt: "2026-07-21T06:11:17Z"
lastReleaseAt: "2024-03-24T13:33:16Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 75
undervaluedScore: 56
maintainers: ["Ahoo-Wang", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b14b8718da0cd68fbad564634b8c838f1cb572b4df45c71d29ac31b67f3aa60/Ahoo-Wang/CoApi"
---

# CoApi - HTTP Client that supports both reactive programming and synchronous programming models

> [中文文档](https://coapi.ahoo.me/zh/) | [English Document](https://coapi.ahoo.me/)

In Spring Framework 6, a new HTTP
client, [Spring6 HTTP Interface](https://docs.spring.io/spring-framework/reference/integration/rest-clients.html#rest-http-interface),
has been introduced. This interface allows developers to define HTTP services as Java interfaces using the
`@HttpExchange` annotation.

However, the current *Spring* ecosystem does not yet provide support for automatic configuration, and developers need to
implement the configuration themselves.

While the *Spring* ecosystem already
has [Spring Cloud OpenFeign](https://github.com/spring-cloud/spring-cloud-openfeign), it lacks support for the reactive
programming model. To address this, *Spring Cloud OpenFeign* recommends an alternative
solution, [feign-reactive](https://github.com/PlaytikaOSS/feign-reactive). However, this alternative is currently not
actively maintained and does not support Spring Boot 3.2.x.

**CoApi** is here to help with zero-boilerplate code auto-configuration similar to *Spring Cloud OpenFeign*, as well as
support…
