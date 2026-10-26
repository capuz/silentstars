---
repo: "FasterXML/jackson-jaxrs-providers"
name: "jackson-jaxrs-providers"
description: "Multi-module project that contains Jackson-based \"old\" JAX-RS (ones under `javax.ws.rs`) providers for JSON, XML, YAML, Smile, CBOR formats"
readmeQualityOk: true
url: "https://github.com/FasterXML/jackson-jaxrs-providers"
language: "Java"
languages: ["Java"]
languagePcts: [96]
topics: ["hacktoberfest", "jax-rs", "jackson"]
stars: 126
forks: 84
openIssues: 15
closedIssues: 111
watchers: 13
contributors: 38
recentReleases: 0
createdAt: "2012-10-05T03:14:37Z"
lastCommitAt: "2026-10-26T20:59:28Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded", "fork_magnet"]
healthScore: 95
undervaluedScore: 49
maintainers: ["cowtowncoder", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c36cbd1c9031e873e11c2cd8c8a29d0d3719bcf808b22e0c60736b649752b973/FasterXML/jackson-jaxrs-providers"
fundingLinks: ["TIDELIFT:https://tidelift.com/funding/github/maven/com.fasterxml.jackson.jaxrs:jackson-jaxrs-json-provider"]
---

## Overview

This is a multi-module project that contains Jackson-based JAX-RS (*) providers
for following data formats:

* [JSON](https://github.com/FasterXML/jackson-core)
* [Smile](https://github.com/FasterXML/jackson-dataformat-smile) (binary JSON)
* [CBOR](https://github.com/FasterXML/jackson-dataformat-cbor) (another kind of binary JSON)
* [XML](https://github.com/FasterXML/jackson-dataformat-xml)
* [YAML](https://github.com/FasterXML/jackson-dataformat-yaml)

Providers implement JAX-RS `MessageBodyReader` and `MessageBodyWriter` handlers for specific
data formats. They also contain SPI settings for auto-registration.

(*) NOTE! JAX-RS is the "old" API defined under `javax.ws.rs`; in 2019 or so, Oracle decided to force
a forking of this into "Jakarta" variant under `jakarta.ws.ws`.
As of 2021 most frameworks still use the old API but if you do need/want to use newer one,
check out Jakarta-RS provider repo at [jackson-jakarta-rs-providers](https://github.com/FasterXML/jackson-jaxrs-providers/blob/HEAD/../../../jackson-jakarta-rs-providers)

## Status

## Maven dependency

To use JAX-RS on Maven-based projects, use dependencies like:

```xml
<dependency>…
