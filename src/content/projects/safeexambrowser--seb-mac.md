---
repo: "SafeExamBrowser/seb-mac"
name: "seb-mac"
description: "Safe Exam Browser for macOS and iOS"
readmeQualityOk: true
url: "https://github.com/SafeExamBrowser/seb-mac"
homepage: "https://www.safeexambrowser.org/macosx"
language: "C"
languages: ["C", "Objective-C"]
languagePcts: [60, 35]
topics: ["seb", "seb-mac", "macos", "xcode", "e-assessment", "webbrowser", "kiosk", "kiosk-mode", "lms", "learning"]
stars: 134
forks: 66
openIssues: 94
closedIssues: 296
watchers: 16
contributors: 9
recentReleases: 0
createdAt: "2015-07-23T20:45:13Z"
lastCommitAt: "2026-10-01T10:23:01Z"
lastReleaseAt: "2021-03-22T18:28:40Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "community_hub"]
healthScore: 92
undervaluedScore: 48
maintainers: ["danschlet"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c38936da09700717b859688ec3517f43348926acd57fca8e74139f445d4f28c/SafeExamBrowser/seb-mac"
discussionCount: 164
---

# seb-mac
Safe Exam Browser for macOS and iOS,
SEB Verificator for macOS

To build, SafeExamBrowser.xcworkspace needs to be opened in a recent version of Xcode (currently 14.3.1). Note: When building SEB for iOS with Xcode 15.x, the custom SEB User Agent cannot be set in UIWebView, which leads to issues when using some SEB integrations in assessment systems. For building, own code signing identities need to be added. SEB uses the com.apple.developer.edu-assessment-mode entitlement, which needs to be requested from Apple for your developer team.

Currently main reflects SEB for macOS/iOS 3.3.2 or newer. SEB is using a unified macOS/iOS/iPadOS Xcode project (Xcode workspace with both macOS and iOS targets and a SEBVerificator target). 

This repository contains the open source SEB code base. Binary security modules and Zoom integration (with proprietary licenses) are not included. You might have to remove missing references in the Xcode workspace and particular security-related code. Please note that we can only consult SEB Alliance Platinum or Diamond contributors about building (customized) SEB versions. The open source code is available mainly for educational purposes and not for…
