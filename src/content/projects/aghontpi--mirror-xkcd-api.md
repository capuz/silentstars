---
repo: "aghontpi/mirror-xkcd-api"
name: "mirror-xkcd-api"
description: "up-to-date mirror of xkcd api with cors, built with github actions."
url: "https://github.com/aghontpi/mirror-xkcd-api"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["xkcd-api", "xkcd", "xkcd-comics", "xkcd-mirror", "xkcd-scrapper", "xkcd-downloader", "xkcd-clone", "api-xkcd"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2020-12-04T09:59:13Z"
lastCommitAt: "2026-06-27T00:36:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 77
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/eaceb3eceb7b60c0feeda7645c258b0d464e52678058d81a2e54ed088bb21cd7/aghontpi/mirror-xkcd-api"
---

# XKCD API Mirror

**A reliable, up-to-date mirror of the official XKCD API, enhanced with Cross-Origin Resource Sharing (CORS) support.**

This repository provides a seamless way to access XKCD comic data and images, overcoming the CORS limitations of the original API. The mirror is automatically synchronized daily to ensure you always have access to the latest comics.

## Overview

The official XKCD API (xkcd.com/info.0.json) is a fantastic resource but lacks CORS headers. This makes it challenging to use directly in web applications hosted on different domains. This project mirrors the API data and serves it via GitHub's raw content URLs, which inherently support CORS.

## Features

*   **CORS Enabled:** Directly usable in web applications without proxy workarounds.
*   **Always Up-to-Date:** Automatically syncs with the official XKCD API daily.
*   **Reliable Access:** Leverages GitHub's infrastructure for high availability.
*   **Mirrored Images:** Provides direct links to mirrored comic images hosted within this repository.

## Usage

Accessing comic data and images is straightforward using the structured paths within this repository.

### Accessing a Specific Comic

To…
