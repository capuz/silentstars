---
repo: "PedroFnseca/esp32-http-client"
name: "esp32-http-client"
description: "A lightweight, low-allocation, high-performance HTTP client library for ESP32."
readmeQualityOk: true
url: "https://github.com/PedroFnseca/esp32-http-client"
homepage: "https://esp32httpclient.com"
language: "C++"
languages: ["C++"]
languagePcts: [90]
topics: ["arduino", "arduino-library", "esp32", "http-client", "iot", "soap", "soap-client", "rest-client"]
stars: 165
forks: 8
openIssues: 0
closedIssues: 20
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-01-14T16:18:34Z"
lastCommitAt: "2026-11-03T12:47:47Z"
lastReleaseAt: "2026-07-16T16:10:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 39
maintainers: ["PedroFnseca", "github-actions[bot]", "Igorcbraz"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1134371064/4412ba67-6df8-42ff-a8cd-55c581dfe6e2"
---

A lightweight, low-allocation HTTP client with direct stream-to-variable binding.</p>

## Contents

- [Why this library?](#why-this-library)
- [Performance & Comparison](#performance--comparison)
- [Key Features](#key-features)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Initialization](#initialization)
- [Usage](#usage)
- [Examples](#examples)
- [API Reference](#api-reference)
- [Error Codes and HTTP Status Codes](#error-codes-and-http-status-codes)
- [Support](#support)

## Why this library?

Writing HTTP requests on embedded systems shouldn't feel like a chore. The standard approach forces you to manage connection states, handle string buffers manually, and allocate large chunks of RAM just to parse a simple JSON response or construct complex XML envelopes.

**ESP32-HTTP-Client** acts as a bridge between your variables and web services. Built on top of a low-overhead, persistent HTTP/HTTPS networking core, it provides dedicated, fluent builders for common web communication standards (such as **REST APIs** and **SOAP 1.1 / 1.2 Web Services**) while extracting response fields directly into your C++ variables on-the-fly.

### The problem: the standard approach…
