---
repo: "Infumia/agones4j"
name: "agones4j"
description: "Java wrapper for Agones client SDK."
readmeQualityOk: true
url: "https://github.com/Infumia/agones4j"
language: "Java"
languages: ["Java"]
languagePcts: [94]
topics: ["java", "grpc", "agones"]
stars: 25
forks: 4
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-07-05T05:47:32Z"
lastCommitAt: "2026-10-31T19:00:56Z"
lastReleaseAt: "2024-08-02T01:43:32Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 31
maintainers: ["portlek"]
openGraphImageUrl: "https://opengraph.githubassets.com/13ebe6e675e45762a0a4cd759c5571d4955d6acaef59d17e0d49ed6773ac2be1/Infumia/agones4j"
---

# agones4j
## How to Use (Developers)
### Code
```groovy
repositories {
  mavenCentral()
}

dependencies {
    // Base module
    implementation "net.infumia:agones4j:VERSION"
    // Required, https://mvnrepository.com/artifact/io.grpc/grpc-stub/
    implementation "io.grpc:grpc-stub:1.85.1"
    implementation "io.grpc:grpc-protobuf:1.85.1"
    // Required, https://github.com/grpc/grpc-java/blob/master/gradle/libs.versions.toml#L46/
    implementation "org.apache.tomcat:annotations-api:6.0.53"
}
```
```java
  void agones() {
    final ExecutorService gameServerWatcherExecutor =
      Executors.newSingleThreadExecutor();
    final ScheduledExecutorService healthCheckExecutor =
      Executors.newSingleThreadScheduledExecutor();
    final Agones agones = Agones.builder()
      // Address specification.
      // If not specified, localhost:9357 will be used.
      // All the following methods are creating a ManagedChannel with 'usePlaintext'
      // If you need to use SSL, you can use 'withChannel(ManagedChannel)' method.
      .withAddress("localhost", 9357)
      .withAddress("localhost") // 9357 
      .withAddress(9357) // localhost
      .withAddress() // localhost 9357…
