---
repo: "nextcloud/files_antivirus"
name: "files_antivirus"
description: "👾 Antivirus app for Nextcloud Files"
url: "https://github.com/nextcloud/files_antivirus"
homepage: "https://apps.nextcloud.com/apps/files_antivirus"
language: "JavaScript"
languages: ["JavaScript", "PHP"]
languagePcts: [54, 37]
stars: 110
forks: 42
openIssues: 74
closedIssues: 154
watchers: 4
contributors: 286
recentReleases: 0
createdAt: "2016-09-02T08:09:36Z"
lastCommitAt: "2026-06-27T00:47:33Z"
lastReleaseAt: "2019-05-07T14:25:51Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 90
undervaluedScore: 48
maintainers: ["susnux", "dependabot[bot]", "nextcloud-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/850aef3bd4ca25491d072d418aee086d3c01d27052e371bb3e2e8afab173ce09/nextcloud/files_antivirus"
---

# Nextcloud Antivirus for Files

`files_antivirus` **is an antivirus app for [Nextcloud](https://nextcloud.com/) using [ClamAV](http://www.clamav.net) or Kaspersky.**

## Features

* :chipmunk: When the user uploads a file, it's checked
* :biohazard: Infected files will be deleted and a notification will be shown and/or sent via email 
* :mag_right: It runs a background job to scan all files
* :safety_vest: It will block all uploads if the file cannot be checked to ensure all files are getting scanned.

## Requirements

One of

* ClamAV as binaries on the Nextcloud server
* ClamAV running in daemon mode
* Kaspersky Scan Engine running in HTTP mode
* Any virus scanner supporting ICAP (ClamAV and Kaspersky are tested, others *should* work)

## Install

Documentation about installing ClamAV and this app can be found in [our documentation](https://docs.nextcloud.com/server/latest/admin_manual/configuration_server/antivirus_configuration.html).

## ClamAV Details

This app can be configured to work with the executable or the daemon mode (recommended :heart:) of ClamAV. If this is used in daemon mode, it can connect through network or local file-socket. In daemon mode, it sends files to…
