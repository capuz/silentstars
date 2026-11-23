---
repo: "amirwmr/tether"
name: "tether"
description: "Use an Android phone's calls, SMS, contacts and call history from your iPhone over an end-to-end encrypted Bluetooth link. No server, no account."
readmeQualityOk: true
url: "https://github.com/amirwmr/tether"
language: "C"
languages: ["C", "Kotlin"]
languagePcts: [67, 20]
topics: ["android", "bluetooth-low-energy", "callkit", "ios", "kotlin", "sms", "swift"]
stars: 25
forks: 4
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-11-22T11:27:36Z"
lastCommitAt: "2026-11-23T10:27:04Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 36
maintainers: ["amirwmr"]
openGraphImageUrl: "https://opengraph.githubassets.com/3486d6ed3665244b18bc9fe1b6b6ce89fac828801b7f3875d4f6b66f65968182/amirwmr/tether"
---

# Tether

Tether puts an Android phone's calls, text messages, contacts and call history on your iPhone or iPad, or on a
second Android phone. The Android phone keeps the SIM cards and can stay in a bag; the two talk directly over an
end-to-end encrypted Bluetooth link, with no server and no account.

*Screenshots from the iOS simulator with demo data (test numbers and made-up names).*

## What works

- **Calls** through the iPhone's own call screen (CallKit): incoming ringing, answer, decline, dial, hang up, hold,
  mute, keypad tones, speaker, call waiting, "move the call here" between devices. Call audio is bridged both ways
  (Opus, wideband) on Android phones that allow it, see [Compatibility](#compatibility). An **Audio** menu moves a
  call to a Bluetooth headset or the car and back.
- **Numbers from other apps**: a "Call with" action for Shortcuts and Siri (also finds a number in shared text),
  `tether://dial` links, call-backs from the Phone app's Recents, and on iOS 18.2+ with a paid developer account,
  the default calling app for `tel:` links. Numbers are grouped like phones show them, on the keypad as you type.
