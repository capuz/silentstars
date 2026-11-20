---
repo: "XcodeReleasesOrg/xcinfo"
name: "xcinfo"
description: "Install as many Xcodes at once as you can"
readmeQualityOk: true
url: "https://github.com/XcodeReleasesOrg/xcinfo"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
stars: 480
forks: 20
openIssues: 0
closedIssues: 25
watchers: 6
contributors: 7
recentReleases: 1
createdAt: "2019-09-30T14:28:06Z"
lastCommitAt: "2026-11-19T11:58:51Z"
lastReleaseAt: "2026-11-17T21:02:23Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 100
undervaluedScore: 36
maintainers: ["trispo"]
openGraphImageUrl: "https://opengraph.githubassets.com/e49a4bea4efa590513c4a3c0e22384b18483d30015542f608a54633b581c59e2/XcodeReleasesOrg/xcinfo"
---

# xcinfo

With `xcinfo` you can access all information available at xcodereleases.com and download and install Xcode from Apple's Developer Portal. It also finds the Xcode applications installed on this Mac, switches between them and removes them safely.

```
USAGE: xcinfo <subcommand>

SUBCOMMANDS:
  cleanup                 Remove the stored Apple ID and Apple session
  download                Downloads an Xcode version
  extract                 Extract an Xcode archive (.xip or .aea)
  info                    Xcode version info
  install                 Install an Xcode version
  installed               Show installed Xcode versions
  list                    List all available Xcode versions
  signin                  Sign in to Apple and store the Apple ID and session
  switch                  Switch to another installed Xcode
  tui                     Browse, install and uninstall Xcode versions in a
                          full-screen terminal UI
  uninstall               Uninstall an Xcode version
```

`xcinfo help <subcommand>` shows every option of a subcommand. Plain `xcinfo` opens the terminal UI in an interactive terminal and prints the help otherwise.
