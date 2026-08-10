---
repo: "NativeScript/napi-ios"
name: "napi-ios"
description: "NativeScript iOS/macOS runtime based on Node-API"
readmeQualityOk: true
url: "https://github.com/NativeScript/napi-ios"
language: "C++"
languages: ["C++", "C"]
languagePcts: [42, 40]
stars: 24
forks: 2
openIssues: 13
closedIssues: 12
watchers: 3
contributors: 10
recentReleases: 0
createdAt: "2025-03-23T23:52:44Z"
lastCommitAt: "2026-08-10T05:05:38Z"
status: "thriving"
tags: ["funded"]
healthScore: 80
undervaluedScore: 55
maintainers: ["DjDeveloperr", "shirakaba", "NathanWalker"]
openGraphImageUrl: "https://opengraph.githubassets.com/ed1814440ea63e22752af32f1108aba154685907526c35c4dfb6775a2916d071/NativeScript/napi-ios"
fundingLinks: ["GITHUB:https://github.com/NativeScript", "OPEN_COLLECTIVE:https://opencollective.com/nativescript"]
---

# NativeScript Runtime

The core backbone that powers [NativeScript](https://nativescript.org/) apps and provides powerful, zero-boilerplate interop with native APIs directly from JavaScript.

## Key Features

- **Direct Native Interop**: Access 100% of the underlying platform APIs (Objective-C/C/C++) directly from JS/TS without writing native plugin wrappers
- **Multiple JS Engines**: Engine-agnostic architecture natively supporting **V8, Hermes, QuickJS, and JavaScriptCore**
- **Node-API Support**: Runs on Node.js & Deno as well
- **React Native Ecosystem**: Includes JSI-based TurboModule support and seamless React Native compatibility layers

## Repository Structure

- `NativeScript/`: The core C++ runtime source code handling FFI (Foreign Function Interface) operations and JS engine bindings.
- `metadata-generator/`: Clang-based utility that parses C/Obj-C to generate the metadata consumed by the FFI
- `packages/`: The NPM packages published from this repo (e.g., `@nativescript/ios`, `@nativescript/macos`, `@nativescript/visionos`, and specific engine combinations).
- `examples/`: Sample JS/TS test beds demonstrating platform APIs (AppKit, Metal, SpriteKit, etc.) driven purely…
