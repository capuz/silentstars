---
repo: "MocLG/Time-My-Galaxy"
name: "Time-My-Galaxy"
description: "CVE-2026-98260 timerfd exploit and Shizuku launcher for the Samsung"
readmeQualityOk: true
url: "https://github.com/MocLG/Time-My-Galaxy"
language: "C"
languages: ["C", "Java"]
languagePcts: [48, 38]
stars: 22
forks: 8
openIssues: 6
closedIssues: 12
watchers: 3
contributors: 4
recentReleases: 8
createdAt: "2026-11-08T21:07:31Z"
lastCommitAt: "2026-11-26T23:36:17Z"
lastReleaseAt: "2026-11-26T23:38:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 49
maintainers: ["MocLG", "zmxnpquryet-gif", "000yesnt"]
openGraphImageUrl: "https://opengraph.githubassets.com/7326e024490e18461585865759b1b443bba7b8dd73e5fc4e3ec6326e5513cdfc/MocLG/Time-My-Galaxy"
---

# Time-My-Galaxy

CVE-2026-98260 timerfd exploit and Shizuku launcher for Samsung devices.
Payloads are keyed by the Samsung PDA string from
`ro.build.version.incremental`.

The exploit runs as the Android shell user (uid 2000) through Shizuku and
loads the selected provider, KernelSU 3.2.5 (`me.weishu.kernelsu`) or
KernelSU-Next 3.4.2 (`com.rifsxd.ksunext`). It never runs inside the app
sandbox.

Payloads are not bundled in the APK and are not needed to build it. On first
use the app downloads the signed bundle for the running build and keeps it for
offline use. The app needs Android 12 or newer. The green Material 3 interface
has three pages: Exploit, Tools, and History.

## Layout

- `app/` Android app sources and resources
- `payloads/<BUILD>/profile.json` per-build profile
- `payloads/ksud-<release>` KernelSU helper per kernel release
- `payloads/ksud-next-<release>` KernelSU-Next helper per kernel release
- `exploit/` payload sources and build script
- `tools/` firmware porting and packing scripts

## Build

The APK needs JDK 17 and Android SDK platform 35:

```sh
./build.sh
adb install -r app/build/outputs/apk/debug/app-debug.apk
```
