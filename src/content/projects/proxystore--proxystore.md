---
repo: "proxystore/proxystore"
name: "proxystore"
description: "Advanced data flow management for distributed Python applications"
url: "https://github.com/proxystore/proxystore"
homepage: "https://docs.proxystore.dev/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["distributed-computing", "object-proxying", "python", "workflow-management"]
stars: 38
forks: 17
openIssues: 1
closedIssues: 194
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2021-04-14T17:14:13Z"
lastCommitAt: "2026-06-23T23:27:00Z"
lastReleaseAt: "2023-01-16T23:30:52Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 64
maintainers: ["gpauloski", "pre-commit-ci[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1fb89ee8f42ebf01c3c1b3fcbeea2c8dbfec788fa03a978d6f5ee87db97764e7/proxystore/proxystore"
---

# ProxyStore

![PyPI - Version](https://img.shields.io/pypi/v/proxystore?cache-control=no-cache)
![PyPI - Python Version](https://img.shields.io/pypi/pyversions/proxystore?cache-control=no-cache)
![GitHub License](https://img.shields.io/github/license/proxystore/proxystore?cache-control=no-cache)

ProxyStore facilitates efficient data flow management in distributed Python applications, such as dynamic task-based workflows or serverless and edge applications.

The [*transparent object proxy*](https://docs.proxystore.dev/latest/concepts/proxy/), the core building block within ProxyStore, acts like a wide-area reference that can be cheaply communicated.
Unlike traditional references that are only valid within the virtual address space of a single process, the proxy references an object in remote storage and can be implicitly dereferenced in arbitrary processes—even on remote machines.
The proxy is transparent in that it implicitly dereferences its target object when used—referred to a *just-in-time resolution*—and afterwards forwards all operations on itself to the cached target object.

This paradigm results in the best of both pass-by-reference and pass-by-value semantics, improves…
