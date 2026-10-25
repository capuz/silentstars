---
repo: "Ansuel/tch-nginx-gui"
name: "tch-nginx-gui"
description: "Modified file to apply to a stock technicolor GUI "
readmeQualityOk: true
url: "https://github.com/Ansuel/tch-nginx-gui"
language: "Lua"
languages: ["Lua"]
languagePcts: [30]
topics: ["technicolor", "agtef", "gui", "forum", "ansuel"]
stars: 379
forks: 59
openIssues: 116
closedIssues: 807
watchers: 16
contributors: 33
recentReleases: 0
createdAt: "2017-10-06T22:39:44Z"
lastCommitAt: "2026-10-25T22:10:09Z"
lastReleaseAt: "2019-04-16T23:01:35Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 97
undervaluedScore: 37
maintainers: ["FrancYescO", "DaniloMagliarisi88", "ZioCook"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa871979f1c2539b5657121ce849839ebaa6ed6fc8ec1189e06a8c30d66719e6/Ansuel/tch-nginx-gui"
---

with many fixes and new features like:

Some Topics to help you get root access:
General GUI Topic: https://www.ilpuntotecnico.com/forum/index.php/topic,81461.0.html

```
curl -kfL https://github.com/Ansuel/tch-nginx-gui/releases/latest/download/GUI.tar.bz2 --output /tmp/GUI.tar.bz2
bzcat /tmp/GUI.tar.bz2 | tar -C / -xvf -
/etc/init.d/rootdevice force
```

You can find all of the autobuilt GUI versions at this link: https://github.com/Ansuel/tch-nginx-gui/releases

If you get an error during the download process or you have no Internet/WAN connection on the device, just manually download the GUI.tar.bz2 file and put in /tmp folder via SCP then execute the other (non curl) commands listed above.

If you find a bug, please report it using GitHub's Issue feature making sure you attach a photo and the log (Run: logread).
If you upload config files, please remove your personal details including your public IP and MAC.
In the future there will be a button/command in the GUI to generate a debug file.

Stats:

Cards:

If you want to donate to the developer of this modified gui use the button below

## Continuous integration

Builds and releases run with GitHub Actions. See the [setup and…
