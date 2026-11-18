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
stars: 357
forks: 133
openIssues: 13
closedIssues: 6350
watchers: 103
contributors: 134
recentReleases: 0
createdAt: "2018-01-24T13:49:56Z"
lastCommitAt: "2026-11-18T11:14:36Z"
lastReleaseAt: "2018-10-04T15:16:35Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 100
undervaluedScore: 40
maintainers: ["staskus", "iamgabrielma", "kidinov"]
openGraphImageUrl: "https://opengraph.githubassets.com/65f3e7d2d56d76258d392f05caaa66883df8838e5a8d6fa49926cabc3ad23800/woocommerce/woocommerce-ios"
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
