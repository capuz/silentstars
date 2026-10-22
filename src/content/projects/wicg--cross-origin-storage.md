---
repo: "WICG/cross-origin-storage"
name: "cross-origin-storage"
description: "Cross-Origin Storage (COS), a content-addressable browser cache that shares files across origins by hash, with k-anonymity-based availability gating to prevent cross-site tracking"
readmeQualityOk: true
url: "https://github.com/WICG/cross-origin-storage"
homepage: "https://wicg.github.io/cross-origin-storage/"
language: "HTML"
languages: ["HTML"]
languagePcts: [68]
topics: ["cross-origin-storage"]
stars: 114
forks: 4
openIssues: 11
closedIssues: 37
watchers: 9
contributors: 11
recentReleases: 0
createdAt: "2024-12-06T08:23:12Z"
lastCommitAt: "2026-10-22T08:52:01Z"
status: "thriving"
tags: []
healthScore: 93
undervaluedScore: 45
maintainers: ["tomayac", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff3841281f635f0ea5be04eac88206efa9843418107e46163f0ad8dd6b3d9231/WICG/cross-origin-storage"
---

# Explainer for the Cross-Origin Storage (COS) API

This proposal outlines the design of the **Cross-Origin Storage (COS)** API, a **content-addressable cache** that allows web applications to store and retrieve files across different origins. Building on the **File System Living Standard** defined by the WHATWG, the COS API facilitates secure cross-origin file storage and retrieval for large assets, such as AI models, WebAssembly (Wasm) modules, and highly popular JavaScript libraries. Taking inspiration from **Cache Digests for HTTP/2**, the API identifies files by their content hashes instead of their URL, making it a true content-addressable storage system.

> [!TIP]
> **Try the proposed API with an extension**
>
> While this API is not yet natively implemented in browsers, you can experiment with the proposed surface today.
> Install the [Cross-Origin Storage extension](https://chromewebstore.google.com/detail/cross-origin-storage/denpnpcgjgikjpoglpjefakmdcbmlgih) to inject the `navigator.crossOriginStorage` polyfill on all pages and test the complete flow. See the [source code of the extension](https://github.com/web-ai-community/cross-origin-storage-extension) and read the…
