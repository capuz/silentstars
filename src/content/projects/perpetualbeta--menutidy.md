---
repo: "PerpetualBeta/MenuTidy"
name: "MenuTidy"
description: "A lightweight macOS menu bar manager that collapses third-party icons behind a chevron."
readmeQualityOk: true
url: "https://github.com/PerpetualBeta/MenuTidy"
homepage: "https://jorviksoftware.cc/utilities/menutidy"
language: "Swift"
languages: ["Swift", "Objective-C"]
languagePcts: [62, 36]
topics: ["macos", "menu-bar", "swift"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-29T00:58:45Z"
lastCommitAt: "2026-10-09T10:49:49Z"
lastReleaseAt: "2026-05-02T19:48:14Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 58
maintainers: ["PerpetualBeta"]
openGraphImageUrl: "https://opengraph.githubassets.com/82422a6a309ac1a44a37a26b032d38af133aebefc6e4f06aad3db82a2af66d12/PerpetualBeta/MenuTidy"
---

# MenuTidy

> ## macOS 27 works differently
>
> **It works again, but by a different route.** macOS 27 draws the whole menu bar
> as a single window. MenuTidy used to hide icons with an invisible spacer that
> pushed its neighbours off the edge, and there are no longer any neighbouring
> windows to push, so that technique cannot work on 27 and never will again.
>
> Instead, MenuTidy now asks macOS to do the hiding. It tells the system which
> icons should stay and the system hides the rest and reflows the bar itself.
> Collapsing is instant, no app is restarted, and there is no spacer.
>
> Two things follow from that, both only on macOS 27:
>
> - **Accessibility is required, not optional.** MenuTidy has to work out which
>   icons sit to the left of the chevron, and that is the only way to ask. On
>   macOS 14 to 26 the permission was needed only for Reveal Hidden Icons.
> - **Reveal Hidden Icons is gone, because macOS 27 does it.** The system grew
>   its own control for reaching icons tucked behind the notch, which is what
>   that feature existed for.
> - **Notification Centre works from the clock again**, collapsed or expanded,
>   as of 2.3.0. macOS will not open it while the…
