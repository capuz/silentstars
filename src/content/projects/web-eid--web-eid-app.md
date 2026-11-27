---
repo: "web-eid/web-eid-app"
name: "web-eid-app"
description: "The Web eID application performs cryptographic digital signing and authentication operations with electronic ID smart cards for the Web eID browser extension"
readmeQualityOk: true
url: "https://github.com/web-eid/web-eid-app"
homepage: "https://web-eid.eu"
language: "C++"
languages: ["C++"]
languagePcts: [70]
topics: ["smartcard", "eid-card", "pcsc", "pkcs11", "web-eid", "cryptography", "authentication", "digital-signature", "cpp", "qt"]
stars: 35
forks: 35
openIssues: 4
closedIssues: 40
watchers: 11
contributors: 15
recentReleases: 0
createdAt: "2020-12-17T15:47:50Z"
lastCommitAt: "2026-11-27T12:56:46Z"
lastReleaseAt: "2021-10-07T07:25:53Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 91
undervaluedScore: 61
maintainers: ["metsma", "dependabot[bot]", "svenzik"]
openGraphImageUrl: "https://opengraph.githubassets.com/55606dec4e46357747a6410f9212d0cfa3578095b9e6172269d0fa3ea1f6daec/web-eid/web-eid-app"
---

# web-eid-app

The Web eID application performs cryptographic digital signing and
authentication operations with electronic ID smart cards for the Web eID
browser extension (it is the [native messaging host](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Native_messaging)
for the extension). Also works standalone without the extension in command-line
mode.

More information about the Web eID project is available on the project [website](https://web-eid.eu/).

Overview of the Web eID system architecture is available in the [system architecture document](https://github.com/web-eid/web-eid-system-architecture-doc).

Command-line mode is described first as it is easily accessible for testing. Input-output mode that the application uses for communication with the browser extension is described [below](#input-output-mode).

## Command-line mode

Command-line mode is useful both for testing and for using the application
outside of the Web eID browser extension context.

### Usage

Usage:

    web-eid [options] command arguments

Options:
