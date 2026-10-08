---
repo: "mentalfoundry/pokketstation"
name: "pokketstation"
description: "An open-source Sony PocketStation emulator core"
readmeQualityOk: true
url: "https://github.com/mentalfoundry/pokketstation"
language: "C"
languages: ["C"]
languagePcts: [89]
stars: 43
forks: 0
openIssues: 3
closedIssues: 13
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-07-20T10:24:29Z"
lastCommitAt: "2026-10-08T10:52:32Z"
lastReleaseAt: "2026-07-31T11:10:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 84
undervaluedScore: 41
maintainers: ["mentalfoundry"]
openGraphImageUrl: "https://opengraph.githubassets.com/abcd79053a90005f8717f7096536b0c11e13ff8e0e431c3fc0bd5f5ff6407d13/mentalfoundry/pokketstation"
discussionCount: 1
---

# pokketstation

This is an open-source Sony PocketStation emulator core, written in portable C. It is made for use in a [libretro](https://www.libretro.com/) core, a standalone Windows desktop app and JavaScript for the browser. 

**Try it out here with your own retail bios dump:** the emulator runs at [daznet.neocities.org/pocketstation](https://daznet.neocities.org/pocketstation).

## Status

This project is stable, and the community has tested it widely. It is as cycle-accurate as possible. If you need a feature that is not present, please [raise an issue](https://github.com/mentalfoundry/pokketstation/issues).

Do not depend on save-state compatibility between versions yet. The internal registries need more changes - I think it's really close - there aren't really many more unknowns hardware wise and none that make a difference to the emulation as far as I know.

**Known gaps:**
- Some minor things that don't really impact the emulation like battery status and perfection in the IR timings. What's here is close enough that you should be able to fill in the gaps yourself if you really feel the need. 

See…
