---
repo: "DanySK/publish-on-central"
name: "publish-on-central"
description: "A Gradle plugin for streamlined publishing on Maven Central"
url: "https://github.com/DanySK/publish-on-central"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [98]
stars: 39
forks: 7
openIssues: 5
closedIssues: 13
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2019-03-14T18:28:45Z"
lastCommitAt: "2026-06-27T00:48:21Z"
lastReleaseAt: "2022-01-09T11:42:05Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 93
undervaluedScore: 55
maintainers: ["renovate[bot]", "semantic-release-bot", "DanySK"]
openGraphImageUrl: "https://opengraph.githubassets.com/d645fbf1eba312fe507996b60cf51c139daa4966161c2d5c70b29d22c9835001/DanySK/publish-on-central"
---

# publish-on-central

A Gradle plugin for streamlined publishing to Maven Central.

For publishing to Nexus repositories, please use version 8.x.x or earlier: support for Nexus was removed in 9.x.x as OSSRH was sunset on June 30, 2025.

## Rationale
Publishing to Maven Central often requires extensive configuration. This plugin simplifies the process by:
- Automatically creating a Maven Central–compatible publication with all required metadata
- Configuring tasks to generate Javadoc and source JARs
- Enabling the signing plugin
- Providing tasks to upload, verify, and release artifacts

Support for Sonatype Nexus repositories was dropped in version 9.x.x. However, all standard Maven repositories—such as GitHub Packages and the Maven Central portal—remain supported.

## Configuration

### Minimal

#### Credentials
The plugin looks for credentials in the following order:

1. **Environment variables**:
    - `MAVEN_CENTRAL_PORTAL_USERNAME`
    - `MAVEN_CENTRAL_PORTAL_PASSWORD`
2. **Fallback environment variables**:
    - `MAVEN_CENTRAL_USERNAME`
    - `MAVEN_CENTRAL_PASSWORD`
3. **[Gradle…
