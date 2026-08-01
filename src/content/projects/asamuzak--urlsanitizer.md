---
repo: "asamuzaK/urlSanitizer"
name: "urlSanitizer"
description: "URL sanitizer for Node.js, browsers and web sites."
readmeQualityOk: true
url: "https://github.com/asamuzaK/urlSanitizer"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
stars: 5
forks: 1
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-01-21T11:03:34Z"
lastCommitAt: "2026-08-01T06:13:48Z"
lastReleaseAt: "2023-01-23T23:59:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 82
maintainers: ["asamuzaK", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/aed88056c58b73f8d66602dd86533a03625efd2f8cd8c73964976c8c979b0f29/asamuzaK/urlSanitizer"
fundingLinks: ["CUSTOM:https://paypal.me/asamuzakjp"]
---

# URL Sanitizer

A robust URL sanitizer for Node.js, browsers, and websites.
It sanitizes not only regular URLs but also deeply inspects `data` URLs and `blob` URLs.
It also provides built-in utilities to inspect URLs and verify URI schemes.

## Table of Contents
* [Features](#features)
* [Install](#install)
* [Usage](#usage)
* [API Reference](#api-reference)
  * [sanitizeURL(url, opt)](#sanitizeurlurl-opt)
  * [sanitizeURLSync(url, opt)](#sanitizeurlsyncurl-opt)
  * [inspectURL(url)](#inspecturlurl)
  * [isURI(uri)](#isuriuri)
  * [urlSanitizer Instance](#urlsanitizer)
* [Threat Model](#threat-model)
* [AI / LLM Application Security](#ai--llm-application-security)
* [Performance](#performance)
* [Acknowledgments](#acknowledgments)

## Features

* **Secure by Default**: Strictly blocks `javascript:` and `vbscript:` schemes.
* **Deep Data URL Inspection**: Parses, decodes (including base64), and sanitizes nested data URLs.
* **Blob URL Support**: Fetches the underlying blob content, purifies nested XSS vectors via DOMPurify, and outputs a safe data URL (async).
* **Relative & Absolute Path Support**: Safely allows root-relative paths (e.g., `/foo`) and relative paths (e.g.,…
