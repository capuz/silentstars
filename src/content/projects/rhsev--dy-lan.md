---
repo: "rhsev/dy.lan"
name: "dy.lan"
description: "A URL router for local networks with plugin-based automation. Runs as a container."
url: "https://github.com/rhsev/dy.lan"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [62]
stars: 20
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-01-25T20:37:32Z"
lastCommitAt: "2026-06-26T23:41:16Z"
lastReleaseAt: "2026-06-12T23:18:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 31
maintainers: ["rhsev"]
openGraphImageUrl: "https://opengraph.githubassets.com/c86a0304cd83318dc6dac403e2a2c7faf075a38410614b17556ebc659ec9d6b9/rhsev/dy.lan"
---

# dy.lan

A URL router for local networks with plugin-based automation

---
## What is Dylan?

Designed for local networks. Dylan matches the URL pattern and lets a plugin decide what happens -  whether that's a redirect to an app-specific deep link, a search, a call to a script on a remote Mac via [Milan](https://github.com/rhsev/mi.lan). 

Or call an action in the web interface of your phone. The Dylan server calls a script on your Mac. The terminal output streams live back to the browser on your phone. No SSH client, no login prompt, no per-request authentication. 

Dylan turns local network URLs into workflows. 

---

## Three small examples

**Open a note in DEVONthink**  
`http://dy.lan/dt/a1b2c3d4` - the pattern captures an 8-character alias,
the Mac companion app Milan resolves it via AppleScript, DEVONthink opens the document. 

**Sync configs and install them**  
[grubber-twin](https://github.com/rhsev/grubber-twin) keeps Markdown-based configs in sync between two Macs.
`http://dy.lan/mini/install/foo` matches a pattern, Milan runs the install
script on the remote Mac - no need to authenticate.

**Interactive scripts with input**  
`http://dy.lan/mini/stream/greet` opens…
