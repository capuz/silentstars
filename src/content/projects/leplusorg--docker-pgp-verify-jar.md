---
repo: "leplusorg/docker-pgp-verify-jar"
name: "docker-pgp-verify-jar"
description: "Multi-platform Docker container to verify jars PGP signatures."
readmeQualityOk: true
url: "https://github.com/leplusorg/docker-pgp-verify-jar"
homepage: "https://hub.docker.com/r/leplusorg/pgp-verify-jar"
language: "Shell"
languages: ["Shell"]
languagePcts: [82]
topics: ["java", "jar", "pgp", "pgp-signature", "pgp-keyserver", "gpg-signature", "gpg", "gnupg", "digital-signature", "maven-repository"]
stars: 8
forks: 4
openIssues: 3
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-01-25T05:31:31Z"
lastCommitAt: "2026-08-29T17:28:31Z"
lastReleaseAt: "2024-12-07T01:54:43Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 78
undervaluedScore: 70
maintainers: ["dependabot[bot]", "thomasleplus"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa3be7c26207bfa262630a64d195b490001e9bf82a370bd8e4bdcbc84dc9a891/leplusorg/docker-pgp-verify-jar"
---

# PGP Verify Jar

Multi-platform Docker container to verify JAR files PGP signatures.

## Goal and limitations

The goal of this Docker container image is to provide an easy way to
verify JAR files signatures. Currently it can only verify files that
it downloads from a Maven repository that doesn't require
authentication and that use a certificate issues by a trusted public
CA.

This image has the benefit of being platform-agnostic and it
doesn't rely on Maven or Java. But if your goal is to validate
signatures for your project dependencies at build time and/or runtime,
there are Maven plugins (e.g.
[Verify PGP signatures](https://www.simplify4u.org/pgpverify-maven-plugin/)).
Gradle even has this feature
[out-of-the-box](https://docs.gradle.org/current/userguide/dependency_verification.html).

## Examples

Assuming that you want to see the signature of two JAR files:

```bash
docker run --rm leplusorg/pgp-verify-jar org.leplus:ristretto:2.0.0 junit:junit:4.13.1
```

You can also use the `ARTIFACTS` environment
variable to pass the list of artifacts to verify (coma-separated if
multiple):

```bash
docker run --rm -e ARTIFACTS=org.leplus:ristretto:2.0.0,junit:junit:4.13.1…
