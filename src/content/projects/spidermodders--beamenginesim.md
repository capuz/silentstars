---
repo: "spidermodders/BeamEngineSim"
name: "BeamEngineSim"
description: "Ange's EngineSimulator connected with Beamng"
readmeQualityOk: true
url: "https://github.com/spidermodders/BeamEngineSim"
language: "C++"
languages: ["C++"]
languagePcts: [95]
stars: 7
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-10-19T17:42:51Z"
lastCommitAt: "2026-10-21T20:01:26Z"
lastReleaseAt: "2026-10-21T20:01:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 15
maintainers: ["spidermodders"]
openGraphImageUrl: "https://opengraph.githubassets.com/67fb8fc3bbd965e7820f122cb93a508c453dc3bfdce86059d40edefaa7d8d047/spidermodders/BeamEngineSim"
---

Real engine sound in BeamNG.drive, generated live by [Engine Simulator](https://github.com/ange-yaghi/engine-sim).

Engine Simulator models every piston, valve, spark and exhaust pulse of an engine and turns that into sound. BeamEngineSim connects it to BeamNG.drive, so the car you drive sounds like the engine you loaded, and that engine also drives the car.

- Works with any car in BeamNG.drive and any engine file (`.mr`), including most Community Edition engines.
- The sound plays inside the game's own audio, positioned at the engine and exhaust like stock sounds.
- BeamNG.drive tells Engine Simulator the rpm, throttle and ignition. Engine Simulator sends back the torque its engine makes.
- Optional: tune the car's engine to match the loaded one (idle, redline, torque curve, inertia), so it revs the way it sounds.

## Install

1. Download `BeamEngineSim-Setup-x.y.z.exe` from [Releases](https://github.com/spidermodders/BeamEngineSim/releases) and run it.
2. Setup finds BeamNG.drive and your user folder on its own. If it can't, it asks you for them.
3. Start EngineSim, then start BeamNG.drive and get in a car.

Running setup again when BeamEngineSim is already installed repairs…
