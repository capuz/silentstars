---
repo: "Maxteabag/turbotap"
name: "turbotap"
description: "Fast, headless CLI & multi-step flow runner for physical iPhones over Wi-Fi"
readmeQualityOk: true
url: "https://github.com/Maxteabag/turbotap"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["ai-agents", "automation", "cli", "ios", "iphone", "ocr", "webdriveragent"]
stars: 60
forks: 7
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-11-23T16:16:26Z"
lastCommitAt: "2026-11-26T13:02:55Z"
lastReleaseAt: "2026-11-25T09:58:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 34
maintainers: ["Maxteabag"]
openGraphImageUrl: "https://opengraph.githubassets.com/6767a40babeb1a35f644d5f0fc4392e1bdf1b1901f6074a6946646202c41dbce/Maxteabag/turbotap"
---

CLI for driving a real iPhone over Wi-Fi from your terminal or an AI agent (Claude Code, Codex, etc.).

I put this together because controlling an iPhone one screenshot at a time through an LLM is painfully slow. Grabbing a frame, waiting on the model to pick coordinates, and waiting another second per tap on stock WebDriverAgent turns a 5-tap task into a minute of waiting. `turbotap` takes a whole sequence of steps in one command, runs them locally against a patched WebDriverAgent on the phone, and returns JSON with the text and buttons on screen.

## Examples

```bash
# Open Settings -> General -> About and read the iOS version
turbotap flow launch:com.apple.Preferences scrollto:General tap:General tap:About wait:"iOS Version" read

# Open Spotify -> Your Library -> Liked Songs and read the list
turbotap flow open:Spotify tap:"Your Library" tap:"Liked Songs@y>150" wait:songs read:ocr tap:Back

# Open Weather and read the forecast (~0.6-1.1s)
turbotap flow open:Weather read

# Search the App Store for Angry Birds and install it
turbotap flow open:com.apple.AppStore search:"Angry Birds" tap:"Angry Birds 2" tap:Get
```
