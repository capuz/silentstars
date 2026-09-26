---
repo: "piot5/keytab"
name: "keytab"
description: "Offline-first keyboard (IME) that doubles as a mobile IDE: built-in file manager, editor, clipboard and snippet tabs with on-device word prediction. No INTERNET permission, no data collection."
readmeQualityOk: true
url: "https://github.com/piot5/keytab"
homepage: "https://github.com/piot5/keytab/releases/latest"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [94]
topics: ["android", "android-ime", "input-method", "keyboard", "kotlin", "offline-first", "privacy", "termux"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-01T17:39:49Z"
lastCommitAt: "2026-09-26T08:45:59Z"
lastReleaseAt: "2026-09-15T09:54:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 61
maintainers: ["piot5"]
openGraphImageUrl: "https://opengraph.githubassets.com/64085f208195783f4c99fa9cc18a1f39851b566dfd02d2fc0a5feabe4789cb1f/piot5/keytab"
---

# KeyTab

-3ddc84?logo=android&logoColor=white)

Mobile IDE shaped like a keyboard (IME): a tabbed file manager, an editor/clipboard, snippets, with offline word prediction. 100% Kotlin, builds with Gradle.

## Download

Grab the latest signed APK from the [GitHub Releases](https://github.com/piot5/keytab/releases/latest):

Every tagged release (`v*`) is built and published automatically by CI:

| File | Purpose |
|---|---|
| `KeyTab-<version>.apk` | Signed release APK — install this |

Install: open the APK in a file manager (allow "install unknown apps"), then enable KeyTab in *Settings → System → Languages & input → On-screen keyboard* and switch to it in any text field.

## Screenshots

The images are generated from the real resources by `scripts/make_screens.py`
(colours from `values/colors.xml` and `values-night/colors.xml`, layout from
`panel_keyboard_letters.xml`), so they drift with the code instead of against
it. They show the keyboard view, not a photo of a device:

| Light theme (QWERTZ, de) | Dark theme (default) | Snippet bar |
|---|---|---|
|  |  |  |

The top suggestion is rendered 2× wider with a green accent bar, the likely
next key is scaled up (dynamic key…
