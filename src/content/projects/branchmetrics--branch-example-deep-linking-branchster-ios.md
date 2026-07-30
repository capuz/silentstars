---
repo: "BranchMetrics/Branch-Example-Deep-Linking-Branchster-iOS"
name: "Branch-Example-Deep-Linking-Branchster-iOS"
description: "Branch Metrics example application for iOS mobile deep linking / deeplinking - the Branchster app. Branch helps mobile apps grow with deep links / deeplinks that power referral systems, sharing links and invites with full attribution and analytics."
readmeQualityOk: true
url: "https://github.com/BranchMetrics/Branch-Example-Deep-Linking-Branchster-iOS"
homepage: "https://dev.branch.io/references/ios_sdk/#get-the-demo-app"
language: "Swift"
languages: ["Swift", "Objective-C"]
languagePcts: [60, 40]
stars: 109
forks: 24
openIssues: 4
closedIssues: 0
watchers: 78
contributors: 159
recentReleases: 0
createdAt: "2014-09-07T20:43:00Z"
lastCommitAt: "2026-07-30T06:06:45Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 72
undervaluedScore: 33
maintainers: ["rob-gioia-branch", "gdeluna-branch", "jason-litton-branch"]
openGraphImageUrl: "https://opengraph.githubassets.com/602313fba6d6abeb6d8971b2b573834a7132ad10d6d34c1c333ee3c20a51b571/BranchMetrics/Branch-Example-Deep-Linking-Branchster-iOS"
---

## Create a personal copy of the Branchsters app for testing!

1. From the command line:
     - Clone the repo: `git clone git@github.com:BranchMetrics/Branch-Example-Deep-Linking-Branchster-iOS.git`
     - `cd Branch-Example-Deep-Linking-Branchster-iOS/`
     - `pod install`
2. In Finder open: **BranchMonsterFactory.xcworkspace**
3. In Xcode click on the root node of the project: BranchMonsterFactory
4. Under Targets select BranchMonsterFactory, then the General tab
5. Change the Bundle Identifier to something **unique** (for this demo we'll use `io.branch.Objective-C.Branchsters`)
6. Change the Team to your Team (it must be a *paid* Apple Developer Account) and click **Fix Issue** to generate a new Provisioning Profile
7. Log in to the [Branch dashboard](https://dashboard.branch.io) and create a new app from the drop-down menu in the top right cornder
8. On the Settings, screen copy the Branch key
9. In the Xcode project's **info.plist** file, change the `branch_key` entry to the value of your new Branch key key
10. Add a new String key to the **info.plist** file: `branch_app_domain`
11. Populate the new `branch_app_domain` key with the value of the **Default domain name** field…
