---
repo: "oneteme/inspect-core"
name: "inspect-core"
description: "inspect java/spring collector"
readmeQualityOk: true
url: "https://github.com/oneteme/inspect-core"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["agent", "java", "collector", "tracking"]
stars: 10
forks: 3
openIssues: 25
closedIssues: 67
watchers: 1
contributors: 4
recentReleases: 1
createdAt: "2023-03-31T15:01:44Z"
lastCommitAt: "2026-10-23T12:04:29Z"
lastReleaseAt: "2026-09-15T13:02:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 75
maintainers: ["usfalami", "tasnim90"]
openGraphImageUrl: "https://opengraph.githubassets.com/f639b0a7933588f995449c9bc70e0595206a2a5eeafc5924cc0800bcca81a08c/oneteme/inspect-core"
discussionCount: 13
---

# inspect-core


Short description
-----------------
inspect-core is a lightweight Java library to capture structured runtime telemetry (sessions, requests, resource metrics and thread correlations) from monolithic or distributed applications. It focuses on producing correlated traces that can be dispatched to an inspect server or written locally for offline analysis.

Why use inspect-core?
- End-to-end correlated tracing across threads and asynchronous work.
- Capture HTTP, JDBC, LDAP, FTP/SFTP, SMTP and local operations.
- Configurable local dump or remote dispatch to an inspect-server.
- Minimal intrusion: pluggable collectors and Spring-friendly integrations.

Quick Start
-----------
Maven
```xml
<dependency>
  <groupId>io.github.oneteme</groupId>
  <artifactId>inspect-core</artifactId>
  <version>REPLACE_WITH_VERSION</version>
</dependency>
```

Configuration (example application.yml)
```yaml
inspect:
  collector:
    enabled: true
    debug-mode: false
    scheduling:
      interval: 5s
    monitoring:
      http-route:
        excludes:
          method: OPTIONS
          path: /favicon.ico, /actuator/info
      resources:…
