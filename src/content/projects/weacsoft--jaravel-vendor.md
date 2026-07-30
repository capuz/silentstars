---
repo: "weacsoft/jaravel-vendor"
name: "jaravel-vendor"
description: "A compatible library created using Java's SpringBoot 3 to mimic the Laravel framework."
originalDescription: "用Java的SpringBoot 3仿造Laravel框架制作，这个是相关的兼容库。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/weacsoft/jaravel-vendor"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [78, 20]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-04T09:16:12Z"
lastCommitAt: "2026-07-30T06:10:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 41
maintainers: ["lijialong1313"]
openGraphImageUrl: "https://opengraph.githubassets.com/7994a4f4875e5dc9ca8d00c7f9d31ab09d9a8990280d3d435e487fe7b2ed4003/weacsoft/jaravel-vendor"
---

# Jaravel-Vendor

Java version of the core library of the Laravel framework, which nearly 100% simulates the development experience of Laravel based on Spring Boot 3.2.5.

**Supports both Spring Boot 3.x (Jackson 2) and Spring Boot 4.x (Jackson 3)** without requiring additional configuration of the Jackson version on the consumer side. It automatically detects the Jackson version in the classpath (`com.fasterxml.jackson` or `tools.jackson`) through the built-in `JsonCodec` SPI and selects the corresponding implementation.

All vendor module package names are unified as `com.weacsoft.jaravel.vendor.*`, separated from the business project `com.weacsoft.jaravel.*`.

## Design Philosophy

- **Retain Spring Boot's underlying capabilities**: All Spring annotations such as `@Controller`, `@Service`, etc., are available.
- **Laravel-style API**: Concepts such as Facade, Config, Migration, Auth, Middleware, Event, Cache, etc., correspond one-to-one with Laravel.
- **Stateless Middleware**: All middleware are immutable singletons managed by Spring, thread-safe.
- **Multiple Guards / Multiple Providers**: Auth supports two types of Guard drivers: JWT and Session, and multiple Providers can…
