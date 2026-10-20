---
repo: "Normation/rudder-tests"
name: "rudder-tests"
description: "Automatic set-up of complex server/relay/node virtual machines topology and test Rudder on it"
readmeQualityOk: true
url: "https://github.com/Normation/rudder-tests"
language: "Vim Script"
languages: ["Vim Script"]
languagePcts: [80]
stars: 7
forks: 18
openIssues: 0
closedIssues: 0
watchers: 6
contributors: 13
recentReleases: 0
createdAt: "2014-08-06T14:37:05Z"
lastCommitAt: "2026-10-20T08:37:40Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 45
maintainers: ["VinceMacBuche", "P4uline"]
openGraphImageUrl: "https://opengraph.githubassets.com/b39c50a1a23b75f6f3bdd04c95a3a92ef9917cd0e3990afba6c0866242463ae5/Normation/rudder-tests"
---

rudder-tests
============

Automatic tests repository

Installation
------------

See doc/INSTALL.md for setup

Synopsis
--------

Run the desired test platform:
- ./rtf platform setup debian

Run a test scenario:
- ./rtf scenario run debian base

Get the long help:
- ./rtf --help

Use cases
---------

Every parameter after the platform name in "./rtf platform setup" is an additional parameter to the platform, ie it a key=value that is identical to the ones available in the platform.json file.
Examples of such parameters:
- rudder-version=ci/6.0 (this one can be abbreviated to "6.0")
- live=true : do not use buffers for output (this make the output more reactive, but produces more fake lines because of progress bars)
- plugins=all : install all available plugins (you can specify a space separated list of plugins instead)
- plugins_version=nightly : by default release versions of plugins are installed (ci and ci/nightly are also available)
- forget_credential=true : to avoid keeping your download credentials on the vm (useful if you are going to export the platform)
- provider=aws : to instantiate the platform on aws see doc/PROVIDERS.md for more details

Global parameters can be…
