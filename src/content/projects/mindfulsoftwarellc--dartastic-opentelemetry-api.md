---
repo: "MindfulSoftwareLLC/dartastic_opentelemetry_api"
name: "dartastic_opentelemetry_api"
description: "OpenTelemetry API for Dart, see Dartastic.io and the Dartastic OpenTelemetry SDK"
readmeQualityOk: true
url: "https://github.com/MindfulSoftwareLLC/dartastic_opentelemetry_api"
homepage: "https://dartastic.io"
language: "Dart"
languages: ["Dart"]
languagePcts: [98]
topics: ["dart", "dartlang", "opentelemetry"]
stars: 12
forks: 6
openIssues: 1
closedIssues: 10
watchers: 2
contributors: 9
recentReleases: 9
createdAt: "2025-05-05T18:21:39Z"
lastCommitAt: "2026-07-20T06:34:08Z"
lastReleaseAt: "2026-07-18T17:53:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 86
maintainers: ["michaelbushe", "kevmoo"]
openGraphImageUrl: "https://opengraph.githubassets.com/b799b2d8ae7bce23024be072caa3d077a75c27991999322502dfe946debbc868/MindfulSoftwareLLC/dartastic_opentelemetry_api"
---

# Dartastic OpenTelemetry API for Dart

A Dart implementation of the [OpenTelemetry](https://opentelemetry.io/) API that strictly adheres to the 
OpenTelemetry (OTel) specification. This package provides a vendor-neutral, implementation-agnostic API for 
observability instrumentation in Dart and Flutter applications.

## Overview

Developers generally do not code with the API, they code with the SDK via the OTel class. This OpenTelemetry API for Dart exists as a standalone library to strictly adhere to the OpenTelemetry specification 
which separates API and SDK concerns. The specification requires that the API can be dropped into an app without an SDK 
and it will work in a no-op fashion.

This API is rarely used without an SDK. The SDK for this API is implemented by 
`dartastic_opentelemetry`, the [Dartastic OpenTelemetry SDK](https://pub.dev/packages/dartastic_opentelemetry).
To instrument Dart apps, include the latest `dartastic_opentelemetry` and use its `OTel` class.

To instrument Flutter applications use the [Flutterrific OpenTelemetry SDK](https://pub.dev/packages/flutterrific_opentelemetry), 
`flutterrific_opentelemetry` to gain almost automatic instrumentation for app…
