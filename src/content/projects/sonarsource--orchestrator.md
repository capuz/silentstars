---
repo: "SonarSource/orchestrator"
name: "orchestrator"
description: "Java library for running SonarQube in tests"
readmeQualityOk: true
url: "https://github.com/SonarSource/orchestrator"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["sonarqube"]
stars: 21
forks: 7
openIssues: 0
closedIssues: 0
watchers: 22
contributors: 70
recentReleases: 0
createdAt: "2015-09-07T12:05:53Z"
lastCommitAt: "2026-09-07T09:41:31Z"
lastReleaseAt: "2022-01-17T09:36:16Z"
status: "quiet"
tags: ["legacy_hero", "community_watch"]
healthScore: 77
undervaluedScore: 42
maintainers: ["henryju", "lukasz-jarocki-sonarsource", "alban-auzeill"]
openGraphImageUrl: "https://opengraph.githubassets.com/df2049ede6a114ed97a0098d5552b0b4c926042c9a3e1980bb3385d1f73224aa/SonarSource/orchestrator"
---

Orchestrator is a Java library to install and run SonarQube from tests.

## JUnit 4 API

An instance of class `com.sonar.orchestrator.junit4.OrchestratorRule` can be used as `Rule` or `ClassRule`. It will represent a SonarQube server that will be started before tests, and stopped after:

```
public class MyTest {

    @ClassRule
    public static OrchestratorRule ORCHESTRATOR = OrchestratorRule.builderEnv()
      .setSonarVersion("7.0")
      .addPlugin(FileLocation.of("/path/to/plugin.jar"))
      .addPlugin(MavenLocation.of("org.sonarsource.java", "sonar-java-plugin", "5.2.0.13398")
      .setServerProperty("sonar.web.javaOpts", "-Xmx1G")
      .build();

    @Test
    public void myTest() {
        // run SonarQube Scanner
        ORCHESTRATOR.executeBuild(SonarScanner.create(new File("/path/to/project")));

        // requests web services
        String baseUrl = ORCHESTRATOR.getServer().getUrl();
        // ...
    }

}
```

## JUnit 5 API

An instance of class `com.sonar.orchestrator.junit5.OrchestratorExtension` can be used as `Extension`. It will represent a SonarQube server that will be started before tests, and stopped after:

```
class MyTests {

    @RegisterExtension…
