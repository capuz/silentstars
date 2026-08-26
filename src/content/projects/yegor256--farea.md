---
repo: "yegor256/farea"
name: "farea"
description: "Fake Maven Reactor for unit-testing of your Maven plugins: similar Maven Invoker Plugin, but JUnit friendly"
readmeQualityOk: true
url: "https://github.com/yegor256/farea"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["java", "maven", "maven-plugin", "testing", "maven-invoker", "maven-invoker-plugin", "integration-testing"]
stars: 11
forks: 2
openIssues: 4
closedIssues: 45
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2023-11-24T07:52:07Z"
lastCommitAt: "2026-08-26T04:07:25Z"
lastReleaseAt: "2023-12-07T09:52:36Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 90
undervaluedScore: 71
maintainers: ["yegor256", "renovate[bot]", "rultor"]
openGraphImageUrl: "https://opengraph.githubassets.com/c98c5341f581393dd39faa55b93b352a6d7dcc9aaae70adb7b85cfe4e23a439c/yegor256/farea"
---

# Fake Maven Reactor, for Quick Unit Tests

It's a fake Maven Reactor, helping you to integration-test
your custom Maven plugins.
There is a traditional way to do this:
[Maven Invoker Plugin][invoker].
It works perfectly, but it has two pretty annoying
drawbacks: 1) It doesn't run from IDE (at least from IntelliJ IDEA),
and 2) It always starts the entire build from scratch,
which makes 3) it pretty slow.

Farea suggests an alternative way, which is way less flexible, but much
faster and JUnit-friendly.

First, you add this to your `pom.xml`:

```xml
<dependency>
  <groupId>com.yegor256</groupId>
  <artifactId>farea</artifactId>
  <version>0.15.4</version>
</dependency>
```

Then, you use it like this, in your JUnit5 test
(obviously, you need to have `mvn` installed
and available on `$PATH`):

```java
import com.yegor256.farea.Farea;
import com.yegor256.farea.RequisiteMatcher;
import org.hamcrest.MatcherAssert;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;

class JavaCompilationTest {
  @Test
  void worksAsExpected(@Mktmp Path dir) {
    new Farea(dir).together(f -> {
      f.files()…
