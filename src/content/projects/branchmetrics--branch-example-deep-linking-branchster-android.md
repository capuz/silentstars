---
repo: "BranchMetrics/Branch-Example-Deep-Linking-Branchster-Android"
name: "Branch-Example-Deep-Linking-Branchster-Android"
description: "Branch Metrics Example application for Android mobile deep linking / deeplinking - the Branchster app. Branch helps mobile apps grow with deep links / deeplinks that power referral systems, sharing links and invites with full attribution and analytics."
readmeQualityOk: true
url: "https://github.com/BranchMetrics/Branch-Example-Deep-Linking-Branchster-Android"
homepage: "https://dev.branch.io/"
language: "Kotlin"
languages: ["Kotlin", "Java"]
languagePcts: [77, 23]
stars: 97
forks: 22
openIssues: 5
closedIssues: 1
watchers: 82
contributors: 154
recentReleases: 0
createdAt: "2014-12-31T02:05:00Z"
lastCommitAt: "2026-07-30T06:07:10Z"
lastReleaseAt: "2023-10-28T00:52:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 78
undervaluedScore: 39
maintainers: ["rob-gioia-branch", "gdeluna-branch", "jason-litton-branch"]
openGraphImageUrl: "https://opengraph.githubassets.com/d73ca8e724f8502793e516596be41d17fd8805b80905571114facba00d01a242/BranchMetrics/Branch-Example-Deep-Linking-Branchster-Android"
---

Branchster-Android
==================

## Configuring Keys and Secrets
This repository does not contain API keys so you need to define your own in order for the connected APIs to function. With the exception of the *Crashlytics ApiKey* (see the note below) the keys are defined as XML string resources and referenced at build-time. If you build the project as-is, you will get something like the following error:

```
Error: .. No resource found that matches the given name (at 'value' with value '@string/..').
```

To set up your own API keys and get rid of this error:

1. Open up **api_keys.xml** which exists in the */res/values* folder.
2. Insert your Branch App Key, Facebook ID and Twitter key/secret in this file.
3. Clean/Rebuild your project.

```XML
<?xml version="1.0" encoding="utf-8"?>
<resources>

    
    <string name="bnc_app_key">YOUR BRANCH APP KEY</string>

    
    <string name="facebook_app_id">YOUR FACEBOOK APP ID</string>

    
    <string name="twitter_key">YOUR TWITTER APP KEY</string>
    <string name="twitter_secret">YOUR TWITTER APP SECRET</string>

</resources>
```

### Fabric/Crashlytics (required for Twitter integration)

Twitter's Fabric framework doesn't…
