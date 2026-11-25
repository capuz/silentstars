---
repo: "donislawdev/BeanNetworkTester"
name: "BeanNetworkTester"
description: "Simulate bad network conditions on Windows/Linux - latency, burst packet loss, jitter, bandwidth limits, drops - to test how your app behaves on a poor connection. GUI + CLI, comes with network tools"
readmeQualityOk: true
url: "https://github.com/donislawdev/BeanNetworkTester"
homepage: "https://beannetworktester.donislawdev.com/"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [71, 29]
topics: ["game-testing", "jitter", "latency", "network-conditions", "network-emulation", "network-simulation", "network-testing", "packet-loss", "python", "qa"]
stars: 77
forks: 5
openIssues: 3
closedIssues: 5
watchers: 2
contributors: 3
recentReleases: 3
createdAt: "2026-07-18T13:31:27Z"
lastCommitAt: "2026-11-25T13:18:26Z"
lastReleaseAt: "2026-09-25T11:08:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 91
undervaluedScore: 38
maintainers: ["donislawdev", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1304930068/d878ba4e-1e5e-47eb-a11c-563a08f847fa"
fundingLinks: ["CUSTOM:https://donislawdev.com/support/"]
discussionCount: 1
---

# Bean Network Tester 🫘 - bad network conditions simulator
  &nbsp
  &nbsp
  &nbsp
  &nbsp
  &nbsp

**Bean Network Tester** is a tool for testers and developers: check how your application behaves
on a poor connection. Like Clumsy or NetLimiter, it lets you deliberately degrade the network -
add ping, drop packets, cap the speed, tear connections down, and more. It works by intercepting
traffic with the **[WinDivert](https://www.reqrypt.org/windivert.html)** driver (via
**[PyDivert](https://github.com/ffalcinelli/pydivert)**), and offers both a clear windowed
interface with tooltips and a command-line mode for CI.

⭐ **If it saved you time, leave a star.** That is how the next tester who needs it finds out it
exists.

**What it can do**
