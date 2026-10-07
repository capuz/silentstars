---
repo: "plone/mockup"
name: "mockup"
description: "A collection of client side patterns for faster and easier web development"
readmeQualityOk: true
url: "https://github.com/plone/mockup"
homepage: "http://plone.github.io/mockup/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [67]
topics: ["javascript", "patternslib", "ui-components", "hacktoberfest"]
stars: 57
forks: 103
openIssues: 48
closedIssues: 585
watchers: 148
contributors: 321
recentReleases: 0
createdAt: "2012-12-03T13:25:05Z"
lastCommitAt: "2026-10-07T10:30:25Z"
lastReleaseAt: "2022-08-03T09:41:20Z"
status: "watched"
tags: ["legacy_hero", "community_watch", "funded", "fork_magnet"]
healthScore: 95
undervaluedScore: 51
maintainers: ["petschki", "thet", "MrTango"]
openGraphImageUrl: "https://opengraph.githubassets.com/a29da7a008538fa299533539bd6a6ce98217a9f95f68719579f2d9c93c8f417c/plone/mockup"
fundingLinks: ["GITHUB:https://github.com/plone", "CUSTOM:https://plone.org/foundation/sponsorship"]
---

# Plone Mockup

Mockup is the JavaScript stack of the Plone Classic UI.

## Usage

There are several options to integrate Mockup.

1.  It comes pre-installed with Plone 6 Classic UI.
2.  You can install and compile a bundle. See [Development Section](#development) below.
3.  You can download a `.zip` from [Mockup's releases page on GitHub](https://github.com/plone/mockup/releases).
4.  You can use a precompiled bundle from a CDN, like:

    ```html
    <script src="https://unpkg.com/@plone/mockup@latest/dist/bundle.min.js"></script>
    ```

    or:

    ```html
    <script src="https://cdn.jsdelivr.net/npm/@plone/mockup@latest/dist/bundle.min.js"></script>
    ```

## Install

- Have a current version of Node.js installed.

- To install, run: `make install`.

- To run the demo server, do: `make serve`.

    This starts up the webpack build process in watch mode.
    Any JavaScript changes are immediately compiled.
    For some changes - like for adding new packages via `pnpm add` and then using it you might need to restart.
    The command also spins up a development server for our `11ty` based documentation and demo pages.
    If you don't need the docs running, you can run…
