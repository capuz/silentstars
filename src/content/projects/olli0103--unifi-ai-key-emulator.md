---
repo: "Olli0103/unifi-ai-key-emulator"
name: "unifi-ai-key-emulator"
description: "Experimental UniFi Protect AI processor with configurable vision providers and local protocol tests."
readmeQualityOk: true
url: "https://github.com/Olli0103/unifi-ai-key-emulator"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 16
closedIssues: 17
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-09-22T14:13:23Z"
lastCommitAt: "2026-11-04T02:56:55Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 90
undervaluedScore: 45
maintainers: ["Olli0103"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ec42a0b51d1939b2d4eb1c3090b835c1561efd186c7632810214580c4d712da/Olli0103/unifi-ai-key-emulator"
---

# Local AI processor

Compatible with UniFi Protect. Independent and unofficial; not affiliated with or endorsed by Ubiquiti.

An independent experimental AI processor for UniFi Protect. The implemented profile currently emulates a bounded subset of AI Key. The roadmap also targets a separate AI Port compatibility profile for G3, G4/G5 and ONVIF cameras. Native AI Key adoption has been tested with Protect 7.3.56 on a UDM Pro Max using Apple container 1.4.1 on an Apple silicon Mac. A separate [AI Port candidate](https://github.com/Olli0103/unifi-ai-key-emulator/blob/HEAD/docs/aiport-candidate.md) appeared in Protect 7.3.60. It has paired three G3/G5 cameras simultaneously, decoded all three streams, and produced live Person detections on a G3 that Protect indexed under that camera and linked to its playback. Fresh management-token adoption, sustained multi-camera event indexing, additional camera capacity, and complete NAS recovery/soak qualification remain open. This is an unofficial project and is not affiliated with Ubiquiti.

The local build has device management/adoption, UCP4 control, UDP discovery, a bounded vision worker, version-specific description callbacks and an E5…
