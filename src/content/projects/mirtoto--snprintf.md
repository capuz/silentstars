---
repo: "mirtoto/snprintf"
name: "snprintf"
description: "Lightweight and with minimal dependencies implementation of snprintf() C function."
readmeQualityOk: true
url: "https://github.com/mirtoto/snprintf"
language: "C"
languages: ["C"]
languagePcts: [98]
topics: ["snprintf", "c", "formatting", "replacement", "embedded", "embedded-c"]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 3
createdAt: "2020-06-13T17:59:32Z"
lastCommitAt: "2026-10-21T21:12:35Z"
lastReleaseAt: "2026-10-18T21:10:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 70
undervaluedScore: 71
maintainers: ["mirtoto"]
openGraphImageUrl: "https://opengraph.githubassets.com/d35185f1645dbbb566e1f5e4604f5d8146bfee8ad9be2438b00d79f94133716b/mirtoto/snprintf"
---

# snprintf()

Lightweight, dependency-light implementation of the C `snprintf()` family. It is intended for small embedded or minimal builds where a full libc formatter is not available and where avoiding `math.h` is desirable.

The project aims to stay portable and close to libc behavior for the supported conversions, while still keeping the implementation small and easy to embed.

## Features

- portable formatter for common `printf`-style conversions
- formatter implementation has no `math.h` dependency by default
- supports the standard integer, floating-point, string, character, and pointer cases used by this project
- exact floating-point conversions: the digits are those of the binary value, rounded to nearest, ties to even, so the output is the one of libc (see [Floating-point conversions](#floating-point-conversions))
- default behavior is intentionally libc-like and permissive
- optional strict validation mode for safety-oriented builds
- tested against the C library with a differential fuzz test (see [Testing](#testing))

## Function prototype

```c
int snprintf(char *string, size_t length, const char *format, ...);
```

### Parameters

| Parameter | Description…
