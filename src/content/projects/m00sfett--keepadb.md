---
repo: "m00sfett/KeepADB"
name: "KeepADB"
description: "KeepADB — keep Android Wireless Debugging active via app, widget, and Quick Settings tile"
readmeQualityOk: true
url: "https://github.com/m00sfett/KeepADB"
homepage: "https://keepadb.roteson.de"
language: "Java"
languages: ["Java"]
languagePcts: [99]
topics: ["adb", "android", "f-droid", "wireless-debugging"]
stars: 18
forks: 1
openIssues: 2
closedIssues: 546
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-08-19T21:21:46Z"
lastCommitAt: "2026-11-09T11:59:16Z"
lastReleaseAt: "2026-11-02T15:31:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 55
maintainers: ["m00sfett"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e8e09d4359e95ba9a12920559daa89e00b45c3817801643f5f82a56728f85a0/m00sfett/KeepADB"
---

# KeepADB

KeepADB controls Android's **Wireless debugging** from the app, a home-screen widget, or a Quick
Settings tile. The optional Keep-Alive service can turn it back on after a network interruption or
reboot, subject to Android, the selected network rule, and the user's most recently saved intent.

- Android 11 or newer (API 30+)
- No root required
- No runtime dependencies in the shipped app
- Application ID: `de.hohnepeople.keepadb`

KeepADB controls Android's global `Settings.Global.adb_wifi_enabled` setting. Android's mDNS
discovery finds the dynamic Wi-Fi ADB endpoint; KeepADB does not scan a general port range. Android
still requires its own TLS pairing before a new ADB client can connect.

## Install and first start

Install KeepADB from the [official F-Droid catalog](https://f-droid.org/packages/de.hohnepeople.keepadb/)
or download the APK from [GitHub Releases](https://github.com/m00sfett/KeepADB/releases).

Then grant `WRITE_SECURE_SETTINGS` once from a computer that can reach the device over ADB:

~~~sh
adb shell pm grant de.hohnepeople.keepadb android.permission.WRITE_SECURE_SETTINGS
~~~

This Android permission applies to the installed app and survives a reboot.…
