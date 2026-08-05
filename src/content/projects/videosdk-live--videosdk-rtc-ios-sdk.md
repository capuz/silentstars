---
repo: "videosdk-live/videosdk-rtc-ios-sdk"
name: "videosdk-rtc-ios-sdk"
description: "IOS SDK is a client for real-time communication for ios devices. It inherits the same terminology as all other SDKs do."
readmeQualityOk: true
url: "https://github.com/videosdk-live/videosdk-rtc-ios-sdk"
homepage: "https://docs.videosdk.live/ios/guide/video-and-audio-calling-api-sdk/concept-and-architecture"
language: "Objective-C"
languages: ["Objective-C"]
languagePcts: [81]
topics: ["livestream", "realtime", "video", "webrtc-call", "webrtc-demos"]
stars: 6
forks: 7
openIssues: 3
closedIssues: 4
watchers: 2
contributors: 24
recentReleases: 0
createdAt: "2021-09-14T12:57:22Z"
lastCommitAt: "2026-08-05T06:06:47Z"
lastReleaseAt: "2022-03-25T09:50:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 81
undervaluedScore: 57
maintainers: ["parth-videosdk"]
openGraphImageUrl: "https://opengraph.githubassets.com/bcdddbfae12df4bdd52ff4ffec84257a82d4dad0a394e913a5b523f818990ec5/videosdk-live/videosdk-rtc-ios-sdk"
---

# VideoSDK RTC iOS SDK

Official iOS SDK of [videosdk.live](https://videosdk.live/)

## Features

- VideoSDK enables opportunity to integrate immersive video experiences into your application.
- Real-time comunication SDK is built with blend of webRTC and optimised UDP protocol. Our SDK helps developers to add real-time audio and video calls to any iOS mobile app.

## Requirements

- iOS 13.0+
- Xcode 12.0+
- Swift 5.0+

## Installation

### CocoaPods

[CocoaPods](https://cocoapods.org) is a dependency manager for Cocoa projects. For usage and installation instructions, visit their website. To integrate VideoSDK into your Xcode project using CocoaPods, specify it in your `Podfile`:

```ruby
pod 'VideoSDKRTC'
or 
pod 'VideoSDKRTC', :git => 'https://github.com/videosdk-live/videosdk-rtc-ios-sdk.git'
```

## Important

- You will need to set 'Enable Bitcode' to false.

## Usage

### Import

```swift
import VideoSDKRTC
```

### Configure VideoSDK

```swift
VideoSDK.config(token: <server token here>)
```

- JWT server token needs to be generated from your server.
- If you don't have your server setup yet, follow this on [How to setup a local server]().

### Initialize Meeting

```swift…
