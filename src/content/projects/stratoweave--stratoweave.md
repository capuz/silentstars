---
repo: "stratoweave/stratoweave"
name: "stratoweave"
description: "StratoWeave Orchestration Platform"
readmeQualityOk: true
url: "https://github.com/stratoweave/stratoweave"
homepage: "https://www.stratoweave.org"
language: "Svelte"
languages: ["Svelte", "TypeScript"]
languagePcts: [53, 29]
topics: ["hacktoberfest", "acton-library"]
stars: 34
forks: 4
openIssues: 69
closedIssues: 94
watchers: 6
contributors: 11
recentReleases: 2
createdAt: "2024-06-28T07:24:54Z"
lastCommitAt: "2026-10-29T21:23:42Z"
lastReleaseAt: "2026-10-29T20:43:14Z"
status: "thriving"
tags: []
healthScore: 91
undervaluedScore: 59
maintainers: ["plajjan", "bdolenc", "mzagozen"]
openGraphImageUrl: "https://opengraph.githubassets.com/edf6646bdeb978217362cfaddcc135b09254371bd38f4c8d6926bb0eba124027/stratoweave/stratoweave"
discussionCount: 1
---

StratoWeave is an open-source platform for building intent-based network
orchestration systems. It combines YANG models, layered declarative transforms,
and streaming telemetry to turn service intent into device configuration and
respond to changes in the network.

Visit **[www.stratoweave.org](https://www.stratoweave.org/)** for more information,
including tutorials, documentation, and community resources.

## How it works

You define the service abstractions and transformation logic for your network;
StratoWeave coordinates configuration updates through the layers and applies the
result through device adapters.

- **Model the system in YANG.** A system specification selects the service
  layers, their YANG modules, and the device types. Layers can range from
  customer-facing services to vendor-neutral network resources and vendor
  device models. YANG models become Acton types, allowing the compiler to catch
  data and type errors in your transforms.
- **Compose declarative transforms.** A transform maps YANG-modeled input to
  YANG-modeled output for the layer below. It describes the desired result and
  owns its configuration for as long as its intent exists. The platform…
