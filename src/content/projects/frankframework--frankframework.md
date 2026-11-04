---
repo: "frankframework/frankframework"
name: "frankframework"
description: "The Frank!Framework is an easy-to-use, stateless integration framework which allows (transactional) messages to be modified and exchanged between different systems."
readmeQualityOk: true
url: "https://github.com/frankframework/frankframework"
homepage: "https://frankframework.org"
language: "Java"
languages: ["Java"]
languagePcts: [91]
topics: ["java", "system-integration", "open-source", "community-driven", "framework", "data-flow", "integration", "integration-framework", "integration-platform", "low-code"]
stars: 168
forks: 90
openIssues: 227
closedIssues: 2734
watchers: 6
contributors: 57
recentReleases: 0
createdAt: "2013-03-21T11:48:24Z"
lastCommitAt: "2026-11-04T13:05:02Z"
lastReleaseAt: "2020-03-13T17:52:52Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "community_hub", "fork_magnet"]
healthScore: 98
undervaluedScore: 48
maintainers: ["renovate[bot]", "tnleeuw", "nielsm5"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/8927606/f4514135-997f-44ca-a7a5-c26b988d79f5"
discussionCount: 51
---

# Frank!Framework

**Exchange, modify and aggregate messages between systems!**

## Open-Source, Low-Code & Stateless

The Frank!Framework is a framework that is completely configurable through XML configurations. Each Frank!Application may contain multiple configurations, and each configuration can consist of multiple end-to-end connections which we call 'adapters'. Configurations may be (re)loaded conditionally or individually for optimal performance and customizability.
The application may be managed and monitored through a web interface or REST API.
See it in action: https://frank2example.frankframework.org

## Running the Frank-Framework

The Frank!Framework can run on any Java runtime version 25 and up, either as a standalone Spring Boot application or as a WAR file deployed inside an application server.

### Application Server Support

The Frank!Framework can be deployed as a WAR file in any application server supporting WAR file deployment. In our CI we test every PR and Release against Tomcat, Wildfly and JBoss, all these application servers are supported by us for use in production environments.
Other application servers should work but are untested by us.
You may…
