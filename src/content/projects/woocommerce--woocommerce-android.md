---
repo: "woocommerce/woocommerce-android"
name: "woocommerce-android"
description: "WooCommerce Android app"
readmeQualityOk: true
url: "https://github.com/woocommerce/woocommerce-android"
homepage: "https://www.woocommerce.com/mobile"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [96]
topics: ["woocommerce", "android", "kotlin", "mobile-app"]
stars: 320
forks: 148
openIssues: 1
closedIssues: 5967
watchers: 106
contributors: 138
recentReleases: 0
createdAt: "2017-10-05T12:48:30Z"
lastCommitAt: "2026-10-27T12:39:55Z"
lastReleaseAt: "2018-07-16T12:03:11Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 100
undervaluedScore: 41
maintainers: ["irfano", "malinajirka", "hichamboushaba"]
openGraphImageUrl: "https://opengraph.githubassets.com/765fb77c275a71fb404c90b5184053f6093f305c0f63fc1b4dacb0522a75481a/woocommerce/woocommerce-android"
discussionCount: 3
---

## 🎉 Setup Instructions

1. Make sure you've installed [Android Studio](https://developer.android.com/studio).
1. Clone this repository in the folder of your preference, and then enter that folder:

    ```bash
    $ git clone https://github.com/woocommerce/woocommerce-android.git
    $ cd woocommerce-android
    ```

1. Copy `defaults.properties` to the secrets directory: `cp defaults.properties ~/.configure/woocommerce-android/secrets/secrets.properties`. See the [Configuration Files](https://github.com/woocommerce/woocommerce-android/blob/HEAD/docs/project-overview.md#configuration-files) section for a breakdown of the properties.
1. Generate the developer oauth2 tokens. These values get copied into the `~/.configure/woocommerce-android/secrets.properties` file in the next step. See the [OAuth2 Authentication](https://github.com/woocommerce/woocommerce-android/blob/HEAD/docs/project-overview.md#oauth2-authentication) section for details.
1. In Android Studio, open the project from the local repository. This will auto-generate `local.properties` with the SDK location.
1. Optional: Go to Tools → Device Manager and create an emulated device.
1. Run. (Creates a default virtual…
