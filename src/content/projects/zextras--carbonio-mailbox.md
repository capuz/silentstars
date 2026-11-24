---
repo: "zextras/carbonio-mailbox"
name: "carbonio-mailbox"
description: "Carbonio - Mailbox"
readmeQualityOk: true
url: "https://github.com/zextras/carbonio-mailbox"
homepage: "https://zextras.com/carbonio"
language: "Java"
languages: ["Java"]
languagePcts: [99]
topics: ["email", "collaboration", "email-server", "collaboration-suite", "carbonio", "carbonio-component", "oss"]
stars: 78
forks: 24
openIssues: 1
closedIssues: 7
watchers: 15
contributors: 97
recentReleases: 0
createdAt: "2021-12-22T15:33:02Z"
lastCommitAt: "2026-11-24T13:25:56Z"
lastReleaseAt: "2026-05-25T11:33:47Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 51
maintainers: ["frisonisland", "ZxBot", "M0Rf30"]
openGraphImageUrl: "https://opengraph.githubassets.com/359db8de1d9aa2cfa6989e0154089a9fdbbbbc074b9923378f37ebb64c68186f/zextras/carbonio-mailbox"
---

# Carbonio Mailbox

    [](https://twitter.com/zextras)

This repository contains the source code of Carbonio Mailbox which consists of several subcomponents
and their roles:

- **common**: provides classes of common use (utilities, constants, etc.)
- **client**: client package to interact with the mailbox
- **soap**: describes SOAP APIs and contains wsdl documentation
- **store**: the mailbox service (API handlers, Milter, IMAP, POP3, CLI and others)

## Building Carbonio Mailbox from source
Requirements:
- JDK 21. Confirm with `javac -version` and check that `mvn -version` reports Java 21.
- Apache Maven.

Build the Code by running:
   ```shell
   $ mvn clean install -DskipTests
   ```

## Generating SOAP DOCS
> mvn antrun:run@generate-soap-docs

## Running tests

See test commands defined in [Makefile](https://github.com/zextras/carbonio-mailbox/blob/HEAD/Makefile)

## Local Mailbox (Development)

Run the main class [SampleLocalMailbox](https://github.com/zextras/carbonio-mailbox/blob/HEAD/store/src/test/java/com/zextras/mailbox).  
This will start a Mailbox with in-memory LDAP and an HSQLDB database.

## RC
Managed with **Github Actions**.
