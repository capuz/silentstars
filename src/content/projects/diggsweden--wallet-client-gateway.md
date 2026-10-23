---
repo: "diggsweden/wallet-client-gateway"
name: "wallet-client-gateway"
description: "EUDIW client gateway - Backend for Frontend serving mobile and web apps"
readmeQualityOk: true
url: "https://github.com/diggsweden/wallet-client-gateway"
language: "Java"
languages: ["Java"]
languagePcts: [96]
stars: 6
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 17
recentReleases: 0
createdAt: "2025-08-21T06:09:21Z"
lastCommitAt: "2026-10-23T09:33:24Z"
lastReleaseAt: "2025-11-20T05:08:21Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 77
undervaluedScore: 65
maintainers: ["nickjann-04", "renovate[bot]", "DiggSwedenBot"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc8d68e310e705b1e5ff6ff51641e136ef709d5c988fb891b0e00d8f0d634217/diggsweden/wallet-client-gateway"
---

# Wallet Client Gateway

---

A secure API gateway service for the European Digital Identity Wallet ecosystem.

## Client Config

The client config `features` object only contains client-visible boolean switches. More complex
feature-flag values are evaluated by the backend and exposed through explicit response fields when
needed, such as `cacheGeneration` or `maintenance`.

## Development

To run the application locally, see docker-compose/README.md

### Java Code Coverage Reports

The JaCoCo tool is configured in this project with the `jacoco-maven-plugin` in pom.xml. When running `mvn test`
JaCoCo will automatically measure how many lines of the code which are executed during automated tests and produce
a code coverage report.

The tool generates report output content in `./target/site/jacoco/`. For human reading, the most suitable format is
HTML. To view the report, open the generated `./target/site/jacoco/index.html` in your web browser.

*Additional output for machine reading is created in CSV and XML format. The tool will also create a coverage report in
binary format `target/jacoco.exec`. Obviously we can’t interpret the output single-handedly, but other tools and plugins…
