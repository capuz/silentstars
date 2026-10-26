---
repo: "1000001101000/Debian_on_Buffalo"
name: "Debian_on_Buffalo"
description: "Tools for Installing/Running Debian on Buffalo ARM based Linkstation/Terastation/Kurobox/Cloudstor devices."
readmeQualityOk: true
url: "https://github.com/1000001101000/Debian_on_Buffalo"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [58, 20]
stars: 458
forks: 56
openIssues: 45
closedIssues: 130
watchers: 25
contributors: 4
recentReleases: 0
createdAt: "2018-08-21T13:50:28Z"
lastCommitAt: "2026-10-26T09:17:22Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded", "community_hub"]
healthScore: 87
undervaluedScore: 23
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/c022b7696b1e28f3a2b1ac4e3c53f18d386569b1195a888ba6d89a42e5085ba4/1000001101000/Debian_on_Buffalo"
fundingLinks: ["GITHUB:https://github.com/1000001101000", "CUSTOM:paypal.me/1000001101000"]
discussionCount: 53
---

# Debian_on_Buffalo
Tools for Installing/Running Debian on all ARM-based Buffalo Linkstation/Terastation devices.

If this project helps you click the Star at the top of the page to let me know! If you'd like to contribute to the continued development/maintenance consider clicking on the sponsor button.

In addition to the Issues and Discussions tabs on GitHub we now also have a Discord channel at https://discord.gg/E88dkcuyW4 or our IRC on Libera.Chat in the #miraheze-buffalonas channel!

If you'd like to help support the project consider donating via the sponsor button above. 

## Quick Note about Debian Trixie:

All devices should be able to run Trixie using the files provided by this project but the ssh netinstaller images are limited to the armhf devices. This is because Debian has discontinued their armel installer starting with Trixie and have annouced that Trixie will be the last version of Debian with armel support. 

For now this just means that the "debootstrap" method is the only way to install the latest Debian version on the oldest devices. I've spent some time this cycle re-working that process to make it more reliable and easier to use so that it can take over as…
