---
repo: "Disonomouss/RDRVR"
name: "RDRVR"
description: "Red Dead Redemption VR Mod"
readmeQualityOk: true
url: "https://github.com/Disonomouss/RDRVR"
language: "C++"
languages: ["C++"]
languagePcts: [97]
stars: 113
forks: 8
openIssues: 18
closedIssues: 4
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-10-07T08:17:49Z"
lastCommitAt: "2026-11-07T22:50:38Z"
lastReleaseAt: "2026-10-10T20:16:08Z"
status: "newborn"
tags: ["solo_builder", "release_machine", "under_pressure"]
healthScore: 60
undervaluedScore: 19
maintainers: ["Disonomouss"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e324fcded124506dce9419785b74350982be25397449b34e5419107ac067550/Disonomouss/RDRVR"
---

# RDRVR: Red Dead Redemption in VR

A native-stereo VR mod for the PC port of **Red Dead Redemption** (2024). The game draws the scene once per eye from
your headset's view, John's body and arms follow you, and the guns are held, aimed, holstered and reloaded with your
hands.

Version 0.8.13.1 (an early public release). Tested with a Meta Quest 3 on Virtual Desktop; any PC headset with an
OpenXR runtime should work (see [Compatibility](#compatibility)).

> RDRVR is an unofficial fan project. It is not affiliated with or endorsed by Rockstar Games or Take-Two Interactive,
> and it contains no game files. The game sends its crash reports to Rockstar: a crash with the mod installed is
> reported too.

## Features

**VR view**
- True stereo: the scene drawn twice per frame, once per eye, with your headset's own field of view (asymmetric and
  canted displays included) and late-latched head and hand poses.
- Single pass (the default since 0.8.12; the Display tab, "Rendering"): both eyes drawn from one walk of the scene,
  about a millisecond a frame faster than drawing each eye on its own, with shaders converted from your own game files
  at the first start. Two-pass stays a switch.
-…
