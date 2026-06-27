---
repo: "ArcaneChat/android"
name: "android"
description: "ArcaneChat for Android: ⚡ Fast encrypted chats for the family"
url: "https://github.com/ArcaneChat/android"
homepage: "https://arcanechat.me"
language: "Java"
languages: ["Java", "HTML"]
languagePcts: [62, 36]
topics: ["email", "chat", "decentralization", "encryption", "deltachat"]
stars: 372
forks: 23
openIssues: 33
closedIssues: 70
watchers: 8
contributors: 15
recentReleases: 0
createdAt: "2019-04-05T14:35:35Z"
lastCommitAt: "2026-06-27T00:47:08Z"
lastReleaseAt: "2022-10-12T19:40:29Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "funded"]
healthScore: 89
undervaluedScore: 37
maintainers: ["adbenitez", "d2weber", "wchen342"]
openGraphImageUrl: "https://opengraph.githubassets.com/55734d68ee297b142195924c229e9ecb5a0859e38aa0e7a48a28295ebc62f491/ArcaneChat/android"
fundingLinks: ["KO_FI:https://ko-fi.com/adbenitez", "LIBERAPAY:https://liberapay.com/adbenitez", "CUSTOM:https://arcanechat.me/#contribute"]
---

## ArcaneChat Android Client

A [Delta Chat](https://delta.chat/) client for Android. Learn more at: https://arcanechat.me

[<img src="store/get-it-on-gplay.png" alt="Get it on Google Play" height="48">](https://play.google.com/store/apps/details?id=com.github.arcanechat)
[<img src="store/get-it-on-fdroid.png" alt="Get it on F-Droid" height="48">](https://f-droid.org/packages/chat.delta.lite)
[<img src="store/get-it-on-github.png" alt="Get it on GitHub" height="48">](https://github.com/ArcaneChat/android/releases/latest/download/ArcaneChat-gplay.apk)

# WebXDC

This app has some extended support for WebXDC apps:

- `window.webxdc.arcanechat` a string with the ArcaneChat version and can be used by app developers
  to detect when they can use the ArcaneChat-specific features.
- `sendToChat()`: extra property `subject` can be set to a text string to set message/email's subject.
- `sendToChat()`: extra property `html` can be set to a string of html markup to set the HTML part of the email/message.
- `sendToChat()`: the file object parameter also accepts a `type` field that can be one of:
  * `"sticker"`
  * `"image"`
  * `"audio"`
  * `"video"`
  * `"file"` (default if `type` field is…
