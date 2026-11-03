---
repo: "xm-online/xm-ms-dashboard"
name: "xm-ms-dashboard"
description: "XM^online 2 - Microservice for Dashboards  "
readmeQualityOk: true
url: "https://github.com/xm-online/xm-ms-dashboard"
homepage: "https://xm-online.com"
language: "Java"
languages: ["Java"]
languagePcts: [93]
topics: ["microservice"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 36
recentReleases: 0
createdAt: "2017-09-29T12:30:54Z"
lastCommitAt: "2026-11-03T11:14:55Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 81
undervaluedScore: 69
maintainers: ["sergeysenja1992", "VictorPavfurious", "actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b779b8092405237a24f781521f16825df6e5e19c332fe4c9d68f2931fb5e4d7/xm-online/xm-ms-dashboard"
---

# XM MS Dashboard

This application was generated using JHipster 5.7.2, you can find documentation and help at [https://www.jhipster.tech/documentation-archive/v5.7.2](https://www.jhipster.tech/documentation-archive/v5.7.2).

This is a "microservice" application intended to be part of a microservice architecture, please refer to the [Doing microservices with JHipster][] page of the documentation for more information.

This application is configured for Service Discovery and Configuration with Consul. On launch, it will refuse to start if it is not able to connect to Consul at [http://localhost:8500](http://localhost:8500). For more information, read our documentation on [Service Discovery and Configuration with Consul][].

## Development

To start your application in the dev profile, simply run:

    ./gradlew

For further instructions on how to develop with JHipster, have a look at [Using JHipster in development][].

### Kafka connection

The connection to Kafka (SASL login and password, SSL, OAUTHBEARER, GSSAPI, `spring.ssl.bundle`) is set by environment
variables, `PLAINTEXT` when they are not set. The full sets of variables for each `security.protocol` and
the broker setup are…
