---
repo: "woocommerce/woocommerce-ios"
name: "woocommerce-ios"
description: "WooCommerce iOS app"
readmeQualityOk: true
url: "https://github.com/woocommerce/woocommerce-ios"
homepage: "https://www.woocommerce.com/mobile"
language: "Swift"
languages: ["Swift"]
languagePcts: [97]
topics: ["woocommerce", "ios", "swift", "mobile-app"]
stars: 358
forks: 130
openIssues: 3
closedIssues: 6349
watchers: 104
contributors: 134
recentReleases: 0
createdAt: "2018-01-24T13:49:56Z"
lastCommitAt: "2026-10-09T10:50:23Z"
lastReleaseAt: "2018-10-04T15:16:35Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 100
undervaluedScore: 40
maintainers: ["staskus", "itsmeichigo", "RafaelKayumov"]
openGraphImageUrl: "https://opengraph.githubassets.com/361165c23a0db31467376161899967345141c551e1dc2968844eb132815a90a7/woocommerce/woocommerce-ios"
---

## 🎉 Build Instructions

1. Download Xcode

    At the moment *WooCommerce for iOS* uses Swift 5.7 and requires Xcode 14 or newer. Previous versions of Xcode can be [downloaded from Apple](https://developer.apple.com/downloads/index.action).

2. Install Ruby. We recommend using [rbenv](https://github.com/rbenv/rbenv) to install it. Please refer to the [`.ruby-version` file](https://github.com/woocommerce/woocommerce-ios/blob/HEAD/.ruby-version) for the required Ruby version.

    We use Ruby to manage the third party dependencies and other tools and automation.

2. Clone project in the folder of your preference

    ```bash
    git clone https://github.com/woocommerce/woocommerce-ios.git
    ````

3. Enter the project directory

    ```bash
    cd woocommerce-ios
    ```

4. Install the third party dependencies and tools required to run the project.

    ```bash
    brew install xz && bundle install && bundle exec rake dependencies
    ```

    This command installs the required build tools and dependencies.

    Automattic contributors should first install and set up [`a8c-secrets`](https://github.com/Automattic/a8c-secrets); the command above then decrypts the project secrets.…
