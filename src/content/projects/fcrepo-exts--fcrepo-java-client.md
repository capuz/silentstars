---
repo: "fcrepo-exts/fcrepo-java-client"
name: "fcrepo-java-client"
description: "A Fedora 4 client library written in Java."
readmeQualityOk: true
url: "https://github.com/fcrepo-exts/fcrepo-java-client"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 11
forks: 19
openIssues: 0
closedIssues: 6
watchers: 11
contributors: 16
recentReleases: 0
createdAt: "2015-12-04T16:59:23Z"
lastCommitAt: "2026-10-01T10:24:08Z"
lastReleaseAt: "2021-11-11T06:03:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 77
undervaluedScore: 48
maintainers: ["Surfrdan", "bbpennel"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1bc9378317a23422764368de01d2930669a722f39fb0f75c47ed60083cdb465/fcrepo-exts/fcrepo-java-client"
---

# Java Client for fcrepo

This project serves as a client library for interacting with Fedora using Java.

## Usage Examples

### Create a Fedora client

```java
FcrepoClient client = FcrepoClient.client().build();
```

#### Create a Fedora client with credentials

```java
FcrepoClient client = FcrepoClient.client().credentials(username, password).build();
```

### Properly cleaning up resources allocated by FcrepoClient

FcrepoClient uses the apache HttpClient internally. In order to properly close the `HttpClientConnectionManager`
used by the apache HttpClient always call the `close()` method of FcrepoClient once you're done:

Using a try-with-resources block:

```java
try (final FcrepoClient client = FcrepoClient.client().build()) {
  // use client
}
```

Using a classic try-finally block:

```java
final FcrepoClient client = FcrepoClient.client().build());
try {
  // use client
} finally {
  client.close();
}
```

### CRUD

Create a new container with RDF properties:

```java
try (FcrepoResponse response = new PostBuilder(uri, client)
        .body(turtleFile, "text/turtle")
        .perform()) {
  URI location = response.getLocation();
  logger.debug("Container creation…
