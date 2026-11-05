---
repo: "springdoc/springdoc-openapi-maven-plugin"
name: "springdoc-openapi-maven-plugin"
description: "Library for OpenAPI 3 with spring-boot"
readmeQualityOk: true
url: "https://github.com/springdoc/springdoc-openapi-maven-plugin"
homepage: "https://springdoc.org"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 169
forks: 43
openIssues: 0
closedIssues: 53
watchers: 4
contributors: 11
recentReleases: 1
createdAt: "2019-09-07T20:52:06Z"
lastCommitAt: "2026-11-05T08:05:39Z"
lastReleaseAt: "2026-11-05T00:12:15Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 98
undervaluedScore: 42
maintainers: ["bnasslahsen", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/50d74e71cf34490343e08ad919735aaf990bd58fdff1fafa7da0803d2b7bc1f6/springdoc/springdoc-openapi-maven-plugin"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/springdoc-openapi"]
---

---

**springdoc-openapi-maven-plugin** writes the OpenAPI description of your application to a file during the build,
so you can commit it, diff it, publish it with your artifacts, or feed it to code generators. ✨

It works together with the `spring-boot-maven-plugin`: the application is started before the integration tests,
the plugin downloads the description that [springdoc-openapi](https://github.com/springdoc/springdoc-openapi)
serves at `/v3/api-docs`, and the application is stopped again. Because the description comes from the running
application, it is exactly what springdoc-openapi serves at runtime.

## 🚀 Getting started

Add both plugins to the `<build><plugins>` section of your `pom.xml`:

```xml
<plugin>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-maven-plugin</artifactId>
  <configuration>
    <jvmArguments>-Dspring.application.admin.enabled=true</jvmArguments>
  </configuration>
  <executions>
    <execution>
      <id>pre-integration-test</id>
      <goals>
        <goal>start</goal>
      </goals>
    </execution>
    <execution>
      <id>post-integration-test</id>
      <goals>
        <goal>stop</goal>
      </goals>…
