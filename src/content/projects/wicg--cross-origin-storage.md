---
repo: "WICG/cross-origin-storage"
name: "cross-origin-storage"
description: "Cross-Origin Storage (COS), a content-addressable browser cache that shares files across origins by hash, with k-anonymity-based availability gating to prevent cross-site tracking"
readmeQualityOk: true
url: "https://github.com/WICG/cross-origin-storage"
homepage: "https://wicg.github.io/cross-origin-storage/"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [66, 21]
topics: ["cross-origin-storage"]
stars: 100
forks: 1
openIssues: 6
closedIssues: 36
watchers: 8
contributors: 11
recentReleases: 0
createdAt: "2024-12-06T08:23:12Z"
lastCommitAt: "2026-08-17T04:18:17Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 47
maintainers: ["tomayac", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/77ba7be408b7e0479a377367361b3747a5b68ea46659da2ee2649ecbda4faef8/WICG/cross-origin-storage"
---

# Explainer for the Cross-Origin Storage (COS) API

This proposal outlines the design of the **Cross-Origin Storage (COS)** API, a **content-addressable cache** that allows web applications to store and retrieve files across different origins. Building on the **File System Living Standard** defined by the WHATWG, the COS API facilitates secure cross-origin file storage and retrieval for large assets, such as AI models, WebAssembly (Wasm) modules, and highly popular JavaScript libraries. Taking inspiration from **Cache Digests for HTTP/2**, the API identifies files by their content hashes rather than by URL, making it a true content-addressable storage system.

> [!TIP]
> **Try the proposed API with an extension**
>
> While this API is not yet natively implemented in browsers, you can experiment with the proposed surface today.
> Install the [Cross-Origin Storage extension](https://chromewebstore.google.com/detail/cross-origin-storage/denpnpcgjgikjpoglpjefakmdcbmlgih) to inject the `navigator.crossOriginStorage` polyfill on all pages and test the complete flow. See the [source code of the extension](https://github.com/web-ai-community/cross-origin-storage-extension) and read the…
