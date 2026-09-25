---
repo: "quarkusio/quarkusio.github.io"
name: "quarkusio.github.io"
description: "Website for Quarkus project"
readmeQualityOk: true
url: "https://github.com/quarkusio/quarkusio.github.io"
homepage: "https://quarkus.io"
language: "HTML"
languages: ["HTML"]
languagePcts: [87]
stars: 186
forks: 409
openIssues: 165
closedIssues: 707
watchers: 24
contributors: 203
recentReleases: 0
createdAt: "2019-03-01T18:01:41Z"
lastCommitAt: "2026-09-25T09:01:57Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 50
maintainers: ["actions-user", "holly-cummins", "insectengine"]
openGraphImageUrl: "https://opengraph.githubassets.com/baefcbe0d5b8a178ed5290e4957a4ed6a3c7d6496bbceaa7f3354a7ef3fbbe95/quarkusio/quarkusio.github.io"
---

# Quarkus.io Website

## Getting Started

These instructions will get you a copy of the Quarkus.io website up and running on your local machine for development and testing purposes.

### Prerequisites

- Java 21+
- Maven (or use the included `./mvnw` wrapper — no separate Maven install required)

### Running locally

1. Fork the [project repository](https://github.com/quarkusio/quarkusio.github.io), then clone your fork:
    ```sh
    git clone git@github.com:YOUR_USER_NAME/quarkusio.github.io.git
    ```
2. Change into the project directory:
    ```sh
    cd quarkusio.github.io
    ```
3. Start the dev server:
    ```sh
    ./serve.sh
    ```
    This runs `mvn quarkus:dev` and serves the full site (including guides) at [http://localhost:8042](http://localhost:8042).

    For a faster startup without guides:
    ```sh
    ./serve-noguides.sh
    ```

    Or with only the latest guides (latest and main branches):
    ```sh
    ./serve-only-latest-guides.sh
    ```

> [!NOTE]
> The startup process may take a minute or two on the first run while Maven downloads dependencies and Roq generates the site. Subsequent starts are faster. Once ready, you will see output like:
>
> ```
>…
