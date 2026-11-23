---
repo: "happystraw/phpz"
name: "phpz"
description: "Phpz - Build PHP Extensions with Zig (A Zig framework for building PHP extensions with PHP C API bindings.)"
readmeQualityOk: true
url: "https://github.com/happystraw/phpz"
homepage: "https://happystraw.github.io/phpz/"
language: "Zig"
languages: ["Zig"]
languagePcts: [86]
topics: ["extension", "php", "zig", "php-zig", "zig-library", "php-extension"]
stars: 8
forks: 1
openIssues: 2
closedIssues: 12
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-01-22T10:16:43Z"
lastCommitAt: "2026-11-23T12:23:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 68
maintainers: ["happystraw", "TrixNEW"]
openGraphImageUrl: "https://opengraph.githubassets.com/7b3916463b3e38dc4f09ec19cfb212f78bddc750b557a27d09e035b628af214d/happystraw/phpz"
---

# Phpz - Build PHP Extensions with Zig

A Zig framework for building PHP extensions with PHP C API bindings.

[中文](https://github.com/happystraw/phpz/blob/HEAD/README_CN.md)

## Documentation

[phpz documentation](https://happystraw.github.io/phpz/)

## Requirements

- zig: 0.17.0
- php: 8.2-8.6 (NTS/ZTS) on Linux (x86_64/aarch64), macOS (x86_64/aarch64), Windows MSVC (x64)

## Features

- **Modules** — extension metadata, lifecycle hooks, phpinfo, INI, globals, observers, and exports.
- **[Stub integration](https://php.github.io/php-src/miscellaneous/stubs.html)** — arginfo, function entries, constants, attributes, class metadata, and arginfo checks.
- **Functions and methods** — typed `Ctx` arguments, returns, nullable values, raw zvals, and PHP argument errors. Scalar parameters follow ZPP exactly: weak-mode coercion, `strict_types`, int-to-float widening, null deprecations and Zend's own error messages.
- **Classes and OOP** — bind Zig `struct` lifecycles to PHP objects, with class entries, methods, inheritance, interfaces, enums, exceptions, handlers, and optional operator overloading and comparison.
