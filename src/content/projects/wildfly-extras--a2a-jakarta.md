---
repo: "wildfly-extras/a2a-jakarta"
name: "a2a-jakarta"
description: "A2A Java SDK for Jakarta Servers"
readmeQualityOk: true
url: "https://github.com/wildfly-extras/a2a-jakarta"
language: "Java"
languages: ["Java"]
languagePcts: [99]
stars: 13
forks: 5
openIssues: 1
closedIssues: 7
watchers: 0
contributors: 9
recentReleases: 1
createdAt: "2025-07-10T11:41:20Z"
lastCommitAt: "2026-11-04T11:28:48Z"
lastReleaseAt: "2026-10-21T07:46:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 93
undervaluedScore: 76
maintainers: ["kabir", "ehsavoie", "rhusar"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf53226e805565a312ed038f23cd0062102c5580987007241db17c41e9098aec/wildfly-extras/a2a-jakarta"
fundingLinks: ["GITHUB:https://github.com/commonhaus", "OPEN_COLLECTIVE:https://opencollective.com/commonhaus-foundation"]
---

# A2A Java SDK for Jakarta Servers

This is the integration of the [A2A Java SDK](https://github.com/a2aproject/a2a-java) for use in Jakarta servers. It is currently tested on **WildFly**, but it should be usable in other compliant Jakarta servers such as Tomcat, Jetty, and OpenLiberty. For Quarkus, use the reference implementation in the [A2A Java SDK](https://github.com/a2aproject/a2a-java) project.

This implementation is aligned with **A2A Protocol Specification 1.0** and uses **A2A Java SDK 1.0.0.Final**.

For more information about the A2A protocol, see [here](https://github.com/a2aproject/A2A).

## Getting Started

To use the A2A Java SDK in your application, you will need to package it as a `.war` file. This can be done with your standard build tool.

### Packaging your application

The key to enabling A2A in your Java application is to correctly package it. Here are the general steps you need to follow:

1.  **Create a standard `.war` archive:** Your project should be configured to produce a `.war` file. This is a standard format for web applications in Java and is supported by all major runtimes.

2.  **Provide implementations for `AgentExecutor` and `AgentCard`:** The…
