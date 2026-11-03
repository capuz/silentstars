---
repo: "Ahoo-Wang/CoApi"
name: "CoApi"
description: "Streamlining HTTP client definition in Spring 6, CoApi provides zero boilerplate code auto-configuration for more convenient and efficient interface calls | 简化 Spring 6 中 HTTP 客户端定义，提供零样板代码自动配置，让接口调用更便捷高效"
readmeQualityOk: true
url: "https://github.com/Ahoo-Wang/CoApi"
homepage: "https://coapi.ahoo.me/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [93]
topics: ["http-client", "httpinterface", "openfeign", "reactive", "spring-boot", "spring-cloud", "webclient", "webflux"]
stars: 10
forks: 0
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-01-17T02:28:50Z"
lastCommitAt: "2026-11-03T19:05:50Z"
lastReleaseAt: "2024-03-24T13:33:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 61
maintainers: ["Ahoo-Wang"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa92fdead4b43d9a7aa9e138a65f9e2c2673cb51e7643da487248e602063ee21/Ahoo-Wang/CoApi"
---

# CoApi

> [Documentation](https://coapi.ahoo.me/) | [中文文档](https://coapi.ahoo.me/zh/) | [中文 README](https://github.com/Ahoo-Wang/CoApi/blob/HEAD/README.zh-CN.md)

**Zero-boilerplate Spring HTTP Interface clients, reactive or synchronous.**

Spring's [HTTP Interface](https://docs.spring.io/spring-framework/reference/integration/rest-clients.html#rest-http-interface) lets you declare an HTTP API as an `@HttpExchange` interface. You still have to build a client, an adapter and a proxy, and register a bean, for every interface. CoApi does that for you: annotate the interface with `@CoApi` and inject it.

- **Reactive or sync**: backed by `WebClient` or `RestClient`, chosen by `coapi.mode` or inferred from the classpath.
- **Client-side load balancing**: `serviceId`, `lb://` or `@LoadBalanced`, via Spring Cloud LoadBalancer.
- **Configurable per client**: override base URLs, load balancing, filters and interceptors with `coapi.clients.<name>.*`.
- **Extensible**: builder customizer beans, replaceable beans, and a refreshing bearer-token filter.

## Compatibility

| CoApi | Spring Boot | Spring Framework | JDK |
|-------|-------------|------------------|-----|
| 3.x | 4.x | 7.x | 17+ |…
