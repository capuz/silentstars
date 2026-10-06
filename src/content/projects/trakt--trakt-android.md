---
repo: "trakt/trakt-android"
name: "trakt-android"
description: " Open source official native Trakt client for Android / Android TV"
readmeQualityOk: true
url: "https://github.com/trakt/trakt-android"
homepage: "https://play.google.com/store/apps/details?id=tv.trakt.trakt"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 72
forks: 9
openIssues: 32
closedIssues: 186
watchers: 4
contributors: 7
recentReleases: 0
createdAt: "2025-07-16T14:33:05Z"
lastCommitAt: "2026-10-06T10:42:50Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 51
maintainers: ["michaldrabik", "trakt-bot[bot]", "vladjerca"]
openGraphImageUrl: "https://opengraph.githubassets.com/15cd9fffa4c34ed21de24a3bfded2fe2972b06b952da8ea0879c763da0148f01/trakt/trakt-android"
---

&nbsp;
&nbsp;
&nbsp;

## Supported Form Factors

- Mobile
- Android TV
- Tablets

## Getting Started

1. Download and install the latest stable Android Studio:

   https://developer.android.com/studio
   
2. Clone this repo and open it.
3. Open `local.properties` and make sure they contain all required values like below:
```
TRAKT_API_KEY = "PUT_YOUR_VALUE_HERE"
YOUNIFY_API_KEY "PUT_YOUR_VALUE_HERE (Optional)"

KEYSTORE_ALIAS = PUT_YOUR_VALUE_HERE
KEYSTORE_PASSWORD = PUT_YOUR_VALUE_HERE
KEYSTORE_KEY_PASSWORD = PUT_YOUR_VALUE_HERE
```
4. Download `google-services.json` Firebase config from your Firebase console project settings:
      
   Put it into `/app/` folder -> `/app/google-services.json`.

6. Make sure `keystore.jks` is located in the root folder (same level as `/local.properties`)

You are all set!

## Localisation 🌐

Want to help translating Trakt into your native language?
Have you spotted a mistake or an improvement?

Join the CrowdIn project: [Translate Trakt](https://crwd.in/trakt-poc/3857d5ea667dd425fbd0cb2e4e80dc192749600)

## Contributions 👏

All contributions are welcome BUT, as a general rule we try to keep our Trakt apps in parity with what's happening on the…
