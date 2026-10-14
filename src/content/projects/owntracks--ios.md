---
repo: "owntracks/ios"
name: "ios"
description: "OwnTracks' iPhone App"
readmeQualityOk: true
url: "https://github.com/owntracks/ios"
homepage: "http://owntracks.org"
language: "Objective-C"
languages: ["Objective-C", "Swift"]
languagePcts: [67, 32]
topics: ["owntracks", "objective-c", "iphone", "ipad", "geolocation", "mqtt", "cocoapods"]
stars: 454
forks: 107
openIssues: 23
closedIssues: 865
watchers: 24
contributors: 6
recentReleases: 0
createdAt: "2014-02-03T13:46:26Z"
lastCommitAt: "2026-10-14T08:57:47Z"
lastReleaseAt: "2017-08-30T13:13:31Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 92
undervaluedScore: 30
maintainers: ["ckrey"]
openGraphImageUrl: "https://opengraph.githubassets.com/0344d0f42c9790f0b9f3d76877924e63ca28256bb12d2d74d6df66490a330954/owntracks/ios"
fundingLinks: ["LIBERAPAY:https://liberapay.com/owntracks.org"]
discussionCount: 1
---

ios
===

# OwnTracks' iPhone App

OwnTracks initially was __MQTTitude__.

# Prepare to Compile and Run 

 ## Xcode
 Staying in the `OwnTracks/` directory,
 launch `xcode`:

         % open OwnTracks.xcodeproj

 Next, click on the `OwnTacks` project and you will see two targets, `OwnTracks` and `OwnTracksToday`.
 For each project, go to the `General` tab.

 For the `OwnTracks` target, set the Bundle Identifier accordingly:

         com.example.OwnTracks

 For the `OwnTracks` project, go to the `Signing and Capabilities` tab and set the appropriate team.
 Then scroll down to `App Groups`,
 uncheck `group.org.owntracks.OwnTracks`,
 and then click on the `+` to create your own group, e.g.,

         group.com.example.OwnTracks

 Then scroll down to `App Groups`,
 uncheck `group.org.owntracks.OwnTracks`,
 and check the group you create for the `OwnTracks` project.

 **Note** that most these changes will result in `Xcode` creating provision profiles, repairing things, etc.
 Please take your time and be patient!

 With these steps complete,
 you should be able to compile and run the project.
