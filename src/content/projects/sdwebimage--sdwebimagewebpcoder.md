---
repo: "SDWebImage/SDWebImageWebPCoder"
name: "SDWebImageWebPCoder"
description: "A WebP coder plugin for SDWebImage, use libwebp"
readmeQualityOk: true
url: "https://github.com/SDWebImage/SDWebImageWebPCoder"
language: "Objective-C"
languages: ["Objective-C", "C"]
languagePcts: [76, 21]
topics: ["macos", "ios", "tvos", "watchos", "sdwebimage", "webp", "animated-webp", "cocoapods", "carthage"]
stars: 275
forks: 100
openIssues: 9
closedIssues: 47
watchers: 6
contributors: 15
recentReleases: 0
createdAt: "2018-08-28T10:54:48Z"
lastCommitAt: "2026-07-20T06:33:27Z"
lastReleaseAt: "2019-06-02T08:05:44Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 96
undervaluedScore: 23
maintainers: ["dreampiggy", "therehello"]
openGraphImageUrl: "https://opengraph.githubassets.com/508436b163d4230c2bddf4b45eb491c5179f28b140d92d0bc14910eece65642c/SDWebImage/SDWebImageWebPCoder"
---

# SDWebImageWebPCoder

Starting with the SDWebImage 5.0 version, we moved the WebP support code and [libwebp](https://github.com/webmproject/libwebp) from the Core Repo to this stand-alone repo.

SDWebImageWebPCoder supports both WebP decoding and encoding, for Static WebP or Animated WebP as well.

Note: Apple's ImageIO supports WebP decoding from iOS 14/tvOS 14/watchOS 7/macOS 11, so SDWebImage on those platform can also decode WebP images (using `SDWebImageAWebPCoder` built-in coder). However it may contains some limitation, check https://github.com/SDWebImage/SDWebImage/issues/3558, you can still force to use this coder on those platforms by adding this coder.

## Requirements

+ iOS 9.0
+ macOS 10.11
+ tvOS 9.0
+ watchOS 2.0
+ Xcode 11.0

## Installation

#### CocoaPods

SDWebImageWebPCoder is available through [CocoaPods](http://cocoapods.org). To install it, simply add the following line to your Podfile:

```ruby
pod 'SDWebImageWebPCoder'
```

#### Carthage

SDWebImageWebPCoder is available through [Carthage](https://github.com/Carthage/Carthage).

```
github "SDWebImage/SDWebImageWebPCoder"
```

#### Swift Package Manager (Xcode 11+)

SDWebImageWebPCoder is available…
