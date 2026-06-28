---
repo: "mrmacright/FPS-Logger"
name: "FPS-Logger"
description: "Enable Metal Performance HUD on iPhone, iPad & Apple TV"
url: "https://github.com/mrmacright/FPS-Logger"
homepage: "https://www.fpslogger.com"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
topics: ["fps", "fps-meter", "gaming", "ios", "macos", "metal", "performance-monitoring", "swift", "xcode", "ios-fps-meter"]
stars: 100
forks: 4
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-05-26T03:40:16Z"
lastCommitAt: "2026-06-28T01:33:31Z"
lastReleaseAt: "2025-09-22T06:02:34Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 47
maintainers: ["mrmacright"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3e1a2eb30b287897e24f7a43a35fd61f7705d20dddf3f4974fd31b951a40547/mrmacright/FPS-Logger"
discussionCount: 0
---

# Enable Metal HUD on iPhone, iPad & Apple TV!
[
MOVED TO MAC APP STORE](https://apps.apple.com/app/fps-logger/id6763967836)

## Requirements 
▶ macOS Tahoe 26.2 or later and [M1 or later](https://support.apple.com/en-au/116943)

## Supported platforms for Metal HUD

▶ [iOS 17 or later](https://support.apple.com/en-au/guide/iphone/iphe3fa5df43/17.0/ios/17.0)

▶ [iPadOS 17 or later](https://support.apple.com/en-au/guide/ipad/ipad213a25b2/17.0/ipados/17.0)

▶ Apple TV 4K (1st gen, 2017) or later

> [!IMPORTANT]
> - System-wide HUD support is not possible — Metal HUD works per app by design on iOS, iPadOS, & tvOS  
> - Can I use this app on iPhone or iPad without a Mac? No — Metal HUD requires a Mac for activation on iOS
> - iOS 16 or earlier is not supported as `devicectl` is unavailable

## Manual commands in terminal

**List devices**:
```
xcrun devicectl list devices
```

**Find running apps**:
```
xcrun devicectl device info processes --device <DEVICE_UDID> | grep 'Bundle/Application'
```

**Launch with Default HUD**:
```
xcrun devicectl device process launch \
  -e '{"MTL_HUD_ENABLED": "1"}' \
  --console \
  --device <DEVICE_UDID> \…
