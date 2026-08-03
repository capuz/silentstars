---
repo: "Chillsmeit/FirefoxSmoothScroll"
name: "FirefoxSmoothScroll"
description: "Snappy & Fluid Firefox Scroll"
readmeQualityOk: true
url: "https://github.com/Chillsmeit/FirefoxSmoothScroll"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [98]
topics: ["customization", "firefox", "firefox-profile", "firefox-tweaks", "fluid", "librewolf", "librewolf-profile", "mullvad-browser", "scrolling", "userjs"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-11-28T00:36:25Z"
lastCommitAt: "2026-08-03T06:45:25Z"
lastReleaseAt: "2024-07-13T19:37:03Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 34
maintainers: ["Chillsmeit"]
openGraphImageUrl: "https://opengraph.githubassets.com/4125b00e0eecf5028fbe7f06f1d561044c4a4fb136cb30d3c369f031000043b7/Chillsmeit/FirefoxSmoothScroll"
---

# FirefoxSmoothScroll

**Tries to deliver a smoother scrolling experience in Firefox** <br>
- *Works in any OS, and Firefox forks (Librewolf, Mullvad browser, etc)* <br>

#### How to "Install"?
- Just copy this repository `user.js` to your Firefox profile folder<br>
#### How do you find your Firefox profile folder?
- In the Firefox address bar type `about:support` click `Open Directory` in `Profile Directory`
- Drag and drop the `user.js` into the folder

#### Arkenfox users

- Arkenfox uses its own `user.js`, so don't overwrite it.
- Instead, rename this file to `user-overrides.js` and put it in your profile folder.
- Arkenfox's updater merges it into the final `user.js` automatically, so your settings survive updates.

#### ⚠️ Fingerprinting protection, if you use Firefox with Arkenfox, Librewolf or Mullvad

- `privacy.resistFingerprinting` locks the framerate to 60Hz, which is why scrolling feels clunky with it on. 
- **This `user.js` sets it to `false`, which disables fingerprinting protection.**
- That protection is most of the point of these browsers, so set it back to `true` and accept the 60Hz scrolling if you want it.

#### Optional:
- I included in this repository two…
