---
repo: "razorpay/razorpay-pod"
name: "razorpay-pod"
description: ":iphone: CocoaPod implementation of Razorpay's Payment SDK. Refer for instructions:"
url: "https://github.com/razorpay/razorpay-pod"
homepage: "https://docs.razorpay.com/v1/page/ios-integration"
language: "Objective-C"
languages: ["Objective-C"]
languagePcts: [84]
stars: 26
forks: 20
openIssues: 31
closedIssues: 86
watchers: 179
contributors: 1071
recentReleases: 0
createdAt: "2016-04-11T13:53:52Z"
lastCommitAt: "2026-07-03T12:21:38Z"
lastReleaseAt: "2021-05-14T15:18:28Z"
status: "watched"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 91
undervaluedScore: 35
maintainers: ["gauravbhardwaj-7"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd2e7038f50bd8d4df681029d3ca5cdc0fc42f5d0241530d400e649bb0d8ccc1/razorpay/razorpay-pod"
---

# razorpay-pod

This repository implements pod for Razorpay's iOS Framework.

## Usage

To run the example project, clone the repo, and run `pod install` from the Example directory first.

## Installation | Docs

### Note:

If your integrating this on Objective-C please replace the line

```
#import <Razorpay/Razorpay.h>
```

with

```
# import <Razorpay/Razorpay-Swift.h> in your viewcontroller.m file
```

razorpay-pod is available through [CocoaPods]. To install
it, simply add the following line to your Podfile

```ruby
pod 'razorpay-pod', '1.2.5'
```

### Note:

for older cocoapod versions check [CHANGELOG](https://github.com/razorpay/razorpay-pod/blob/1.1.12/CHANGELOG.md).

Refer to the documentation from [here](https://razorpay.com/docs/payment-gateway/ios-integration/standard/)

## Swift Package Manager (iOS 13+)

[Swift Package Manager](https://www.swift.org/package-manager/) razorpay-pod is also distributed as Swift Package, follow the below steps for installing the package in your iOS app.

### Installation:

Click File -> Swift Packages -> Add Package Dependency, enter [razorpay-pod repo's URL](https://github.com/razorpay/razorpay-pod). You can also select the dependency…
